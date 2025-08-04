'use client';
import React, { useRef, useEffect, useState } from 'react';
import { images } from '@/constants/images'; // Import your image objects

const OurProcessVideo = ({ images: propImages }) => {
  const defaultImages = [
    images.OurProcessimage1,
    images.OurProcessimage2,
    images.OurProcessimage3,
    images.OurProcessimage4,
    images.OurProcessimage5,
    images.OurProcessimage6,
  ];

  // Use prop images or the first 6 from defaults
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
      <div
        id="our-process-section"
        className="mx-auto px-4 max-w-screen-xl"
        ref={containerRef}
      >
        <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-12 text-center">Our Process</h2>
        <div
          className="flex gap-4 justify-start items-center overflow-x-auto no-scrollbar"
          style={{
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
          }}
        >
          {imagesToDisplay.map((imageUrl, index) => (
            <div
              key={index}
              className="flex-shrink-0 h-72 rounded-lg bg-white overflow-hidden flex items-center justify-center group"
              style={{
                width: '15.6%',
                opacity: animate ? 1 : 0,
                transform: animate ? 'translateX(0)' : 'translateX(-40px)',
                transition: 'opacity 0.7s ease, transform 0.7s ease',
                transitionDelay: animate ? `${index * 0.3}s` : '0s',
              }}
            >
              <img
                src={imageUrl}
                alt={`Gallery Image ${index + 1}`}
                className="w-full h-full object-cover rounded-lg transition-transform duration-300 group-hover:scale-105"
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
