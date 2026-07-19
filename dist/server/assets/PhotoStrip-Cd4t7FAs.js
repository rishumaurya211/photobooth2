import { J as jsxRuntimeExports } from "./server-CyB-gE1i.js";
import { m as motion } from "./proxy-BrKusGOa.js";
function PhotoStrip({ photos, caption = "moments, kept", date, rotate = -2, className = "" }) {
  const slots = [0, 1, 2, 3].map((i) => photos[i]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    motion.div,
    {
      style: { rotate: `${rotate}deg` },
      className: `relative inline-block paper-shadow-lg ${className}`,
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-warm-white p-3 pb-5 paper-texture", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-col gap-2", children: slots.map((src, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: "relative aspect-[4/3] w-44 overflow-hidden bg-charcoal sm:w-52",
            children: [
              src ? /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src, alt: `frame ${i + 1}`, className: "h-full w-full object-cover" }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex h-full w-full items-center justify-center text-warm-white/40 font-display text-3xl", children: i + 1 }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 grain-overlay" })
            ]
          },
          i
        )) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-3 flex items-end justify-between px-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-hand text-lg leading-none text-brown-deep", children: caption }),
          date && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[9px] uppercase tracking-[0.25em] text-brown", children: date })
        ] })
      ] })
    }
  );
}
export {
  PhotoStrip as P
};
