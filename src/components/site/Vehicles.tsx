import { useReveal } from "@/hooks/use-reveal";
import img1 from "@/assets/WhatsApp Image 2026-05-02 at 10.35.31 PM (1).jpeg";
import img2 from "@/assets/WhatsApp Image 2026-05-02 at 10.35.32 PM (2).jpeg";
import img3 from "@/assets/WhatsApp Image 2026-05-02 at 10.35.32 PM (7).jpeg";
import img4 from "@/assets/WhatsApp Image 2026-05-02 at 10.35.32 PM.jpeg";
import img5 from "@/assets/WhatsApp Image 2026-05-02 at 10.35.33 PM (2).jpeg";
import img6 from "@/assets/WhatsApp Image 2026-05-02 at 10.35.33 PM.jpeg";
import shape5 from "@/assets/shape-5.webp";
import { ArrowRight } from "lucide-react";

const vehicles = [
  { id: "01", title: "Premium Minibus", desc: "Leather seats, AC, panoramic windows", img: img1 },
  { id: "02", title: "Luxury Interior", desc: "Premium comfort for extended journeys", img: img2 },
  { id: "03", title: "Group Travel", desc: "Perfect for families and groups", img: img3 },
  { id: "04", title: "Modern Amenities", desc: "Equipped with latest technology", img: img4 },
  { id: "05", title: "Spacious Design", desc: "Room to stretch and relax", img: img5 },
  { id: "06", title: "Professional Care", desc: "Meticulously maintained fleet", img: img6 },
];

export function Vehicles() {
  const ref = useReveal<HTMLDivElement>();
  return (
    <section ref={ref} id="vehicles" className="relative py-16 md:py-40 bg-gradient-to-b from-secondary to-background overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gold/10 rounded-full blur-3xl animate-pulse -translate-y-1/2" style={{animationDuration: "7s"}} />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-sunset/10 rounded-full blur-3xl animate-pulse translate-y-1/2" style={{animationDuration: "9s"}} />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="mb-20 text-center relative">
          <img src={shape5} alt="shape" className="hidden md:block md:absolute md:-left-20 md:top-0 md:w-56 md:opacity-80 animate-spin" style={{animationDuration: "20s"}} />
          <div className="reveal-up eyebrow text-sunset mb-4">The Fleet</div>
          <h2 className="reveal-up font-display text-3xl md:text-5xl leading-tight text-balance mb-8">
            Comfortable Rides<br/><span className="italic text-forest">For Every Trip</span>
          </h2>
          <p className="reveal-up text-foreground/75 text-lg leading-relaxed max-w-2xl mx-auto">
            Premium minibuses with leather seats, panoramic windows, and the comfort that lets you enjoy every moment. From private couples to extended family groups — our fleet is designed for your journey.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {vehicles.map((vehicle, idx) => (
            <div key={idx} className="group relative reveal-up">
              <div className="relative overflow-hidden rounded-2xl shadow-xl aspect-[4/5] hover-zoom">
                <img src={vehicle.img} alt={vehicle.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <div className="eyebrow text-gold mb-2">{vehicle.id}</div>
                  <h3 className="font-display text-2xl font-medium mb-1">{vehicle.title}</h3>
                  <p className="text-sm text-white/80">{vehicle.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center reveal-up">
          <a href="#book" className="vehicle-reserve-button inline-flex items-center gap-3 bg-gold px-8 py-4 text-sm uppercase tracking-[0.28em] text-white">
            <span>Reserve Your Vehicle</span>
            <ArrowRight className="button-icon" size={16} strokeWidth={1.8} />
          </a>
        </div>
      </div>
    </section>
  );
}
