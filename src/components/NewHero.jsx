import { ArrowRight } from 'lucide-react';

// This is a functional React component for a hero section.
// It is designed to be used in a Next.js application and styled with Tailwind CSS.

export default function NewHero() {
  return (
    // Main container for the hero section.
    // It's set to fill the screen height and uses a relative position
    // to act as a positioning context for its children.
    // `justify-start` aligns the content to the left.
    <div className="relative h-screen w-full flex items-center justify-start overflow-hidden bg-gray-900">
      
      {/* Background GIF */}
      {/* This div holds the background GIF. It's positioned absolutely to fill the entire
          container. The object-cover class ensures the GIF covers the area without distortion.
          A low z-index keeps it in the background. An overlay is added for text readability. */}
      <div className="absolute top-0 left-0 w-full h-full z-0">
        <img
          src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExd2RwbWxnMWhid2hsc2o5aGZsc3A4eXJ5bzNzdWJ0ZGs4b2dneG00byZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/U3qYN8S0j3bpK/giphy.gif"
          alt="Abstract background animation"
          className="w-full h-full object-cover"
        />
        {/* Semi-transparent overlay to darken the background, making the text stand out. */}
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-60"></div>
      </div>

      {/* Content container */}
      {/* This container holds all the textual content and the call-to-action button.
          It's positioned relatively with a higher z-index to appear above the background.
          `mx-auto` has been removed and padding adjusted to shift content left. */}
      <div className="relative z-10 flex flex-col items-start max-w-4xl px-8 md:px-16 lg:px-24 text-white">
        
        {/* Main Heading */}
        <h1 className="text-4xl md:text-6xl font-extrabold mb-4 leading-tight tracking-tight">
          Unlock the Power of Engaging Content
        </h1>
        
        {/* Sub-heading */}
        <h2 className="text-2xl md:text-3xl font-light mb-6 text-gray-200">
          Let Us Bring Your E-Learning Vision to Life
        </h2>
        
        {/* Description Text */}
        <p className="text-base md:text-lg mb-8 max-w-2xl text-gray-300">
          Creaitify creates engaging learning experiences that drive results. With over 5,000 hours of experience in developing end-to-end e-learning solutions, including e-modules, micro-learning, and assessments, we can enhance your e-learning.
        </p>

        {/* Call to Action Button Group */}
        {/* A flex container for the button and the arrow icon, creating the desired layout. */}
        <div className="flex items-center space-x-3">
          <button className="bg-sky-500 hover:bg-sky-600 text-white font-bold py-3 px-8 rounded-full transition-all duration-300 ease-in-out shadow-lg hover:shadow-sky-400/50">
            CONTACT US
          </button>
          <div className="bg-sky-500 text-white p-3 rounded-full hover:bg-sky-600 transition-all duration-300 ease-in-out shadow-lg">
            <ArrowRight size={20} />
          </div>
        </div>
      </div>
    </div>
  );
}
