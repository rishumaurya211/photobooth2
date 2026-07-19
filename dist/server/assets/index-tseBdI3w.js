import { J as jsxRuntimeExports } from "./server-CyB-gE1i.js";
import { G as Grain, N as Navbar } from "./Grain-DflO8vXv.js";
import { L as Link } from "./router-BAjGcQZA.js";
import { P as PhotoStrip } from "./PhotoStrip-Cd4t7FAs.js";
import { m as motion } from "./proxy-BrKusGOa.js";
import { F as Footer } from "./Footer-ClAlD519.js";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
import "./index-BRPeBlfb.js";
function Dust({ count = 18 }) {
  const dots = Array.from({ length: count });
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pointer-events-none absolute inset-0 overflow-hidden", "aria-hidden": true, children: dots.map((_, i) => {
    const size = 1 + Math.random() * 3;
    const left = Math.random() * 100;
    const top = 30 + Math.random() * 70;
    const dur = 8 + Math.random() * 14;
    const delay = Math.random() * -dur;
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      "span",
      {
        className: "dust",
        style: {
          width: size,
          height: size,
          left: `${left}%`,
          top: `${top}%`,
          animationDuration: `${dur}s`,
          animationDelay: `${delay}s`,
          opacity: 0.4 + Math.random() * 0.4
        }
      },
      i
    );
  }) });
}
function HeroSection() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative overflow-hidden", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Dust, { count: 20 }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto grid max-w-7xl grid-cols-1 gap-12 px-6 pb-24 pt-12 md:grid-cols-12 md:px-10 md:pb-32 md:pt-20", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "md:col-span-7 flex flex-col justify-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.div,
          {
            initial: { opacity: 0, y: 16 },
            animate: { opacity: 1, y: 0 },
            transition: { duration: 1.1, ease: [0.22, 1, 0.36, 1] },
            className: "mb-6 flex items-center gap-3",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-px w-10 bg-charcoal/60" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[11px] uppercase tracking-[0.35em] text-brown", children: "A small analog ritual" })
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.h1,
          {
            initial: { opacity: 0, y: 24 },
            animate: { opacity: 1, y: 0 },
            transition: { duration: 1.2, delay: 0.1, ease: [0.22, 1, 0.36, 1] },
            className: "font-display text-[15vw] leading-[0.85] text-charcoal md:text-[6rem]",
            children: [
              "Four frames,",
              /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "italic font-serif-display font-normal text-brown-deep", children: "One afternoon." })
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          motion.p,
          {
            initial: { opacity: 0, y: 16 },
            animate: { opacity: 1, y: 0 },
            transition: { duration: 1.2, delay: 0.35, ease: [0.22, 1, 0.36, 1] },
            className: "mt-8 max-w-md text-base leading-relaxed text-charcoal/75",
            children: "A quiet little booth for slow moments, soft light, and printed keepsakes."
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.div,
          {
            initial: { opacity: 0, y: 16 },
            animate: { opacity: 1, y: 0 },
            transition: { duration: 1, delay: 0.55 },
            className: "mt-10 flex flex-wrap items-center gap-4",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/booth", className: "btn-retro", children: "Start the Booth" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#how", className: "btn-outline-retro", children: "How it works" })
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.div,
          {
            initial: { opacity: 0 },
            animate: { opacity: 1 },
            transition: { duration: 1.5, delay: 1 },
            className: "mt-16 flex items-center gap-8 text-[11px] uppercase tracking-[0.3em] text-brown",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "· 4 frames" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "· 3 sec countdown" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "· printed in seconds" })
            ]
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "md:col-span-5 relative flex items-center justify-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          motion.div,
          {
            initial: { opacity: 0, y: 30, rotate: -3 },
            animate: { opacity: 1, y: 0, rotate: -2 },
            transition: { duration: 1.4, delay: 0.4, ease: [0.22, 1, 0.36, 1] },
            className: "relative",
            children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative w-72 rounded-[28px] bg-charcoal p-5 paper-shadow-lg sm:w-80", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rounded-[14px] border border-warm-white/10 bg-[#1a1a1a] p-3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative aspect-[4/5] overflow-hidden rounded-md bg-gradient-to-b from-[#3a2f24] to-[#1a1410]", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 grain-overlay" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-28 w-28 rounded-full border-[6px] border-[#0d0d0d] bg-gradient-to-br from-[#2a2218] to-[#0a0807] shadow-inner", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "m-3 h-[88px] w-[88px] rounded-full border border-warm-white/10 bg-[radial-gradient(circle_at_30%_30%,#5a4a38,#0a0807_70%)]" }) }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute bottom-2 left-2 text-[8px] uppercase tracking-[0.3em] text-warm-white/60", children: "Maison · 35mm" })
              ] }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-3 flex items-center justify-between px-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display text-warm-white tracking-widest", children: "MAISON BOOTH" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-2 w-2 rounded-full bg-muted-red animate-pulse" })
              ] })
            ] })
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          motion.div,
          {
            initial: { opacity: 0, y: -80 },
            animate: { opacity: 1, y: 0 },
            transition: { duration: 1.6, delay: 1, ease: [0.22, 1, 0.36, 1] },
            className: "absolute -right-2 -bottom-30 hidden md:block",
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              PhotoStrip,
              {
                photos: [
                  "https://images.unsplash.com/photo-1524504388940-b1c1722653e1",
                  "https://images.unsplash.com/photo-1517841905240-472988babdf9",
                  "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
                  "https://images.unsplash.com/photo-1531123897727-8f129e1688ce"
                ],
                caption: "hello, you",
                date: "24 · 05 · 2026",
                rotate: 6,
                className: "scale-75"
              }
            )
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative border-y border-charcoal/15 bg-cream py-4 overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      motion.div,
      {
        className: "flex gap-12 whitespace-nowrap font-display text-2xl tracking-[0.2em] text-charcoal/80",
        animate: { x: ["0%", "-50%"] },
        transition: { duration: 40, ease: "linear", repeat: Infinity },
        children: Array.from({ length: 12 }).map((_, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-12", children: [
          "SMILE · WAIT FOR THE FLASH · KEEP THE STRIP",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-red", children: "✸" })
        ] }, i))
      }
    ) })
  ] });
}
function Index() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative min-h-screen bg-cream text-charcoal", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Grain, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Navbar, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(HeroSection, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "how", className: "relative bg-warm-white py-24 md:py-32", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-6xl px-6 md:px-10", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-start gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[11px] uppercase tracking-[0.35em] text-brown", children: "The ritual" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-5xl text-charcoal md:text-7xl", children: "Three quiet steps." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-16 grid grid-cols-1 gap-12 md:grid-cols-3", children: [{
        n: "01",
        t: "Step in",
        d: "Sit close. Adjust your hair. The booth waits, patient as old film."
      }, {
        n: "02",
        t: "Hold still",
        d: "Three, two, one — the shutter blinks. Four times. Don't move."
      }, {
        n: "03",
        t: "Take it home",
        d: "A paper strip slides out, still warm. Yours to keep forever."
      }].map((s, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
        opacity: 0,
        y: 20
      }, whileInView: {
        opacity: 1,
        y: 0
      }, viewport: {
        once: true,
        margin: "-80px"
      }, transition: {
        duration: 0.9,
        delay: i * 0.15,
        ease: [0.22, 1, 0.36, 1]
      }, className: "border-t border-charcoal/30 pt-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display text-3xl text-muted-red", children: s.n }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-4 font-serif-display text-2xl text-charcoal", children: s.t }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-sm leading-relaxed text-charcoal/70", children: s.d })
      ] }, s.n)) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "relative overflow-hidden bg-cream py-24 md:py-32", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-6 md:px-10", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-end justify-between gap-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[11px] uppercase tracking-[0.35em] text-brown", children: "From the studio" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-5xl text-charcoal md:text-7xl mt-3", children: "Strips, found on tables." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "max-w-sm text-sm text-charcoal/70", children: "A small archive of recent visits — wrinkled corners, coffee rings, laughter in four frames." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-16 flex flex-wrap items-end justify-center gap-10 md:gap-16", children: [{
        c: "saturday, slow",
        d: "12 · 04 · 26",
        r: -5,
        photos: ["https://picsum.photos/seed/saturday1/400/500", "https://picsum.photos/seed/saturday2/400/500", "https://picsum.photos/seed/saturday3/400/500", "https://picsum.photos/seed/saturday4/400/500"]
      }, {
        c: "ren & mika",
        d: "18 · 04 · 26",
        r: 3,
        photos: ["https://picsum.photos/seed/renmika1/400/500", "https://picsum.photos/seed/renmika2/400/500", "https://picsum.photos/seed/renmika3/400/500", "https://picsum.photos/seed/renmika4/400/500"]
      }, {
        c: "between trains",
        d: "22 · 04 · 26",
        r: -2,
        photos: ["https://picsum.photos/seed/trains1/400/500", "https://picsum.photos/seed/trains2/400/500", "https://picsum.photos/seed/trains3/400/500", "https://picsum.photos/seed/trains4/400/500"]
      }].map((g, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { initial: {
        opacity: 0,
        y: 40
      }, whileInView: {
        opacity: 1,
        y: 0
      }, viewport: {
        once: true,
        margin: "-100px"
      }, transition: {
        duration: 1.1,
        delay: i * 0.15,
        ease: [0.22, 1, 0.36, 1]
      }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(PhotoStrip, { photos: g.photos, caption: g.c, date: g.d, rotate: g.r }) }, i)) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "relative bg-charcoal py-24 text-warm-white md:py-32", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto flex max-w-4xl flex-col items-center px-6 text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[11px] uppercase tracking-[0.35em] text-warm-white/60", children: "Doors open" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "mt-4 font-display text-6xl leading-[0.9] md:text-8xl", children: [
        "Your turn,",
        /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-serif-display italic font-normal text-warm-white/80", children: "step inside." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "/booth", className: "mt-10 inline-block btn-retro", style: {
        background: "var(--warm-white)",
        color: "var(--charcoal)"
      }, children: "Start the Booth" })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, {})
  ] });
}
export {
  Index as component
};
