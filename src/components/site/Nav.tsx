import { useEffect, useState } from "react";

const links = [
  { label: "Tours", href: "#tours" },
  { label: "Vehicles", href: "#vehicles" },
  { label: "Gallery", href: "#gallery" },
  { label: "Destinations", href: "#destinations" },
  { label: "Contact", href: "#contact" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-background/85 backdrop-blur-md border-b border-border/60 py-3"
          : "bg-transparent py-6"
      }`}
    >
      <div className="mx-auto max-w-7xl px-6 flex items-center justify-between">
        <a href="#top" className={`font-display text-lg md:text-xl tracking-tight ${scrolled ? "text-foreground" : "text-cream"}`}>
          <span className="text-gold">●</span> მიკროავტობუსი დაკვეთით
        </a>
        <nav className="hidden md:flex items-center gap-9">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={`text-[13px] tracking-wide uppercase transition-colors ${
                scrolled ? "text-foreground/80 hover:text-foreground" : "text-cream/85 hover:text-gold"
              }`}
            >
              {l.label}
            </a>
          ))}
        </nav>
        <a
          href="#book"
          className="hidden md:inline-flex items-center gap-2 border border-gold/70 text-gold px-5 py-2 text-xs uppercase tracking-[0.25em] hover:bg-gold hover:text-foreground transition-colors"
        >
          Book Now
        </a>
        <button
          aria-label="Menu"
          onClick={() => setOpen((o) => !o)}
          className={`md:hidden ${scrolled ? "text-foreground" : "text-cream"}`}
        >
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M3 7h18M3 12h18M3 17h18" />
          </svg>
        </button>
      </div>
      {open && (
        <div className="md:hidden bg-background border-t border-border mt-3">
          <div className="px-6 py-4 flex flex-col gap-4">
            {links.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="text-foreground/80 text-sm uppercase tracking-wider">
                {l.label}
              </a>
            ))}
            <a href="#book" onClick={() => setOpen(false)} className="border border-gold text-foreground px-4 py-2 text-xs uppercase tracking-[0.25em] inline-block w-fit">
              Book Now
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
