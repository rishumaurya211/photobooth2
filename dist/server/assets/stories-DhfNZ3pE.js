import { J as jsxRuntimeExports } from "./server-CyB-gE1i.js";
import { G as Grain, N as Navbar } from "./Grain-DflO8vXv.js";
import { F as Footer } from "./Footer-ClAlD519.js";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
import "./router-BAjGcQZA.js";
import "./index-BRPeBlfb.js";
function Stories() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("main", { className: "min-h-screen bg-cream text-charcoal px-6 py-20", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-5xl", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-16", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs uppercase tracking-[0.3em] text-brown", children: "Maison Archives" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "mt-4 font-display text-6xl md:text-8xl", children: "Stories." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 max-w-2xl text-lg leading-relaxed text-charcoal/70", children: "Small moments, soft lighting, film grain, and tiny printed memories collected over time." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-10 md:grid-cols-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("article", { className: "paper-texture paper-shadow rounded-sm p-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "img",
          {
            src: "https://images.unsplash.com/photo-1517841905240-472988babdf9",
            alt: "",
            className: "h-[420px] w-full object-cover"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs uppercase tracking-[0.25em] text-brown", children: "Session 01" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-3 font-serif-display text-3xl", children: "Afternoon light." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-charcoal/70 leading-relaxed", children: "A quiet afternoon captured in four imperfect frames." })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("article", { className: "paper-texture paper-shadow rounded-sm p-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "img",
          {
            src: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1",
            alt: "",
            className: "h-[420px] w-full object-cover"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs uppercase tracking-[0.25em] text-brown", children: "Session 02" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-3 font-serif-display text-3xl", children: "Printed softly." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-charcoal/70 leading-relaxed", children: "Film textures, warm paper, and little moments worth keeping." })
        ] })
      ] })
    ] })
  ] }) });
}
function StoriesPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative min-h-screen bg-cream text-charcoal", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Grain, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Navbar, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Stories, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, {})
  ] });
}
export {
  StoriesPage as component
};
