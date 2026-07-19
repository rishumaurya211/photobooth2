import { Navbar } from "@/components/Navbar";

export default function Stories() {
  <Navbar />
  return (
    
    <main className="min-h-screen bg-cream text-charcoal px-6 py-20">
      <div className="mx-auto max-w-5xl">

        <div className="mb-16">
          <p className="text-xs uppercase tracking-[0.3em] text-brown">
            Maison Archives
          </p>

          <h1 className="mt-4 font-display text-6xl md:text-8xl">
            Stories.
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-charcoal/70">
            Small moments, soft lighting, film grain,
            and tiny printed memories collected over time.
          </p>
        </div>

        <div className="grid gap-10 md:grid-cols-2">

          <article className="paper-texture paper-shadow rounded-sm p-6">
            <img
              src="https://images.unsplash.com/photo-1517841905240-472988babdf9"
              alt=""
              className="h-[420px] w-full object-cover"
            />

            <div className="mt-6">
              <p className="text-xs uppercase tracking-[0.25em] text-brown">
                Session 01
              </p>

              <h2 className="mt-3 font-serif-display text-3xl">
                Afternoon light.
              </h2>

              <p className="mt-4 text-charcoal/70 leading-relaxed">
                A quiet afternoon captured in four imperfect frames.
              </p>
            </div>
          </article>

          <article className="paper-texture paper-shadow rounded-sm p-6">
            <img
              src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1"
              alt=""
              className="h-[420px] w-full object-cover"
            />

            <div className="mt-6">
              <p className="text-xs uppercase tracking-[0.25em] text-brown">
                Session 02
              </p>

              <h2 className="mt-3 font-serif-display text-3xl">
                Printed softly.
              </h2>

              <p className="mt-4 text-charcoal/70 leading-relaxed">
                Film textures, warm paper, and little moments worth keeping.
              </p>
            </div>
          </article>

        </div>
      </div>
    </main>
  );
}
