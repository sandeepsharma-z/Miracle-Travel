import { useReveal } from "@/hooks/use-reveal";
import wine from "@/assets/wine-cellar.jpg";
import monastery from "@/assets/monastery.jpg";
import road from "@/assets/road-aerial.jpg";

const tours = [
  {
    img: wine,
    eyebrow: "Wine Trails",
    title: "Cellars of the Qvevri",
    desc: "Descend into candle-lit cellars where wine still ages in clay amphoras buried beneath the earth — a 8,000-year-old ritual, served in a glass.",
  },
  {
    img: monastery,
    eyebrow: "Heritage",
    title: "Monasteries & Mountains",
    desc: "Trace the spine of the Caucasus through stone monasteries that have watched over Kakheti for a thousand years — quiet, golden, untouched.",
  },
  {
    img: road,
    eyebrow: "Off-Route",
    title: "The Slow Backroads",
    desc: "Skip the postcards. We drive the unmarked passes — fog-soft mornings, autumn ridges, and villages where time forgets to keep score.",
  },
];

export function Tours() {
  const ref = useReveal<HTMLDivElement>();
  return (
    <section ref={ref} id="tours" className="bg-background py-28 md:py-40">
      <div className="mx-auto max-w-7xl px-6 mb-20 text-center">
        <div className="reveal-up eyebrow text-sunset mb-4">Tour Experiences</div>
        <h2 className="reveal-up font-display text-5xl md:text-6xl leading-[1.05]">
          Crafted Journeys, <span className="italic text-forest">Personally Yours</span>
        </h2>
      </div>

      <div className="space-y-28 md:space-y-40">
        {tours.map((t, i) => {
          const reverse = i % 2 === 1;
          return (
            <div key={i} className="mx-auto max-w-7xl px-6 grid md:grid-cols-12 gap-8 md:gap-14 items-center">
              <div className={`md:col-span-7 reveal-up hover-zoom ${reverse ? "md:order-2" : ""}`}>
                <div className="aspect-[16/10] overflow-hidden">
                  <img src={t.img} alt={t.title} className="w-full h-full object-cover" loading="lazy" />
                </div>
              </div>
              <div className={`md:col-span-5 ${reverse ? "md:order-1 md:pr-8" : "md:pl-8"}`}>
                <div className="reveal-up eyebrow text-gold mb-4">0{i + 1} — {t.eyebrow}</div>
                <h3 className="reveal-up font-display text-4xl md:text-5xl leading-tight text-balance">{t.title}</h3>
                <div className="gold-line my-6 reveal-up" />
                <p className="reveal-up text-foreground/75 text-lg leading-relaxed">{t.desc}</p>
                <a href="#book" className="reveal-up mt-8 inline-flex items-center gap-3 text-sm uppercase tracking-[0.28em] text-foreground border-b border-gold pb-2 hover:text-sunset transition-colors">
                  Explore Tour →
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
