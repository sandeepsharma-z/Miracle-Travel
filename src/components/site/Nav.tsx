import { useEffect, useState, type FormEvent } from "react";
import { ArrowRight, CalendarDays, MapPin, Phone, Send, Users, X } from "lucide-react";
import logo from "@/assets/logo.png";

const links = [
  { label: "Tours", href: "#tours" },
  { label: "Vehicles", href: "#vehicles" },
  { label: "Gallery", href: "#gallery" },
  { label: "Destinations", href: "#destinations" },
  { label: "Contact", href: "#contact" },
];

const siteName = "Miracle Travel";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [open, setOpen] = useState(false);
  const [bookingOpen, setBookingOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const currentScrollY = window.scrollY;
      setScrolled(currentScrollY > 40);

      if (currentScrollY < lastScrollY) {
        setVisible(true);
      } else if (currentScrollY > 200) {
        setVisible(false);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [lastScrollY]);

  useEffect(() => {
    document.body.style.overflow = bookingOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [bookingOpen]);

  const openBooking = () => {
    setOpen(false);
    setBookingOpen(true);
  };

  useEffect(() => {
    window.addEventListener("open-booking-modal", openBooking);
    return () => window.removeEventListener("open-booking-modal", openBooking);
  }, []);

  const submitBooking = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const message = [
      "🚗 Miracle Travel - Booking Request",
      "",
      `Name: ${data.get("name")}`,
      `Phone: ${data.get("phone")}`,
      `Pickup Location: ${data.get("pickup")}`,
      `Destination: ${data.get("destination")}`,
      `Travel Date: ${data.get("date")}`,
      `Number of Guests: ${data.get("guests")}`,
      `Additional Notes: ${data.get("message") || "None"}`,
    ].join("\n");

    window.open(`https://wa.me/995551300620?text=${encodeURIComponent(message)}`, "_blank", "noopener,noreferrer");
    setBookingOpen(false);
  };

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
          visible ? "translate-y-0" : "-translate-y-full"
        } ${
          scrolled
            ? "bg-background/85 backdrop-blur-md border-b border-border/60 py-5"
            : "bg-transparent py-7"
        }`}
      >
        <div className="mx-auto max-w-7xl px-6 flex items-center justify-between">
          <a href="#top" className="flex items-center gap-2 h-10">
            <img src={logo} alt={siteName} className="h-full object-contain" />
          </a>

          <nav className="hidden md:flex items-center gap-9">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className={`nav-link text-[13px] tracking-wide uppercase transition-colors ${
                  scrolled ? "text-foreground/80 hover:text-foreground" : "text-cream/85 hover:text-gold"
                }`}
              >
                {l.label}
              </a>
            ))}
          </nav>

          <button
            type="button"
            onClick={openBooking}
            className={`box-fill-button hidden md:inline-flex items-center gap-2 px-5 py-2 text-xs uppercase tracking-[0.25em] ${
              scrolled ? "" : "is-fill-out"
            }`}
          >
            <span>Book Now</span>
            <ArrowRight className="button-icon" size={15} strokeWidth={1.8} />
          </button>

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
              <button type="button" onClick={openBooking} className="box-fill-button inline-flex w-fit items-center gap-2 px-4 py-2 text-xs uppercase tracking-[0.25em]">
                <span>Book Now</span>
                <ArrowRight className="button-icon" size={15} strokeWidth={1.8} />
              </button>
            </div>
          </div>
        )}
      </header>

      {bookingOpen && (
        <div className="fixed inset-0 z-[120] flex items-center justify-center bg-foreground/70 px-4 py-6 backdrop-blur-sm">
          <div className="relative w-full max-w-5xl overflow-hidden rounded-2xl bg-background shadow-2xl">
            <button
              type="button"
              aria-label="Close booking form"
              onClick={() => setBookingOpen(false)}
              className="absolute right-4 top-4 z-10 inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/85 text-gold shadow-lg transition-colors hover:bg-gold hover:text-white"
            >
              <X size={18} />
            </button>

            <div className="grid md:grid-cols-[0.85fr_1.15fr]">
              <div className="relative hidden bg-gold p-8 text-white md:block">
                <div className="absolute -left-16 -top-16 h-44 w-44 rounded-full bg-white/10" />
                <div className="absolute -bottom-20 right-0 h-56 w-56 rounded-full bg-white/10" />
                <div className="relative flex h-full min-h-[500px] flex-col justify-between">
                  <div>
                    <div className="eyebrow text-white/80">Miracle Travel</div>
                    <h2 className="mt-5 font-display text-5xl leading-tight">
                      Book Your Perfect Journey
                    </h2>
                    <p className="mt-5 text-sm leading-7 text-white/80">
                      Experience Georgia with premium tours and car rental services. Tell us your travel dates and preferences, and we'll create an unforgettable adventure for you.
                    </p>
                  </div>
                  <div className="space-y-4 text-sm text-white/85">
                    <div className="flex items-center gap-3"><Phone size={18} /> +995 551 30 06 20</div>
                    <div className="flex items-center gap-3"><MapPin size={18} /> Tbilisi, Georgia</div>
                  </div>
                </div>
              </div>

              <form onSubmit={submitBooking} className="max-h-[88vh] overflow-y-auto p-6 md:max-h-none md:overflow-visible md:p-7">
                <div className="pr-10 md:pr-0">
                  <div className="eyebrow text-gold">Miracle Travel Booking</div>
                  <h3 className="mt-3 font-display text-3xl leading-tight text-foreground">Plan Your Georgia Adventure</h3>
                  <p className="mt-3 text-sm leading-6 text-foreground/65">
                    Fill in your travel details below. Submit and we'll contact you on WhatsApp with personalized tour and rental options.
                  </p>
                </div>

                <div className="mt-5 grid gap-3 sm:grid-cols-2">
                  <label className="block text-sm font-medium text-foreground/80">
                    Full Name
                    <input name="name" required className="mt-2 w-full border border-border bg-white/70 px-4 py-2.5 text-sm outline-none transition-colors focus:border-gold" placeholder="Your name" />
                  </label>
                  <label className="block text-sm font-medium text-foreground/80">
                    Phone
                    <input name="phone" required className="mt-2 w-full border border-border bg-white/70 px-4 py-2.5 text-sm outline-none transition-colors focus:border-gold" placeholder="+995 ..." />
                  </label>
                  <label className="block text-sm font-medium text-foreground/80">
                    Pickup Location
                    <input name="pickup" required className="mt-2 w-full border border-border bg-white/70 px-4 py-2.5 text-sm outline-none transition-colors focus:border-gold" placeholder="Your hotel, airport, or location in Tbilisi..." />
                  </label>
                  <label className="block text-sm font-medium text-foreground/80">
                    Destination
                    <input name="destination" required className="mt-2 w-full border border-border bg-white/70 px-4 py-2.5 text-sm outline-none transition-colors focus:border-gold" placeholder="Tbilisi, Batumi, Gori, Kutaisi, Zugdidi..." />
                  </label>
                  <label className="block text-sm font-medium text-foreground/80">
                    <span className="inline-flex items-center gap-2"><CalendarDays size={15} /> Travel Date</span>
                    <input name="date" required type="date" className="mt-2 w-full border border-border bg-white/70 px-4 py-2.5 text-sm outline-none transition-colors focus:border-gold" />
                  </label>
                  <label className="block text-sm font-medium text-foreground/80">
                    <span className="inline-flex items-center gap-2"><Users size={15} /> Guests</span>
                    <input name="guests" required type="number" min="1" className="mt-2 w-full border border-border bg-white/70 px-4 py-2.5 text-sm outline-none transition-colors focus:border-gold" placeholder="6" />
                  </label>
                  <label className="block text-sm font-medium text-foreground/80 sm:col-span-2">
                    Special Requests
                    <textarea name="message" rows={3} className="mt-2 w-full resize-none border border-border bg-white/70 px-4 py-2.5 text-sm outline-none transition-colors focus:border-gold" placeholder="Any special requests? (tours, car rental, luggage info, dietary preferences, etc.)" />
                  </label>
                </div>

                <button type="submit" className="box-fill-button is-filled mt-5 inline-flex w-full items-center justify-center gap-3 px-6 py-3.5 text-xs font-semibold uppercase tracking-[0.25em]">
                  <span>Send On WhatsApp</span>
                  <Send className="button-icon" size={16} />
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
