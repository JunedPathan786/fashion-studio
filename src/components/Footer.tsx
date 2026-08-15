import React from 'react';
import { Instagram, MessageCircle } from 'lucide-react';
import { STORE_INFO, CATEGORIES } from '../data/fashionData';
import { images } from '../assets/imageImports';

export const Footer: React.FC = () => {
  return (
    <footer id="main-footer" className="bg-black text-white pt-16 pb-12 font-sans border-t border-neutral-900">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">

        {/* 4-Column Grid Layout matching mockup */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 sm:gap-12 pb-14 text-left">

          {/* Column 1: Brand Logo & Typography */}
          <div className="space-y-4">
            <div className="flex items-center gap-3.5 select-none">
              <div className="relative w-12 h-12 rounded-full overflow-hidden border border-amber-400/40 shadow-md shrink-0 bg-neutral-900">
                <img
                  src={images.logo}
                  alt="Fashion Studio 47 Logo"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="flex flex-col text-left">
                <span className="text-base font-bold tracking-[0.22em] text-white leading-tight">
                  FASHION
                </span>
                <span className="text-xs font-bold tracking-[0.22em] text-neutral-300 leading-tight mt-0.5">
                  STUDIO 47
                </span>
              </div>
            </div>

            <div className="text-xs text-neutral-300 space-y-1">
              <p className="tracking-wide">Style • Quality • Confidence</p>
              <p className="text-neutral-400">Premium Men&apos;s Clothing & Accessories</p>
            </div>

            {/* Social Circle Icons */}
            <div className="flex items-center gap-3 pt-3">
              <a
                href={STORE_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full border border-neutral-700 flex items-center justify-center text-white hover:border-white transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4 stroke-[1.5]" />
              </a>

              <a
                href={`https://wa.me/${STORE_INFO.whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full border border-neutral-700 flex items-center justify-center text-white hover:border-white transition-colors"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-4 h-4 stroke-[1.5]" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              QUICK LINKS
            </h4>
            <ul className="space-y-2 text-xs text-neutral-400">
              <li>
                <a href="#home" className="hover:text-white transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#collection" className="hover:text-white transition-colors">
                  Collection
                </a>
              </li>
              <li>
                <a href="#accessories" className="hover:text-white transition-colors">
                  Accessories & Belts
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-white transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Collection */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              COLLECTION
            </h4>
            <ul className="space-y-2 text-xs text-neutral-400">
              {CATEGORIES.map((cat) => (
                <li key={cat.id}>
                  <a href="#collection" className="hover:text-white transition-colors">
                    {cat.name.charAt(0).toUpperCase() + cat.name.slice(1).toLowerCase()}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Store */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              STORE
            </h4>
            <div className="text-xs text-neutral-400 space-y-2">
              <p className="leading-snug">
                Nearby Jhenda Chowk, <br />
                Belapur (BK)
              </p>
              <p className="text-white font-medium">
                {STORE_INFO.phone}
              </p>
              <p className="pt-1">
                Mon - Sun: 10:00 AM - 9:00 PM
              </p>
            </div>
          </div>

        </div>

        {/* Bottom Centered Copyright */}
        <div className="pt-8 border-t border-neutral-900 text-center text-xs text-neutral-400">
          <p>© 2025 Fashion Studio 47. All Rights Reserved.</p>
        </div>

      </div>
    </footer>
  );
};
