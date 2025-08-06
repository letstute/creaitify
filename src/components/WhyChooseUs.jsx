"use client";
import React, { useMemo } from "react";
// Assuming images.js is in the same directory or adjust path as needed
import { images } from "@/constants/images";

const ReasonCard = ({
  title,
  description,
  imageSrc,
  index,
  bgColor,
  totalCards,
  baseScale,
}) => {
  const siteStickyHeaderHeight = 80; // <<<< ------ ADJUST THIS VALUE to your site's sticky header height in pixels
  const partiallyVisibleHeight = 30; // Height of the card sliver that remains visible when "stuck"
  const topOffset = siteStickyHeaderHeight + index * partiallyVisibleHeight;

  let scaleValue = 1.0;
  if (totalCards > 1) {
    // Scale progression: card 0 is baseScale, last card is 1.0
    scaleValue = baseScale + (index / (totalCards - 1)) * (1.0 - baseScale);
  }
  // Ensure scale is not less than baseScale and not more than 1.0, though formula should handle this.
  scaleValue = Math.min(1.0, Math.max(baseScale, scaleValue));

  // Convert title to Title Case
  const toTitleCase = (str) =>
    str.replace(/\w\S*/g, (txt) => txt.charAt(0).toUpperCase() + txt.slice(1).toLowerCase());

  return (
    <div
      className={`sticky rounded-2xl mx-auto overflow-hidden border border-gray-300 ${bgColor} mb-4 shadow-xl flex flex-col md:flex-row`} // mb-4 creates space between scaled cards
      style={{
        top: `${topOffset}px`,
        width: "min(100%, 950px)", // Increased card width
        zIndex: index + 1, // Card 0 gets z-index 1, card 1 gets 2, etc.
        transform: `scale(${scaleValue})`,
        transformOrigin: "center top",
      }}
    >
      {/* Left Content Area (Title & Description) - 60% width on md+ */}
      <div className="w-full md:w-[60%] flex flex-col">
        {/* Title Bar section (retains h-16 for sticky offset consistency) */}
        <div className="flex justify-start px-8 md:px-10 pt-5 md:pt-6 pb-2">
          {/* Title aligned left */}
          <h3 className="text-2xl md:text-3xl font-bold text-gray-800 text-left" title={title}>
            {toTitleCase(title)}
          </h3>
        </div>

        {/* Description section */}
        <div className="pt-4 md:pt-4 px-8 md:px-10 pb-6 md:pb-8 flex-grow">
          <p className="text-gray-700 leading-relaxed text-base md:text-lg text-left">
            {description}
          </p>
        </div>
      </div>

      {/* Right Image Area - 40% width on md+ */}
      <div className="w-full md:w-[40%] flex items-center justify-center md:p-0 md:min-h-[380px]">
        <img
          src={imageSrc}
          alt={title}
          className="w-full h-80 md:h-full object-cover"
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = `https://placehold.co/400x300/cccccc/333333?text=Image+Error`;
          }}
        />
      </div>
    </div>
  );
};

export default function WhyChooseUs() {
  const cardData = useMemo(
    () => [
      {
        id: 1,
        title: "Scalable & cost effective solutions",
        description:
          "Our content solutions are designed to adapt to your needs, whether you require a single module or a comprehensive e-learning curriculum. This scalability & cost effective solutions ensures we can support projects of any size.",
        imageSrc: images.ScalableImage,
      },
      {
        id: 2,
        title: "Timely delivery",
        description:
          "Our content solutions are designed to adapt to your needs, whether you require a single module or a comprehensive e-learning curriculum. This scalability & cost effective solutions ensures we can support projects of any size.",
        imageSrc: images.TimelyDeliveryImage,
      },
      {
        id: 3,
        title: "Consistent quality",
        description:
          "Our content solutions are designed to adapt to your needs, whether you require a single module or a comprehensive e-learning curriculum. This scalability & cost effective solutions ensures we can support projects of any size.",
        imageSrc: images.consistentImage,
      },
      {
        id: 4,
        title: "Innovative & engaging learning experiences",
        description:
          "Our content solutions are designed to adapt to your needs, whether you require a single module or a comprehensive e-learning curriculum. This scalability & cost effective solutions ensures we can support projects of any size.",
        imageSrc: images.InnovativeImage,
      },
    ],
    []
  );

  const lightCardBackgrounds = useMemo(
    () => [
      "bg-slate-100",
      "bg-rose-100",
      "bg-amber-100",
      "bg-teal-100",
      "bg-sky-100",
      "bg-indigo-100",
      "bg-pink-100",
      "bg-lime-100",
      "bg-violet-100",
      "bg-emerald-100",
      // Add more if you have more than 10 cards, or they will cycle
    ],
    []
  );

  const cardBaseScale = 0.85; // The smallest scale for the first card

  // Convert section title to Title Case
  const sectionTitle = "Why choose us?";
  const toTitleCase = (str) =>
    str.replace(/\w\S*/g, (txt) => txt.charAt(0).toUpperCase() + txt.slice(1).toLowerCase());

  return (
    <section
      className="relative py-16 font-sans antialiased min-h-screen"
    >
      {/* Video Background */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        src={images.WhychooseUsBGVideo}
      />
      {/* Content Wrapper (above video) */}
      <div className="relative z-10 container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-12 md:mb-16 text-center drop-shadow-lg">
          {toTitleCase(sectionTitle)}
        </h2>
        {/* Padding bottom provides space for last sticky card */}
        <div className="relative" style={{ paddingBottom: "290px" }}>
          {cardData.map((card, index) => (
            <ReasonCard
              key={card.id}
              {...card}
              index={index}
              bgColor={lightCardBackgrounds[index % lightCardBackgrounds.length]} // Assign background color
              totalCards={cardData.length}
              baseScale={cardBaseScale}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
