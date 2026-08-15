import React, { useEffect, useState } from 'react';
import { X, MessageCircle, ShieldCheck, Check, Sparkles } from 'lucide-react';
import { AccessoryProduct } from '../types';
import { STORE_INFO } from '../data/fashionData';

interface AccessoryModalProps {
  product: AccessoryProduct | null;
  onClose: () => void;
}

export const AccessoryModal: React.FC<AccessoryModalProps> = ({ product, onClose }) => {
  const [selectedColor, setSelectedColor] = useState<string>('');

  useEffect(() => {
    if (product && product.colorOptions && product.colorOptions.length > 0) {
      setSelectedColor(product.colorOptions[0]);
    }
  }, [product]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (product) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [product, onClose]);

  if (!product) return null;

  const handleBuyOnWhatsApp = () => {
    const colorText = selectedColor ? ` (Selected Color: ${selectedColor})` : '';
    const message = `Hello Fashion Studio 47! I would like to purchase / inquire about *${product.title}*${colorText} priced at ${product.price}. Please let me know how to order or pick up at your Belapur studio.`;
    window.open(`https://wa.me/${STORE_INFO.whatsappNumber}?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-sm animate-fadeIn font-sans">
      <div className="absolute inset-0" onClick={onClose} />

      <div className="relative w-full max-w-4xl bg-neutral-900 border border-neutral-800 shadow-2xl overflow-hidden z-10 grid grid-cols-1 md:grid-cols-12 text-white max-h-[90vh] overflow-y-auto">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 bg-black text-white hover:bg-neutral-800 transition-colors"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Product Image on Left */}
        <div className="md:col-span-5 relative aspect-square md:aspect-auto overflow-hidden bg-black">
          <img
            src={product.image}
            alt={product.title}
            className="w-full h-full object-cover object-center filter brightness-95"
            referrerPolicy="no-referrer"
          />
          <div className="absolute top-4 left-4 flex flex-col gap-1.5">
            <span className="px-3 py-1 bg-black text-white text-[10px] uppercase tracking-wider font-bold border border-white/20">
              {product.tag}
            </span>
            <span className="px-3 py-0.5 bg-white text-black text-[10px] uppercase tracking-wider font-extrabold">
              {product.category}
            </span>
          </div>
        </div>

        {/* Product Content on Right */}
        <div className="md:col-span-7 p-6 sm:p-8 flex flex-col justify-between space-y-6 text-left">
          <div>
            <div className="text-[11px] tracking-[0.2em] uppercase text-neutral-400 font-semibold">
              FASHION STUDIO 47 • ACCESSORIES
            </div>

            <h3 className="text-2xl sm:text-3xl font-black uppercase text-white tracking-tight mt-1.5">
              {product.title}
            </h3>

            {/* Price section */}
            <div className="flex items-baseline gap-3 mt-3">
              <span className="text-2xl font-black text-white">
                {product.price}
              </span>
              {product.originalPrice && (
                <span className="text-sm text-neutral-500 line-through">
                  {product.originalPrice}
                </span>
              )}
              <span className="text-xs font-semibold text-emerald-400 uppercase tracking-wide bg-emerald-950/60 px-2 py-0.5 border border-emerald-800/40">
                In Stock Belapur
              </span>
            </div>

            {/* Description */}
            <p className="mt-4 text-xs sm:text-sm text-neutral-300 font-normal leading-relaxed">
              {product.description}
            </p>

            {/* Color selector if available */}
            {product.colorOptions && product.colorOptions.length > 0 && (
              <div className="mt-5 pt-4 border-t border-neutral-800">
                <span className="text-xs uppercase tracking-wider text-neutral-400 font-semibold block mb-2">
                  Select Color / Finish:
                </span>
                <div className="flex flex-wrap gap-2">
                  {product.colorOptions.map((c) => (
                    <button
                      key={c}
                      type="button"
                      onClick={() => setSelectedColor(c)}
                      className={`px-3 py-1.5 text-xs font-semibold uppercase tracking-wider transition-all flex items-center gap-1.5 ${
                        selectedColor === c
                          ? 'bg-white text-black ring-2 ring-white'
                          : 'bg-neutral-800 text-neutral-300 hover:bg-neutral-700'
                      }`}
                    >
                      {selectedColor === c && <Check className="w-3 h-3 text-black" />}
                      <span>{c}</span>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Specifications & Highlights */}
            <div className="mt-5 space-y-2.5 pt-4 border-t border-neutral-800 text-xs">
              <span className="text-xs uppercase tracking-wider text-neutral-400 font-semibold block mb-1">
                Specifications & Craftsmanship:
              </span>
              {product.specs && product.specs.map((sp, idx) => (
                <div key={idx} className="flex items-center justify-between text-neutral-300">
                  <span className="text-neutral-400">{sp.label}</span>
                  <span className="text-white font-medium">{sp.value}</span>
                </div>
              ))}
              <div className="pt-2">
                <ul className="space-y-1 text-neutral-300 list-disc list-inside text-xs">
                  {product.features.map((feat, i) => (
                    <li key={i}>{feat}</li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Trust badge */}
            <div className="mt-5 p-3 bg-neutral-800/60 border border-neutral-700 flex items-center gap-2.5 text-xs text-neutral-300">
              <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Available for instant pick-up or fast delivery across Ahmednagar district.</span>
            </div>
          </div>

          {/* Action CTAs */}
          <div className="pt-4 border-t border-neutral-800 flex flex-col sm:flex-row gap-3">
            <button
              onClick={handleBuyOnWhatsApp}
              className="flex-1 py-3.5 bg-white text-black hover:bg-neutral-200 font-bold text-xs uppercase tracking-wider transition-colors flex items-center justify-center gap-2 shadow-lg active:scale-95"
            >
              <MessageCircle className="w-4 h-4 text-emerald-600 fill-emerald-600" />
              <span>Buy / Inquire on WhatsApp</span>
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
