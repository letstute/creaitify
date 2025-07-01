"use client";

import { images } from '@/constants/images';

export default function BrandsNow() {
  const clientLogos = [
    { name: "Client 1", src: images.clientOne },
    { name: "Client 2", src: images.clientTwo },
    { name: "Client 3", src: images.clientThree },
    { name: "Client 4", src: images.clientFour },
    { name: "Client 5", src: images.clientFive },
    { name: "Client 6", src: images.clientSix },
    { name: "Client 7", src: images.clientSeven },
    { name: "Client 8", src: images.clientEight },
    { name: "Client 9", src: images.clientNine },
    { name: "Client 10", src: images.clientTen },
    { name: "Client 11", src: images.clientEleven },
    { name: "Client 12", src: images.clientTwelve },
  ];

  // Duplicate logos for a seamless loop
  const duplicatedLogos = [...clientLogos, ...clientLogos];

  return (
    <>
      <style jsx>{`
        @keyframes infinite-scroll {
          from { transform: translateX(0); }
          to { transform: translateX(-100%); }
        }
        .animate-infinite-scroll {
          animation: infinite-scroll 40s linear infinite;
        }
        .scroller:hover .animate-infinite-scroll {
          animation-play-state: paused;
        }
      `}</style>
      <section id="our-work-section" className="py-16 bg-white font-sans antialiased">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-12 text-center uppercase tracking-wide">
            Empowered brands for over 11 years now
          </h2>
          <div
            className="scroller w-full overflow-hidden"
            style={{
              maskImage: 'linear-gradient(to right, transparent, black 20%, black 80%, transparent)',
              WebkitMaskImage: 'linear-gradient(to right, transparent, black 20%, black 80%, transparent)',
            }}
          >
            <div className="animate-infinite-scroll flex w-max">
              {duplicatedLogos.map((logo, index) => (
                <div key={index} className="flex-shrink-0 mx-8">
                  <img
                    src={logo.src}
                    alt={logo.name}
                    className="h-16 object-contain"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = `https://placehold.co/120x60/cccccc/333333?text=Logo`;
                    }}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
