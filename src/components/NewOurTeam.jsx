"use client";
import React, { useState, useEffect, useLayoutEffect, useRef } from 'react'; // Import useRef
import { images } from '@/constants/images'; // Import images from constants

// You can replace these with your own image URLs
const slides = [
  {
    url: images.ShankarImage,
    name: 'Mr. Shankar Vailaya',
    subtitle: 'Chairman',
    description: 'With decades of leadership experience, Mr. Vailaya oversees strategic direction and governance, ensuring the organisation’s vision aligns with long-term growth and sustainable business practices.',
    linkedin: 'https://www.linkedin.com/in/shankar-vailaya-b509701/'
  },
  {
    url: images.DilipImage,
    name: 'Mr. Dilip Haria',
    subtitle: 'Director',
    description: 'Mr. Haria brings operational excellence and compliance expertise, guiding executive decisions and playing a key role in business continuity and stakeholder management.',
    linkedin: ''
  },
  {
    url: images.AtulImage,
    name: 'Mr. Atul Doshi',
    subtitle: 'Co-founder & Director',
    description: 'A visionary entrepreneur, Mr. Doshi drives innovation, strategic partnerships, and organisational development, ensuring seamless delivery of scalable content solutions for global clients.',
    linkedin: 'https://www.linkedin.com/in/atul-doshi-b0a41992/'
  },
  {
    url: images.PravinImage,
    name: 'Mr. Praveen Ambardar',
    subtitle: 'MD & CEO',
    description: "As MD & CEO, Mr. Ambardar leads the organisation's overall growth strategy, client success, and operational execution, focusing on digital transformation and delivery excellence.",
    linkedin: 'https://www.linkedin.com/in/praveen-ambardar-343a81255/'
  },
  {
    url: images.jyoti,
    name: 'Ms. Jyoti Bharti',
    subtitle: 'Lead - Content & Operations',
    description: 'Ms. Bharti manages end-to-end content production and client delivery workflows, ensuring quality, timeliness, and process integrity across multiple domains and formats.',
    linkedin: 'https://www.linkedin.com/in/jyoti-bharti-30a323129/'
  },
  {
    url: images.prachi,
    name: 'Ms. Prachi Waje',
    subtitle: 'Lead - HR & Finance',
    description: 'Ms. Waje oversees talent strategy, financial planning, and compliance, creating a performance-driven culture and ensuring fiscal discipline across operations.',
    linkedin: 'https://www.linkedin.com/in/prachi-waje-445623b0/'
  },
  {
    url: images.FarhanNek,
    name: 'Mr. Farhan Nek',
    subtitle: 'Lead - Business Development',
    description: 'Mr. Nek spearheads client acquisition, account growth, and market expansion, forging long-term partnerships and identifying new revenue opportunities across geographies.',
    linkedin: 'https://www.linkedin.com/in/farhan-nek-9aa16621b/'
  },
  {
    url: images.AniketBhasin,
    name: 'Mr. Aniket Bhasin',
    subtitle: 'Lead - AI & Brand Communication',
    description: 'Mr. Bhasin integrates AI-powered tools into content delivery while managing brand voice, visual identity, and marketing communications across platforms.',
    linkedin: 'https://www.linkedin.com/in/aniket-bhasin-5928bb191/'
  },
  {
    url: images.NimishaKoli,
    name: 'Ms. Nimisha Koli',
    subtitle: 'Lead - Projects',
    description: 'Ms. Koli ensures timely and efficient project execution by overseeing cross-functional teams, setting milestones, and maintaining alignment with client expectations and KPIs.',
    linkedin: 'https://www.linkedin.com/in/nimisha-koli-571029197/'
  },
  {
    url: images.VrushaliSatpute,
    name: 'Ms. Vrushali Satpute',
    subtitle: 'Lead - eLearning Development',
    description: 'Ms. Satpute leads instructional design and digital learning innovations, developing engaging, learner-centric modules aligned with global education standards.',
    linkedin: 'https://www.linkedin.com/in/vrushali-satpute-40b1a2178/'
  },
  {
    url: images.Vedant,
    name: 'Mr. Vedant More',
    subtitle: 'Lead - PostProduction',
    description: 'Mr. More supervises postproduction processes, including video editing, motion graphics, and audio refinement, ensuring visual content meets branding and delivery specifications.',
    linkedin: 'https://www.linkedin.com/in/vedant-more-222493211/'
  },
  {
    url: 'https://placehold.co/400x400/D1D5DB/1F2937?text=Smita+Bhangale',
    name: 'Ms. Smita Bhangale',
    subtitle: 'Lead - Graphic Designing',
    description: 'Ms. Bhangale manages creative design workflows, developing visually compelling graphics, templates, and brand assets that elevate client communications and courseware aesthetics.',
    linkedin: ''
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
  useLayoutEffect(() => {
    const updatePosition = () => {
      if (isMobileView) {
        // For mobile, text is part of normal flow, not absolutely positioned by this logic.
        setTextPosition({ top: 0, left: 0, visible: false });
        return;
      }

      // The previous calculation using `getBoundingClientRect` was fluctuating
      // due to the timing of CSS transitions on the carousel slides. This led to
      // inconsistent positioning when navigating forwards vs. backwards.
      //
      // By using a fixed pixel value that is known to be correct for the desktop
      // layout, we ensure the text container's position is stable and uniform,
      // providing a better user experience without visual jumps.
      const leftPosition = 800;

      if (enlargedImageRef.current && mainContainerRef.current) {
        setTextPosition({
          top: 24, // 1.5rem from the top
          left: leftPosition,
          visible: true,
        });
      }
    };

    updatePosition();
    window.addEventListener('resize', updatePosition);

    return () => {
      window.removeEventListener('resize', updatePosition);
    };
  }, [isMobileView, currentIndex]); // Reruns when view or current slide changes

  return (
    <div
      ref={mainContainerRef} // Assign ref to the main container
      className="max-w-[1600px] w-full m-auto py-8 px-4 relative group font-sans bg-white text-gray-900 flex flex-col justify-center items-center rounded-lg overflow-hidden">

      {/* Text container: Behaves differently on mobile vs desktop */}
      {slides[currentIndex] && (
        <div
          className={`
            flex flex-col justify-start text-left p-4 rounded-lg bg-white text-gray-900
            ${
              isMobileView
                ? 'relative w-full max-w-md mx-auto mb-6 order-1'
                : 'absolute max-w-2xl z-10 order-none transition-all duration-300 ease-linear' // Changed to ease-linear for text
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
          {slides[currentIndex].linkedin && (
            <a href={slides[currentIndex].linkedin} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-600 transition-colors">
              <LinkedInIcon className="w-8 h-8" />
            </a>
          )}
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
