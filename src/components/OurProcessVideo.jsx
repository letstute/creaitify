'use client';
import React, { useRef, useEffect, useState } from 'react';
import { images } from '@/constants/images'; // Import images

// Define the ImageGallery component
// It accepts a 'images' prop, which should be an array of image URLs.
const OurProcessVideo = ({ images: propImages }) => {
  // Default images to display if none are provided or if the array is empty.
  // This ensures the component has something to render for demonstration purposes.
  const defaultImages = [
    images.OurProcessimage1,
    images.OurProcessimage2,
    images.OurProcessimage3,
    images.OurProcessimage4,
    images.OurProcessimage5,
    images.OurProcessimage6,
    images.OurProcessimage7,
    images.OurProcessimage8,
  ];

  // Use the provided images or the default images if the provided array is not valid or empty.
  const imagesToDisplay = Array.isArray(propImages) && propImages.length > 0 ? propImages : defaultImages;

  const containerRef = useRef(null);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight || document.documentElement.clientHeight;
      // Trigger animation only when top of container is in viewport
      if (!animate && rect.top < windowHeight && rect.bottom > 0) {
        setAnimate(true);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    // Only check on scroll, not on mount, so animation doesn't run until scrolled to
    return () => window.removeEventListener('scroll', handleScroll);
  }, [animate]);

  return (
    <section className="bg-white py-16 font-sans antialiased">
      <div id="our-process-section" className="container mx-auto px-4" ref={containerRef}>
        <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-12 text-center">
          Our Process
        </h2>
        <div className="flex flex-wrap justify-center items-center gap-4">
          {imagesToDisplay.map((imageUrl, index) => (
            <div
              key={index}
              // --- MODIFIED CLASSES FOR RESPONSIVENESS ---
              // Default (mobile): 2 images per row (50% width minus half of the gap)
              // sm: (small screens): 3 images per row (33.333% width minus 2/3 of the gap)
              // md: (medium screens): 4 images per row (25% width minus 3/4 of the gap) - remains same
              // lg: (large screens): 8 images per row (12.5% width minus 7/8 of the gap) - remains same
              className="w-[calc(50%-0.5rem)] sm:w-[calc(33.333%-0.6666rem)] md:w-[calc(25%-0.75rem)] lg:w-[calc(12.5%-0.875rem)] flex-shrink-0 flex-grow-0 h-72 overflow-hidden rounded-lg bg-white flex items-center justify-center group"
              style={{
                opacity: animate ? 1 : 0,
                transform: animate ? 'translateY(0)' : 'translateY(40px)',
                transition: 'opacity 0.7s ease, transform 0.7s ease',
                transitionDelay: animate ? `${index * 0.2}s` : '0s',
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