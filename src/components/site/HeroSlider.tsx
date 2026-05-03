import { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";
import georgia1 from "@/assets/georgia-1.jpg";
import georgia2 from "@/assets/georgia-2.jpg";
import georgia3 from "@/assets/georgia-3.jpg";
import georgia4 from "@/assets/georgia-4.jpg";

const slides = [
  { img: georgia1, eyebrow: "Timeless Beauty", titleRegular: "Experience The Soul of", titleCursive: "Georgia", sub: "Discover ancient traditions, breathtaking landscapes, and warm hospitality in the heart of the Caucasus." },
  { img: georgia2, eyebrow: "Mountain Majesty", titleRegular: "Where Earth Meets", titleCursive: "Sky", sub: "Majestic peaks, hidden valleys, and panoramic vistas that take your breath away at every turn." },
  { img: georgia3, eyebrow: "Cultural Heritage", titleRegular: "Centuries of Stories", titleCursive: "Waiting", sub: "Medieval monasteries, ancient fortresses, and traditions that have endured through thousands of years." },
  { img: georgia4, eyebrow: "Natural Wonders", titleRegular: "Journey Into", titleCursive: "Paradise", sub: "Pristine valleys, cascading waterfalls, and untouched landscapes that inspire the soul." },
];

export function HeroSlider() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((p) => (p + 1) % slides.length), 6500);
    return () => clearInterval(t);
  }, []);
  return (
    <section id="top" className="relative h-[85vh] md:h-[90vh] w-full overflow-hidden bg-forest-deep">
      {slides.map((s, idx) => (
        <div
          key={idx}
          className={`absolute inset-0 transition-opacity duration-[1600ms] ease-out ${
            i === idx ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
        >
          <img
            src={s.img}
            alt={`${s.titleRegular} ${s.titleCursive}`}
            className={`absolute inset-0 w-full h-full object-cover ${i === idx ? "ken-burns" : ""}`}
            style={{ filter: "brightness(1.1) contrast(1.05)" }}
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
              <div className="eyebrow text-gold mb-6 tracking-widest font-semibold text-xs md:text-sm">{s.eyebrow}</div>
              <h1 className="font-display text-[clamp(2rem,5vw,4rem)] leading-[1.2] text-balance max-w-4xl font-semibold tracking-tight">
                {s.titleRegular} <span className="font-cursive text-gold text-[1.3em] font-light drop-shadow">{s.titleCursive}</span>
              </h1>
              <p className="mt-7 max-w-2xl text-cream/80 text-base md:text-lg font-light text-balance leading-relaxed">{s.sub}</p>
              <div className="mt-10 flex flex-wrap gap-4">
                <a href="#book" className="box-fill-button is-filled inline-flex items-center gap-3 px-8 py-4 text-xs uppercase tracking-[0.28em] font-semibold">
                  <span>Plan Your Trip</span>
                  <ArrowRight className="button-icon" size={15} strokeWidth={1.8} />
                </a>
                <a href="#tours" className="box-fill-button is-light inline-flex items-center gap-3 px-8 py-4 text-xs uppercase tracking-[0.28em]">
                  <span>Explore Georgia</span>
                  <ArrowRight className="button-icon" size={15} strokeWidth={1.8} />
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
