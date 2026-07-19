import { createFileRoute } from "@tanstack/react-router";
import Contact from "@/components/Contact";
import { Navbar } from "@/components/Navbar";
import { Grain } from "@/components/Grain";
export const Route = createFileRoute("/contact")({
  component: ContactPage,
});

function ContactPage() {
  return( <div className="relative min-h-screen bg-cream text-charcoal">
  <Grain />
  <Navbar />
  <Contact />
  </div>);
}