import { useReveal } from "@/hooks/use-reveal";
import bg from "@/assets/hero-1.jpg";
import balloonShape from "@/assets/balloon-shape.webp";
import { ArrowRight } from "lucide-react";

export function BookingCTA() {
  const ref = useReveal<HTMLDivElement>();
  const openBooking = () => {
    window.dispatchEvent(new Event("open-booking-modal"));
  };

  return (
    <section ref={ref} id="book" className="relative py-20 md:py-44 overflow-hidden bg-background">
      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center text-foreground">
        <div className="reveal-up eyebrow text-sunset mb-5">Begin The Journey</div>
        <div className="relative flex items-center justify-center">
          <img src={balloonShape} alt="balloon" className="hidden md:block md:absolute md:-right-20 md:-top-32 md:w-48 md:opacity-60 animate-float" />
          <h2 className="reveal-up font-display text-3xl md:text-7xl leading-[1.02] text-balance">
            Ready to Explore <span className="italic">Georgia?</span>
          </h2>
        </div>
        <p className="reveal-up mt-6 text-foreground/75 text-lg max-w-xl mx-auto">
          Tell us when. We'll handle the road, the stops, and every quiet moment in between.
        </p>
        <div className="reveal-up mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <button type="button" onClick={openBooking} className="box-fill-button is-fill-out-red inline-flex items-center justify-center gap-3 px-8 py-4 text-xs uppercase tracking-[0.28em] font-semibold">
            <span>Book on WhatsApp</span>
            <ArrowRight className="button-icon" size={15} strokeWidth={1.8} />
          </button>
          <a href="#tours" className="box-fill-button inline-flex items-center justify-center gap-3 px-8 py-4 text-xs uppercase tracking-[0.28em]">
            <span>Request a Tour Plan</span>
            <ArrowRight className="button-icon" size={15} strokeWidth={1.8} />
          </a>
        </div>
      </div>
    </section>
  );
}
