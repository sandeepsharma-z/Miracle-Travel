import { useReveal } from "@/hooks/use-reveal";
import wine from "@/assets/wine-cellar.jpg";
import country from "@/assets/countryside.jpg";

export function Intro() {
  const ref = useReveal<HTMLDivElement>();
  return (
    <section ref={ref} className="relative py-28 md:py-40 bg-background">
      <div className="mx-auto max-w-7xl px-6 grid md:grid-cols-12 gap-10 md:gap-16 items-center">
        <div className="md:col-span-6 relative">
          <div className="reveal-up relative aspect-[4/5] overflow-hidden">
            <img src={country} alt="Kakheti countryside" className="w-full h-full object-cover" loading="lazy" />
          </div>
          <div className="reveal-up absolute -bottom-12 -right-6 md:-right-16 w-2/3 aspect-[4/3] overflow-hidden shadow-2xl ring-1 ring-foreground/10">
            <img src={wine} alt="Georgian wine cellar" className="w-full h-full object-cover" loading="lazy" />
          </div>
        </div>

        <div className="md:col-span-6 md:pl-8">
          <div className="reveal-up eyebrow text-sunset mb-4">Our Philosophy</div>
          <h2 className="reveal-up font-display text-5xl md:text-6xl leading-[1.05] text-balance">
            Experience Kakheti<br/>
            <span className="italic text-forest">Differently.</span>
          </h2>
          <div className="gold-line my-8 reveal-up" />
          <p className="reveal-up text-lg leading-relaxed text-foreground/75 max-w-xl">
            We don't run schedules — we craft journeys. From the first vineyard at dawn to the last
            candlelit qvevri cellar at night, every kilometer is your own. Quiet luxury, local depth,
            and the freedom to linger wherever beauty asks you to.
          </p>
          <p className="reveal-up mt-5 text-lg leading-relaxed text-foreground/75 max-w-xl">
            A private minibus, a driver who knows the back roads, and a region that still feels like
            a secret.
          </p>
          <a href="#tours" className="reveal-up mt-10 inline-flex items-center gap-3 text-sm uppercase tracking-[0.28em] text-foreground border-b border-gold pb-2 hover:text-sunset transition-colors">
            Discover the Journey →
          </a>
        </div>
      </div>
    </section>
  );
}
