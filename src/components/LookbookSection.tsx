import React, { useState } from 'react';
import { Sparkles, Maximize2, Tag, ArrowUpRight } from 'lucide-react';
import { LOOKBOOK_STORIES } from '../data/fashionData';
import { LookbookStory } from '../types';

interface LookbookSectionProps {
  onOpenStoryModal: (story: LookbookStory) => void;
}

export const LookbookSection: React.FC<LookbookSectionProps> = ({ onOpenStoryModal }) => {
  const [hoveredStory, setHoveredStory] = useState<string | null>(null);

  return (
    <section id="lookbook" className="py-24 bg-[#09090b] text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs sm:text-sm tracking-[0.4em] text-[#dfba73] uppercase font-semibold block mb-2 font-mono">
            EDITORIAL CAMPAIGN
          </span>
          <h2 className="font-luxury text-3xl sm:text-5xl font-extrabold tracking-tight text-white uppercase leading-tight">
            FEATURED LOOKBOOK
          </h2>
          <p className="mt-4 text-sm sm:text-base text-white/60 font-light max-w-xl mx-auto">
            A curated visual study in contemporary Indian menswear—balancing relaxed daywear with structured formal power.
          </p>
        </div>

        {/* Asymmetric Editorial Magazine Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 items-start">
          
          {/* Card 1: Everyday Essentials (Large Span 7) */}
          <div
            id="lookbook-story-1"
            className="lg:col-span-7 group relative bg-[#121214] border border-white/10 overflow-hidden cursor-pointer"
            onClick={() => onOpenStoryModal(LOOKBOOK_STORIES[0])}
            onMouseEnter={() => setHoveredStory(LOOKBOOK_STORIES[0].id)}
            onMouseLeave={() => setHoveredStory(null)}
          >
            <div className="relative aspect-[16/11] sm:aspect-[16/10] overflow-hidden">
              <img
                src={LOOKBOOK_STORIES[0].image}
                alt={LOOKBOOK_STORIES[0].title}
                className="w-full h-full object-cover object-center filter brightness-90 group-hover:scale-105 group-hover:brightness-100 transition-all duration-700 ease-out"
                referrerPolicy="no-referrer"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/30 to-transparent" />

              {/* Number Badge */}
              <div className="absolute top-4 left-4 font-luxury text-xs text-white/70 tracking-widest border border-white/20 px-2.5 py-1 bg-black/60 backdrop-blur-sm">
                LOOK 01
              </div>

              <div className="absolute top-4 right-4 p-2 bg-black/60 border border-white/20 text-white/70 opacity-0 group-hover:opacity-100 transition-opacity">
                <ArrowUpRight className="w-4 h-4 text-[#dfba73]" />
              </div>

              {/* Bottom Editorial Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
                <span className="text-[10px] tracking-[0.3em] uppercase text-[#dfba73] font-mono block mb-1">
                  {LOOKBOOK_STORIES[0].subtitle}
                </span>
                <h3 className="font-luxury text-2xl sm:text-3xl font-bold uppercase text-white tracking-wide">
                  {LOOKBOOK_STORIES[0].title}
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-white/70 max-w-lg font-light leading-relaxed">
                  {LOOKBOOK_STORIES[0].caption}
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {LOOKBOOK_STORIES[0].tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] tracking-wider uppercase px-2.5 py-1 bg-white/10 text-white/80 border border-white/10"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Card 2: Modern Classics (Span 5) */}
          <div
            id="lookbook-story-2"
            className="lg:col-span-5 group relative bg-[#121214] border border-white/10 overflow-hidden cursor-pointer"
            onClick={() => onOpenStoryModal(LOOKBOOK_STORIES[1])}
            onMouseEnter={() => setHoveredStory(LOOKBOOK_STORIES[1].id)}
            onMouseLeave={() => setHoveredStory(null)}
          >
            <div className="relative aspect-[4/5] overflow-hidden">
              <img
                src={LOOKBOOK_STORIES[1].image}
                alt={LOOKBOOK_STORIES[1].title}
                className="w-full h-full object-cover object-center filter brightness-90 group-hover:scale-105 group-hover:brightness-100 transition-all duration-700 ease-out"
                referrerPolicy="no-referrer"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/30 to-transparent" />

              <div className="absolute top-4 left-4 font-luxury text-xs text-white/70 tracking-widest border border-white/20 px-2.5 py-1 bg-black/60 backdrop-blur-sm">
                LOOK 02
              </div>

              <div className="absolute top-4 right-4 p-2 bg-black/60 border border-white/20 text-white/70 opacity-0 group-hover:opacity-100 transition-opacity">
                <ArrowUpRight className="w-4 h-4 text-[#dfba73]" />
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
                <span className="text-[10px] tracking-[0.3em] uppercase text-[#dfba73] font-mono block mb-1">
                  {LOOKBOOK_STORIES[1].subtitle}
                </span>
                <h3 className="font-luxury text-2xl font-bold uppercase text-white tracking-wide">
                  {LOOKBOOK_STORIES[1].title}
                </h3>
                <p className="mt-2 text-xs text-white/70 font-light leading-relaxed">
                  {LOOKBOOK_STORIES[1].caption}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {LOOKBOOK_STORIES[1].tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] tracking-wider uppercase px-2.5 py-1 bg-white/10 text-white/80 border border-white/10"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Card 3: Street Sophistication (Span 5) */}
          <div
            id="lookbook-story-3"
            className="lg:col-span-5 group relative bg-[#121214] border border-white/10 overflow-hidden cursor-pointer"
            onClick={() => onOpenStoryModal(LOOKBOOK_STORIES[2])}
            onMouseEnter={() => setHoveredStory(LOOKBOOK_STORIES[2].id)}
            onMouseLeave={() => setHoveredStory(null)}
          >
            <div className="relative aspect-[4/5] overflow-hidden">
              <img
                src={LOOKBOOK_STORIES[2].image}
                alt={LOOKBOOK_STORIES[2].title}
                className="w-full h-full object-cover object-center filter brightness-90 group-hover:scale-105 group-hover:brightness-100 transition-all duration-700 ease-out"
                referrerPolicy="no-referrer"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/30 to-transparent" />

              <div className="absolute top-4 left-4 font-luxury text-xs text-white/70 tracking-widest border border-white/20 px-2.5 py-1 bg-black/60 backdrop-blur-sm">
                LOOK 03
              </div>

              <div className="absolute top-4 right-4 p-2 bg-black/60 border border-white/20 text-white/70 opacity-0 group-hover:opacity-100 transition-opacity">
                <ArrowUpRight className="w-4 h-4 text-[#dfba73]" />
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
                <span className="text-[10px] tracking-[0.3em] uppercase text-[#dfba73] font-mono block mb-1">
                  {LOOKBOOK_STORIES[2].subtitle}
                </span>
                <h3 className="font-luxury text-2xl font-bold uppercase text-white tracking-wide">
                  {LOOKBOOK_STORIES[2].title}
                </h3>
                <p className="mt-2 text-xs text-white/70 font-light leading-relaxed">
                  {LOOKBOOK_STORIES[2].caption}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {LOOKBOOK_STORIES[2].tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] tracking-wider uppercase px-2.5 py-1 bg-white/10 text-white/80 border border-white/10"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Card 4: Statement Accessories (Span 7) */}
          <div
            id="lookbook-story-4"
            className="lg:col-span-7 group relative bg-[#121214] border border-white/10 overflow-hidden cursor-pointer"
            onClick={() => onOpenStoryModal(LOOKBOOK_STORIES[3])}
            onMouseEnter={() => setHoveredStory(LOOKBOOK_STORIES[3].id)}
            onMouseLeave={() => setHoveredStory(null)}
          >
            <div className="relative aspect-[16/11] sm:aspect-[16/10] overflow-hidden">
              <img
                src={LOOKBOOK_STORIES[3].image}
                alt={LOOKBOOK_STORIES[3].title}
                className="w-full h-full object-cover object-center filter brightness-90 group-hover:scale-105 group-hover:brightness-100 transition-all duration-700 ease-out"
                referrerPolicy="no-referrer"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/30 to-transparent" />

              <div className="absolute top-4 left-4 font-luxury text-xs text-white/70 tracking-widest border border-white/20 px-2.5 py-1 bg-black/60 backdrop-blur-sm">
                LOOK 04
              </div>

              <div className="absolute top-4 right-4 p-2 bg-black/60 border border-white/20 text-white/70 opacity-0 group-hover:opacity-100 transition-opacity">
                <ArrowUpRight className="w-4 h-4 text-[#dfba73]" />
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
                <span className="text-[10px] tracking-[0.3em] uppercase text-[#dfba73] font-mono block mb-1">
                  {LOOKBOOK_STORIES[3].subtitle}
                </span>
                <h3 className="font-luxury text-2xl sm:text-3xl font-bold uppercase text-white tracking-wide">
                  {LOOKBOOK_STORIES[3].title}
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-white/70 max-w-lg font-light leading-relaxed">
                  {LOOKBOOK_STORIES[3].caption}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {LOOKBOOK_STORIES[3].tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] tracking-wider uppercase px-2.5 py-1 bg-white/10 text-white/80 border border-white/10"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
