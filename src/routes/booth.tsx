import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Grain } from "@/components/Grain";
import { CameraBooth } from "@/components/CameraBooth";

export const Route = createFileRoute("/booth")({
  head: () => ({
    meta: [
      { title: "Step Inside · Maison Booth" },
      { name: "description", content: "Four frames. Three, two, one — smile. The Maison camera booth." },
      { property: "og:title", content: "Step Inside · Maison Booth" },
      { property: "og:description", content: "Four frames. Three, two, one — smile." },
    ],
  }),
  component: BoothPage,
});

function BoothPage() {
  return (
    <div className="relative min-h-screen bg-cream text-charcoal">
      <Grain />
      <Navbar />
      <CameraBooth />
    </div>
  );
}