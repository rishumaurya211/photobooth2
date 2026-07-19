

export default function Studio() {
  return (
    <main className="min-h-screen bg-cream text-charcoal px-6 py-20">
      <div className="mx-auto max-w-4xl">

        <p className="text-xs uppercase tracking-[0.3em] text-brown">
          About Maison
        </p>

        <h1 className="mt-4 font-display text-6xl md:text-8xl">
          Studio.
        </h1>

        <div className="mt-16 grid gap-12 md:grid-cols-2">

          <div>
            <p className="font-serif-display text-4xl leading-tight text-brown-deep">
              Built for slow moments and printed memories.
            </p>
          </div>

          <div className="space-y-6 text-lg leading-relaxed text-charcoal/75">
            <p>
              Maison Booth is a retro-inspired digital photobooth experience
              designed around warmth, nostalgia, and analog photography.
            </p>

            <p>
              Inspired by Japanese photobooths, film cameras,
              and printed keepsakes, the studio blends cinematic visuals
              with soft interactive experiences.
            </p>

            <p>
              Every frame is designed to feel tactile, imperfect,
              and emotionally real.
            </p>
          </div>

        </div>
      </div>
    </main>
  );
}

