import { J as jsxRuntimeExports } from "./server-CyB-gE1i.js";
import { L as Link } from "./router-BAjGcQZA.js";
function Navbar() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("header", { className: "relative z-30 w-full", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto flex max-w-7xl items-center justify-between px-6 py-6 md:px-10", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/", className: "group flex items-center gap-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex h-10 w-10 items-center justify-center rounded-full border border-charcoal bg-warm-white", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display text-lg text-charcoal", children: "M" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "leading-tight", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display text-xl text-charcoal tracking-widest", children: "MAISON" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] uppercase tracking-[0.3em] text-brown", children: "Photobooth · Est. 1974" })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("nav", { className: "hidden items-center gap-10 md:flex", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "a",
        {
          href: "/booth",
          className: "text-xs uppercase tracking-[0.25em] text-charcoal/80 hover:text-charcoal transition-colors",
          children: "Booth"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "a",
        {
          href: "/Stories",
          className: "text-xs uppercase tracking-[0.25em] text-charcoal/80 hover:text-charcoal transition-colors",
          children: "Stories"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "a",
        {
          href: "/studio",
          className: "text-xs uppercase tracking-[0.25em] text-charcoal/80 hover:text-charcoal transition-colors",
          children: "Studio"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "a",
        {
          href: "/contact",
          className: "text-xs uppercase tracking-[0.25em] text-charcoal/80 hover:text-charcoal transition-colors",
          children: "Contact"
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "hidden md:block text-[11px] uppercase tracking-[0.3em] text-brown", children: "© 2026 Maison Booth" })
  ] }) });
}
function Grain() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grain-fixed", "aria-hidden": true });
}
export {
  Grain as G,
  Navbar as N
};
