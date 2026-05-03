import georgiaVideo from "@/assets/georgia-intro.mp4";
import georgiaPoster from "@/assets/georgia-1.jpg";
import { ArrowRight } from "lucide-react";

export function VideoSection() {
  return (
    <section className="relative w-full h-[45vh] md:h-[85vh] lg:h-[95vh] overflow-hidden bg-forest-deep">
      <video
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        poster={georgiaPoster}
      >
        <source src={georgiaVideo} type="video/mp4" />
      </video>
      <div className="absolute inset-0 overlay-dark" />

      <div className="relative z-10 h-full flex items-end justify-center pb-12 md:pb-16">
        <div className="flex flex-wrap gap-2 md:gap-4 justify-center">
          <a href="#book" className="box-fill-button is-fill-out inline-flex w-44 md:w-52 items-center justify-center gap-2 px-4 md:px-8 py-2 md:py-4 text-xs uppercase tracking-[0.16em] md:tracking-[0.28em] font-semibold">
            <span>Plan Trip</span>
            <ArrowRight className="button-icon" size={15} strokeWidth={1.8} />
          </a>
          <a href="#tours" className="box-fill-button is-light inline-flex w-44 md:w-52 items-center justify-center gap-2 px-4 md:px-8 py-2 md:py-4 text-xs uppercase tracking-[0.16em] md:tracking-[0.28em]">
            <span>Learn More</span>
            <ArrowRight className="button-icon" size={15} strokeWidth={1.8} />
          </a>
        </div>
      </div>

    </section>
  );
}
