"use client";
import React, { useState, useEffect } from 'react';
import { images } from '@/constants/images';

// SVG Call Icon Component
const CallIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
  </svg>
);

export default function HeaderComponent() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id) => { // Special case for scrolling to top
    if (id === 'home-section' || id === 'top') { // Special case for scrolling to top
      window.scrollTo({ top: 0, behavior: 'smooth' });
      setIsMenuOpen(false);
    } else {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        setIsMenuOpen(false);
      }
    }
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) { // md breakpoint in Tailwind
        setIsMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <header className="bg-white shadow-md h-20 md:h-20 flex items-center px-4 md:px-8 sticky top-0 z-[150] font-sans">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <img
            src={images.logo} // Use the logo from constants
            alt="Company Logo"
            className="h-[120px] w-auto mr-3 border-none"
          />
        </div>

        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-md p-2"
            aria-label="Toggle navigation menu"
          >
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              )}
            </svg>
          </button>
        </div>

        <nav className={`md:flex md:items-center ${isMenuOpen ? 'block absolute top-full left-0 w-full bg-white shadow-lg py-4 md:relative md:shadow-none md:py-0' : 'hidden'} md:space-x-6 lg:space-x-8`}>
          <ul className="flex flex-col md:flex-row md:space-x-6 lg:space-x-8 space-y-4 md:space-y-0 text-base md:text-lg px-4 md:px-0">
            <li>
              <button onClick={() => scrollToSection('services-section')} className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-300 w-full text-left md:w-auto cursor-pointer">
                Our Services
              </button>
            </li>
            <li>
              <button onClick={() => scrollToSection('our-process-section')} className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-300 w-full text-left md:w-auto cursor-pointer">
                Our Process
              </button>
            </li>
            <li>
              <button onClick={() => scrollToSection('our-team-section')} className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-300 w-full text-left md:w-auto cursor-pointer">
                Our Team
              </button>
            </li>
          </ul>
          <div className="mt-4 md:hidden px-4 pb-2">
            <a
              href="https://calendly.com/aniket-bhasin/letstute-introduction-call"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full text-center bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-full transition-colors duration-300 shadow-lg"
            >
              Book a call
            </a>
          </div>
        </nav>

        <div className="hidden md:flex items-center">
          <a
            href="https://calendly.com/aniket-bhasin/letstute-introduction-call"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-5 rounded-full transition-colors duration-300 shadow-lg flex items-center text-sm"
          > {/* Replaced img with CallIcon, adjusted size slightly */}
            <CallIcon className="w-5 h-5 mr-2" /> {/* Replaced img with CallIcon, adjusted size slightly */}
            Book a call
          </a>
        </div>
      </div>
    </header>
  );
}
