import { useReveal } from "@/hooks/use-reveal";
import wine from "@/assets/hero-2.jpg";
import telavi from "@/assets/hero-3.jpg";
import mountain from "@/assets/hero-4.jpg";
import country from "@/assets/countryside.jpg";
import sigh from "@/assets/sighnaghi.jpg";
import shape4 from "@/assets/shape-4.webp";
import { ArrowRight } from "lucide-react";

const dests = [
  { img: wine, name: "Kakheti Wine Region", sub: "8,000 years in a glass", className: "md:col-span-7 md:row-span-2 aspect-[4/5] md:aspect-auto" },
  { img: telavi, name: "Telavi City", sub: "Old town, golden lamps", className: "md:col-span-5 aspect-[4/3]" },
  { img: mountain, name: "Mountain Routes", sub: "Caucasus highlines", className: "md:col-span-5 aspect-[4/3]" },
  { img: country, name: "Countryside Views", sub: "Where time slows", className: "md:col-span-7 aspect-[16/9]" },
  { img: sigh, name: "Sighnaghi", sub: "City of love", className: "md:col-span-5 aspect-[4/3]" },
];

export function Destinations() {
  const ref = useReveal<HTMLDivElement>();
  return (
    <section ref={ref} id="destinations" className="bg-background py-16 md:py-40 relative">
      <img src={shape4} alt="shape" className="absolute -right-16 md:-right-8 -top-8 md:top-8 w-64 md:w-96 opacity-50 md:opacity-70 animate-slide-horizontal pointer-events-none" style={{zIndex: "-1"}} />
      <div className="mx-auto max-w-7xl px-6 relative z-10">
        <div className="grid md:grid-cols-12 gap-8 items-end mb-16 relative">
          <div className="md:col-span-7">
            <div className="reveal-up eyebrow text-sunset mb-4">Destinations</div>
            <h2 className="reveal-up font-display text-3xl md:text-5xl leading-[1.05] text-balance">
              Explore Beautiful <span className="italic text-forest">Destinations</span>
            </h2>
          </div>
          <p className="md:col-span-5 reveal-up text-foreground/70 leading-relaxed">
            From sun-soaked vineyards to mountain monasteries — every stop is hand-picked, every road
            is a story waiting.
          </p>
        </div>

        <div className="grid md:grid-cols-12 gap-4 md:gap-5">
          {dests.map((d, i) => (
            <a
              key={i}
              href="#book"
              className={`reveal-up group relative overflow-hidden ${d.className}`}
            >
              <img
                src={d.img}
                alt={d.name}
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1100ms] ease-out group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/85 via-foreground/30 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-7 md:p-9 text-cream">
                <div className="eyebrow text-gold mb-2">0{i + 1}</div>
                <div className="font-display text-xl md:text-4xl">{d.name}</div>
                <div className="text-cream/75 text-sm mt-1 italic">{d.sub}</div>
                <div className="mt-5 inline-flex items-center gap-3 text-xs uppercase tracking-[0.28em] border-b border-gold/70 pb-1 group-hover:text-gold transition-colors">
                  <span>Discover</span>
                  <ArrowRight className="button-icon" size={15} strokeWidth={1.8} />
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
