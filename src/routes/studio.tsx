import { createFileRoute } from "@tanstack/react-router";
import Studio from "@/components/Studio";
import { Navbar } from "@/components/Navbar";
import { Grain } from "@/components/Grain";
import { Footer } from "@/components/Footer";
export const Route = createFileRoute("/studio")({
  component: StudioPage,
});

function StudioPage() {
  return (<div className="relative min-h-screen bg-cream text-charcoal">
  <Grain />
  <Navbar />
  <Studio />
  
  <Footer />
  </div>);
}