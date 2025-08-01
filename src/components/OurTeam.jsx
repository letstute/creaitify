"use client";
import { images } from '@/constants/images';
import React, { useState } from 'react';

export default function OurTeam() {
  const teamData = [
    { name: 'Mr. Shankar Vailaya', designation: 'Chairman', image: images.ShankarImage },
    { name: 'Mr. Dilip Haria', designation: 'Director', image: images.DilipImage },
    { name: 'Mr. Atul Doshi', designation: 'Co-founder & Director', image: images.AtulImage },
    { name: 'Mr. Praveen Ambardar', designation: 'MD & CEO', image: images.PravinImage },
    { name: 'Ms. Jyoti Bharti', designation: 'Lead - Content & Operations', image: images.jyoti },
    { name: 'Ms. Prachi Waje', designation: 'Lead - HR & Finance', image: images.prachi },
    { name: 'Mr. Farhan Nek', designation: 'Lead - Business Development', image: images.FarhanNek },
    { name: 'Mr. Aniket Bhasin', designation: 'Lead - AI & Brand Communication', image: images.AniketBhasin },
  ];

  const [activeIndex, setActiveIndex] = useState(Math.floor(teamData.length / 2));
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [startY, setStartY] = useState(0);
  const [dragDistance, setDragDistance] = useState(0);


  const goToPrevious = () => {
    setActiveIndex((prevIndex) => {
      const newIndex = prevIndex === 0 ? teamData.length - 1 : prevIndex - 1;
      return newIndex;
    });
  };

  const goToNext = () => {
    setActiveIndex((prevIndex) => {
      const newIndex = prevIndex === teamData.length - 1 ? 0 : prevIndex + 1;
      return newIndex;
    });
  };

  const handleMouseDown = (e) => {
    e.preventDefault();
    setIsDragging(true);
    setStartX(e.clientX);
    setDragDistance(0);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    setDragDistance(e.clientX - startX);
  };

  const handleTouchStart = (e) => {
    setIsDragging(true);
    setStartX(e.touches[0].clientX);
    setStartY(e.touches[0].clientY);
    setDragDistance(0);
  };

  const handleTouchMove = (e) => {
    if (!isDragging) return;
    const currentX = e.touches[0].clientX;
    const currentY = e.touches[0].clientY;
    const dx = currentX - startX;
    const dy = currentY - startY;
    if (Math.abs(dx) > Math.abs(dy)) {
      e.preventDefault();
    }
    setDragDistance(dx);
  };

  const handleDragEnd = () => {
    if (!isDragging) return;
    setIsDragging(false);
    const swipeThreshold = 50;

    if (dragDistance > swipeThreshold) {
      goToPrevious();
    } else if (dragDistance < -swipeThreshold) {
      goToNext();
    }
    setDragDistance(0);
  };

  return (
    <div className="bg-gray-100 flex flex-col items-center p-4 font-sans antialiased md:justify-center md:min-h-screen pt-16">
      <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6 md:mb-12 text-center">
        Our team
      </h1>

      <div
        className="relative w-full max-w-6xl overflow-hidden touch-action-pan-y mb-16"
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleDragEnd}
        onMouseLeave={handleDragEnd}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleDragEnd}
        onTouchCancel={handleDragEnd}
        style={{ cursor: isDragging ? 'grabbing' : 'grab', userSelect: 'none' }}
      >
        <div className="relative flex items-center justify-center h-[400px] md:h-[500px]">
          {teamData.map((member, index) => {
            const offset = index - activeIndex;
            const zIndex = 100 - Math.abs(offset);
            const opacity = 1 - Math.abs(offset) * 0.3;
            const scale = 1 - Math.abs(offset) * 0.1;
            const blur = Math.abs(offset) * 2;

            return (
              <div
                key={index}
                className="absolute transition-all duration-500 ease-in-out transform"
                style={{
                  left: `${50 + offset * 25}%`,
                  transform: `translateX(-50%) scale(${scale})`,
                  zIndex: zIndex,
                  opacity: opacity,
                  filter: `blur(${blur}px)`,
                  width: '350px',
                  height: '400px',
                  maxWidth: '350px',
                  maxHeight: '400px',
                }}
              >
                <div className="relative overflow-hidden w-full h-full rounded-xl">
                  <img
                    src={member.image}
                    alt={member.name || `Team member ${index + 1}`}
                    className="w-full h-full object-cover"
                    style={{ width: '350px', height: '400px', objectFit: 'cover' }}
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = `https://placehold.co/350x400/cccccc/333333?text=Image+Error`;
                    }}
                  />
                  <div className="absolute bottom-0 left-0 right-0 p-1 md:p-2 bg-gradient-to-t from-black via-black/70 to-transparent text-white">
                    <h3 className="text-sm md:text-lg font-semibold truncate">{member.name}</h3>
                    <p className="text-xs md:text-sm text-gray-300 truncate">{member.designation}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-30">
          {teamData.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === activeIndex ? 'bg-blue-600 w-5' : 'bg-gray-400'
              }`}
              aria-label={`Go to image ${index + 1}`}
            ></button>
          ))}
        </div>
      </div>

      <div className="mt-20 text-center">
        <a
          href="https://www.letstute.com/s/pages/letstute-team"
          target="_blank"
          rel="noopener noreferrer"
          className="px-8 py-3 bg-blue-600 text-white text-lg font-semibold rounded-lg shadow-md hover:bg-blue-700 transition-colors duration-300"
        >
          View More
        </a>
      </div>
    </div>
  );
}