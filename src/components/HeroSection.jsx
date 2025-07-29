"use client";
import React, { useMemo } from 'react';
import { images } from '@/constants/images';

const CallIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
  </svg>
);

const HeroCard = ({
  title,
  description,
  iconSrc,
  width,
  height,
  className: passedClassName
}) => {
  const baseClasses = "bg-white rounded-2xl shadow-lg border border-blue-400 p-6 flex flex-col items-center justify-center text-center transition-transform duration-300 hover:scale-105";
  return (
    <div
      className={`${baseClasses} ${passedClassName || ''}`}
      style={{
        width: width || 'auto',
        height: height || 'auto',
        flexShrink: 0,
      }}
    >
      <img src={iconSrc} alt="Icon" className="w-10 h-10 mb-4 object-contain" />
      <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
      <p className="text-[#747474] text-sm leading-relaxed drop-shadow-sm">{description}</p>
    </div>
  );
};
export default function HeroSection() {
  const cardData = useMemo(() => [
    {
      title: "End-to-end content solutions",
      description: "Complete content development from TOC to delivery",
      iconSrc: images.EndtoVector,
      width: "280px",
      height: "250px",
    },
    {
      title: "Interactive e-learning content",
      description: "Engaging modules that promote active learning through story based learning, gamification, scenario based learning and branching simulations.",
      iconSrc: images.InteractiveVector,
      width: "530px",
      height: "auto",
    },
    {
      title: "Post-production",
      description: "Polished editing with seamless animations and creativity",
      iconSrc: images.PostProVector,
      width: "270px",
      height: "300px",
    },
    {
      title: "AI driven content creation",
      description: "Innovative content powered by artificial intelligence to produce hundreds of videos in a short duration of time",
      iconSrc: images.AIdrivector,
      width: "560px",
      height: "250px",
    },
    {
      title: "Video development",
      description: "High-quality educational and explainer infographic, motion graphic, whiteboard animation, video lectures & 2D animation",
      iconSrc: images.Videovector,
      width: "560px",
      height: "250px",
    }
  ], []);

  const gap = 40;
  const card0Width = parseInt(cardData[0].width);
  const card0Height = parseInt(cardData[0].height);
  const card1Width = parseInt(cardData[1].width);
  const card2Width = parseInt(cardData[2].width);
  const card2Height = parseInt(cardData[2].height); 

  const group01Width = card0Width + card1Width + gap;
  const totalFirstRowContentWidth = group01Width + gap + card2Width;

  const desktopBlockMinHeight = Math.max(card0Height, card2Height);

  return (
    <section
      className="relative py-16 md:py-20 font-sans antialiased flex flex-col items-center justify-center min-h-screen"
    >
      {/* YouTube Background Video */}
      <div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          zIndex: 0,
          pointerEvents: 'none',
          overflow: 'hidden',
        }}
      >
        <iframe
          src="https://www.youtube.com/embed/V4UI_hJVC_4?autoplay=1&mute=1&loop=1&playlist=V4UI_hJVC_4&controls=0&showinfo=0&modestbranding=1&rel=0&vq=hd2160"
          title="Background Video"
          frameBorder="0"
          allow="autoplay; encrypted-media"
          allowFullScreen={false}
          style={{
            width: '100vw',
            height: '100vh',
            minWidth: '100%',
            minHeight: '100%',
            objectFit: 'cover',
            pointerEvents: 'none',
            border: 'none',
            aspectRatio: '16/9',
            display: 'block',
          }}
        />
      </div>

      <div className="relative z-10 container mx-auto px-4 max-w-6xl text-center mb-12">
        <h1 className="text-5xl md:text-6xl font-bold text-black drop-shadow-lg leading-none mb-4">
          Unlock the power of engaging content
        </h1>
        <p className="text-lg md:text-xl text-[#747474] drop-shadow-lg mb-8 max-w-3xl mx-auto">
          Let us bring your e-learning vision of life. We can help you with e-learning solutions, micro-learning modules.
        </p>
        <a
          href="https://calendly.com/aniket-bhasin/letstute-introduction-call"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-full transition-colors duration-300 shadow-lg inline-flex items-center"
        >
          <CallIcon className="w-5 h-5 mr-2" />
          Book a call
        </a>
      </div>

      <div className="relative z-10 flex flex-col gap-8 items-center w-full max-w-7xl mx-auto px-4">
        <div
          className="desktop-layout-block1 relative w-full justify-center"
          style={{ minHeight: `${desktopBlockMinHeight}px` }}
        >
          <div className="relative" style={{ width: `${totalFirstRowContentWidth}px` }}>
            <div
              className="absolute flex items-end"
              style={{ top: '0px', left: '0px', gap: `${gap}px` }}
            >
              <HeroCard {...cardData[0]} />
              <HeroCard {...cardData[1]} />
            </div>

            <div
              className="absolute"
              style={{
                top: '0px',
                left: `${group01Width + gap}px`,
              }}
            >
              <HeroCard {...cardData[2]} />
            </div>
          </div>
        </div>

        <div
          className="desktop-layout-block2 flex-wrap justify-center gap-8 w-full mt-8"
        >
          <div className="relative" style={{ top: '-40px' }}>
            <HeroCard {...cardData[3]} />
          </div>
          <HeroCard {...cardData[4]} />
        </div>
        <div className="mobile-stacked-layout w-full space-y-6">
          {cardData.map((card, index) => (
            <HeroCard
              key={index}
              title={card.title}
              description={card.description}
              iconSrc={card.iconSrc}
              className="w-full max-w-sm mx-auto h-[280px]"
            />
          ))}
        </div>
      </div>
    </section>
  );
}