'use client';
import { images } from '@/constants/images'; // Import images
import React, { useState, useEffect } from 'react';

const VisionariesSectionComponent = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  const visionaries = [
    {
      name: 'Shankar Vailaya',
      title: 'Chairman & Director',
      image: images.ShankarImage,
    },
    {
      name: 'Atul Doshi',
      title: 'Co-Founder & Director',
      image: images.AtulImage,
    
    },
    {
      name: 'Dilip Haria',
      title: 'Director',
      image: images.DilipImage,

    },
    {
      name: 'Praveen Ambardar',
      title: 'CEO',
      image: images.PravinImage,
    },
    {
      name: 'Jyoti Bharti',
      title: 'Content Creation & Outsourcing Alliance Head',
      image: images.jyoti,
    },
    {
      name: 'Prachi Waje',
      title: 'HR & Finance Head',
      image: images.prachi,
    },
  ];

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 768); // Tailwind's md breakpoint
    };
    checkIsMobile(); // Initial check
    window.addEventListener('resize', checkIsMobile);
    return () => {
      window.removeEventListener('resize', checkIsMobile);
    };
  }, []);


  return ( // White background applied here
    <section className="py-16 bg-white font-sans"> {/* White background applied here */}
      <style jsx>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }

        .hide-scrollbar {
          -ms-overflow-style: none;  /* IE and Edge */
          scrollbar-width: none;  /* Firefox */
        }
      `}</style>

      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
          Meet the visionaries behind our success
        </h2>

        <div className="flex flex-nowrap overflow-x-auto justify-start lg:justify-center gap-x-4 pb-4 hide-scrollbar">
          {visionaries.map((visionary, index) => {
            const isActive = activeIndex === index;
            let activeCardWidthClass = 'w-[432px] max-w-[390px]';
            let inactiveCardWidthClass = 'w-[150px]';
            if (isMobile) {
              activeCardWidthClass = 'w-[80vw] max-w-[300px]'; // Mobile active width, allows peeking
              inactiveCardWidthClass = 'w-[100px]'; // Mobile inactive width
            }

            return (
            <div
              key={index}
              className={`relative overflow-hidden cursor-pointer transition-all duration-500 ease-in-out h-[571px] rounded-[20px]
                ${isActive ? activeCardWidthClass : inactiveCardWidthClass}
                flex-shrink-0`}
              onClick={() => setActiveIndex(index)} // Click to enlarge on all devices
              onMouseEnter={() => {
                if (!isMobile) {
                  setActiveIndex(index);
                }
              }}
            >
              <img
                src={visionary.image}
                alt={visionary.name}
                className="w-full h-full object-cover"
                onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/300x400/cccccc/333333?text=User"; }}
              />

              {isActive && (
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black to-transparent p-4 text-white">
                  <p className="text-xl font-semibold">{visionary.name}</p>
                  <p className="text-sm">{visionary.title}</p>
                  {visionary.credit && (
                    <p className="text-xs mt-2">iStock Credit: {visionary.credit}</p>
                  )}
                </div>
              )}
              {/* Show name on hover for inactive cards */}
              {!isActive && ( // Show name on hover for inactive cards
                <div className="absolute inset-0 bg-black bg-opacity-30 flex items-end p-4 text-white opacity-0 hover:opacity-70 transition-opacity duration-300">
                   <p className="text-lg font-semibold">{visionary.name}</p>
                </div>
              )}
            </div>
          );
        })}
        </div>
      </div>
    </section>
  );
};

export default VisionariesSectionComponent;
