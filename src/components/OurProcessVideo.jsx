'use client';
import React, { useRef, useEffect, useState } from 'react';
import { images } from '@/constants/images'; // Adjust import as needed

const OurProcessVideo = ({ images: propImages }) => {
  const defaultImages = [
    images.OurProcessimage1,
    images.OurProcessimage2,
    images.OurProcessimage3,
    images.OurProcessimage4,
    images.OurProcessimage5,
    images.OurProcessimage6,
  ];

  // Use provided propImages or default set (limit to 6)
  const imagesToDisplay =
    Array.isArray(propImages) && propImages.length > 0 ? propImages.slice(0, 6) : defaultImages;

  const containerRef = useRef(null);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight || document.documentElement.clientHeight;
      if (!animate && rect.top < windowHeight && rect.bottom > 0) {
        setAnimate(true);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [animate]);

  return (
    <section className="bg-white py-16 font-sans antialiased">
      <div id="our-process-section" className="mx-auto px-4 max-w-screen-xl" ref={containerRef}>
        <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-12 text-center">
          Our Process
        </h2>
        <div
          className="
            flex
            flex-col           /* Stack vertically on mobile */
            md:flex-row        /* Row on md+ screens */
            gap-4
            justify-start
            items-center
            overflow-x-auto
            no-scrollbar
          "
          style={{
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
            width: '100%',
          }}
        >
          {imagesToDisplay.map((imageUrl, index) => (
            <div
              key={index}
              className="
                w-full          /* Full width on mobile, overridden on md+ */
                md:w-[15.6%]    /* ~1/6 of row width on desktop */
                flex-shrink-0
                rounded-lg
                bg-white
                overflow-hidden
                flex
                items-center
                justify-center
                group
              "
              style={{
                opacity: animate ? 1 : 0,
                transform: animate ? 'translateX(0)' : 'translateX(-40px)',
                transition: 'opacity 0.7s ease, transform 0.7s ease',
                transitionDelay: animate ? `${index * 0.3}s` : '0s',
                /* No fixed height here */
              }}
            >
              <img
                src={imageUrl}
                alt={`Gallery Image ${index + 1}`}
                className="w-full h-auto max-h-72 object-contain rounded-lg transition-transform duration-300 group-hover:scale-105"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = `https://placehold.co/600x400/CCCCCC/000000?text=Error+Loading+Image+${index + 1}`;
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurProcessVideo;
