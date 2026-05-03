import { useEffect, useRef, useState } from "react";
import road from "@/assets/road-aerial.jpg";

export function Parallax() {
  const ref = useRef<HTMLDivElement>(null);
  const [y, setY] = useState(0);
  useEffect(() => {
    const onScroll = () => {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      const v = (rect.top - window.innerHeight) * -0.15;
      setY(v);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <section ref={ref} className="relative h-[80vh] md:h-[90vh] overflow-hidden">
      <div className="absolute inset-0 -top-24 -bottom-24" style={{ transform: `translate3d(0, ${y}px, 0)` }}>
        <img src={road} alt="Mountain road" className="w-full h-full object-cover" loading="lazy" />
      </div>
      <div className="absolute inset-0 overlay-vignette" />
      <div className="relative z-10 h-full flex items-center justify-center text-center px-6">
        <div className="max-w-3xl text-cream">
          <div className="eyebrow text-gold mb-5">A Visual Journey</div>
          <h2 className="font-display text-5xl md:text-7xl leading-[1.05] text-balance">
            Roads written by the land,<br />
            <span className="italic">followed by you.</span>
          </h2>
          <div className="gold-line mx-auto my-8" />
          <p className="text-cream/85 text-lg max-w-xl mx-auto font-light">
            Every route is a frame. Every turn, a quiet invitation.
          </p>
        </div>
      </div>
    </section>
  );
}
