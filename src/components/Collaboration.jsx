'use client';
import React, { useState, useEffect } from 'react';
import { Users, Truck, ClipboardList, ClipboardCheck, ScrollText } from 'lucide-react';

// Main App component
const CollaborationSection = () => {
  // Data for the service items
  const services = [
    {
      number: 1,
      title: "Team Setup",
      description: "Assembling and training team as per your requirement along with dedicated project managers",
      icon: Users, // Lucide-react icon
      color: "border-orange-500" // Only border color here
    },
    {
      number: 2,
      title: "Timely Delivery",
      description: "Managing the delivery of content as per the schedule",
      icon: Truck, // Lucide-react icon
      color: "border-amber-500"
    },
    {
      number: 3,
      title: "Content Strategy",
      description: "Strategic content planning",
      icon: ClipboardList, // Lucide-react icon
      color: "border-green-500"
    },
    {
      number: 4,
      title: "Quality Assurance",
      description: "Quality checks at every corner",
      icon: ClipboardCheck, // Lucide-react icon
      color: "border-blue-500"
    },
    {
      number: 5,
      title: "Performance Reports",
      description: "Weekly reports with performance tracking and analysis.",
      icon: ScrollText, // Lucide-react icon
      color: "border-purple-500"
    },
  ];

  // State to track if the screen is large enough for staggering
  const [isLargeScreen, setIsLargeScreen] = useState(false);

  useEffect(() => {
    // Function to check screen size and update state
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth >= 1024); // Tailwind's 'lg' breakpoint
    };

    // Set initial state on component mount
    handleResize();

    // Add event listener for window resize
    window.addEventListener('resize', handleResize);

    // Clean up event listener on component unmount
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4 sm:p-6 lg:p-8 font-inter">
      {/* Increased max-w-7xl to give more horizontal space, and added more padding on large screens to the right section */}
      <div className="max-w-7xl w-full bg-white rounded-xl shadow-lg flex flex-col lg:flex-row overflow-hidden">
        {/* Left Section: Content Collaboration Text */}
        <div className="lg:w-1/2 p-8 sm:p-12 flex flex-col justify-center bg-white">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-800 mb-6 leading-tight">
            Content Collaboration, Redefined
          </h1>
          <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
            Turnkey content handle every aspect of your content creation. From assigning you a dedicated team of content creators, editors, and strategists to controlling a content management system, we'll give you a strategically sound roadmap of content. This means we'll have a strategic and a marketing plan of our very own that will help you achieve your goals.
          </p>
        </div>

        {/* Right Section: Services List */}
        {/* Added lg:pr-16 to give more space on the right for the stepping effect */}
        <div className="lg:w-1/2 p-8 sm:p-12 flex flex-col justify-center lg:pr-16 relative">
          {/* Removed the Diagonal Gray Strip div */}

          {services.map((service, index) => (
            <div
              key={service.number}
              className={`mb-8 last:mb-0 relative z-10`}
            >
              {/* This inner div gets the transform for the stepping effect */}
              <div
                className="flex items-start"
                // Apply translateX only if on a large screen
                // Using negative values to step "inwards" or to the left, which works better with container width
                style={{ transform: isLargeScreen ? `translateX(${-25 * index}px)` : 'none' }}
              >
                {/* Number Circle - Grey background, grey text, colored border */}
                <div className={`flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 rounded-full border-2 flex items-center justify-center font-bold text-lg sm:text-xl mr-4 ${service.color} bg-gray-200 text-gray-700`}>
                  {service.number}
                </div>
                {/* Service Details and Icon */}
                <div className="flex-grow flex items-center">
                  {/* Container for title and description */}
                  <div className="flex-grow">
                    <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-1">
                      {service.title}
                    </h3>
                    <p className="text-sm sm:text-base text-gray-600">
                      {service.description}
                    </p>
                  </div>
                  {/* Icon positioned right next to the text content, with a small margin */}
                  <div className="flex-shrink-0 ml-2">
                    <service.icon className={`w-8 h-8 sm:w-10 sm:h-10 ${service.color.replace('border-', 'text-')}`} />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CollaborationSection;