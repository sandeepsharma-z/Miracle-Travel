import { useReveal } from "@/hooks/use-reveal";
import bg from "@/assets/hero-1.jpg";

export function BookingCTA() {
  const ref = useReveal<HTMLDivElement>();
  return (
    <section ref={ref} id="book" className="relative py-32 md:py-44 overflow-hidden">
      <img src={bg} alt="" className="absolute inset-0 w-full h-full object-cover" loading="lazy" />
      <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, rgba(20,18,12,.4), rgba(20,18,12,.85))" }} />
      <div className="relative z-10 mx-auto max-w-3xl px-6 text-center text-cream">
        <div className="reveal-up eyebrow text-gold mb-5">Begin The Journey</div>
        <h2 className="reveal-up font-display text-5xl md:text-7xl leading-[1.02] text-balance">
          Ready to Explore <span className="italic">Kakheti?</span>
        </h2>
        <p className="reveal-up mt-6 text-cream/80 text-lg max-w-xl mx-auto">
          Tell us when. We'll handle the road, the stops, and every quiet moment in between.
        </p>
        <div className="reveal-up mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <a href="https://wa.me/" target="_blank" rel="noopener" className="bg-gold text-foreground px-8 py-4 text-xs uppercase tracking-[0.28em] hover:bg-cream transition-colors">
            Book on WhatsApp
          </a>
          <a href="#contact" className="border border-cream/50 text-cream px-8 py-4 text-xs uppercase tracking-[0.28em] hover:border-gold hover:text-gold transition-colors">
            Request a Tour Plan
          </a>
        </div>
      </div>
    </section>
  );
}
