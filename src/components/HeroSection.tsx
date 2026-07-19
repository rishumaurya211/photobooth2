import { motion } from "framer-motion";
import { Link } from "@tanstack/react-router";
import { PhotoStrip } from "./PhotoStrip";
import { Dust } from "./Dust";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden">
      <Dust count={20} />
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-6 pb-24 pt-12 md:grid-cols-12 md:px-10 md:pb-32 md:pt-20">
        {/* Left copy */}
        <div className="md:col-span-7 flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
            className="mb-6 flex items-center gap-3"
          >
            <span className="h-px w-10 bg-charcoal/60" />
            <span className="text-[11px] uppercase tracking-[0.35em] text-brown">A small analog ritual</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="font-display text-[15vw] leading-[0.85] text-charcoal md:text-[6rem]"
          >
            Four frames,<br />
            <span className="italic font-serif-display font-normal text-brown-deep">One afternoon.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="mt-8 max-w-md text-base leading-relaxed text-charcoal/75"
          >
          A quiet little booth for slow moments,
soft light, and printed keepsakes.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.55 }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <Link to="/booth" className="btn-retro">Start the Booth</Link>
            <a href="#how" className="btn-outline-retro">How it works</a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, delay: 1 }}
            className="mt-16 flex items-center gap-8 text-[11px] uppercase tracking-[0.3em] text-brown"
          >
            <span>· 4 frames</span>
            <span>· 3 sec countdown</span>
            <span>· printed in seconds</span>
          </motion.div>
        </div>

        {/* Right: booth + strip */}
        <div className="md:col-span-5 relative flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: 30, rotate: -3 }}
            animate={{ opacity: 1, y: 0, rotate: -2 }}
            transition={{ duration: 1.4, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            {/* Camera body */}
            <div className="relative w-72 rounded-[28px] bg-charcoal p-5 paper-shadow-lg sm:w-80">
              <div className="rounded-[14px] border border-warm-white/10 bg-[#1a1a1a] p-3">
                <div className="relative aspect-[4/5] overflow-hidden rounded-md bg-gradient-to-b from-[#3a2f24] to-[#1a1410]">
                  <div className="absolute inset-0 grain-overlay" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="h-28 w-28 rounded-full border-[6px] border-[#0d0d0d] bg-gradient-to-br from-[#2a2218] to-[#0a0807] shadow-inner">
                      <div className="m-3 h-[88px] w-[88px] rounded-full border border-warm-white/10 bg-[radial-gradient(circle_at_30%_30%,#5a4a38,#0a0807_70%)]" />
                    </div>
                  </div>
                  <div className="absolute bottom-2 left-2 text-[8px] uppercase tracking-[0.3em] text-warm-white/60">
                    Maison · 35mm
                  </div>
                </div>
              </div>
              <div className="mt-3 flex items-center justify-between px-2">
                <span className="font-display text-warm-white tracking-widest">MAISON BOOTH</span>
                <span className="h-2 w-2 rounded-full bg-muted-red animate-pulse" />
              </div>
            </div>
          </motion.div>

          {/* Photo strip peeking */}
          <motion.div
  initial={{ opacity: 0, y: -80 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 1.6, delay: 1, ease: [0.22, 1, 0.36, 1] }}
  className="absolute -right-2 -bottom-30 hidden md:block"
>
  <PhotoStrip
    photos={[
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1",
      "https://images.unsplash.com/photo-1517841905240-472988babdf9",
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
      "https://images.unsplash.com/photo-1531123897727-8f129e1688ce",
    ]}
    caption="hello, you"
    date="24 · 05 · 2026"
    rotate={6}
    className="scale-75"
  />
</motion.div>
        </div>
      </div>

      {/* Marquee */}
      <div className="relative border-y border-charcoal/15 bg-cream py-4 overflow-hidden">
        <motion.div
          className="flex gap-12 whitespace-nowrap font-display text-2xl tracking-[0.2em] text-charcoal/80"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 40, ease: "linear", repeat: Infinity }}
        >
          {Array.from({ length: 12 }).map((_, i) => (
            <span key={i} className="flex items-center gap-12">
              SMILE · WAIT FOR THE FLASH · KEEP THE STRIP
              <span className="text-muted-red">✸</span>
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}