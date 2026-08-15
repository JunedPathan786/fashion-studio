import React, { useEffect } from 'react';
import { X, MessageCircle, Sparkles } from 'lucide-react';
import { CollectionItem } from '../types';
import { STORE_INFO } from '../data/fashionData';

interface ProductModalProps {
  item: CollectionItem | null;
  onClose: () => void;
}

export const ProductModal: React.FC<ProductModalProps> = ({ item, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (item) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [item, onClose]);

  if (!item) return null;

  const handleWhatsAppInquire = () => {
    const message = `Hello Fashion Studio 47! I'm interested in *${item.title}* (${item.category}) featured on your website. Is it currently in stock at your Belapur studio?`;
    window.open(`https://wa.me/${STORE_INFO.whatsappNumber}?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-sm animate-fadeIn font-sans">
      {/* Backdrop click */}
      <div className="absolute inset-0" onClick={onClose} />

      <div className="relative w-full max-w-4xl bg-neutral-900 border border-neutral-800 shadow-2xl overflow-hidden z-10 grid grid-cols-1 md:grid-cols-12 text-white">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 bg-black text-white hover:bg-neutral-800 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Product Image on Left */}
        <div className="md:col-span-5 relative aspect-[3/4] md:aspect-auto overflow-hidden bg-black">
          <img
            src={item.image}
            alt={item.title}
            className="w-full h-full object-cover object-center filter brightness-95"
            referrerPolicy="no-referrer"
          />
          <div className="absolute top-4 left-4">
            <span className="px-3 py-1 bg-black text-white text-[10px] uppercase tracking-wider font-bold">
              {item.tag}
            </span>
          </div>
        </div>

        {/* Product Details on Right */}
        <div className="md:col-span-7 p-6 sm:p-8 flex flex-col justify-between space-y-6 text-left">
          <div>
            <div className="text-[11px] tracking-[0.2em] uppercase text-neutral-400 font-semibold">
              FASHION STUDIO 47 • {item.category.toUpperCase()}
            </div>
            
            <h3 className="text-2xl sm:text-3xl font-black uppercase text-white tracking-tight mt-2">
              {item.title}
            </h3>

            <p className="mt-4 text-xs sm:text-sm text-neutral-300 font-normal leading-relaxed">
              {item.description}
            </p>

            {/* Specifications */}
            <div className="mt-6 space-y-3 pt-4 border-t border-neutral-800 text-xs">
              {item.fabric && (
                <div className="flex items-center justify-between">
                  <span className="text-neutral-400 uppercase tracking-wider">Fabric & Material</span>
                  <span className="text-white font-medium">{item.fabric}</span>
                </div>
              )}

              {item.fit && (
                <div className="flex items-center justify-between">
                  <span className="text-neutral-400 uppercase tracking-wider">Fit Profile</span>
                  <span className="text-white font-medium">{item.fit}</span>
                </div>
              )}

              {item.sizes && item.sizes.length > 0 && (
                <div className="flex items-center justify-between">
                  <span className="text-neutral-400 uppercase tracking-wider">Available Sizes</span>
                  <div className="flex gap-1.5">
                    {item.sizes.map((s) => (
                      <span key={s} className="px-2 py-0.5 bg-neutral-800 text-white text-[11px] font-semibold">
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {item.colors && item.colors.length > 0 && (
                <div className="flex items-center justify-between">
                  <span className="text-neutral-400 uppercase tracking-wider">Color Options</span>
                  <span className="text-white">{item.colors.join(', ')}</span>
                </div>
              )}
            </div>

            {/* Studio Note */}
            <div className="mt-6 p-3 bg-neutral-800/60 border border-neutral-700 flex items-center gap-2.5 text-xs text-neutral-300">
              <Sparkles className="w-4 h-4 text-white shrink-0" />
              <span>Available in-store at Belapur (BK). Walk-in to try on or message for stock check.</span>
            </div>
          </div>

          {/* Action CTAs */}
          <div className="pt-4 border-t border-neutral-800 flex flex-col sm:flex-row gap-3">
            <button
              onClick={handleWhatsAppInquire}
              className="flex-1 py-3.5 bg-white text-black hover:bg-neutral-200 font-bold text-xs uppercase tracking-wider transition-colors flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Inquire on WhatsApp</span>
            </button>

            <a
              href={`tel:${STORE_INFO.phone}`}
              className="py-3.5 px-6 border border-neutral-700 hover:bg-neutral-800 text-white font-semibold text-xs uppercase tracking-wider transition-colors text-center"
            >
              Call Studio
            </a>
          </div>

        </div>

      </div>
    </div>
  );
};
