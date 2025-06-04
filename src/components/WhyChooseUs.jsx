"use client";
import React, { useMemo } from 'react';
// Assuming images.js is in the same directory or adjust path as needed
import { images } from '@/constants/images';

const ReasonCard = ({
  title,
  description,
  imageSrc,
  index,
}) => {
  const siteStickyHeaderHeight = 80; // <<<< ------ ADJUST THIS VALUE to your site's sticky header height in pixels
  const titleBarHeight = 64; // Corresponds to h-16 in Tailwind (4rem = 64px)
  const topOffset = siteStickyHeaderHeight + (index * titleBarHeight);

  return (
    <div className={`sticky rounded-2xl mx-auto overflow-hidden border border-gray-300 bg-white mb-4 shadow-[10px_0_15px_-3px_rgba(147,197,253,0.5),_-10px_0_15px_-3px_rgba(147,197,253,0.5)]`}
      style={{
        top: `${topOffset}px`,
        width: 'min(100%, 550px)',
      }}
    >
      {/* Corrected title bar div */}
      <div className={`h-16 flex items-center justify-center px-6 bg-gray-50 border-b border-gray-200`}>
        <h3 className="text-xl md:text-2xl font-bold text-gray-800 truncate text-center" title={title}>{title}</h3>
      </div> {/* This closes the title bar div */}

      <div className={`p-6 md:p-8 flex flex-col items-center text-center`}>
        <div className="w-full max-w-sm mb-6">
          <img

            src={imageSrc}
            alt={title}
            className="w-full h-60 object-cover rounded-lg shadow-md" // Fixed height for image, object-cover
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = `https://placehold.co/600x400/cccccc/333333?text=Image+Error`;
            }}
          />
        </div>
        <div className="w-full">
          <p className="text-gray-700 leading-relaxed text-sm md:text-base">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default function WhyChooseUs() {
  const cardData = useMemo(() => [
    {
      id: 1,
      title: "Scalable & cost effective solutions",
      description: "Our content solutions are designed to adapt to your needs, whether you require a single module or a comprehensive e-learning curriculum. This scalability & cost effective solutions ensures we can support projects of any size.",
      imageSrc: images.ScalableImage
    },
    {
      id: 2,
      title: "Timely delivery",
      description: "Our content solutions are designed to adapt to your needs, whether you require a single module or a comprehensive e-learning curriculum. This scalability & cost effective solutions ensures we can support projects of any size.",
      imageSrc: images.TimelyDeliveryImage
    },
    {
      id: 3,
      title: "Consistent quality",
      description: "Our content solutions are designed to adapt to your needs, whether you require a single module or a comprehensive e-learning curriculum. This scalability & cost effective solutions ensures we can support projects of any size.",
      imageSrc: images.consistentImage
    },
    {
      id: 4,
      title: "Innovative & engaging learning experiences",
      description: "Our content solutions are designed to adapt to your needs, whether you require a single module or a comprehensive e-learning curriculum. This scalability & cost effective solutions ensures we can support projects of any size.",
      imageSrc: images.InnovativeImage
    }
  ], []); // Empty dependency array means this runs once

  return (
    <section className="relative py-16 font-sans antialiased min-h-screen"
      style={{
        backgroundImage: `url(${images.WhyChooseUsBgImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed',
      }}
    >
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-12 md:mb-16 text-center drop-shadow-lg">
          Why choose us?
        </h2>
        <div className="relative" style={{ paddingBottom: '100px' }}> {/* Reduced paddingBottom */}
          {cardData.map((card, index) => (
            <ReasonCard
              key={card.id}
              {...card}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}