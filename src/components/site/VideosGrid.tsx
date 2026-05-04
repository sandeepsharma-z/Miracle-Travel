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
    <section ref={ref} className="py-16 md:py-24 bg-background">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center mb-12">
          <div className="reveal-up eyebrow text-sunset mb-4">Moments</div>
          <h2 className="reveal-up font-display text-3xl md:text-5xl leading-[1.05] text-balance">
            Stories from <span className="italic text-forest">the Road</span>
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6">
          {videos.map((video, idx) => (
            <div key={idx} className="reveal-up aspect-square rounded-lg overflow-hidden shadow-lg bg-black">
              <video
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-cover"
              >
                <source src={video.src} type="video/mp4" />
              </video>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
