"use client";
import React, { useMemo } from 'react';
import { images } from '@/constants/images';

const ReasonCard = React.memo(({
  title,
  description,
  imageSrc,
  index,
  bgColor,
  totalCards,
  baseScale,
}) => {
  const siteStickyHeaderHeight = 80; // Adjust sticky header height if needed
  const partiallyVisibleHeight = 25; // Slightly reduced to alleviate layout thrashing
  const topOffset = siteStickyHeaderHeight + (index * partiallyVisibleHeight);

  let scaleValue = 1.0;
  if (totalCards > 1) {
    scaleValue = baseScale + (index / (totalCards - 1)) * (1.0 - baseScale);
  }
  scaleValue = Math.min(1.0, Math.max(baseScale, scaleValue));

  const toTitleCase = (str) =>
    str.replace(/\w\S*/g, (txt) => txt.charAt(0).toUpperCase() + txt.slice(1).toLowerCase());

  return (
    <div
      className={`sticky rounded-2xl mx-auto overflow-hidden border border-gray-300 ${bgColor} mb-3 shadow-xl flex flex-col md:flex-row will-change-transform`}
      style={{
        top: `${topOffset}px`,
        width: 'min(100%, 950px)',
        zIndex: index + 1,
        transform: `scale(${scaleValue})`,
        transformOrigin: 'center top',
      }}
    >
      <div className="w-full md:w-[60%] flex flex-col">
        <div className="flex justify-start px-8 md:px-10 pt-5 md:pt-6 pb-2">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-800 text-left" title={title}>
            {toTitleCase(title)}
          </h3>
        </div>
        <div className="pt-4 md:pt-4 px-8 md:px-10 pb-6 md:pb-8 flex-grow">
          <p className="text-gray-700 leading-relaxed text-base md:text-lg text-left">
            {description}
          </p>
        </div>
      </div>

      <div className="w-full md:w-[40%] flex items-center justify-center md:p-0 md:min-h-[380px]">
        <img
          src={imageSrc}
          alt={title}
          className="w-full h-80 md:h-full object-cover"
          loading="lazy"
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = 'https://placehold.co/400x300/cccccc/333333?text=Image+Error';
          }}
        />
      </div>
    </div>
  );
});

export default function WhyChooseUs() {
  const cardData = useMemo(() => [
    {
      id: 1,
      title: "Scalable & Cost-Effective Solutions",
      description: "Our content solutions are designed to adapt to your needs, whether you require a single module or a comprehensive e-learning curriculum. This scalability ensures we can support projects of any size. We offer high-quality content at pocket-friendly prices, ensuring you receive excellent value for your investment.",
      imageSrc: images.ScalableImage,
    },
    {
      id: 2,
      title: "Timely Delivery",
      description: "Through strategic resource planning and dedicated project managers, we guarantee on-time delivery of all projects.",
      imageSrc: images.TimelyDeliveryImage,
    },
    {
      id: 3,
      title: "Consistent Quality",
      description: "We maintain consistent quality across all content we produce, ensuring a high standard of learning materials.",
      imageSrc: images.consistentImage,
    },
    {
      id: 4,
      title: "Innovative & Engaging Learning Formats",
      description: "We utilize the latest software, cutting-edge technology, and creative design to develop interactive and immersive learning experiences that captivate your audience.",
      imageSrc: images.InnovativeImage,
    },
  ], []);

  const lightCardBackgrounds = useMemo(() => [
    'bg-slate-100',
    'bg-rose-100',
    'bg-amber-100',
    'bg-teal-100',
  ], []);

  const cardBaseScale = 0.87; // Slightly larger base scale to reduce sharp scaling jump

  const sectionTitle = "Why choose us?";
  const toTitleCase = (str) =>
    str.replace(/\w\S*/g, (txt) => txt.charAt(0).toUpperCase() + txt.slice(1).toLowerCase());

  return (
    <section
      className="relative py-16 font-sans antialiased min-h-screen"
      style={{
        backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.85), rgba(255, 255, 255, 0.85)), url(${images.WhychooseUsBGVideo})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'scroll',
        willChange: 'background-position',
        backfaceVisibility: 'hidden',
        WebkitBackfaceVisibility: 'hidden',
        WebkitTransform: 'translateZ(0)',
        transform: 'translateZ(0)',
      }}
    >
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-12 md:mb-16 text-center drop-shadow-lg">
          {toTitleCase(sectionTitle)}
        </h2>
        <div className="relative" style={{ paddingBottom: '270px' }}>
          {cardData.map((card, index) => (
            <ReasonCard
              key={card.id}
              {...card}
              index={index}
              bgColor={lightCardBackgrounds[index % lightCardBackgrounds.length]}
              totalCards={cardData.length}
              baseScale={cardBaseScale}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
