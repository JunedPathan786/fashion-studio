import React from 'react';
import { images } from '../assets/imageImports';

interface HeroSectionProps {
  onExploreClick: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onExploreClick }) => {
  return (
    <section
      id="home"
      className="relative min-h-[92vh] md:min-h-screen flex items-center bg-black text-white pt-24 pb-16 overflow-hidden"
    >
      {/* Background Image: Model in Brown Overshirt with Sunglasses */}
      <div className="absolute inset-0 z-0">
        <img
          src={images.hero}
          alt="Fashion Studio 47 Men's Clothing"
          className="w-full h-full object-cover object-[center_25%] md:object-[center_35%] filter brightness-[0.75] contrast-[1.05]"
          referrerPolicy="no-referrer"
        />
        {/* Dark subtle gradient overlay to ensure text on left is ultra crisp */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/45 to-transparent md:from-black/80 md:via-black/35 md:to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30" />
      </div>

      {/* Main Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full py-12 md:py-24">
        <div className="max-w-2xl text-left">

          {/* Top Tagline with Square Dot Separator */}
          <div className="flex items-center gap-2 text-xs sm:text-sm tracking-[0.2em] font-semibold text-neutral-300 uppercase mb-4 sm:mb-6">
            <span>STYLE</span>
            <span className="text-[9px] text-neutral-400">▪</span>
            <span>COMFORT</span>
            <span className="text-[9px] text-neutral-400">▪</span>
            <span>CONFIDENCE</span>
          </div>

          {/* Large Bold Heading */}
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight text-white uppercase leading-[1.02] mb-5">
            PREMIUM <br />
            MEN’S CLOTHING
          </h1>

          {/* Subtitle */}
          <p className="text-neutral-300 text-sm sm:text-base md:text-lg font-normal leading-relaxed max-w-lg mb-8 sm:mb-10">
            Elevate your everyday. Premium fits,<br className="hidden sm:inline" />
            crafted for the modern man.
          </p>

          {/* Explore Collection Button */}
          <div>
            <button
              id="btn-hero-explore"
              onClick={onExploreClick}
              className="inline-flex items-center justify-center bg-white text-black font-bold text-xs sm:text-sm tracking-wider px-7 sm:px-8 py-3.5 sm:py-4 uppercase rounded-none hover:bg-neutral-200 transition-colors shadow-lg active:scale-95"
            >
              EXPLORE COLLECTION
            </button>
          </div>

        </div>
      </div>

      {/* Vertical Scroll Down Indicator on Right Edge */}
      <div className="absolute right-6 sm:right-10 bottom-12 z-10 hidden lg:flex flex-col items-center gap-3 text-neutral-400 pointer-events-none">
        <div className="w-[1px] h-14 bg-neutral-500" />
        <span className="text-[10px] tracking-[0.25em] font-semibold uppercase [writing-mode:vertical-lr] mt-2">
          SCROLL DOWN
        </span>
      </div>
    </section>
  );
};
