import { useReveal } from "@/hooks/use-reveal";
import img1 from "@/assets/WhatsApp Image 2026-05-02 at 10.35.30 PM.jpeg";
import img2 from "@/assets/WhatsApp Image 2026-05-02 at 10.35.32 PM (1).jpeg";
import balloonShape from "@/assets/balloon-shape.webp";
import { ArrowRight } from "lucide-react";

export function Intro() {
  const ref = useReveal<HTMLDivElement>();
  return (
    <section ref={ref} className="relative py-16 md:py-40 bg-background">
      <div className="mx-auto max-w-7xl px-6 grid md:grid-cols-12 gap-6 md:gap-16 items-center">
        <div className="md:col-span-6 relative mb-8 md:mb-0">
          <div className="reveal-up relative aspect-[4/5] overflow-hidden">
            <img src={img1} alt="Kakheti experience" className="w-full h-full object-cover" loading="lazy" />
          </div>
          <div className="reveal-up absolute -bottom-12 -right-6 md:-right-16 w-2/3 aspect-[4/3] overflow-hidden shadow-2xl ring-1 ring-foreground/10">
            <img src={img2} alt="Georgia journey" className="w-full h-full object-cover" loading="lazy" />
          </div>
        </div>

        <div className="md:col-span-6 md:pl-8 relative">
          <img src={balloonShape} alt="balloon" className="hidden md:block md:absolute md:-right-24 md:-top-28 md:w-40 md:opacity-50 animate-float" />
          <div className="reveal-up eyebrow text-sunset mb-4">Our Philosophy</div>
          <h2 className="reveal-up font-display text-3xl md:text-5xl leading-[1.05] text-balance">
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
          <a href="#tours" className="intro-discover-button reveal-up mt-10 inline-flex items-center gap-3 bg-gold px-6 py-3 text-sm uppercase tracking-[0.28em] text-white">
            <span>Discover the Journey</span>
            <ArrowRight className="button-icon" size={16} strokeWidth={1.8} />
          </a>
        </div>
      </div>
    </section>
  );
}
