import React, { useState } from 'react';
import { Eye, MessageCircle, Sparkles } from 'lucide-react';
import { ACCESSORY_PRODUCTS, STORE_INFO } from '../data/fashionData';
import { AccessoryProduct } from '../types';

interface AccessoriesSectionProps {
  onSelectAccessory: (item: AccessoryProduct) => void;
}

export const AccessoriesSection: React.FC<AccessoriesSectionProps> = ({
  onSelectAccessory,
}) => {
  const [activeTab, setActiveTab] = useState<'All' | 'Watches' | 'Sunglasses' | 'Belts'>('All');

  const filteredProducts = activeTab === 'All'
    ? ACCESSORY_PRODUCTS
    : ACCESSORY_PRODUCTS.filter((item) => item.category === activeTab);

  const tabs: ('All' | 'Watches' | 'Sunglasses' | 'Belts')[] = [
    'All',
    'Watches',
    'Sunglasses',
    'Belts',
  ];

  const handleWhatsAppOrder = (item: AccessoryProduct, e: React.MouseEvent) => {
    e.stopPropagation();
    const msg = `Hello Fashion Studio 47! I'd like to buy / check stock for the *${item.title}* (${item.category}, Price: ${item.price}) available at your Belapur studio.`;
    window.open(`https://wa.me/${STORE_INFO.whatsappNumber}?text=${encodeURIComponent(msg)}`, '_blank');
  };

  return (
    <section id="accessories" className="py-20 bg-neutral-950 text-white font-sans border-t border-neutral-900">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 pb-4 border-b border-neutral-800">
          <div className="text-left">
            <div className="flex items-center gap-2 text-xs sm:text-sm tracking-[0.2em] text-neutral-400 uppercase font-semibold mb-1">
              <span>FINISHING TOUCHES</span>
              <span className="text-[9px] text-neutral-600">▪</span>
              <span>IN-STORE & ONLINE</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-white uppercase">
              WATCHES, SUNGLASSES & BELTS
            </h2>
            <p className="text-xs sm:text-sm text-neutral-400 mt-1 font-normal max-w-xl">
              Elevate every outfit with our curated range of precision timepieces, UV400 polarized shades, and genuine leather belts.
            </p>
          </div>

          {/* Category Filter Tabs */}
          <div className="mt-6 md:mt-0 flex flex-wrap gap-2">
            {tabs.map((tab) => {
              const isActive = activeTab === tab;
              return (
                <button
                  key={tab}
                  id={`tab-accessory-${tab.toLowerCase()}`}
                  onClick={() => setActiveTab(tab)}
                  className={`text-xs font-bold uppercase tracking-wider px-4 py-2 transition-all duration-200 ${
                    isActive
                      ? 'bg-white text-black shadow-md'
                      : 'bg-neutral-900 text-neutral-400 hover:text-white hover:bg-neutral-800 border border-neutral-800'
                  }`}
                >
                  {tab === 'All' ? 'ALL ACCESSORIES' : tab}
                </button>
              );
            })}
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              id={`accessory-card-${product.id}`}
              onClick={() => onSelectAccessory(product)}
              className="group bg-neutral-900/90 border border-neutral-800 overflow-hidden flex flex-col justify-between hover:border-neutral-700 transition-all duration-300 cursor-pointer shadow-lg hover:shadow-2xl text-left"
            >
              {/* Product Image Stage */}
              <div className="relative aspect-square overflow-hidden bg-neutral-950">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
                  referrerPolicy="no-referrer"
                />

                {/* Badge Tag */}
                <div className="absolute top-3 left-3 flex flex-col gap-1.5 z-10">
                  <span className="px-2.5 py-1 bg-black/90 backdrop-blur-sm text-[10px] uppercase font-bold text-white tracking-wider border border-white/10">
                    {product.tag}
                  </span>
                  <span className="px-2.5 py-0.5 bg-white/95 text-[9px] uppercase font-extrabold text-black tracking-wider">
                    {product.category}
                  </span>
                </div>

                {/* Quick View Hover Prompt */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center pointer-events-none">
                  <span className="bg-white text-black px-4 py-2 text-xs font-bold uppercase tracking-wider shadow-lg flex items-center gap-1.5">
                    <Eye className="w-3.5 h-3.5" />
                    <span>Quick View</span>
                  </span>
                </div>
              </div>

              {/* Product Content Details */}
              <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  {/* Title */}
                  <h3 className="text-sm sm:text-base font-bold text-white uppercase tracking-tight group-hover:text-neutral-200 transition-colors line-clamp-2">
                    {product.title}
                  </h3>

                  {/* Pricing */}
                  <div className="flex items-baseline gap-2.5 mt-2">
                    <span className="text-base sm:text-lg font-black text-white">
                      {product.price}
                    </span>
                    {product.originalPrice && (
                      <span className="text-xs text-neutral-500 line-through">
                        {product.originalPrice}
                      </span>
                    )}
                    <span className="text-[10px] font-semibold text-emerald-400 uppercase tracking-wide ml-auto">
                      In Stock
                    </span>
                  </div>

                  {/* Short description */}
                  <p className="text-xs text-neutral-400 mt-2 line-clamp-2 font-normal leading-relaxed">
                    {product.description}
                  </p>

                  {/* Highlights pills */}
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {product.features.slice(0, 2).map((feat, i) => (
                      <span
                        key={i}
                        className="text-[10px] bg-neutral-800 text-neutral-300 px-2 py-0.5"
                      >
                        {feat}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Direct Action Buttons */}
                <div className="pt-3 border-t border-neutral-800/80 flex items-center gap-2">
                  <button
                    type="button"
                    onClick={(e) => handleWhatsAppOrder(product, e)}
                    className="flex-1 py-2.5 px-3 bg-white hover:bg-neutral-200 text-black text-xs font-bold uppercase tracking-wider transition-colors flex items-center justify-center gap-1.5 shadow-sm active:scale-95"
                    title="Buy / Inquire on WhatsApp"
                  >
                    <MessageCircle className="w-3.5 h-3.5 text-emerald-600 fill-emerald-600" />
                    <span>Inquire / Buy</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => onSelectAccessory(product)}
                    className="p-2.5 border border-neutral-700 hover:border-white text-neutral-300 hover:text-white transition-colors"
                    title="View Details"
                    aria-label="View Details"
                  >
                    <Eye className="w-4 h-4" />
                  </button>
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* In-Store Styling Banner Note */}
        <div className="mt-12 p-6 bg-neutral-900 border border-neutral-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-left">
          <div className="flex items-center gap-3.5">
            <div className="p-3 bg-neutral-800 text-white shrink-0">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-white">
                Looking for a Custom Fit or Gift Box Set?
              </h4>
              <p className="text-xs text-neutral-400 mt-0.5">
                Visit our Belapur (BK) studio to try on watches, customize belt lengths on-spot, or get styling consultation.
              </p>
            </div>
          </div>

          <a
            href={`https://wa.me/${STORE_INFO.whatsappNumber}?text=Hi%20Fashion%20Studio%2047,%20I'm%20interested%20in%20accessories%20(Watches,%20Belts,%20Sunglasses)%20at%20your%20Belapur%20store.`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-6 py-3 bg-white hover:bg-neutral-200 text-black text-xs font-bold uppercase tracking-wider whitespace-nowrap transition-colors text-center"
          >
            Chat with Stylist
          </a>
        </div>

      </div>
    </section>
  );
};
