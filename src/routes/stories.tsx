
import { createFileRoute } from "@tanstack/react-router";
import Stories from "@/components/Stories";
import { Navbar } from "@/components/Navbar";
import { Grain } from "@/components/Grain";
import { Footer } from "@/components/Footer";
export const Route = createFileRoute("/stories")({
  component: StoriesPage,
});

function StoriesPage() {
  return (
    <div className="relative min-h-screen bg-cream text-charcoal">
      <Grain />
      <Navbar />
      <Stories />
        
  <Footer />
    </div>
  );
}

