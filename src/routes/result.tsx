import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Grain } from "@/components/Grain";
import { PrintAnimation } from "@/components/PrintAnimation";
import { loadPhotos } from "@/lib/photo-store";

export const Route = createFileRoute("/result")({
  head: () => ({
    meta: [
      { title: "Your Strip · Maison Booth" },
      { name: "description", content: "Your printed photostrip, fresh out of the Maison booth." },
      { property: "og:title", content: "Your Strip · Maison Booth" },
      { property: "og:description", content: "A small paper memory, freshly printed." },
    ],
  }),
  component: ResultPage,
});

function ResultPage() {
  const [photos, setPhotos] = useState<string[]>([]);
  useEffect(() => {
    setPhotos(loadPhotos());
  }, []);

  return (
    <div className="relative min-h-screen bg-cream text-charcoal">
      <Grain />
      <Navbar />
      <PrintAnimation photos={photos} />
    </div>
  );
}