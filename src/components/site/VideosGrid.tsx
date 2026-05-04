import { useReveal } from "@/hooks/use-reveal";
import video1 from "@/assets/video-1.mp4";
import video2 from "@/assets/video-2.mp4";
import video3 from "@/assets/video-3.mp4";
import video4 from "@/assets/video-4.mp4";

const videos = [
  { src: video1, title: "Moment 01" },
  { src: video2, title: "Moment 02" },
  { src: video3, title: "Moment 03" },
  { src: video4, title: "Moment 04" },
];

export function VideosGrid() {
  const ref = useReveal<HTMLDivElement>();
  return (
    <section ref={ref} className="relative overflow-hidden bg-background py-16 md:py-28">
      <div className="pointer-events-none absolute left-0 top-1/4 h-80 w-80 -translate-x-1/2 rounded-full bg-gold/10 blur-3xl" />
      <div className="pointer-events-none absolute right-0 bottom-0 h-96 w-96 translate-x-1/3 rounded-full bg-forest/10 blur-3xl" />

      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center mb-12">
          <div className="reveal-up eyebrow text-sunset mb-4">Moments</div>
          <h2 className="reveal-up font-display text-3xl md:text-5xl leading-[1.05] text-balance">
            Stories from <span className="italic text-forest">the Road</span>
          </h2>
          <p className="reveal-up mx-auto mt-5 max-w-2xl text-sm md:text-base leading-7 text-foreground/65">
            A glimpse of the routes, stops, and quiet travel moments waiting across Georgia.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6">
          {videos.map((video, idx) => (
            <div
              key={idx}
              className="reveal-up group relative aspect-[9/16] overflow-hidden rounded-lg bg-black shadow-xl ring-1 ring-foreground/10"
            >
              <video
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              >
                <source src={video.src} type="video/mp4" />
              </video>
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-foreground/25 via-transparent to-transparent opacity-70" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
