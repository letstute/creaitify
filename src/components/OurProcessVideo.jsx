"use client";
import React, { useRef, useEffect } from 'react';
// Corrected import path: Assuming images.js is in a 'constants' folder
// and OurProcessVideo.jsx is in a 'components' folder, both at the same level.
import { images } from '@/constants/images';  // Import images from your constants

const OurProcessVideo = () => {
  // Create a ref for the video container to observe its visibility
  const videoContainerRef = useRef(null);

  // Create refs for the individual video elements to control playback
  const desktopVideoRef = useRef(null);
  const mobileVideoRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // Check if the video container is currently intersecting (visible)
          if (entry.isIntersecting) {
            // Attempt to play the desktop video if it exists and is currently visible
            if (desktopVideoRef.current && desktopVideoRef.current.offsetParent !== null) {
              desktopVideoRef.current.play().catch(error => {
                // Catch potential errors like user gesture requirement or network issues
                console.error("Error playing desktop video:", error);
              });
            }
            // Attempt to play the mobile video if it exists and is currently visible
            if (mobileVideoRef.current && mobileVideoRef.current.offsetParent !== null) {
              mobileVideoRef.current.play().catch(error => {
                console.error("Error playing mobile video:", error);
              });
            }
          } else {
            // If the video container is not intersecting (not visible)
            // Pause both videos to stop playback
            if (desktopVideoRef.current) {
              desktopVideoRef.current.pause();
            }
            if (mobileVideoRef.current) {
              mobileVideoRef.current.pause();
            }
          }
        });
      },
      {
        // Options for the IntersectionObserver
        root: null, // Use the viewport as the root
        rootMargin: '0px', // No margin around the root
        threshold: 0.5, // Trigger when 50% of the target is visible
      }
    );

    // If the video container ref exists, start observing it
    if (videoContainerRef.current) {
      observer.observe(videoContainerRef.current);
    }

    // Cleanup function: disconnect the observer when the component unmounts
    return () => {
      if (videoContainerRef.current) {
        observer.unobserve(videoContainerRef.current);
      }
    };
  }, []); // Empty dependency array ensures this effect runs only once on mount

  return (
    <section
      ref={videoContainerRef} // Attach the ref to the main container for observation
      id="our-process-section"
      className="w-full overflow-hidden flex justify-center items-center" // Removed background and padding for full-width video
    >
      {/* Desktop Video - Hidden on small screens, shown on medium and larger */}
      <video
        ref={desktopVideoRef} // Attach ref for playback control
        className="hidden md:block w-full" // Full width, no max-width, no rounded corners or shadow
        src={images.OurProcessvideoDesk}
        autoPlay // Autoplay (will be controlled by JS based on visibility)
        muted // Muted is required for autoplay in most browsers
        playsInline // Important for iOS to play video inline
        loop={false} // Do not loop the video
        preload="metadata" // Preload metadata to get video dimensions, etc.
        controls={false} // No default video controls
        aria-label="Our process desktop video" // Accessibility label
      >
        Your browser does not support the video tag.
      </video>

      {/* Mobile Video - Shown on small screens, hidden on medium and larger */}
      <video
        ref={mobileVideoRef} // Attach ref for playback control
        className="block md:hidden w-full" // Full width, no max-width, no rounded corners or shadow
        src={images.OurProcessvideoMob}
        autoPlay // Autoplay (will be controlled by JS based on visibility)
        muted // Muted is required for autoplay in most browsers
        playsInline // Important for iOS to play video inline
        loop={false} // Do not loop the video
        preload="metadata" // Preload metadata
        controls={false} // No default video controls
        aria-label="Our process mobile video" // Accessibility label
      >
        Your browser does not support the video tag.
      </video>
    </section>
  );
};

export default OurProcessVideo;
