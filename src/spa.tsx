import { createRoot } from "react-dom/client";
import { Nav } from "@/components/site/Nav";
import { VideoSection } from "@/components/site/VideoSection";
import { Intro } from "@/components/site/Intro";
import { DestinationsMarquee } from "@/components/site/DestinationsMarquee";
import { FeaturesSection } from "@/components/site/FeaturesSection";
import { Parallax } from "@/components/site/Parallax";
import { Tours } from "@/components/site/Tours";
import { Vehicles } from "@/components/site/Vehicles";
import { Timeline } from "@/components/site/Timeline";
import { Destinations } from "@/components/site/Destinations";
import { Trust } from "@/components/site/Trust";
import { BookingCTA } from "@/components/site/BookingCTA";
import { Footer } from "@/components/site/Footer";
import { ScrollToTop } from "@/components/ScrollToTop";
import "./styles.css";

function App() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Nav />
      <VideoSection />
      <Intro />
      <DestinationsMarquee />
      <FeaturesSection />
      <Parallax />
      <Tours />
      <Vehicles />
      <Timeline />
      <Destinations />
      <Trust />
      <BookingCTA />
      <Footer />
      <ScrollToTop />
    </main>
  );
}

createRoot(document.getElementById("root")!).render(<App />);
