"use client";
import { images } from '@/constants/images'; // Import images
import React, { useState, useEffect, useRef } from 'react';

const ServiceCard = ({ service, className = '' }) => {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef(null);
  const placeholderSrc = "data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==";

  const imageUrl = service.imageSrc || `https://placehold.co/400x232/A8DADC/2F4F4F?text=${encodeURIComponent(service.title)}`;


  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        rootMargin: '0px 0px 100px 0px',
        threshold: 0.01
      }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }
    return () => {
      if (cardRef.current && observer) {
        observer.unobserve(cardRef.current);
        observer.disconnect();
      }
    };
  }, []);

  return (
    <div
      ref={cardRef}
      className={`bg-white rounded-2xl shadow-xl p-6 flex flex-col items-start text-left transition-transform duration-300 hover:scale-105 ${className}`}
    >
      <div className="mb-4 w-full h-[232px] flex items-center justify-center bg-gray-200 rounded-[10px] overflow-hidden">
        <img
          src={isVisible ? imageUrl : placeholderSrc}
          alt={service.title}
          className="w-full h-full object-cover rounded-[10px]" // Apply radius to image as well
          onError={(e) => {
            if (isVisible) { // Only attempt fallback if the actual image was supposed to load
              e.target.onerror = null;
              e.target.src = `https://placehold.co/150x100/cccccc/333333?text=Image+Error`; // Fallback image for sample too
            }
          }}
        />
      </div>
      <h3 className="text-xl font-semibold text-gray-800 mb-2">
        {service.title}
      </h3>
      <p className="text-gray-600 text-sm leading-relaxed">
        {service.description}
      </p>
    </div>
  );
};
export default function OurServices() {
  const services = [
    {
      title: "End-to-End Content Solutions",
      description: "Complete content development from TOC to delivery.",
      imageSrc: images.EndtoEndImage,
    },
    {
      title: "Video Development",
      description: "High-quality educational and explainer Infographics, Motion Graphics, Whiteboard Animation, Video Lectures and 2D Animation.",
      imageSrc: images.VideoDevelopmentImage,
    },
    {
      title: "Interactive e-learning Content",
      description: "Engaging modules that promote active learning through Story based learning, Gamification, Scenario based learning and Branching simulations.",
      imageSrc: images.InteractiveImage,
    },
    {
      title: "Translation and Localisation",
      description: "Learning and self-improvement should be accessible to everyone, regardless of language. By offering courses in multiple languages, you can reach a wider audience and break down language barriers.",
      imageSrc: images.TranslationServices,
    },
    {
      title: "Assessment development",
      description: "Customized evaluations to measure learning outcomes.",
      imageSrc: images.AssesmentImage,
    },
    {
      title: "AI-driver content creation",
      description: "Innovative content powered by artificial intelligence to produce hundreds of videos in a short duration of time.",
      imageSrc: images.aiservicesimage,
    },
    {
      title: "Voice over/Audio",
      description: "Distinctive voices elevate content engagement, fostering deeper understanding and lasting retention.",
      imageSrc: images.VoicoverImage,
    },
  ];

  return (
    <section
      id="services-section" // Added relative and min-h-screen, removed bg-gray-100
      className="relative py-16 font-sans antialiased min-h-screen" // Added relative and min-h-screen, removed bg-gray-100
      style={{
        backgroundImage: `url('/assets/images/services-background.jpg')`,
        backgroundSize: '65% 65%', // Changed to make the background image smaller
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="container mx-auto px-4 max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-12 text-center">
          Our services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-8">

          <div className="lg:col-span-3 flex flex-col md:flex-row justify-center gap-8">
            {services.slice(0, 2).map((service, index) => (
              <ServiceCard key={index} service={service} className="w-full md:w-full lg:w-1/2" />
            ))}
          </div>

          {services.slice(2, 5).map((service, index) => (
            <ServiceCard key={index + 2} service={service} className="w-full md:w-full" />
          ))}

          <div className="lg:col-span-3 flex flex-col md:flex-row justify-center gap-8">
            {services.slice(5, 7).map((service, index) => (
              <ServiceCard key={index + 5} service={service} className="w-full md:w-full lg:w-1/2" />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}