export function Footer() {
  return (
    <footer id="contact" className="bg-forest-deep text-cream/80" style={{ backgroundColor: "oklch(0.22 0.04 155)" }}>
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid md:grid-cols-12 gap-10">
          <div className="md:col-span-5">
            <div className="font-display text-2xl text-cream"><span className="text-gold">●</span> მიკროავტობუსი დაკვეთით</div>
            <p className="mt-5 text-cream/65 max-w-sm leading-relaxed">
              Private minibus tours through Kakheti. Crafted journeys, comfortable rides, local depth.
            </p>
          </div>
          <div className="md:col-span-3">
            <div className="eyebrow text-gold mb-4">Contact</div>
            <ul className="space-y-2 text-sm text-cream/70">
              <li>+995 000 000 000</li>
              <li>hello@example.ge</li>
              <li>Telavi, Kakheti, Georgia</li>
            </ul>
          </div>
          <div className="md:col-span-2">
            <div className="eyebrow text-gold mb-4">Explore</div>
            <ul className="space-y-2 text-sm text-cream/70">
              <li><a href="#tours" className="hover:text-gold">Tours</a></li>
              <li><a href="#vehicles" className="hover:text-gold">Vehicles</a></li>
              <li><a href="#gallery" className="hover:text-gold">Gallery</a></li>
              <li><a href="#book" className="hover:text-gold">Book</a></li>
            </ul>
          </div>
          <div className="md:col-span-2">
            <div className="eyebrow text-gold mb-4">Follow</div>
            <div className="flex gap-3">
              {["IG", "FB", "WA"].map((s) => (
                <a key={s} href="#" className="w-10 h-10 inline-flex items-center justify-center border border-cream/20 text-xs hover:border-gold hover:text-gold transition-colors">{s}</a>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-16 pt-8 border-t border-cream/10 flex flex-col md:flex-row gap-4 justify-between text-xs text-cream/50">
          <div>© {new Date().getFullYear()} მიკროავტობუსი დაკვეთით — All rights reserved.</div>
          <div>
            Design & Developed by{" "}
            <a href="https://solvinex.com" target="_blank" rel="noopener" className="text-gold hover:underline">
              Solvinex
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
