import { useState } from "react";
import { useReveal } from "@/hooks/use-reveal";
import a from "@/assets/hero-1.jpg";
import b from "@/assets/moment-toast.jpg";
import c from "@/assets/wine-cellar.jpg";
import d from "@/assets/moment-wine.jpg";
import e from "@/assets/countryside.jpg";
import f from "@/assets/moment-traveler.jpg";
import g from "@/assets/road-aerial.jpg";
import h from "@/assets/sighnaghi.jpg";

const images = [
  { src: a, span: "row-span-2" },
  { src: b, span: "" },
  { src: c, span: "" },
  { src: d, span: "row-span-2" },
  { src: e, span: "" },
  { src: f, span: "" },
  { src: g, span: "col-span-2" },
  { src: h, span: "" },
];

export function Gallery() {
  const ref = useReveal<HTMLDivElement>();
  const [open, setOpen] = useState<string | null>(null);
  return (
    <section ref={ref} id="gallery" className="bg-background py-28 md:py-40">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center mb-16">
          <div className="reveal-up eyebrow text-sunset mb-4">Gallery</div>
          <h2 className="reveal-up font-display text-5xl md:text-6xl leading-[1.05]">
            Moments From <span className="italic text-forest">The Journey</span>
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[180px] md:auto-rows-[260px] gap-3 md:gap-4">
          {images.map((im, i) => (
            <button
              key={i}
              onClick={() => setOpen(im.src)}
              className={`reveal-up relative overflow-hidden group ${im.span}`}
            >
              <img
                src={im.src}
                alt=""
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/20 transition-colors duration-500" />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="text-cream text-xs uppercase tracking-[0.3em] border border-cream/70 px-4 py-2">View</span>
              </div>
            </button>
          ))}
        </div>
      </div>

      {open && (
        <div
          onClick={() => setOpen(null)}
          className="fixed inset-0 z-[100] bg-foreground/95 flex items-center justify-center p-6 animate-in fade-in duration-300"
        >
          <button onClick={() => setOpen(null)} aria-label="Close" className="absolute top-6 right-6 text-cream text-3xl">×</button>
          <img src={open} alt="" className="max-w-[92vw] max-h-[90vh] object-contain shadow-2xl" />
        </div>
      )}
    </section>
  );
}
