import React from 'react';
import { Phone, MapPin, Instagram, MessageCircle } from 'lucide-react';
import { STORE_INFO } from '../data/fashionData';

export const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-white text-black font-sans border-t border-neutral-200">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Contact Details */}
          <div className="lg:col-span-5 text-left">
            <span className="text-xs sm:text-sm tracking-[0.2em] text-neutral-500 uppercase font-semibold block mb-2">
              CONTACT US
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-black uppercase leading-tight mb-8">
              WE’D LOVE TO <br />
              HEAR FROM YOU
            </h2>

            <div className="space-y-6">
              {/* Phone */}
              <div className="flex items-center gap-4">
                <div className="text-black shrink-0">
                  <Phone className="w-5 h-5 stroke-[2]" />
                </div>
                <a
                  href={`tel:${STORE_INFO.phone}`}
                  className="text-base font-bold text-black hover:text-neutral-700 transition-colors"
                >
                  {STORE_INFO.phone}
                </a>
              </div>

              {/* Location */}
              <div className="flex items-start gap-4">
                <div className="text-black shrink-0 mt-0.5">
                  <MapPin className="w-5 h-5 stroke-[2]" />
                </div>
                <div className="text-sm font-semibold text-neutral-800 leading-snug">
                  Nearby Jhenda Chowk, <br />
                  Belapur (BK)
                </div>
              </div>

              {/* Instagram */}
              <div className="flex items-center gap-4">
                <div className="text-black shrink-0">
                  <Instagram className="w-5 h-5 stroke-[2]" />
                </div>
                <a
                  href={STORE_INFO.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-semibold text-black underline underline-offset-4 hover:text-neutral-700 transition-colors"
                >
                  {STORE_INFO.instagramHandle}
                </a>
              </div>

              {/* WhatsApp */}
              <div className="flex items-center gap-4">
                <div className="text-black shrink-0">
                  <MessageCircle className="w-5 h-5 stroke-[2]" />
                </div>
                <a
                  href={STORE_INFO.whatsappGroupUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-semibold text-black underline underline-offset-4 hover:text-neutral-700 transition-colors"
                >
                  Join our WhatsApp VIP Group
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Belapur Map Panel */}
          <div className="lg:col-span-7">
            <a
              href={STORE_INFO.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="block relative w-full h-[320px] sm:h-[380px] bg-[#f8f8f8] overflow-hidden rounded-none border border-neutral-300 group cursor-pointer shadow-md hover:border-black transition-colors"
              title="Open Location in Google Maps"
            >
              {/* Stylized Vector Map of Belapur matching light aesthetic */}
              <svg className="w-full h-full" viewBox="0 0 600 360" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
                {/* Background Map Land */}
                <rect width="600" height="360" fill="#f4f3f0" />

                {/* Soft Green Park / Natural Areas */}
                <polygon points="120,40 280,30 260,110 100,80" fill="#d9ebd4" opacity="0.9" />
                <polygon points="480,240 580,220 600,320 460,330" fill="#d9ebd4" opacity="0.85" />
                <polygon points="20,240 180,210 200,280 40,320" fill="#d0e5cb" opacity="0.8" />
                <polygon points="340,30 450,20 460,70 330,70" fill="#d9ebd4" opacity="0.75" />

                {/* Soft Blue River / Waterways */}
                <path d="M-20,60 Q180,90 320,50 T620,30" fill="none" stroke="#cde4f7" strokeWidth="16" />

                {/* Road Grids */}
                {/* Minor Streets */}
                <line x1="60" y1="0" x2="60" y2="360" stroke="#e3e1dc" strokeWidth="6" />
                <line x1="180" y1="0" x2="180" y2="360" stroke="#e3e1dc" strokeWidth="6" />
                <line x1="300" y1="0" x2="300" y2="360" stroke="#dedbd5" strokeWidth="8" />
                <line x1="440" y1="0" x2="440" y2="360" stroke="#e3e1dc" strokeWidth="6" />
                <line x1="540" y1="0" x2="540" y2="360" stroke="#e3e1dc" strokeWidth="6" />

                <line x1="0" y1="90" x2="600" y2="90" stroke="#e3e1dc" strokeWidth="6" />
                <line x1="0" y1="180" x2="600" y2="180" stroke="#dedbd5" strokeWidth="8" />
                <line x1="0" y1="270" x2="600" y2="270" stroke="#e3e1dc" strokeWidth="6" />

                {/* Diagonal Arterial Road (Datta Mandir Rd) */}
                <path d="M-20,310 L280,180 L620,110" fill="none" stroke="#d5d0c8" strokeWidth="16" />
                <path d="M-20,310 L280,180 L620,110" fill="none" stroke="#ffffff" strokeWidth="12" />

                {/* Cross Arterial Road (Jhenda Chowk Corridor) */}
                <path d="M380,-10 L380,370" fill="none" stroke="#d5d0c8" strokeWidth="16" />
                <path d="M380,-10 L380,370" fill="none" stroke="#ffffff" strokeWidth="12" />

                {/* Secondary Connecting Roads */}
                <path d="M120,360 L240,240 L380,180 L520,60" fill="none" stroke="#dedbd5" strokeWidth="10" />
                <path d="M120,360 L240,240 L380,180 L520,60" fill="none" stroke="#ffffff" strokeWidth="8" />

                {/* Railway / Metro line */}
                <path d="M-10,340 L610,340" fill="none" stroke="#999999" strokeWidth="2" strokeDasharray="6,6" />

                {/* Landmarks text tags */}
                {/* Shree Vitthal Fort */}
                <g transform="translate(140, 70)">
                  <rect x="0" y="0" width="105" height="20" rx="3" fill="#ffffff" fillOpacity="0.95" stroke="#d1d5db" strokeWidth="0.75" />
                  <circle cx="10" cy="10" r="3.5" fill="#3b82f6" />
                  <text x="20" y="14" fontFamily="system-ui, sans-serif" fontSize="9" fontWeight="600" fill="#334155">Shree Vitthal Fort</text>
                </g>

                {/* Belapur Fort */}
                <g transform="translate(340, 35)">
                  <rect x="0" y="0" width="80" height="20" rx="3" fill="#ffffff" fillOpacity="0.95" stroke="#d1d5db" strokeWidth="0.75" />
                  <circle cx="10" cy="10" r="3.5" fill="#3b82f6" />
                  <text x="20" y="14" fontFamily="system-ui, sans-serif" fontSize="9" fontWeight="600" fill="#334155">Belapur Fort</text>
                </g>

                {/* D Mart Belapur */}
                <g transform="translate(500, 75)">
                  <rect x="0" y="0" width="90" height="20" rx="3" fill="#ffffff" fillOpacity="0.95" stroke="#d1d5db" strokeWidth="0.75" />
                  <circle cx="10" cy="10" r="3.5" fill="#16a34a" />
                  <text x="20" y="14" fontFamily="system-ui, sans-serif" fontSize="9" fontWeight="600" fill="#334155">D Mart Belapur</text>
                </g>

                {/* Bank of Maharashtra */}
                <g transform="translate(365, 120)">
                  <text x="0" y="0" fontFamily="system-ui, sans-serif" fontSize="10" fontWeight="700" fill="#2563eb">Bank of Maharashtra</text>
                </g>

                {/* SBI Bank */}
                <g transform="translate(260, 205)">
                  <circle cx="6" cy="6" r="4" fill="#3b82f6" />
                  <text x="16" y="10" fontFamily="system-ui, sans-serif" fontSize="9.5" fontWeight="600" fill="#475569">SBI Bank</text>
                </g>

                {/* Axis Bank */}
                <g transform="translate(420, 205)">
                  <circle cx="6" cy="6" r="4" fill="#dc2626" />
                  <text x="16" y="10" fontFamily="system-ui, sans-serif" fontSize="9.5" fontWeight="600" fill="#475569">Axis Bank</text>
                </g>

                {/* Datta Mandir Rd Label */}
                <g transform="translate(400, 270) rotate(-22)">
                  <text x="0" y="0" fontFamily="system-ui, sans-serif" fontSize="8.5" fontWeight="600" fill="#64748b">Datta Mandir Rd</text>
                </g>

                {/* Berta Mandir Beltode */}
                <g transform="translate(470, 305)">
                  <circle cx="6" cy="6" r="3.5" fill="#d97706" />
                  <text x="16" y="9" fontFamily="system-ui, sans-serif" fontSize="8.5" fontWeight="600" fill="#475569">Berta Mandir</text>
                  <text x="16" y="18" fontFamily="system-ui, sans-serif" fontSize="8" fontWeight="500" fill="#64748b">Beltode</text>
                </g>

                {/* THE PIN: Black Location Pin with White Dot at Jhenda Chowk / Belapur (BK) */}
                <g transform="translate(360, 160)" className="group-hover:translate-y-[-4px] transition-transform duration-300">
                  {/* Pin shadow */}
                  <ellipse cx="14" cy="38" rx="7" ry="3.5" fill="#000000" opacity="0.3" />
                  
                  {/* Black Teardrop Pin */}
                  <path
                    d="M14,0 C6.268,0 0,6.268 0,14 C0,24.5 14,38 14,38 C14,38 28,24.5 28,14 C28,6.268 21.732,0 14,0 Z"
                    fill="#000000"
                  />
                  {/* White inner dot */}
                  <circle cx="14" cy="13" r="5" fill="#ffffff" />
                </g>
              </svg>

              {/* Floating "View on Google Maps" prompt on hover */}
              <div className="absolute bottom-3 right-3 bg-black text-white text-[10px] uppercase font-bold tracking-wider px-3 py-1.5 opacity-90 group-hover:opacity-100 transition-opacity shadow-md">
                Open in Maps ↗
              </div>
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};
