import { S as reactExports, J as jsxRuntimeExports } from "./server-CyB-gE1i.js";
import { e as emailjs } from "./index-BRPeBlfb.js";
import { G as Grain, N as Navbar } from "./Grain-DflO8vXv.js";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
import "./router-BAjGcQZA.js";
const SERVICE_ID = "service_sg82mfi";
const TEMPLATE_ID = "template_rl6e4wq";
const PUBLIC_KEY = "RqZKxjrzZF-S_wrHO";
function Contact() {
  const formRef = reactExports.useRef(null);
  const [status, setStatus] = reactExports.useState("idle");
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formRef.current) return;
    setStatus("sending");
    try {
      await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, {
        publicKey: PUBLIC_KEY
      });
      setStatus("success");
      formRef.current.reset();
    } catch (err) {
      console.error("EmailJS error:", err);
      setStatus("error");
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx("main", { className: "min-h-screen bg-cream text-charcoal px-6 py-20", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-3xl", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs uppercase tracking-[0.3em] text-brown", children: "Get in touch" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "mt-4 font-display text-6xl md:text-8xl", children: "Contact." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-8 max-w-xl text-lg leading-relaxed text-charcoal/70", children: "Questions, collaborations, or simply saying hello — we’d love to hear from you." }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { ref: formRef, onSubmit: handleSubmit, className: "mt-16 space-y-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "mb-2 block text-xs uppercase tracking-[0.25em] text-brown", children: "Name" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "input",
          {
            type: "text",
            name: "name",
            required: true,
            placeholder: "Your name",
            className: "w-full border-b border-charcoal/20 bg-transparent py-4 outline-none placeholder:text-charcoal/40"
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "mb-2 block text-xs uppercase tracking-[0.25em] text-brown", children: "Email" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "input",
          {
            type: "email",
            name: "email",
            required: true,
            placeholder: "hello@maison.com",
            className: "w-full border-b border-charcoal/20 bg-transparent py-4 outline-none placeholder:text-charcoal/40"
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "mb-2 block text-xs uppercase tracking-[0.25em] text-brown", children: "Message" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "textarea",
          {
            name: "message",
            rows: 5,
            required: true,
            placeholder: "Write your message...",
            className: "w-full border-b border-charcoal/20 bg-transparent py-4 outline-none placeholder:text-charcoal/40"
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          type: "submit",
          disabled: status === "sending",
          className: "btn-retro disabled:opacity-50",
          children: status === "sending" ? "Sending..." : "Send Message"
        }
      ),
      status === "success" && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-green-700", children: "Thanks — your message has been sent. We’ll be in touch soon." }),
      status === "error" && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-red-700", children: "Something went wrong. Please try again or email us directly." })
    ] })
  ] }) });
}
function ContactPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative min-h-screen bg-cream text-charcoal", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Grain, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Navbar, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Contact, {})
  ] });
}
export {
  ContactPage as component
};
