'use client';

import React from 'react';

const TestimonialSectionComponent = () => {
  return (
    <section className="py-16 bg-gray-50 font-inter">
      <style jsx>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;  /* IE and Edge */
          scrollbar-width: none;  /* Firefox */
        }
      `}</style>

      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
          Testimonials
        </h2>

        <div className="flex flex-col lg:flex-row items-center justify-center lg:space-x-12 p-8 rounded-lg relative overflow-hidden">

          <div className="relative z-10 mb-8 lg:mb-0 w-[256px] h-[256px] flex items-center justify-center">
            <div className="absolute inset-0 z-0 hidden lg:block">
              <div
                className="absolute h-[2px]"
                style={{
                  top: '32px',
                  left: '-32px',
                  width: '850px',
                  backgroundImage: 'linear-gradient(to right, #60A5FA, transparent)'
                }}
              ></div>
              <div
                className="absolute w-[2px]"
                style={{
                  top: '-52px',
                  left: '32px',
                  height: '450px',
                  backgroundImage: 'linear-gradient(to bottom, #60A5FA, transparent)'
                }}
              ></div>
              <div
                className="absolute w-[2px]"
                style={{
                  top: '-52px',
                  left: 'calc(32px + 192px)',
                  height: '450px',
                  backgroundImage: 'linear-gradient(to bottom, #60A5FA, transparent)'
                }}
              ></div>
              <div
                className="absolute h-[2px]"
                style={{
                  top: 'calc(32px + 192px)',
                  left: '-32px',
                  width: '850px',
                  backgroundImage: 'linear-gradient(to right, #60A5FA, transparent)'
                }}
              ></div>

              <div
                className="absolute h-[2px]"
                style={{
                  top: '32px',
                  left: 'calc(32px + 192px)',
                  width: 'calc(100% - (32px + 192px))', // 100% refers to the 256px parent width
                  backgroundImage: 'linear-gradient(to right, #60A5FA, transparent)'
                }}
              ></div>
              <div
                className="absolute w-[2px]"
                style={{
                  top: 'calc(32px + 192px)',
                  left: '32px',
                  height: 'calc(100% - (32px + 192px))', // 100% refers to the 256px parent height
                  backgroundImage: 'linear-gradient(to bottom, #60A5FA, transparent)'
                }}
              ></div>
            </div>

            <img
              src="https://placehold.co/200x200/cccccc/333333?text=User"
              alt="B. Subramanium"
              className="w-48 h-48 rounded-lg object-cover border-4 border-white shadow-lg"
              onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/200x200/cccccc/333333?text=User"; }}
            />
          </div>
          <div className="relative z-10 text-center lg:text-left max-w-2xl">
            <p className="text-2xl italic text-gray-700 mb-6 leading-relaxed">
              &ldquo;Creatify has the best service ever and they have been Industry leaders since last 14 years&rdquo;
            </p>
            <p className="text-xl font-semibold text-gray-800">
              B. Subramanium
            </p>
            <p className="text-md text-gray-600">
              Head of Marketing
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSectionComponent;
