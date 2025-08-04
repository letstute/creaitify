"use client";
import React from 'react';

// Updated sizes for larger images
const IMAGE_WIDTH = 320;
const IMAGE_HEIGHT = 180;

const getOptimizedImageUrl = (src, title) => {
  if (!src) {
    return `https://placehold.co/${IMAGE_WIDTH}x${IMAGE_HEIGHT}/A8DADC/2F4F4F?text=${encodeURIComponent(title)}`;
  }
  if (src.includes('placehold.co')) {
    // Adjust placeholder size URLs
    return src.replace(/200x120|150x100|400x232/g, `${IMAGE_WIDTH}x${IMAGE_HEIGHT}`);
  }
  return src;
};

const ServiceCard = React.memo(({ service, className = '' }) => {
  const imageUrl = getOptimizedImageUrl(service.imageSrc, service.title);
  return (
    <div
      className={`bg-[#454545] rounded-2xl p-6 flex flex-col items-start text-left w-[360px] min-w-[260px] mx-auto ${className}`}
      style={{ boxShadow: 'none' }}
    >
      <div
        className="mb-4 w-full h-[180px] bg-[#374151] rounded-lg overflow-hidden flex items-center justify-center"
      >
        <img
          src={imageUrl}
          alt={service.title}
          className="w-full h-full object-cover rounded-lg"
          width={IMAGE_WIDTH}
          height={IMAGE_HEIGHT}
          loading="lazy"
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = `https://placehold.co/${IMAGE_WIDTH}x${IMAGE_HEIGHT}/cccccc/333333?text=Image+Error`;
          }}
        />
      </div>
      <h3 className="text-lg md:text-xl font-semibold text-white mb-2">
        {service.title}
      </h3>
      <p className="text-gray-300 text-sm md:text-base leading-relaxed">
        {service.description}
      </p>
    </div>
  );
});

const services = [
  {
    title: "End-to-End eLearning Solutions",
    description: "Comprehensive eLearning solutions tailored to your business needs, from content creation to delivery and management.",
    imageSrc: "../assets/images/end-to-end-elearning.jpg",
  },
  {
    title: "Interactive eLearning Module Development",
    description: "Engaging modules that promote active learning through story-based learning, gamification, scenario-based learning, and branching simulations.",
    imageSrc: "../assets/images/interactive-elearning-module.jpg",
  },
  {
    title: "2D & 3D Animations",
    description: "High-quality educational and explainer infographics, motion graphics, whiteboard animation, video lectures, and 2D/3D animation.",
    imageSrc: "../assets/images/2d-3d-animations.jpg",
  },
  {
    title: "AI Content Solutions",
    description: "Innovative content powered by artificial intelligence to produce hundreds of videos in a short duration of time.",
    imageSrc: "../assets/images/ai-content-solutions.jpg",
  },
  {
    title: "Instructional Designing & Graphic Designing Services",
    description: "Expert instructional and graphic design services to create visually compelling and effective learning materials.",
    imageSrc: "../assets/images/instructional-graphic-design.jpg",
  },
  {
    title: "Shoot & Postproduction",
    description: "Professional shoot and postproduction services including video editing, motion graphics, and audio refinement.",
    imageSrc: "../assets/images/shoot-postproduction.jpg",
  },
];

export default function OurServices() {
  return (
    <section
      id="services-section"
      className="relative py-10 font-sans antialiased min-h-screen bg-[#454545]"
      style={{
        backfaceVisibility: 'hidden',
        WebkitBackfaceVisibility: 'hidden',
        WebkitTransform: 'translateZ(0)',
        transform: 'translateZ(0)',
      }}
    >
      <div className="container mx-auto px-2 max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-12 text-center">
          Our Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
}
