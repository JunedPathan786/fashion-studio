import React from 'react';
import { Award, Shirt, Tag, Package } from 'lucide-react';

export const ServicesSection: React.FC = () => {
  const services = [
    {
      icon: Award,
      title: 'PREMIUM QUALITY',
      description: 'Handpicked fabrics & finest stitching',
    },
    {
      icon: Shirt,
      title: 'TRENDING STYLES',
      description: "Stay ahead with the latest men's fashion",
    },
    {
      icon: Tag,
      title: 'BEST PRICES',
      description: 'Premium looks, worth every penny',
    },
    {
      icon: Package,
      title: 'PERSONALIZED SERVICE',
      description: 'Find the perfect fit with our styling help',
    },
  ];

  return (
    <section id="services" className="py-16 sm:py-20 bg-white text-black font-sans border-t border-neutral-200">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <div className="mb-10 text-left">
          <span className="text-xs sm:text-sm tracking-[0.2em] text-neutral-500 uppercase font-semibold block">
            OUR SERVICES
          </span>
        </div>

        {/* 4-Column Horizontal Items Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-8">
          {services.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div key={idx} className="flex items-center gap-4 text-left">
                <div className="shrink-0 text-black">
                  <Icon className="w-9 h-9 stroke-[1.25]" />
                </div>
                <div>
                  <h3 className="text-xs sm:text-sm font-bold tracking-wider text-black uppercase leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-xs text-neutral-600 font-normal leading-snug mt-1">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
