export function Footer() {
  const socialLinks = [
    {
      label: "Facebook",
      url: "https://facebook.com",
      svg: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
        </svg>
      ),
    },
    {
      label: "Twitter",
      url: "https://twitter.com",
      svg: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24h-6.514l-5.106-6.694-5.829 6.694h-3.328l7.691-8.79-8.182-10.714h6.564l4.872 6.442 5.524-6.442zM17.05 19.1h1.844L6.028 4.28H4.076z" />
        </svg>
      ),
    },
    {
      label: "Instagram",
      url: "https://instagram.com",
      svg: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5" fill="none" stroke="currentColor" strokeWidth="2" />
          <circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" strokeWidth="2" />
          <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" />
        </svg>
      ),
    },
  ];

  return (
    <footer id="contact" className="relative text-white overflow-hidden" style={{ backgroundColor: "#6b1a28" }}>
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid md:grid-cols-12 gap-10">
          <div className="md:col-span-5">
            <div className="font-display text-2xl text-cream"><span className="text-sunset">●</span> Miracle Travel</div>
            <p className="mt-5 text-cream max-w-sm leading-relaxed">
              Premium travel tours and car rental services. Explore Georgia with comfort, expertise, and unforgettable experiences.
            </p>
          </div>
          <div className="md:col-span-3">
            <div className="eyebrow text-sunset mb-4">Contact</div>
            <ul className="space-y-2 text-sm text-cream">
              <li>+995 574 14 43 11</li>
              <li>Miracletoursltd@gmail.com</li>
              <li>Tbilisi, Metekhi 22, Georgia</li>
            </ul>
          </div>
          <div className="md:col-span-2">
            <div className="eyebrow text-sunset mb-4">Explore</div>
            <ul className="space-y-2 text-sm text-cream">
              <li><a href="#tours" className="hover:text-sunset">Tours</a></li>
              <li><a href="#vehicles" className="hover:text-sunset">Vehicles</a></li>
              <li><a href="#gallery" className="hover:text-sunset">Gallery</a></li>
              <li><a href="#book" className="hover:text-sunset">Book</a></li>
            </ul>
          </div>
          <div className="md:col-span-2">
            <div className="eyebrow text-sunset mb-4">Follow Us</div>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-10 h-10 inline-flex items-center justify-center rounded-full border border-cream/40 text-cream hover:border-sunset hover:bg-sunset/10 hover:text-sunset transition-all duration-300"
                  title={social.label}
                >
                  {social.svg}
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-16 pt-8 border-t border-cream/30 flex flex-col md:flex-row gap-4 justify-between text-xs text-cream/70">
          <div>© {new Date().getFullYear()} Miracle Travel — All rights reserved.</div>
          <div>
            Design & Developed by{" "}
            <a href="https://solvinex.com" target="_blank" rel="noopener" className="text-sunset hover:underline">
              Solvinex
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
