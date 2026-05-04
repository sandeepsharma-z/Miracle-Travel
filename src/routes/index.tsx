import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { HeroSlider } from "@/components/site/HeroSlider";
import { VideoSection } from "@/components/site/VideoSection";
import { Intro } from "@/components/site/Intro";
import { DestinationsMarquee } from "@/components/site/DestinationsMarquee";
import { FeaturesSection } from "@/components/site/FeaturesSection";
import { Parallax } from "@/components/site/Parallax";
import { Tours } from "@/components/site/Tours";
import { Vehicles } from "@/components/site/Vehicles";
import { Timeline } from "@/components/site/Timeline";
import { Destinations } from "@/components/site/Destinations";
import { VideosGrid } from "@/components/site/VideosGrid";
import { Trust } from "@/components/site/Trust";
import { BookingCTA } from "@/components/site/BookingCTA";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Miracle Travel — Premium Tours & Car Rental in Georgia" },
      { name: "description", content: "Miracle Travel offers premium tour packages and car rental services throughout Georgia. Experience comfort, local expertise, and unforgettable journeys." },
      { property: "og:title", content: "Miracle Travel — Tours & Car Rental in Georgia" },
      { property: "og:description", content: "Explore Georgia with Miracle Travel - your premier choice for travel tours and car rental services." },
    ],
  }),
});

function Index() {
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
      <VideosGrid />
      <Trust />
      <BookingCTA />
      <Footer />
    </main>
  );
}
