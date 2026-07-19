
import { motion } from "framer-motion";
import { useRef } from "react";
import html2canvas from "html2canvas";
import { PhotoStrip } from "./PhotoStrip";

type PrintAnimationProps = {
  photos: string[];
};

export function PrintAnimation({ photos }: PrintAnimationProps) {
  const stripRef = useRef<HTMLDivElement>(null);

  const date = new Date()
    .toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    })
    .replace(/\//g, " · ");

  // DOWNLOAD FUNCTION
  const downloadStrip = async () => {
    if (!stripRef.current) return;

    try {
      // wait for animations/images
      await new Promise((resolve) => setTimeout(resolve, 500));

      const canvas = await html2canvas(stripRef.current, {
        backgroundColor: "#ffffff",
        scale: 3,
        useCORS: true,
        logging: false,
      });

      const image = canvas.toDataURL("image/png");

      const link = document.createElement("a");
      link.href = image;
      link.download = `retro-photostrip-${Date.now()}.png`;

      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      console.error("Download failed:", error);
    }
  };

  return (
    <div className="relative mx-auto flex w-full max-w-5xl flex-col items-center px-6 py-16 md:py-24">
      
      {/* Heading */}
      <div className="mb-10 text-center">
        <div className="text-[11px] uppercase tracking-[0.35em] text-brown">
          Fresh off the printer
        </div>

        <h1 className="mt-3 font-display text-5xl text-charcoal md:text-7xl">
          Your strip.
        </h1>

        <p className="mt-3 font-hand text-2xl text-brown-deep">
          still warm.
        </p>
      </div>

      {/* Printer */}
      <div className="relative w-full max-w-md">

        {/* Printer Slot */}
        <div className="relative mx-auto h-6 w-full rounded-t-md bg-charcoal">
          <div className="absolute left-1/2 top-1/2 h-1.5 w-3/4 -translate-x-1/2 -translate-y-1/2 rounded-full bg-black/60" />
        </div>

        {/* Animated Strip */}
        <div className="relative flex justify-center overflow-visible pt-2">

          {/* IMPORTANT:
              ref is on normal div
              NOT motion.div
          */}
          <div ref={stripRef}>

            <motion.div
              initial={{ y: -360, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                duration: 2.6,
                ease: [0.22, 1, 0.36, 1],
                delay: 0.3,
              }}
            >
              <PhotoStrip
                photos={photos}
                caption="moments, kept"
                date={date}
                rotate={-1.5}
              />
            </motion.div>

          </div>
        </div>
      </div>

      {/* Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.8,
          delay: 2.8,
        }}
        className="mt-16 flex flex-wrap items-center justify-center gap-4"
      >
        {/* Download */}
        <button
          onClick={downloadStrip}
          className="btn-retro"
        >
          Download Strip
        </button>

        {/* Share */}
        <button
          className="btn-outline-retro"
          onClick={() => alert("Sharing coming soon")}
        >
          Share
        </button>

        {/* Retake */}
        <a
          href="/booth"
          className="text-sm uppercase tracking-[0.25em] text-charcoal/70 transition hover:text-charcoal"
        >
          ← Take another
        </a>
      </motion.div>
    </div>
  );
}

