'use client';
import React, { useState, useEffect } from 'react';
import { Users, Truck, ClipboardList, ClipboardCheck, ScrollText } from 'lucide-react';

const CollaborationSection = () => {
  const services = [
    {
      number: 1,
      boldPart: "Assembling and training",
      normalPart: " team as per your requirement along with dedicated project managers",
      icon: Users,
      color: "orange-500",
    },
    {
      number: 2,
      boldPart: "Managing the delivery",
      normalPart: " of content as per the schedule",
      icon: Truck,
      color: "amber-500",
    },
    {
      number: 3,
      boldPart: "Strategic content planning",
      normalPart: "",
      icon: ClipboardList,
      color: "green-500",
    },
    {
      number: 4,
      boldPart: "Quality checks",
      normalPart: " at every corner",
      icon: ClipboardCheck,
      color: "blue-500",
    },
    {
      number: 5,
      boldPart: "Weekly reports",
      normalPart: " with performance tracking and analysis.",
      icon: ScrollText,
      color: "purple-500",
    },
  ];

  // Map each color key to valid Tailwind classes for text and border
  const colorClasses = {
    "orange-500": "text-orange-500 border-orange-500",
    "amber-500": "text-amber-500 border-amber-500",
    "green-500": "text-green-500 border-green-500",
    "blue-500": "text-blue-500 border-blue-500",
    "purple-500": "text-purple-500 border-purple-500",
  };

  const [isLargeScreen, setIsLargeScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth >= 1024);
    };

    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4 sm:p-6 lg:p-8 font-inter">
      <div className="max-w-7xl w-full bg-white rounded-xl shadow-lg flex flex-col lg:flex-row overflow-hidden">
        {/* Left Section */}
        <div className="lg:w-1/2 p-8 sm:p-12 flex flex-col justify-center bg-white">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-blue-600 mb-6 leading-tight">
            Content Collaboration, Redefined
          </h1>
          <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
            It means we handle every aspect of your content creation. From assembling a dedicated team of
            content creators, editors, and strategists to crafting compelling content harmonious with your
            platform. Creatify is your one-stop shop for content success. We'll be your strategic content
            outsourcing partner, working collaboratively towards your goals.
          </p>
        </div>

        {/* Right Section */}
        <div className="lg:w-1/2 p-8 sm:p-12 flex flex-col justify-center lg:pr-16 relative">
          {services.map((service, index) => {
            const classes = colorClasses[service.color] || "text-black border-black";

            return (
              <div key={service.number} className="mb-8 last:mb-0 relative z-10">
                <div
                  className="flex items-start"
                  style={{ transform: isLargeScreen ? `translateX(${-25 * index}px)` : "none" }}
                >
                  {/* Number Circle */}
                  <div
                    className={`flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 rounded-full border-4 flex items-center justify-center font-bold text-lg sm:text-xl mr-4 ${classes}`}
                    style={{ backgroundColor: "transparent" }}
                  >
                    {service.number}
                  </div>

                  {/* Service Details and Icon */}
                  <div className="flex-grow flex items-center">
                    <div className="flex-grow">
                      <p className="text-sm sm:text-base text-gray-600">
                        <span className="font-bold text-gray-700">{service.boldPart}</span>
                        {service.normalPart}
                      </p>
                    </div>
                    <div className={`flex-shrink-0 ml-2 ${classes}`}>
                      <service.icon className="w-8 h-8 sm:w-10 sm:h-10" />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CollaborationSection;
