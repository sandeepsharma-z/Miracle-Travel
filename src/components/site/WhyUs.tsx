import { useReveal } from "@/hooks/use-reveal";
import bg from "@/assets/hero-2.jpg";

const points = [
  { t: "Local Knowledge", d: "Drivers born and raised in Kakheti." },
  { t: "Flexible Routes", d: "Stop wherever the view asks." },
  { t: "Comfortable Vehicles", d: "Modern minibuses, immaculate." },
  { t: "Easy Booking", d: "WhatsApp-fast, no friction." },
  { t: "Private Experience", d: "Just you, your group, the road." },
];

export function WhyUs() {
  const ref = useReveal<HTMLDivElement>();
  return (
    <section ref={ref} className="relative py-28 md:py-40 overflow-hidden">
      <img src={bg} alt="" className="absolute inset-0 w-full h-full object-cover" loading="lazy" />
      <div className="absolute inset-0 bg-forest-deep/80" style={{ background: "linear-gradient(180deg, rgba(20,30,22,.85), rgba(15,22,16,.92))" }} />

      <div className="relative z-10 mx-auto max-w-7xl px-6 text-cream">
        <div className="text-center mb-16">
          <div className="reveal-up eyebrow text-gold mb-4">Why Travel With Us</div>
          <h2 className="reveal-up font-display text-5xl md:text-6xl leading-[1.05] text-cream">
            A standard set <span className="italic">by the road itself.</span>
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-x-6 gap-y-12">
          {points.map((p, i) => (
            <div key={p.t} className="reveal-up text-center md:text-left">
              <div className="font-display text-5xl text-gold/80">0{i + 1}</div>
              <div className="gold-line my-4 mx-auto md:mx-0" />
              <div className="font-display text-xl text-cream mb-2">{p.t}</div>
              <p className="text-cream/70 text-sm leading-relaxed">{p.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
