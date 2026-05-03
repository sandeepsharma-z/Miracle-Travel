import { useEffect, useState } from "react";
import { useReveal } from "@/hooks/use-reveal";
import bg from "@/assets/moment-toast.jpg";

const reviews = [
  { q: "A perfect day in Kakheti — comfortable, unhurried, and full of soul. The driver became part of the story.", a: "— Sofia & Marc, Spain" },
  { q: "Reliable, premium, deeply local. We saw places no group tour ever reaches.", a: "— Aki, Japan" },
  { q: "From pickup to drop-off, every detail felt considered. The vehicle alone was a joy.", a: "— Lena, Germany" },
];

export function Trust() {
  const ref = useReveal<HTMLDivElement>();
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((p) => (p + 1) % reviews.length), 5500);
    return () => clearInterval(t);
  }, []);
  return (
    <section ref={ref} className="relative py-28 md:py-40 overflow-hidden">
      <img src={bg} alt="" className="absolute inset-0 w-full h-full object-cover" loading="lazy" />
      <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, rgba(20,18,12,.55), rgba(20,18,12,.85))" }} />

      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center text-cream">
        <div className="reveal-up eyebrow text-gold mb-5">Trusted by Travelers</div>
        <div className="reveal-up flex justify-center gap-1 text-gold mb-8">
          {[...Array(5)].map((_, k) => <span key={k} className="text-2xl">★</span>)}
        </div>
        <div className="relative h-44 md:h-36">
          {reviews.map((r, idx) => (
            <blockquote
              key={idx}
              className={`absolute inset-0 transition-opacity duration-1000 ${i === idx ? "opacity-100" : "opacity-0"}`}
            >
              <p className="font-display text-2xl md:text-4xl leading-snug italic text-balance">"{r.q}"</p>
              <footer className="mt-6 text-cream/70 text-sm tracking-widest uppercase">{r.a}</footer>
            </blockquote>
          ))}
        </div>
        <div className="reveal-up mt-12 flex flex-wrap justify-center gap-x-10 gap-y-3 text-cream/70 text-xs uppercase tracking-[0.28em]">
          <span>Comfortable & Safe</span>
          <span className="text-gold">●</span>
          <span>Reliable Local Service</span>
          <span className="text-gold">●</span>
          <span>Trusted Worldwide</span>
        </div>
      </div>
    </section>
  );
}
