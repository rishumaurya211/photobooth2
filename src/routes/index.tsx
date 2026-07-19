import { createFileRoute } from "@tanstack/react-router";

import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { Footer } from "@/components/Footer";
import { Grain } from "@/components/Grain";
import { PhotoStrip } from "@/components/PhotoStrip";
import { motion } from "framer-motion";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Maison Booth — A small analog photo ritual" },
      {
        name: "description",
        content:
          "Step inside Maison Booth. Four frames, one paper strip, printed in seconds. A handcrafted retro photobooth experience.",
      },
      { property: "og:title", content: "Maison Booth — A small analog photo ritual" },
      {
        property: "og:description",
        content: "Four frames, one paper strip. A modern minimal retro photobooth.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="relative min-h-screen bg-cream text-charcoal">
      <Grain />
      <Navbar />
      <HeroSection />

      {/* How it works */}
      <section id="how" className="relative bg-warm-white py-24 md:py-32">
        <div className="mx-auto max-w-6xl px-6 md:px-10">
          <div className="flex flex-col items-start gap-3">
            <span className="text-[11px] uppercase tracking-[0.35em] text-brown">The ritual</span>
            <h2 className="font-display text-5xl text-charcoal md:text-7xl">
              Three quiet steps.
            </h2>
          </div>
          <div className="mt-16 grid grid-cols-1 gap-12 md:grid-cols-3">
            {[
              { n: "01", t: "Step in", d: "Sit close. Adjust your hair. The booth waits, patient as old film." },
              { n: "02", t: "Hold still", d: "Three, two, one — the shutter blinks. Four times. Don't move." },
              { n: "03", t: "Take it home", d: "A paper strip slides out, still warm. Yours to keep forever." },
            ].map((s, i) => (
              <motion.div
                key={s.n}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.9, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] }}
                className="border-t border-charcoal/30 pt-6"
              >
                <div className="font-display text-3xl text-muted-red">{s.n}</div>
                <h3 className="mt-4 font-serif-display text-2xl text-charcoal">{s.t}</h3>
                <p className="mt-3 text-sm leading-relaxed text-charcoal/70">{s.d}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery of strips */}
      <section className="relative overflow-hidden bg-cream py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <span className="text-[11px] uppercase tracking-[0.35em] text-brown">From the studio</span>
              <h2 className="font-display text-5xl text-charcoal md:text-7xl mt-3">
                Strips, found on tables.
              </h2>
            </div>
            <p className="max-w-sm text-sm text-charcoal/70">
              A small archive of recent visits — wrinkled corners,
              coffee rings, laughter in four frames.
            </p>
          </div>

          <div className="mt-16 flex flex-wrap items-end justify-center gap-10 md:gap-16">
  {[
    {
      c: "saturday, slow",
      d: "12 · 04 · 26",
      r: -5,
      photos: [
        "https://picsum.photos/seed/saturday1/400/500",
        "https://picsum.photos/seed/saturday2/400/500",
        "https://picsum.photos/seed/saturday3/400/500",
        "https://picsum.photos/seed/saturday4/400/500",
      ],
    },
    {
      c: "ren & mika",
      d: "18 · 04 · 26",
      r: 3,
      photos: [
        "https://picsum.photos/seed/renmika1/400/500",
        "https://picsum.photos/seed/renmika2/400/500",
        "https://picsum.photos/seed/renmika3/400/500",
        "https://picsum.photos/seed/renmika4/400/500",
      ],
    },
    {
      c: "between trains",
      d: "22 · 04 · 26",
      r: -2,
      photos: [
        "https://picsum.photos/seed/trains1/400/500",
        "https://picsum.photos/seed/trains2/400/500",
        "https://picsum.photos/seed/trains3/400/500",
        "https://picsum.photos/seed/trains4/400/500",
      ],
    },
  ].map((g, i) => (
    <motion.div
      key={i}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 1.1, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] }}
    >
      <PhotoStrip photos={g.photos} caption={g.c} date={g.d} rotate={g.r} />
    </motion.div>
  ))}

          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative bg-charcoal py-24 text-warm-white md:py-32">
        <div className="mx-auto flex max-w-4xl flex-col items-center px-6 text-center">
          <span className="text-[11px] uppercase tracking-[0.35em] text-warm-white/60">
            Doors open
          </span>
          <h2 className="mt-4 font-display text-6xl leading-[0.9] md:text-8xl">
            Your turn,<br />
            <span className="font-serif-display italic font-normal text-warm-white/80">step inside.</span>
          </h2>
          <a href="/booth" className="mt-10 inline-block btn-retro" style={{ background: "var(--warm-white)", color: "var(--charcoal)" }}>
            Start the Booth
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}
