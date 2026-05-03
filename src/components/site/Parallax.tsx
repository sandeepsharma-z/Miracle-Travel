import georgiaVideo from "@/assets/parallax-video.mp4";

const siteName = "მიკროავტობუსი დაკვეთით";

export function Parallax() {
  return (
    <section className="relative h-[45vh] md:h-[82vh] min-h-[350px] md:min-h-[620px] overflow-hidden bg-forest-deep">
      <video
        className="absolute inset-0 h-full w-full object-cover"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src={georgiaVideo} type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-black/20" />

      <div className="absolute left-1/2 bottom-0 z-10 flex h-[240px] w-[480px] max-w-[88vw] -translate-x-1/2 translate-y-[28%] flex-col items-center justify-start rounded-t-full bg-background px-8 pt-8 text-center text-gold shadow-2xl md:h-[380px] md:w-[760px] md:translate-y-[31%] md:pt-16">
        <div className="text-[11px] font-bold tracking-wide">11-05-2026</div>
        <h2 className="mt-1 md:mt-3 text-2xl leading-none tracking-tight md:text-4xl">
          Best In Travel
        </h2>
        <div className="mx-auto mt-2 md:mt-5 h-px w-72 max-w-full bg-gold/25" />

        <div className="mt-2 md:mt-5 flex w-full items-center justify-center gap-2 text-[10px] font-bold uppercase tracking-tight">
          <span className="shrink-0">PRESENT BY :</span>
          <span className="min-w-0 max-w-[58vw] truncate whitespace-nowrap font-display text-xs normal-case tracking-normal md:max-w-[520px] md:text-sm">
            {siteName}
          </span>
        </div>

        <p className="mt-4 text-[9px] font-normal leading-3 text-gold md:text-[10px] md:leading-4">
          Premium private minibus journeys through Georgia's wine country.<br/>
          Comfort, local expertise, and unforgettable memories awaited.
        </p>
      </div>
    </section>
  );
}
