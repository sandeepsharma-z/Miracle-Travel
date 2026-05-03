import { useReveal } from "@/hooks/use-reveal";
import bg from "@/assets/hero-2.jpg";

const steps = [
  { t: "Book Tour", d: "Tell us your dates, your dreams.", n: "01" },
  { t: "Pickup Service", d: "We come to your door.", n: "02" },
  { t: "Comfortable Travel", d: "Settle in. Watch Kakheti unfold.", n: "03" },
  { t: "Explore Destinations", d: "Vineyards, villages, viewpoints.", n: "04" },
  { t: "Safe Drop Off", d: "Home, with stories to keep.", n: "05" },
];

export function Timeline() {
  const ref = useReveal<HTMLDivElement>();
  return (
    <section ref={ref} className="relative py-16 md:py-40 overflow-hidden" style={{backgroundImage: `url(${bg})`, backgroundAttachment: "fixed", backgroundSize: "cover", backgroundPosition: "center"}}>
      <div className="absolute inset-0 bg-black/40" />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="text-center mb-20">
          <div className="reveal-up eyebrow text-sunset mb-4">The Process</div>
          <h2 className="reveal-up font-display text-3xl md:text-5xl leading-[1.05] text-white">
            How Your Journey <span className="italic text-cream">Works</span>
          </h2>
        </div>

        <div className="relative">
          <div className="hidden md:block absolute top-12 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cream/50 to-transparent" />
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 md:gap-4">
            {steps.map((s, i) => (
              <div key={s.n} className={`reveal-up relative text-center group ${i === 4 ? "col-span-2 md:col-span-1" : ""}`} style={{ transitionDelay: `${i * 80}ms` }}>
                <div className="relative z-20 mx-auto w-24 h-24 rounded-full border-2 border-cream/70 flex items-center justify-center shadow-lg group-hover:border-cream group-hover:bg-cream/20 transition-all" style={{background: "radial-gradient(circle, rgba(15,22,16,.95) 85%, rgba(15,22,16,.85) 100%)"}}>
                  <span className="font-display text-2xl text-cream group-hover:text-white transition-colors">{s.n}</span>
                </div>
                <h3 className="font-display text-xl mt-6 text-white">{s.t}</h3>
                <p className="text-white/80 text-sm mt-2 leading-relaxed max-w-[200px] mx-auto">{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
