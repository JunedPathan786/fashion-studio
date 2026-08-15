import React, { useState } from 'react';
import { Eye, MessageCircle, Sparkles } from 'lucide-react';
import { CATEGORIES, STORE_INFO } from '../data/fashionData';
import { CollectionCategory, CollectionItem } from '../types';

interface CollectionSectionProps {
  onSelectItem: (item: CollectionItem) => void;
  onOpenCategory: (category: CollectionCategory) => void;
}

export const CollectionSection: React.FC<CollectionSectionProps> = ({
  onSelectItem,
  onOpenCategory,
}) => {
  const [activeTab, setActiveTab] = useState<string>('All');

  // Flatten clothing items across categories (Shirts, Trousers, T-Shirts, Hoodies)
  const clothingCategories = CATEGORIES.filter((c) => c.id !== 'accessories');
  const allItems: CollectionItem[] = clothingCategories.flatMap((c) => c.featuredItems);

  const filteredItems = activeTab === 'All'
    ? allItems
    : allItems.filter(
        (item) => item.category.toLowerCase() === activeTab.toLowerCase()
      );

  const tabs: string[] = [
    'All',
    'Shirts',
    'Trousers',
    'T-Shirts',
    'Hoodies',
  ];

  const handleWhatsAppOrder = (item: CollectionItem, e: React.MouseEvent) => {
    e.stopPropagation();
    const priceText = item.price ? ` (${item.price})` : '';
    const msg = `Hello Fashion Studio 47! I'd like to check availability and order the *${item.title}*${priceText} (${item.category}) from your Belapur studio collection.`;
    window.open(
      `https://wa.me/${STORE_INFO.whatsappNumber}?text=${encodeURIComponent(msg)}`,
      '_blank'
    );
  };

  return (
    <section id="collection" className="py-20 bg-white text-black font-sans border-t border-neutral-200">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 pb-4 border-b border-neutral-200">
          <div className="text-left">
            <div className="flex items-center gap-2 text-xs sm:text-sm tracking-[0.2em] text-neutral-500 uppercase font-semibold mb-1">
              <span>CURATED MENSWEAR</span>
              <span className="text-[9px] text-neutral-400">▪</span>
              <span>IN-STORE & ONLINE</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-black uppercase">
              OUR COLLECTION & NEW ARRIVALS
            </h2>
            <p className="text-xs sm:text-sm text-neutral-600 mt-1 font-normal max-w-xl">
              Explore handcrafted Cuban collar shirts, precision tailored trousers, 250 GSM heavyweight tees, and signature streetwear hoodies.
            </p>
          </div>

          {/* Category Filter Tabs */}
          <div className="mt-6 md:mt-0 flex flex-wrap gap-2">
            {tabs.map((tab) => {
              const isActive = activeTab === tab;
              return (
                <button
                  key={tab}
                  id={`tab-collection-${tab.toLowerCase()}`}
                  onClick={() => setActiveTab(tab)}
                  className={`text-xs font-bold uppercase tracking-wider px-4 py-2 transition-all duration-200 ${
                    isActive
                      ? 'bg-black text-white shadow-md'
                      : 'bg-neutral-100 text-neutral-700 hover:text-black hover:bg-neutral-200 border border-neutral-200'
                  }`}
                >
                  {tab === 'All' ? 'ALL COLLECTION' : tab}
                </button>
              );
            })}
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              id={`collection-card-${item.id}`}
              onClick={() => onSelectItem(item)}
              className="group bg-neutral-50 border border-neutral-200 overflow-hidden flex flex-col justify-between hover:border-black transition-all duration-300 cursor-pointer shadow-sm hover:shadow-xl text-left"
            >
              {/* Product Image Stage */}
              <div className="relative aspect-square overflow-hidden bg-neutral-100">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
                  referrerPolicy="no-referrer"
                />

                {/* Badge Tag */}
                <div className="absolute top-3 left-3 flex flex-col gap-1.5 z-10">
                  <span className="px-2.5 py-1 bg-black text-white text-[10px] uppercase font-bold tracking-wider shadow-sm">
                    {item.tag}
                  </span>
                  <span className="px-2.5 py-0.5 bg-white/95 text-[9px] uppercase font-extrabold text-black tracking-wider border border-neutral-200 shadow-sm">
                    {item.category}
                  </span>
                </div>

                {/* Quick View Hover Prompt */}
                <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center pointer-events-none">
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
                  <h3 className="text-sm sm:text-base font-bold text-black uppercase tracking-tight group-hover:text-neutral-700 transition-colors line-clamp-2">
                    {item.title}
                  </h3>

                  {/* Pricing */}
                  <div className="flex items-baseline gap-2.5 mt-2">
                    <span className="text-base sm:text-lg font-black text-black">
                      {item.price || 'Inquire Price'}
                    </span>
                    {item.originalPrice && (
                      <span className="text-xs text-neutral-400 line-through">
                        {item.originalPrice}
                      </span>
                    )}
                    <span className="text-[10px] font-bold text-emerald-700 uppercase tracking-wide bg-emerald-50 px-2 py-0.5 border border-emerald-200 ml-auto">
                      In Stock
                    </span>
                  </div>

                  {/* Short description */}
                  <p className="text-xs text-neutral-600 mt-2 line-clamp-2 font-normal leading-relaxed">
                    {item.description}
                  </p>

                  {/* Material / Fit Highlights */}
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {item.fabric && (
                      <span className="text-[10px] bg-neutral-200/80 text-neutral-800 font-medium px-2 py-0.5">
                        {item.fabric}
                      </span>
                    )}
                    {item.fit && (
                      <span className="text-[10px] bg-neutral-200/80 text-neutral-800 font-medium px-2 py-0.5">
                        {item.fit}
                      </span>
                    )}
                  </div>
                </div>

                {/* Direct Action Buttons */}
                <div className="pt-3 border-t border-neutral-200 flex items-center gap-2">
                  <button
                    type="button"
                    onClick={(e) => handleWhatsAppOrder(item, e)}
                    className="flex-1 py-2.5 px-3 bg-black hover:bg-neutral-800 text-white text-xs font-bold uppercase tracking-wider transition-colors flex items-center justify-center gap-1.5 shadow-sm active:scale-95"
                    title="Buy / Inquire on WhatsApp"
                  >
                    <MessageCircle className="w-3.5 h-3.5 text-emerald-400 fill-emerald-400" />
                    <span>Inquire / Buy</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => onSelectItem(item)}
                    className="p-2.5 border border-neutral-300 hover:border-black text-neutral-700 hover:text-black transition-colors"
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

        {/* Studio Fitting Bottom Banner */}
        <div className="mt-12 p-6 bg-neutral-100 border border-neutral-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-left">
          <div className="flex items-center gap-3.5">
            <div className="p-3 bg-black text-white shrink-0">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-black">
                Visit Our Belapur (BK) Studio For In-Person Fitting
              </h4>
              <p className="text-xs text-neutral-600 mt-0.5">
                Explore 100+ exclusive styles in-store nearby Jhenda Chowk. Personalized fitting and styling consultations available daily.
              </p>
            </div>
          </div>

          <a
            href={STORE_INFO.whatsappGroupUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-6 py-3 bg-black hover:bg-neutral-800 text-white text-xs font-bold uppercase tracking-wider whitespace-nowrap transition-colors text-center shadow-sm"
          >
            Join WhatsApp VIP Group
          </a>
        </div>

      </div>
    </section>
  );
};
