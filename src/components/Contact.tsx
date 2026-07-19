import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

const SERVICE_ID = "service_sg82mfi";
const TEMPLATE_ID = "template_rl6e4wq";
const PUBLIC_KEY = "RqZKxjrzZF-S_wrHO";

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    setStatus("sending");

    try {
      await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, {
        publicKey: PUBLIC_KEY,
      });
      setStatus("success");
      formRef.current.reset();
    } catch (err) {
      console.error("EmailJS error:", err);
      setStatus("error");
    }
  };

  return (
    <main className="min-h-screen bg-cream text-charcoal px-6 py-20">
      <div className="mx-auto max-w-3xl">
        <p className="text-xs uppercase tracking-[0.3em] text-brown">
          Get in touch
        </p>

        <h1 className="mt-4 font-display text-6xl md:text-8xl">
          Contact.
        </h1>

        <p className="mt-8 max-w-xl text-lg leading-relaxed text-charcoal/70">
          Questions, collaborations, or simply saying hello —
          we’d love to hear from you.
        </p>

        <form ref={formRef} onSubmit={handleSubmit} className="mt-16 space-y-8">
          <div>
            <label className="mb-2 block text-xs uppercase tracking-[0.25em] text-brown">
              Name
            </label>
            <input
              type="text"
              name="name"
              required
              placeholder="Your name"
              className="w-full border-b border-charcoal/20 bg-transparent py-4 outline-none placeholder:text-charcoal/40"
            />
          </div>

          <div>
            <label className="mb-2 block text-xs uppercase tracking-[0.25em] text-brown">
              Email
            </label>
            <input
              type="email"
              name="email"
              required
              placeholder="hello@maison.com"
              className="w-full border-b border-charcoal/20 bg-transparent py-4 outline-none placeholder:text-charcoal/40"
            />
          </div>

          <div>
            <label className="mb-2 block text-xs uppercase tracking-[0.25em] text-brown">
              Message
            </label>
            <textarea
              name="message"
              rows={5}
              required
              placeholder="Write your message..."
              className="w-full border-b border-charcoal/20 bg-transparent py-4 outline-none placeholder:text-charcoal/40"
            />
          </div>

          <button
            type="submit"
            disabled={status === "sending"}
            className="btn-retro disabled:opacity-50"
          >
            {status === "sending" ? "Sending..." : "Send Message"}
          </button>

          {status === "success" && (
            <p className="text-sm text-green-700">
              Thanks — your message has been sent. We’ll be in touch soon.
            </p>
          )}
          {status === "error" && (
            <p className="text-sm text-red-700">
              Something went wrong. Please try again or email us directly.
            </p>
          )}
        </form>
      </div>
    </main>
  );
}