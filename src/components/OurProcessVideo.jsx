'use client';
import React from 'react';
import { images } from '@/constants/images'; // Import images

// Define the ImageGallery component
// It accepts a 'images' prop, which should be an array of image URLs.
const OurProcessVideo = ({ images: propImages }) => {
  // Default images to display if none are provided or if the array is empty.
  // This ensures the component has something to render for demonstration purposes.
  const defaultImages = [
    images.OurProcessimage1,
    images.OurProcessimage2,
    images.OurProcessimage3,
    images.OurProcessimage4,
    images.OurProcessimage5,
    images.OurProcessimage6,
    images.OurProcessimage7,
    images.OurProcessimage8,
  ];

  // Use the provided images or the default images if the provided array is not valid or empty.
  const imagesToDisplay = Array.isArray(propImages) && propImages.length > 0 ? propImages : defaultImages;

  return (
    <section className="bg-white py-16 font-sans antialiased">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-12 text-center">
          Our Process
        </h2>
        <div className="flex flex-wrap justify-center items-center gap-4">
          {imagesToDisplay.map((imageUrl, index) => (
            <div
              key={index} // Unique key for each item in the list, important for React rendering.
              className="w-full sm:w-[calc(50%-0.5rem)] md:w-[calc(25%-0.75rem)] lg:w-[calc(12.5%-0.875rem)]
                         flex-shrink-0 flex-grow-0 h-72 overflow-hidden rounded-lg bg-white flex items-center justify-center" // Removed shadow to blend with background
            >
              <img
                src={imageUrl} // Source of the image.
                alt={`Gallery Image ${index + 1}`} // Alt text for accessibility.
                className="w-full h-full object-cover rounded-lg" // Image fills its container, covers it, and has rounded corners.
                // onError fallback in case the image fails to load.
                onError={(e) => {
                  e.target.onerror = null; // Prevents infinite loop if fallback also fails.
                  e.target.src = `https://placehold.co/600x400/CCCCCC/000000?text=Error+Loading+Image+${index + 1}`; // Placeholder for broken images.
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurProcessVideo;