import { useEffect, useState } from "react";
import { useReveal } from "@/hooks/use-reveal";
import bg from "@/assets/moment-toast.jpg";

const reviews = [
  { q: "A perfect day in Kakheti — comfortable, unhurried, and full of soul. The driver became part of the story, sharing local secrets that no guidebook could capture. From ancient wine cellars to hidden viewpoints, every moment felt carefully crafted just for us.", a: "— ბესიკი შოშიშვილი, თბილისი" },
  { q: "Reliable, premium, deeply local. We saw places no group tour ever reaches. The minibus was immaculate, the driver spoke perfect English and knew everyone in every village. We felt like we were traveling with a friend who understood the soul of Georgia.", a: "— ნიკა მეტრეველი, ქუთაისი" },
  { q: "From pickup to drop-off, every detail felt considered. The vehicle alone was a joy — leather seats, climate control, and windows perfectly positioned for photos. But it was the driver's passion for our experience that truly made the difference.", a: "— თეა თოფურია, ბათუმი" },
  { q: "The wine cellars, the mountains, the hospitality — everything was perfectly orchestrated. They stopped whenever we asked, knew the best local restaurants, and made us feel like honored guests rather than tourists. A journey like no other.", a: "— გიორგი გელაშვილი, სიღნაღი" },
  { q: "Professional drivers, pristine vehicles, and local knowledge that changed how we see Georgia forever. They adapted to our pace, our interests, and our moods. We experienced the real Georgia — not a watered-down version, but authentic, living, breathing culture.", a: "— მარინე ჩიხლაძე, კახეთი" },
];

export function Trust() {
  const ref = useReveal<HTMLDivElement>();
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((p) => (p + 1) % reviews.length), 5500);
    return () => clearInterval(t);
  }, []);
  return (
    <section ref={ref} className="relative py-16 md:py-40 overflow-hidden" style={{backgroundImage: `url(${bg})`, backgroundAttachment: "fixed", backgroundSize: "cover", backgroundPosition: "center"}}>
      <div className="absolute inset-0 bg-black/35" />

      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center pb-12 md:pb-20">
        <div className="reveal-up eyebrow text-sunset mb-5 text-lg tracking-widest">Trusted by Travelers</div>
        <div className="reveal-up flex justify-center gap-2 mb-12">
          {[...Array(5)].map((_, k) => <span key={k} className="text-3xl text-sunset">★</span>)}
        </div>
        <div className="relative h-48 md:h-40">
          {reviews.map((r, idx) => (
            <blockquote
              key={idx}
              className={`absolute inset-0 transition-opacity duration-1000 ${i === idx ? "opacity-100" : "opacity-0"}`}
            >
              <p className="font-display text-lg md:text-2xl leading-snug italic text-balance text-white">"{r.q}"</p>
              <footer className="mt-8 text-cream/85 text-sm tracking-widest uppercase font-semibold">{r.a}</footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
