"use client";
import { ArrowRight } from "lucide-react";
import { images } from "@/constants/images";

export default function NewHero() {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="relative h-screen w-full flex items-center justify-start overflow-hidden bg-[#efeef1]">
      {/* Background Vimeo Video - hidden on mobile, shown md+ */}
      <div
        className="hidden md:block absolute top-0 left-0 w-full h-full z-0 overflow-hidden pointer-events-none"
      >
        <iframe
          src="https://player.vimeo.com/video/1107323657?background=1&autoplay=1&loop=1&muted=1"
          className="w-full h-full"
          frameBorder="0"
          allow="autoplay; fullscreen"
          allowFullScreen
          title="Hero background video"
          style={{
            objectFit: "cover",
            width: "100%",
            height: "100%",
            pointerEvents: "none",
          }}
        />
      </div>

      {/* Content container */}
      <div className="relative z-10 flex flex-col items-start max-w-3xl px-8 md:px-16 lg:px-24 text-black">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-4 leading-tight tracking-tight">
          Unlock the Power of Engaging Content
        </h1>

        <h2 className="text-2xl md:text-3xl font-light mb-6 text-gray-800">
          Let Us Bring Your E-Learning Vision to Life
        </h2>

        <p className="text-base md:text-lg mb-8 max-w-2xl text-gray-700">
          Creaitify creates engaging learning experiences that drive results.
          With over 5,000 hours of experience in developing end-to-end
          e-learning solutions, including e-modules, micro-learning, and
          assessments, we can enhance your e-learning.
        </p>

        <div className="flex items-center space-x-3">
          <button
            onClick={() => scrollToSection("contact-us-section")}
            className="bg-sky-500 hover:bg-sky-600 text-white font-bold py-3 px-8 rounded-full transition-all duration-300 ease-in-out shadow-lg hover:shadow-sky-400/50"
            aria-label="Book a call and contact us"
          >
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
