import { useEffect, useState } from "react";
import h1 from "@/assets/hero-1.jpg";
import h2 from "@/assets/hero-2.jpg";
import h3 from "@/assets/hero-3.jpg";
import h4 from "@/assets/hero-4.jpg";

const slides = [
  { img: h1, eyebrow: "Private Transfers", title: "Drive Through The Heart of Kakheti", sub: "Cinematic vineyard roads, golden hour skies, and a vehicle made for the journey." },
  { img: h2, eyebrow: "Wine Country", title: "Where Every Hill Tells a Story", sub: "Endless vineyards rolling into the Caucasus — yours to discover, at your own pace." },
  { img: h3, eyebrow: "Old Town", title: "Telavi at Twilight", sub: "Ancient stones, lamplit lanes, and the slow elegance of Georgian evenings." },
  { img: h4, eyebrow: "Mountain Routes", title: "Beyond The Familiar Road", sub: "Snow peaks, hidden valleys, and the quiet thrill of going further." },
];

export function HeroSlider() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((p) => (p + 1) % slides.length), 6500);
    return () => clearInterval(t);
  }, []);
  return (
    <section id="top" className="relative h-[100svh] w-full overflow-hidden bg-forest-deep">
      {slides.map((s, idx) => (
        <div
          key={idx}
          className={`absolute inset-0 transition-opacity duration-[1600ms] ease-out ${
            i === idx ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
        >
          <img
            src={s.img}
            alt={s.title}
            className={`absolute inset-0 w-full h-full object-cover ${i === idx ? "ken-burns" : ""}`}
            fetchPriority={idx === 0 ? "high" : "low"}
          />
          <div className="absolute inset-0 overlay-dark" />
        </div>
      ))}

      <div className="relative z-10 h-full flex items-end pb-28 md:pb-32">
        <div className="mx-auto max-w-7xl px-6 w-full text-cream">
          {slides.map((s, idx) => (
            <div
              key={idx}
              className={`transition-all duration-1000 ${i === idx ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6 absolute"}`}
            >
              <div className="eyebrow text-gold mb-5">{s.eyebrow}</div>
              <h1 className="font-display text-[clamp(2.6rem,7vw,6.5rem)] leading-[1.02] text-balance max-w-5xl">
                {s.title}
              </h1>
              <p className="mt-6 max-w-xl text-cream/80 text-lg font-light text-balance">{s.sub}</p>
              <div className="mt-9 flex flex-wrap gap-4">
                <a href="#book" className="bg-gold text-foreground px-7 py-4 text-xs uppercase tracking-[0.28em] hover:bg-cream transition-colors">
                  Plan Your Trip
                </a>
                <a href="#tours" className="border border-cream/40 text-cream px-7 py-4 text-xs uppercase tracking-[0.28em] hover:border-gold hover:text-gold transition-colors">
                  View Tours
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* counter + dots */}
      <div className="absolute bottom-8 left-6 md:left-12 z-20 flex items-center gap-4 text-cream">
        <span className="font-display text-2xl text-gold">{String(i + 1).padStart(2, "0")}</span>
        <div className="w-16 h-px bg-cream/40" />
        <span className="text-xs tracking-widest text-cream/60">{String(slides.length).padStart(2, "0")}</span>
      </div>
      <div className="absolute bottom-8 right-6 md:right-12 z-20 flex gap-2">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setI(idx)}
            aria-label={`Slide ${idx + 1}`}
            className={`h-px transition-all duration-500 ${i === idx ? "w-10 bg-gold" : "w-6 bg-cream/40"}`}
          />
        ))}
      </div>
      {/* scroll indicator */}
      <div className="absolute bottom-24 left-1/2 -translate-x-1/2 z-20 hidden md:block">
        <div className="scroll-indicator relative w-[18px] h-7 border border-cream/50 rounded-full" />
      </div>
    </section>
  );
}
