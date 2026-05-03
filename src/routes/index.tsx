import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { HeroSlider } from "@/components/site/HeroSlider";
import { Intro } from "@/components/site/Intro";
import { Parallax } from "@/components/site/Parallax";
import { Tours } from "@/components/site/Tours";
import { Vehicles } from "@/components/site/Vehicles";
import { Gallery } from "@/components/site/Gallery";
import { WhyUs } from "@/components/site/WhyUs";
import { Timeline } from "@/components/site/Timeline";
import { Destinations } from "@/components/site/Destinations";
import { Trust } from "@/components/site/Trust";
import { BookingCTA } from "@/components/site/BookingCTA";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "მიკროავტობუსი დაკვეთით — Private Minibus Tours in Kakheti" },
      { name: "description", content: "Premium private minibus tours through Kakheti — vineyards, mountains, monasteries. Comfortable vehicles, local drivers, crafted journeys." },
      { property: "og:title", content: "მიკროავტობუსი დაკვეთით — Private Tours in Kakheti" },
      { property: "og:description", content: "Cinematic private minibus journeys through the wine country of Georgia." },
    ],
  }),
});

function Index() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Nav />
      <HeroSlider />
      <Intro />
      <Parallax />
      <Tours />
      <Vehicles />
      <Gallery />
      <WhyUs />
      <Timeline />
      <Destinations />
      <Trust />
      <BookingCTA />
      <Footer />
    </main>
  );
}
