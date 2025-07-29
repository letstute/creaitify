"use client";
import { images } from '@/constants/images'; // Import images
import React from 'react';

const ServiceCard = ({ service, className = '' }) => {
  const imageUrl = service.imageSrc || `https://placehold.co/400x232/A8DADC/2F4F4F?text=${encodeURIComponent(service.title)}`;
  return (
    <div
      className={`bg-[#454545] rounded-2xl p-4 flex flex-col items-start text-left ${className}`}
      style={{
        width: '100%',
        maxWidth: '320px',
        minWidth: '220px',
        margin: '0 auto',
        boxShadow: 'none',
      }}
    >
      <div
        className="mb-3 w-full"
        style={{
          height: '160px',
          background: '#374151',
          borderRadius: '8px',
          overflow: 'hidden',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <img
          src={imageUrl}
          alt={service.title}
          className="w-full h-full object-cover rounded-[8px]"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            borderRadius: '8px',
          }}
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = `https://placehold.co/150x100/cccccc/333333?text=Image+Error`;
          }}
        />
      </div>
      <h3 className="text-base font-semibold text-white mb-1">
        {service.title}
      </h3>
      <p className="text-gray-300 text-xs leading-normal">
        {service.description}
      </p>
    </div>
  );
};

export default function OurServices() {
  const services = [
    {
      title: "End-to-end eLearning Solutions",
      description: "Comprehensive eLearning solutions tailored to your business needs, from content creation to delivery and management.",
      imageSrc: images.EndToEndService,
    },
    {
      title: "Interactive eLearning Module Development",
      description: "Engaging modules that promote active learning through story-based learning, gamification, scenario-based learning, and branching simulations.",
      imageSrc: images.InteractiveModuleService,
    },
    {
      title: "2D & 3D Animations",
      description: "High-quality educational and explainer infographics, motion graphics, whiteboard animation, video lectures, and 2D/3D animation.",
      imageSrc: images.AnimationService,
    },
    {
      title: "AI Content Solutions",
      description: "Innovative content powered by artificial intelligence to produce hundreds of videos in a short duration of time.",
      imageSrc: images.AIContentService,
    },
    {
      title: "Instructional Designing & Graphic Designing Services",
      description: "Expert instructional and graphic design services to create visually compelling and effective learning materials.",
      imageSrc: images.InstructionalGraphicService,
    },
    {
      title: "Shoot & Postproduction",
      description: "Professional shoot and postproduction services including video editing, motion graphics, and audio refinement.",
      imageSrc: images.ShootPostProductionService,
    },
  ];

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
      <div className="container mx-auto px-2 max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center">
          Our services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
}