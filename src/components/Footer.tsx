import { useState } from "react";
import emailjs from "@emailjs/browser";


const SERVICE_ID = "service_sg82mfi";
const TEMPLATE_ID = "template_rl6e4wq";
const PUBLIC_KEY = "RqZKxjrzZF-S_wrHO";

export function Footer() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setStatus("sending");

    try {
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        { email }, // matches {{email}} in your EmailJS template
        { publicKey: PUBLIC_KEY }
      );
      setStatus("success");
      setEmail("");
    } catch (err) {
      console.error("Newsletter signup error:", err);
      setStatus("error");
    }
  };

  return (
    <footer className="relative border-t border-charcoal/15 bg-cream">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 py-16 md:grid-cols-3 md:px-10">
        <div>
          <div className="font-display text-3xl text-charcoal">MAISON</div>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-charcoal/70">
            A small photo booth that prints paper memories. Built with film, light,
            and patience.
          </p>
        </div>
        <div className="md:justify-self-center">
          <div className="text-[11px] uppercase tracking-[0.3em] text-brown">Studio</div>
          <ul className="mt-4 space-y-2 text-sm text-charcoal/80">
            <li>14 Rue de la Paix</li>
            <li>Daikanyama · Tokyo</li>
            <li>Open Tue – Sun · 11–19</li>
          </ul>
        </div>
        <div className="md:justify-self-end">
          <div className="text-[11px] uppercase tracking-[0.3em] text-brown">Letters</div>

          <form
            onSubmit={handleSubmit}
            className="mt-4 flex max-w-xs items-center border-b border-charcoal/40 pb-1"
          >
            <input
              type="email"
              required
              placeholder="your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={status === "sending"}
              className="w-full bg-transparent text-sm text-charcoal placeholder:text-charcoal/40 focus:outline-none disabled:opacity-50"
            />
            <button
              type="submit"
              disabled={status === "sending"}
              className="font-display text-sm tracking-widest text-charcoal disabled:opacity-50"
            >
              {status === "sending" ? "…" : "SEND"}
            </button>
          </form>

          {status === "success" && (
            <p className="mt-2 text-xs text-green-700">You're on the list.</p>
          )}
          {status === "error" && (
            <p className="mt-2 text-xs text-red-700">Something went wrong — try again.</p>
          )}

          <p className="mt-3 text-xs text-charcoal/60">One slow letter each season.</p>
        </div>
      </div>
      <div className="border-t border-charcoal/10 px-6 py-5 md:px-10">
        <div className="mx-auto flex max-w-7xl items-center justify-between text-[10px] uppercase tracking-[0.3em] text-brown">
          <span>© 2026 Maison Booth</span>
          <span>Printed on warm paper</span>
        </div>
      </div>
    </footer>
  );
}