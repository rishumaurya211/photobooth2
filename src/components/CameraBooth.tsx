import { useCallback, useEffect, useRef, useState } from "react";
import Webcam from "react-webcam";
import { motion } from "framer-motion";
import { useNavigate } from "@tanstack/react-router";
import { CountdownOverlay } from "./CountdownOverlay";
import { FlashEffect } from "./FlashEffect";
import { savePhotos } from "@/lib/photo-store";

type Phase = "idle" | "running" | "done";

type FilterOption = {
  id: string;
  label: string;
  css: string; // valid CSS `filter` value, applied to both live preview and captured photo
};

const FILTERS: FilterOption[] = [
  { id: "none", label: "Original", css: "none" },
  { id: "bw", label: "Noir", css: "grayscale(1) contrast(1.15)" },
  { id: "sepia", label: "Sepia", css: "sepia(0.65) contrast(1.05) brightness(1.02)" },
  { id: "vintage", label: "Vintage", css: "sepia(0.3) saturate(1.35) contrast(1.1) brightness(0.92)" },
  { id: "vivid", label: "Vivid", css: "saturate(1.6) contrast(1.15) brightness(1.03)" },
  { id: "soft", label: "Soft", css: "brightness(1.1) contrast(0.9) saturate(0.92)" },
  { id: "cool", label: "Cool", css: "saturate(1.1) contrast(1.05) hue-rotate(-8deg) brightness(1.02)" },
  { id: "warm", label: "Warm", css: "sepia(0.18) saturate(1.3) hue-rotate(-6deg) brightness(1.05)" },
];

export function CameraBooth() {
  const webcamRef = useRef<Webcam>(null);
  const navigate = useNavigate();
  const [phase, setPhase] = useState<Phase>("idle");
  const [count, setCount] = useState<number | "FLASH" | null>(null);
  const [flash, setFlash] = useState(false);
  const [photos, setPhotos] = useState<string[]>([]);
  const [shotIndex, setShotIndex] = useState(0);
  const [activeFilter, setActiveFilter] = useState<string>("none");

  const activeCss = FILTERS.find((f) => f.id === activeFilter)?.css ?? "none";

  const capture = useCallback(() => {
    const video = webcamRef.current?.video;
    if (!video || video.readyState < 2) return;

    // Draw the current frame to an offscreen canvas with the active filter
    // baked in, so the saved photo matches what the person saw live.
    const canvas = document.createElement("canvas");
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    ctx.filter = activeCss;
    // react-webcam mirrors the live preview for a natural "mirror" feel;
    // replicate that here so the saved photo isn't flipped compared to preview.
    ctx.translate(canvas.width, 0);
    ctx.scale(-1, 1);
    ctx.drawImage(video, 0, 0, canvas.width, canvas.height);

    const dataUrl = canvas.toDataURL("image/jpeg", 0.92);
    setPhotos((p) => [...p, dataUrl]);
  }, [activeCss]);

  // Sequencer: 4 photos with 3-2-1-FLASH per shot
  useEffect(() => {
    if (phase !== "running") return;
    if (shotIndex >= 4) {
      setPhase("done");
      return;
    }
    let cancelled = false;
    const run = async () => {
      const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));
      for (const n of [3, 2, 1]) {
        if (cancelled) return;
        setCount(n);
        await sleep(900);
      }
      if (cancelled) return;
      setCount("FLASH");
      setFlash(true);
      capture();
      await sleep(160);
      setFlash(false);
      await sleep(280);
      setCount(null);
      await sleep(450);
      setShotIndex((i) => i + 1);
    };
    run();
    return () => {
      cancelled = true;
    };
  }, [phase, shotIndex, capture]);

  useEffect(() => {
    if (phase === "done" && photos.length === 4) {
      savePhotos(photos);
      const t = setTimeout(() => navigate({ to: "/result" }), 900);
      return () => clearTimeout(t);
    }
  }, [phase, photos, navigate]);

  const start = () => {
    setPhotos([]);
    setShotIndex(0);
    setPhase("running");
  };
  const retake = () => {
    setPhotos([]);
    setShotIndex(0);
    setPhase("idle");
    setCount(null);
  };

  return (
    <div className="mx-auto flex w-full max-w-6xl flex-col items-center gap-10 px-6 py-12 md:px-10">
      <div className="text-center">
        <div className="text-[11px] uppercase tracking-[0.35em] text-brown">Booth · Room 02</div>
        <h1 className="font-display text-5xl text-charcoal md:text-7xl mt-3">Look this way.</h1>
        <p className="mt-3 text-sm text-charcoal/70">
          Four frames. Hold still for the flash.
        </p>
      </div>

      {/* Camera frame */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        style={{ rotate: "-0.6deg" }}
        className="relative w-full max-w-2xl"
      >
        <div className="relative rounded-[36px] bg-charcoal p-5 paper-shadow-lg sm:p-7">
          {/* Top strip */}
          <div className="mb-4 flex items-center justify-between px-2">
            <span className="font-display text-warm-white tracking-[0.3em] text-sm">MAISON · BOOTH</span>
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-muted-red animate-pulse" />
              <span className="text-[10px] uppercase tracking-[0.3em] text-warm-white/60">REC {shotIndex}/4</span>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-[20px] border-[6px] border-[#111] bg-black">
            <div className="relative aspect-[4/3] w-full vignette">
              <Webcam
                ref={webcamRef}
                audio={false}
                screenshotFormat="image/jpeg"
                screenshotQuality={0.92}
                videoConstraints={{ facingMode: "user" }}
                mirrored
                className="h-full w-full object-cover"
                style={{ filter: activeCss, transition: "filter 0.25s ease" }}
              />
              <div className="absolute inset-0 grain-overlay z-10" />
              <CountdownOverlay value={count} />
              <FlashEffect active={flash} />
              {/* Corner brackets */}
              <span className="pointer-events-none absolute left-3 top-3 z-20 h-5 w-5 border-l-2 border-t-2 border-warm-white/60" />
              <span className="pointer-events-none absolute right-3 top-3 z-20 h-5 w-5 border-r-2 border-t-2 border-warm-white/60" />
              <span className="pointer-events-none absolute left-3 bottom-3 z-20 h-5 w-5 border-l-2 border-b-2 border-warm-white/60" />
              <span className="pointer-events-none absolute right-3 bottom-3 z-20 h-5 w-5 border-r-2 border-b-2 border-warm-white/60" />
            </div>
          </div>

          {/* Knobs */}
          <div className="mt-5 flex items-center justify-between px-2">
            <div className="flex items-center gap-3">
              <div className="h-6 w-6 rounded-full bg-gradient-to-br from-[#3a2f24] to-[#0a0807]" />
              <div className="h-6 w-6 rounded-full bg-gradient-to-br from-[#3a2f24] to-[#0a0807]" />
            </div>
            <span className="font-hand text-warm-white/70 text-lg">smile.</span>
            <div className="text-[10px] uppercase tracking-[0.3em] text-warm-white/60">f / 2.8</div>
          </div>
        </div>
      </motion.div>

      {/* Filter picker */}
      <div className="w-full max-w-2xl">
        <div className="mb-3 text-center text-[10px] uppercase tracking-[0.3em] text-brown">
          Choose a filter
        </div>
        <div className="flex flex-wrap items-center justify-center gap-3">
          {FILTERS.map((f) => (
            <button
              key={f.id}
              type="button"
              onClick={() => setActiveFilter(f.id)}
              disabled={phase === "running"}
              className={`flex flex-col items-center gap-1.5 transition-opacity disabled:cursor-not-allowed disabled:opacity-40`}
            >
              <span
                className={`h-11 w-11 rounded-full border-2 bg-gradient-to-br from-[#d9b98f] via-[#b98b62] to-[#5a4534] sm:h-12 sm:w-12 ${
                  activeFilter === f.id
                    ? "border-charcoal ring-2 ring-charcoal/30 ring-offset-2 ring-offset-cream"
                    : "border-charcoal/20"
                }`}
                style={{ filter: f.css }}
              />
              <span
                className={`text-[10px] uppercase tracking-[0.15em] ${
                  activeFilter === f.id ? "text-charcoal" : "text-charcoal/50"
                }`}
              >
                {f.label}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Captured thumbnails */}
      <div className="flex items-end gap-3">
        {[0, 1, 2, 3].map((i) => (
          <div
            key={i}
            className="relative h-16 w-20 overflow-hidden rounded-sm bg-warm-white paper-shadow sm:h-20 sm:w-24"
            style={{ transform: `rotate(${(i - 1.5) * 1.5}deg)` }}
          >
            {photos[i] ? (
              <img src={photos[i]} alt="" className="h-full w-full object-cover" />
            ) : (
              <div className="flex h-full w-full items-center justify-center font-display text-2xl text-charcoal/30">
                {i + 1}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Controls */}
      <div className="flex flex-wrap items-center justify-center gap-4">
        <button onClick={retake} className="btn-outline-retro" disabled={phase === "running"}>
          Retake
        </button>
        {phase === "idle" && (
          <button onClick={start} className="btn-retro">Start Capture</button>
        )}
        {phase === "running" && (
          <button className="btn-retro opacity-70" disabled>
            Hold still…
          </button>
        )}
        {phase === "done" && (
          <button onClick={() => navigate({ to: "/result" })} className="btn-retro">
            Continue →
          </button>
        )}
      </div>
    </div>
  );
}