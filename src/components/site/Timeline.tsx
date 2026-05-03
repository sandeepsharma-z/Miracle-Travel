import { useReveal } from "@/hooks/use-reveal";

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
    <section ref={ref} className="bg-secondary py-28 md:py-40">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center mb-20">
          <div className="reveal-up eyebrow text-sunset mb-4">The Process</div>
          <h2 className="reveal-up font-display text-5xl md:text-6xl leading-[1.05]">
            How Your Journey <span className="italic text-forest">Works</span>
          </h2>
        </div>

        <div className="relative">
          <div className="hidden md:block absolute top-12 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold to-transparent" />
          <div className="grid md:grid-cols-5 gap-10 md:gap-4">
            {steps.map((s, i) => (
              <div key={s.n} className="reveal-up relative text-center group" style={{ transitionDelay: `${i * 80}ms` }}>
                <div className="relative z-10 mx-auto w-24 h-24 rounded-full bg-background border border-border flex items-center justify-center shadow-md group-hover:border-gold transition-colors">
                  <span className="font-display text-2xl text-forest group-hover:text-sunset transition-colors">{s.n}</span>
                </div>
                <h3 className="font-display text-xl mt-6">{s.t}</h3>
                <p className="text-foreground/65 text-sm mt-2 leading-relaxed max-w-[200px] mx-auto">{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
