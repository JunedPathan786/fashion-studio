import React from 'react';
import { images } from '../assets/imageImports';
import { STORE_INFO } from '../data/fashionData';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-neutral-950 text-white font-sans border-t border-neutral-900">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

          {/* Left Column: Studio Boutique Photo */}
          <div className="lg:col-span-6">
            <div className="relative aspect-[4/5] overflow-hidden bg-neutral-900 shadow-2xl border border-neutral-800">
              <img
                src={images.about}
                alt="Fashion Studio 47 Boutique Showroom Interior"
                className="w-full h-full object-cover object-center filter brightness-95"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

              <div className="absolute bottom-6 left-6 right-6 p-4 bg-neutral-900/90 backdrop-blur-md text-white border border-neutral-800 shadow-xl">
                <h4 className="text-xs uppercase tracking-widest text-neutral-300 font-bold">
                  THE STUDIO EXPERIENCE
                </h4>
                <p className="text-xs text-neutral-400 mt-0.5">
                  Belapur (BK) Studio • Open Daily 10:00 AM - 9:00 PM
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Narrative Copy */}
          <div className="lg:col-span-6 space-y-6 text-left">
            <span className="text-xs sm:text-sm tracking-[0.2em] text-neutral-400 uppercase font-semibold block">
              ABOUT US
            </span>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white uppercase leading-tight">
              STYLE • QUALITY <br />
              CONFIDENCE
            </h2>

            <p className="text-sm sm:text-base text-neutral-300 font-normal leading-relaxed">
              Located nearby <strong>Jhenda Chowk in Belapur (BK)</strong>, <strong>FASHION STUDIO 47</strong> (<em>@fashion_studio_47_</em>) brings curated menswear, premium fits, and contemporary streetwear to modern men.
            </p>

            <p className="text-sm sm:text-base text-neutral-400 font-normal leading-relaxed">
              Every garment—from French linen shirts and tailored twill trousers to heavyweight streetwear t-shirts, hoodies, and genuine leather accessories—is selected for exceptional comfort, precise fit, and timeless appeal.
            </p>

            {/* Quick Actions */}
            <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <a
                href={STORE_INFO.whatsappGroupUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 bg-white text-black text-xs font-bold uppercase tracking-wider hover:bg-neutral-200 transition-colors text-center shadow-sm"
              >
                Join WhatsApp VIP Group
              </a>
              <a
                href={`tel:${STORE_INFO.phone}`}
                className="px-6 py-3.5 border border-neutral-700 text-white text-xs font-semibold uppercase tracking-wider hover:bg-neutral-900 transition-colors text-center"
              >
                Call {STORE_INFO.phone}
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
