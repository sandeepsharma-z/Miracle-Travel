import { useState } from "react";

const destinations = [
  { name: "Tbilisi", image: "https://img.magnific.com/free-photo/notre-dame-basilica-ottawa-ontario-canada_649448-1039.jpg?t=st=1777810119~exp=1777813719~hmac=6956bef37dc901c470357841cc131de3d8eb4db572c2bd75b349a2b285415b0b&w=2000" },
  { name: "Batumi", image: "https://img.magnific.com/free-photo/beautiful-light-district-tourism-view-beach_1417-1222.jpg?t=st=1777810169~exp=1777813769~hmac=2e8969dadad69d654eaed9d0d8073d2574be4d8eb4db572c2bd75b349a2b285415b0b&w=2000" },
  { name: "Gonio", image: "https://img.magnific.com/free-photo/beautiful-shot-wang-church-tower-karpacz-poland_181624-8784.jpg?t=st=1777810211~exp=1777813811~hmac=46eec33cd3135040324116c70f59508999e89a25fdc9af95e2e8a730253f042a&w=2000" },
  { name: "Sighnaghi", image: "http://img.magnific.com/free-photo/festung-hohensalzburg-salzburg-austria_181624-18758.jpg?t=st=1777810251~exp=1777813851~hmac=31f72606db808c6b0e85e7d4c8e1ebeddb33f8d585707cb18fcf6339b5b94439&w=2000" },
  { name: "Kazbegi", image: "https://img.magnific.com/free-photo/beautiful-rocky-mountain-covered-with-snow-cloudy-sky_181624-13802.jpg?t=st=1777810295~exp=1777813895~hmac=cdfdcae57b6dab349ea33d70e9b90f6fce68392e56c38b1c57b26ccf3e28469c&w=1480" },
  { name: "Kutaisi", image: "https://img.magnific.com/free-photo/church-from-sucevita-monastery-bucovina-romania_231208-8328.jpg?t=st=1777810336~exp=1777813936~hmac=1ea6d7ce144c94d88decba7a40301e2b582675fe641cb421227b310d9494ebf5&w=2000" },
  { name: "Mestia", image: "https://img.magnific.com/free-photo/beautiful-view-rice-fields-lush-green-leepa-valley-kashmir-pakistan_505751-5825.jpg?t=st=1777810381~exp=1777813981~hmac=b6def496c29df3f8ef0da8c1e9d8e97fe764378f3f46cddad872927310b243f0&w=2000" },
  { name: "Vardzia", image: "https://img.magnific.com/free-photo/festung-hohensalzburg-salzburg-austria_181624-18758.jpg?t=st=1777810251~exp=1777813851~hmac=31f72606db808c6b0e85e7d4c8e1ebeddb33f8d585707cb18fcf6339b5b94439&w=1480" },
];

export function DestinationsMarquee() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const repeatedDestinations = Array.from({ length: 2 }, () => destinations).flat();

  const renderItems = (rowOffset = 0) =>
    repeatedDestinations.map((dest, idx) => {
      const hoverKey = rowOffset + idx;

      return (
        <div
          key={`${rowOffset}-${idx}`}
          className="relative flex-shrink-0 w-48 h-40 md:w-96 md:h-72 rounded-xl overflow-hidden group cursor-pointer shadow-lg hover:shadow-2xl transition-shadow duration-300"
          onMouseEnter={() => setHoveredIndex(hoverKey)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <img
            src={dest.image}
            alt={dest.name}
            className="w-full h-full object-cover group-hover:scale-125 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-black/0 to-black/60" />
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-all duration-500" />
          {hoveredIndex === hoverKey && (
            <div className="absolute bottom-0 left-0 right-0 flex items-end justify-center p-6 animate-fadeIn">
              <div className="text-center">
                <h3 className="font-display text-xl font-medium tracking-tight text-white drop-shadow-lg md:text-4xl">{dest.name}</h3>
              </div>
            </div>
          )}
        </div>
      );
    });

  return (
    <section className="relative py-20 bg-background overflow-hidden">
      {/* Top Marquee - Left to Right */}
      <div className="mb-12">
        <div className="marquee-track animate-marquee">
          <div className="marquee-group">{renderItems(0)}</div>
          <div className="marquee-group" aria-hidden="true">{renderItems(100)}</div>
        </div>
      </div>

      {/* Bottom Marquee - Right to Left */}
      <div>
        <div className="marquee-track animate-marquee-reverse">
          <div className="marquee-group">{renderItems(200)}</div>
          <div className="marquee-group" aria-hidden="true">{renderItems(300)}</div>
        </div>
      </div>
    </section>
  );
}
