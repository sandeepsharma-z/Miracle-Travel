import { useReveal } from "@/hooks/use-reveal";
import wine from "@/assets/wine-cellar.jpg";
import monastery from "@/assets/monastery.jpg";
import road from "@/assets/road-aerial.jpg";
import shape4 from "@/assets/shape-4.webp";
import { ArrowRight } from "lucide-react";

const tours = [
  {
    img: wine,
    eyebrow: "Wine Trails",
    title: "Cellars of the Qvevri",
    desc: "Descend into candle-lit cellars where wine still ages in clay amphoras buried beneath the earth — a 8,000-year-old ritual, served in a glass.",
    price: "₾220",
    priceInfo: "per person/day",
  },
  {
    img: monastery,
    eyebrow: "Heritage",
    title: "Monasteries & Mountains",
    desc: "Trace the spine of the Caucasus through stone monasteries that have watched over Kakheti for a thousand years — quiet, golden, untouched.",
    price: "₾200",
    priceInfo: "per person/day",
  },
  {
    img: road,
    eyebrow: "City Tours",
    title: "Telavi & Back",
    desc: "Explore the charming city of Telavi, capital of Kakheti. Visit historic sites, local markets, and experience authentic Georgian hospitality. A perfect day trip from anywhere in the region.",
    price: "₾150",
    priceInfo: "Telavi & back/day",
  },
];

export function Tours() {
  const ref = useReveal<HTMLDivElement>();
  return (
    <section ref={ref} id="tours" className="relative w-full max-w-full overflow-hidden overflow-x-clip bg-gradient-to-b from-background via-background to-secondary/10 py-16 md:py-40">
      {/* Animated Background Shapes */}
      <div className="absolute inset-y-0 left-0 right-0 pointer-events-none overflow-hidden overflow-x-clip">
        <div className="absolute top-0 right-0 w-96 h-96 bg-sunset/20 rounded-full blur-3xl animate-pulse -translate-y-1/2 translate-x-1/4" style={{animationDuration: "6s"}} />
        <div className="absolute top-1/2 left-0 w-80 h-80 bg-gold/15 rounded-full blur-3xl animate-pulse -translate-x-1/2" style={{animationDuration: "8s"}} />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-forest/15 rounded-full blur-3xl animate-pulse translate-y-1/2" style={{animationDuration: "10s"}} />
      </div>

      <div className="relative z-10">
        <div className="mx-auto max-w-7xl px-6 mb-20 text-center relative">
          <img src={shape4} alt="shape" className="hidden md:block md:absolute md:-left-8 md:-top-12 md:w-80 md:opacity-100 animate-slide-horizontal" />
          <div className="reveal-up eyebrow text-sunset mb-4">Tour Experiences</div>
          <h2 className="reveal-up font-display text-3xl md:text-5xl leading-[1.05] text-balance">
            Crafted Journeys,<br/>
            <span className="italic text-forest">Personally Yours</span>
          </h2>
        </div>

        <div className="space-y-28 md:space-y-40">
          {tours.map((t, i) => {
            const reverse = i % 2 === 1;
            return (
              <div key={i} className="mx-auto max-w-7xl px-6">
                <div className="grid md:grid-cols-12 gap-8 md:gap-14 items-center">
                  <div className={`md:col-span-6 reveal-up hover-zoom ${reverse ? "md:order-2" : ""}`}>
                    <div className="aspect-[16/10] overflow-hidden rounded-2xl shadow-2xl relative group">
                      <img src={t.img} alt={t.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    </div>
                  </div>
                  <div className={`md:col-span-6 ${reverse ? "md:order-1 md:pr-12" : "md:pl-12"} relative`}>
                    {i === 2 && <img src={shape4} alt="shape" className="absolute -right-32 -top-20 w-64 md:w-80 opacity-100 animate-slide-horizontal-reverse" />}
                    <div className="reveal-up eyebrow text-gold mb-6 tracking-widest">0{i + 1} — {t.eyebrow}</div>
                    <h3 className="reveal-up font-display text-2xl md:text-4xl leading-tight text-balance mb-6">{t.title}</h3>
                    <div className="gold-line my-8 reveal-up" />
                    <p className="reveal-up text-foreground/75 text-lg leading-relaxed mb-6">{t.desc}</p>
                    <div className="reveal-up mb-10 p-4 bg-gold/10 rounded-lg border-l-4 border-gold">
                      <div className="text-2xl font-display text-gold font-semibold">{t.price}</div>
                      <div className="text-sm text-foreground/70 mt-1">{t.priceInfo}</div>
                    </div>
                    <a href="#book" className="box-fill-button is-fill-out-red reveal-up inline-flex items-center gap-3 px-8 py-4 text-xs uppercase tracking-[0.28em] font-semibold">
                      <span>Explore Tour</span>
                      <ArrowRight className="button-icon" size={15} strokeWidth={1.8} />
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
