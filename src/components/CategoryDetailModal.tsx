import React, { useEffect } from 'react';
import { X, MessageCircle, Eye } from 'lucide-react';
import { CollectionCategory, CollectionItem } from '../types';
import { STORE_INFO } from '../data/fashionData';

interface CategoryDetailModalProps {
  category: CollectionCategory | null;
  onClose: () => void;
  onSelectItem: (item: CollectionItem) => void;
}

export const CategoryDetailModal: React.FC<CategoryDetailModalProps> = ({
  category,
  onClose,
  onSelectItem,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (category) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [category, onClose]);

  if (!category) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-sm animate-fadeIn font-sans">
      <div className="absolute inset-0" onClick={onClose} />

      <div className="relative w-full max-w-5xl bg-neutral-900 border border-neutral-800 shadow-2xl overflow-hidden z-10 p-6 sm:p-8 text-white max-h-[90vh] overflow-y-auto">
        
        {/* Header */}
        <div className="flex items-center justify-between pb-6 border-b border-neutral-800 text-left">
          <div>
            <span className="text-[11px] tracking-[0.2em] uppercase text-neutral-400 font-semibold block mb-1">
              FASHION STUDIO 47 COLLECTION
            </span>
            <h3 className="text-2xl sm:text-3xl font-black uppercase text-white tracking-tight">
              {category.name}
            </h3>
            <p className="text-xs sm:text-sm text-neutral-400 mt-1 font-normal">
              {category.description}
            </p>
          </div>

          <button
            onClick={onClose}
            className="p-2 bg-black text-white hover:bg-neutral-800 transition-colors"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Featured Items in Category */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {category.featuredItems.map((item) => (
            <div
              key={item.id}
              className="group bg-neutral-950 border border-neutral-800 overflow-hidden flex flex-col text-left"
            >
              <div className="relative aspect-[3/4] overflow-hidden bg-black">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-3 left-3 px-2.5 py-0.5 bg-black text-[10px] uppercase font-bold text-white">
                  {item.tag}
                </div>
              </div>

              <div className="p-4 flex-1 flex flex-col justify-between">
                <div>
                  <h4 className="text-sm font-bold uppercase text-white">
                    {item.title}
                  </h4>
                  <p className="text-xs text-neutral-400 mt-1 line-clamp-2 font-normal">
                    {item.description}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-neutral-800 flex items-center justify-between">
                  <button
                    onClick={() => {
                      onClose();
                      onSelectItem(item);
                    }}
                    className="text-xs font-semibold uppercase text-white hover:text-neutral-300 flex items-center gap-1.5"
                  >
                    <Eye className="w-3.5 h-3.5" />
                    <span>View Details</span>
                  </button>

                  <a
                    href={`https://wa.me/${STORE_INFO.whatsappNumber}?text=Hi%20Fashion%20Studio%2047,%20is%20${encodeURIComponent(
                      item.title
                    )}%20available?`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-bold text-white hover:underline flex items-center gap-1.5"
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                    <span>Inquire</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer info in Modal */}
        <div className="mt-8 p-4 bg-neutral-950 border border-neutral-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-400">
          <span>More cuts, colorways and personalized fitting available in our Belapur studio.</span>
          <a
            href={STORE_INFO.whatsappGroupUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 bg-white hover:bg-neutral-200 text-black font-bold text-xs uppercase tracking-wider whitespace-nowrap transition-colors"
          >
            Join WhatsApp Group
          </a>
        </div>

      </div>
    </div>
  );
};
