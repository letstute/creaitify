"use client";
import React, { useState, useEffect, useRef } from 'react'; // Import useRef
import { images } from '@/constants/images'; // Import images from constants

// You can replace these with your own image URLs
const slides = [
  {
    url: images.ShankarImage,
    title: 'Shankar Vailaya',
    name: 'Shankar Vailaya',
    subtitle: 'Chairman & Director',
    description: 'Shankar Vailaya brings extensive leadership and strategic vision to the team, guiding the company towards its long-term goals.'
  },
  {
    url: images.AtulImage,
    title: 'Atul Doshi',
    name: 'Atul Doshi',
    subtitle: 'Co-Founder & Director',
    description: 'As a co-founder, Atul Doshi is instrumental in shaping the company\'s core values and driving its innovative approach to e-learning.'
  },
  {
    url: images.DilipImage,
    title: 'Dilip Haria',
    name: 'Dilip Haria',
    subtitle: 'Director',
    description: 'Dilip Haria provides invaluable guidance and expertise, contributing significantly to the company\'s operational excellence and growth.'
  },
  {
    url: images.PravinImage,
    title: 'Praveen Ambardar',
    name: 'Praveen Ambardar',
    subtitle: 'CEO',
    description: 'Praveen Ambardar leads the team with a clear vision, fostering a culture of innovation and dedication to delivering top-tier content solutions.'
  },
  {
    url: images.jyoti,
    title: 'Jyoti Bharti',
    name: 'Jyoti Bharti',
    subtitle: 'Content Creation & Outsourcing Alliance Head',
    description: 'Jyoti Bharti oversees all aspects of content creation and strategic outsourcing alliances, ensuring high-quality and efficient delivery.'
  },
    {
    url: images.prachi,
    title: 'Prachi Waje',
    name: 'Prachi Waje',
    subtitle: 'HR & Finance Head',
    description: 'Prachi Waje manages human resources and financial operations, ensuring the smooth and sustainable growth of the organization.'
  },
  {
    url: 'https://via.placeholder.com/400x400?text=Team+Member+7',
    title: 'Placeholder Image 7',
    name: 'Team Member 7',
    subtitle: 'Role 7', // Added subtitle field
    description: 'Description for Team Member 7.'
  }
];

const ChevronLeftIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
  </svg>
);

const ChevronRightIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
  </svg>
);

// LinkedIn Icon SVG component
const LinkedInIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
  </svg>
);

export default function App() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const enlargedImageRef = useRef(null); // Ref for the enlarged image
  const mainContainerRef = useRef(null); // Ref for the main container
  const [textPosition, setTextPosition] = useState({ top: 0, left: 0, visible: false }); // State for absolute text position
  const [isMobileView, setIsMobileView] = useState(false); // State to track mobile view

  // Function to go to the previous slide (now moves backward, new image from left)
  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1; // Decrement index
    setCurrentIndex(newIndex);
  };

  // Function to go to the next slide (now moves forward, new image from right)
  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1; // Increment index
    setCurrentIndex(newIndex);
  };

  // Function to go to a specific slide using the dots or by clicking an image
  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  // Auto-play functionality
  useEffect(() => {
    const interval = setInterval(() => {
        nextSlide(); // Auto-play now triggers "right to left" movement
    }, 5000); // Change slide every 5 seconds
    return () => clearInterval(interval); // Cleanup on component unmount
  }, [currentIndex]);

  // Effect to detect mobile view
  useEffect(() => {
    const checkMobileView = () => {
      setIsMobileView(window.innerWidth < 768); // Tailwind's 'md' breakpoint is 768px
    };
    checkMobileView(); // Initial check
    window.addEventListener('resize', checkMobileView);
    return () => window.removeEventListener('resize', checkMobileView);
  }, []);

  // Define how many slides to show before and after the current one
  const slidesBeforeCurrent = 1; // Show 1 slide before the current one
  const slidesAfterCurrent = isMobileView ? 1 : 3; // On mobile show 1 after, on desktop show 3

  // Memoize visibleSlides to prevent re-calculation on every render unless currentIndex changes
  const visibleSlides = React.useMemo(() => {
    const newVisibleSlides = [];
    // Ensure there are enough slides to display
    if (slides.length === 0) return []; // Early return for empty slides

    // Loop from slides before to slides after the current index
    for (let i = -slidesBeforeCurrent; i <= slidesAfterCurrent; i++) {
        // Calculate the index, wrapping around the array if necessary
        const slideIndex = (currentIndex + i + slides.length) % slides.length;
        newVisibleSlides.push({ ...slides[slideIndex], originalIndex: slideIndex });
    }
    return newVisibleSlides;
  }, [currentIndex, isMobileView, slidesAfterCurrent]); // Re-calculate when view or index changes

  // Effect to update text position when enlarged image position changes
  useEffect(() => {
    const updatePosition = () => {
      if (isMobileView) {
        // For mobile, text is part of normal flow, not absolutely positioned by this logic.
        // Ensure desktop-specific visibility is false.
        setTextPosition(prev => ({ ...prev, visible: false }));
        return;
      }
      if (enlargedImageRef.current && mainContainerRef.current) {
        const imgRect = enlargedImageRef.current.getBoundingClientRect();
        const containerRect = mainContainerRef.current.getBoundingClientRect();

        const topRelativeToContainer = 24; // Shift down by 24px (1.5rem) on desktop
        const leftRelativeToContainer = imgRect.right - containerRect.left + 20; // 20px margin
        // Use functional update and check if position actually changed
        setTextPosition(prevPosition => {
          if (
            prevPosition.top !== topRelativeToContainer ||
            prevPosition.left !== leftRelativeToContainer ||
            !prevPosition.visible
          ) {
            return {
              top: topRelativeToContainer,
              left: leftRelativeToContainer,
              visible: true
            };
          }
          return prevPosition; // No change, return previous state
        });
      } else {
        setTextPosition(prevPosition => {
          if (prevPosition.visible) { // Only update if it was visible
            return { top: 0, left: 0, visible: false };
          }
          return prevPosition; // No change
        });
      }
    };

    // Update position immediately on mount, slide change, or mobile view change
    updatePosition();

    // Add listeners for immediate updates on resize/scroll
    const handleResizeOrScroll = () => updatePosition();
    window.addEventListener('resize', handleResizeOrScroll);
    window.addEventListener('scroll', handleResizeOrScroll);

    return () => {
      window.removeEventListener('resize', handleResizeOrScroll);
      window.removeEventListener('scroll', handleResizeOrScroll);
    };
  }, [currentIndex, isMobileView, mainContainerRef, enlargedImageRef]); // Dependencies

  return (
    <div
      ref={mainContainerRef} // Assign ref to the main container
      className="max-w-[1600px] w-full m-auto py-8 px-4 relative group font-sans bg-white text-gray-900 flex flex-col justify-center items-center rounded-lg overflow-hidden">

      {/* Text container: Behaves differently on mobile vs desktop */}
      {slides[currentIndex] && (
        <div
          className={`
            flex flex-col justify-start text-left p-4 rounded-lg bg-white text-gray-900
            ${isMobileView
              ? 'relative w-full max-w-md mx-auto mb-6 order-1'
              : 'absolute max-w-md z-10 order-none transition-all duration-300 ease-linear' // Changed to ease-linear for text
            }
          `}
          style={
            isMobileView
              ? {}
              : { top: textPosition.top, left: textPosition.left, visibility: textPosition.visible ? 'visible' : 'hidden' }
          }
        >
          {/* Container for Counter and Arrows - now above the title */}
          <div className="flex items-center mb-3 w-full"> {/* Removed justify-between */}
            {/* Slide Counter */}
            <span className="text-lg font-bold text-gray-800 mr-3"> {/* Increased size and weight, darker color */}
              #{currentIndex + 1}/{slides.length}
            </span>
            {/* Navigation Arrows */}
            <span className="flex items-center space-x-2">
              <ChevronLeftIcon onClick={prevSlide} className="w-8 h-8 cursor-pointer text-blue-600 hover:text-blue-800 transition-colors" />
              <ChevronRightIcon onClick={nextSlide} className="w-8 h-8 cursor-pointer text-blue-600 hover:text-blue-800 transition-colors" />
            </span>
          </div>
          <h3 className="text-3xl font-bold mb-2">{slides[currentIndex].name}</h3>
          {/* Subtitle placeholder - update slides array to include subtitle data */}
          <p className="text-md text-gray-600 mb-4">{slides[currentIndex].subtitle}</p>
          <p className="text-lg mb-4">{slides[currentIndex].description}</p>
          {/* LinkedIn Icon */}
          <a href="#" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-600 transition-colors">
            <LinkedInIcon className="w-8 h-8" />
          </a>
        </div>
      )}

      {/* Image Slider Container - all images are here, including the enlarged one */}
      <div className={`
        w-full flex justify-center items-end py-4 relative
        ${isMobileView ? 'order-2 h-[320px]' : 'order-none h-[440px]'} // Added fixed height, removed flex-grow
      `}>
          {visibleSlides.map((slide, index) => {
              // The main slide is the one at the `slidesBeforeCurrent` position in our visible array.
              const isEnlargedSlide = index === slidesBeforeCurrent;

              // Define image sizes based on view
              const enlargedWidth = isMobileView ? '280px' : '400px';
              const enlargedHeight = isMobileView ? '280px' : '400px';
              const smallWidth = isMobileView ? '100px' : '150px';
              const smallHeight = isMobileView ? '100px' : '150px';

              // Render images directly in the slider flow
              return (
                  <div
                      key={slide.originalIndex}
                      ref={isEnlargedSlide ? enlargedImageRef : null}
                      className="rounded-2xl bg-center bg-cover bg-no-repeat cursor-pointer shadow-lg transition-all duration-300 ease-linear flex-shrink-0 mx-2" // Added bg-no-repeat
                      style={{
                          backgroundImage: `url(${slide.url})`,
                          width: isEnlargedSlide ? enlargedWidth : smallWidth,
                          height: isEnlargedSlide ? enlargedHeight : smallHeight,
                          border: isEnlargedSlide ? '4px solid #3b82f6' : '4px solid transparent', // Highlight for enlarged
                          objectFit: 'cover'
                      }}
                      onClick={() => goToSlide(slide.originalIndex)}
                  ></div>
              );
          })}
        </div>
    </div>
  );
}
