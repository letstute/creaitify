'use client';
import { images } from '@/constants/images';
// SVG Calendar Icon Component (White)
const CalendarIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M17 12h-5v5h5v-5zM16 1v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2h-1V1h-2zm3 18H5V8h14v11z"/>
  </svg>
);

const CallToActionSectionComponent = () => {
  return (
    <section className="relative py-24 font-sans overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${images.WhyChooseUsBgImage})`,
          opacity: 0.8,
        }}
      ></div>

      <div className="relative z-10 container mx-auto px-4 text-center">
        <h2 className="text-4xl md:text-3xl font-bold text-gray-800 mb-12 text-center uppercase tracking-wide">
          GET READY TO SOLVE ALL YOUR <br className="hidden md:block"/> CONTENT PROBLEMS.
        </h2>

        <a
          href="https://calendly.com/aniket-bhasin/letstute-introduction-call"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center px-8 py-4 bg-blue-600 text-white text-lg font-semibold rounded-xl shadow-lg hover:bg-blue-700 transition-colors duration-300"
        >
          <CalendarIcon className="w-6 h-6 mr-3" />
          Get started for free
        </a>
      </div>
    </section>
  );
};

export default CallToActionSectionComponent;
