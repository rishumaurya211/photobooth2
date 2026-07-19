import { S as reactExports, J as jsxRuntimeExports } from "./server-CyB-gE1i.js";
import { e as emailjs } from "./index-BRPeBlfb.js";
const SERVICE_ID = "service_sg82mfi";
const TEMPLATE_ID = "template_rl6e4wq";
const PUBLIC_KEY = "RqZKxjrzZF-S_wrHO";
function Footer() {
  const [email, setEmail] = reactExports.useState("");
  const [status, setStatus] = reactExports.useState("idle");
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email) return;
    setStatus("sending");
    try {
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        { email },
        // matches {{email}} in your EmailJS template
        { publicKey: PUBLIC_KEY }
      );
      setStatus("success");
      setEmail("");
    } catch (err) {
      console.error("Newsletter signup error:", err);
      setStatus("error");
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("footer", { className: "relative border-t border-charcoal/15 bg-cream", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 py-16 md:grid-cols-3 md:px-10", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display text-3xl text-charcoal", children: "MAISON" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 max-w-xs text-sm leading-relaxed text-charcoal/70", children: "A small photo booth that prints paper memories. Built with film, light, and patience." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "md:justify-self-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[11px] uppercase tracking-[0.3em] text-brown", children: "Studio" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "mt-4 space-y-2 text-sm text-charcoal/80", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "14 Rue de la Paix" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Daikanyama · Tokyo" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Open Tue – Sun · 11–19" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "md:justify-self-end", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[11px] uppercase tracking-[0.3em] text-brown", children: "Letters" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "form",
          {
            onSubmit: handleSubmit,
            className: "mt-4 flex max-w-xs items-center border-b border-charcoal/40 pb-1",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "input",
                {
                  type: "email",
                  required: true,
                  placeholder: "your email",
                  value: email,
                  onChange: (e) => setEmail(e.target.value),
                  disabled: status === "sending",
                  className: "w-full bg-transparent text-sm text-charcoal placeholder:text-charcoal/40 focus:outline-none disabled:opacity-50"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  type: "submit",
                  disabled: status === "sending",
                  className: "font-display text-sm tracking-widest text-charcoal disabled:opacity-50",
                  children: status === "sending" ? "…" : "SEND"
                }
              )
            ]
          }
        ),
        status === "success" && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-xs text-green-700", children: "You're on the list." }),
        status === "error" && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-xs text-red-700", children: "Something went wrong — try again." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-xs text-charcoal/60", children: "One slow letter each season." })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "border-t border-charcoal/10 px-6 py-5 md:px-10", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto flex max-w-7xl items-center justify-between text-[10px] uppercase tracking-[0.3em] text-brown", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "© 2026 Maison Booth" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Printed on warm paper" })
    ] }) })
  ] });
}
export {
  Footer as F
};
