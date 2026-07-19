import { Link } from "@tanstack/react-router";

export function Navbar() {

  return (
    <header className="relative z-30 w-full">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 md:px-10">
        <Link to="/" className="group flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full border border-charcoal bg-warm-white">
            <span className="font-display text-lg text-charcoal">M</span>
          </div>
          <div className="leading-tight">
            <div className="font-display text-xl text-charcoal tracking-widest">MAISON</div>
            <div className="text-[10px] uppercase tracking-[0.3em] text-brown">Photobooth · Est. 1974</div>
          </div>
        </Link>
<nav className="hidden items-center gap-10 md:flex">
  
  <a
    href="/booth"
    className="text-xs uppercase tracking-[0.25em] text-charcoal/80 hover:text-charcoal transition-colors"
  >
    Booth
  </a>

  <a
    href="/Stories"
    className="text-xs uppercase tracking-[0.25em] text-charcoal/80 hover:text-charcoal transition-colors"
  >
    Stories
  </a>

  <a
    href="/studio"
    className="text-xs uppercase tracking-[0.25em] text-charcoal/80 hover:text-charcoal transition-colors"
  >
    Studio
  </a>

  <a
    href="/contact"
    className="text-xs uppercase tracking-[0.25em] text-charcoal/80 hover:text-charcoal transition-colors"
  >
    Contact
  </a>

</nav>


        <div className="hidden md:block text-[11px] uppercase tracking-[0.3em] text-brown">
        © 2026 Maison Booth
        </div>
      </div>
    </header>
  );
}