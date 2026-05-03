import { useReveal } from "@/hooks/use-reveal";
import side from "@/assets/van-side.jpg";
import interior from "@/assets/van-interior.jpg";
import group from "@/assets/van-group.jpg";

export function Vehicles() {
  const ref = useReveal<HTMLDivElement>();
  return (
    <section ref={ref} id="vehicles" className="relative py-28 md:py-40 bg-secondary">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid md:grid-cols-12 gap-10 items-end mb-16">
          <div className="md:col-span-7">
            <div className="reveal-up eyebrow text-sunset mb-4">The Fleet</div>
            <h2 className="reveal-up font-display text-5xl md:text-6xl leading-[1.05] text-balance">
              Comfortable Rides<br/><span className="italic text-forest">For Every Trip</span>
            </h2>
          </div>
          <p className="md:col-span-5 reveal-up text-foreground/75 text-lg leading-relaxed">
            Premium minibuses with leather seats, panoramic windows, and the quiet that lets the
            landscape speak. From private couples to extended family groups.
          </p>
        </div>

        <div className="grid md:grid-cols-12 grid-rows-[auto] gap-5 md:gap-6">
          <div className="md:col-span-8 relative reveal-up hover-zoom">
            <div className="aspect-[16/11] overflow-hidden">
              <img src={side} alt="Minibus exterior" className="w-full h-full object-cover" loading="lazy" />
            </div>
            <div className="absolute left-6 bottom-6 bg-background/90 backdrop-blur px-5 py-3">
              <div className="eyebrow text-gold text-[10px]">01</div>
              <div className="font-display text-xl">Comfortable Vans</div>
            </div>
          </div>
          <div className="md:col-span-4 relative reveal-up hover-zoom md:-mt-16">
            <div className="aspect-[4/5] overflow-hidden">
              <img src={interior} alt="Minibus interior" className="w-full h-full object-cover" loading="lazy" />
            </div>
            <div className="absolute left-5 bottom-5 bg-background/90 backdrop-blur px-4 py-2">
              <div className="eyebrow text-gold text-[10px]">02</div>
              <div className="font-display text-lg">Private Transfers</div>
            </div>
          </div>
          <div className="md:col-span-5 md:col-start-4 relative reveal-up hover-zoom">
            <div className="aspect-[4/5] overflow-hidden">
              <img src={group} alt="Group travel" className="w-full h-full object-cover" loading="lazy" />
            </div>
            <div className="absolute left-5 bottom-5 bg-background/90 backdrop-blur px-4 py-2">
              <div className="eyebrow text-gold text-[10px]">03</div>
              <div className="font-display text-lg">Group Travel</div>
            </div>
          </div>
          <div className="md:col-span-4 md:col-start-9 self-center reveal-up">
            <p className="text-foreground/75 leading-relaxed">
              Every vehicle is air-conditioned, immaculately kept, and driven by an English-speaking
              local who knows the region by heart.
            </p>
            <a href="#book" className="mt-6 inline-flex items-center gap-3 text-sm uppercase tracking-[0.28em] text-foreground border-b border-gold pb-2 hover:text-sunset transition-colors">
              Reserve a Vehicle →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
