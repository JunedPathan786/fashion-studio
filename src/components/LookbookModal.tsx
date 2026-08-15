import React, { useEffect } from 'react';
import { X, MessageCircle, ArrowRight, Sparkles } from 'lucide-react';
import { LookbookStory } from '../types';
import { STORE_INFO } from '../data/fashionData';

interface LookbookModalProps {
  story: LookbookStory | null;
  onClose: () => void;
}

export const LookbookModal: React.FC<LookbookModalProps> = ({ story, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (story) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [story, onClose]);

  if (!story) return null;

  const handleInquireStory = () => {
    const message = `Hello Fashion Studio 47! I love the look from your *${story.title}* (${story.subtitle}) editorial campaign. How can I get styled in this look at your Belapur studio?`;
    window.open(`https://wa.me/${STORE_INFO.whatsappNumber}?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/90 backdrop-blur-md animate-fadeIn">
      <div className="absolute inset-0" onClick={onClose} />

      <div className="relative w-full max-w-4xl bg-[#121214] border border-white/15 shadow-2xl overflow-hidden z-10 grid grid-cols-1 md:grid-cols-12 text-white">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 bg-black/70 hover:bg-black text-white/80 hover:text-white border border-white/10"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="md:col-span-6 relative aspect-[3/4] md:aspect-auto overflow-hidden bg-zinc-950">
          <img
            src={story.image}
            alt={story.title}
            className="w-full h-full object-cover object-center"
            referrerPolicy="no-referrer"
          />
        </div>

        <div className="md:col-span-6 p-6 sm:p-8 flex flex-col justify-between space-y-6">
          <div>
            <span className="text-[10px] tracking-[0.3em] uppercase text-[#dfba73] font-mono">
              {story.subtitle}
            </span>
            <h3 className="font-luxury text-2xl sm:text-3xl font-bold uppercase text-white tracking-wide mt-1">
              {story.title}
            </h3>
            <p className="mt-4 text-xs sm:text-sm text-white/70 font-light leading-relaxed">
              {story.caption}
            </p>

            <div className="mt-6 pt-4 border-t border-white/10">
              <span className="text-[10px] uppercase tracking-widest text-white/40 block mb-2 font-mono">
                Key Silhouettes & Elements
              </span>
              <div className="flex flex-wrap gap-2">
                {story.tags.map((t) => (
                  <span key={t} className="px-3 py-1 bg-white/5 border border-white/10 text-xs text-white/80">
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-6 p-3.5 bg-white/5 border border-white/10 text-xs text-white/70">
              <p className="font-medium text-white">Styling Note:</p>
              <p className="mt-1 text-[11px] text-white/60">
                Our in-house consultants at Belapur (BK) will help customize this entire ensemble to match your exact proportions.
              </p>
            </div>
          </div>

          <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row gap-3">
            <button
              onClick={handleInquireStory}
              className="flex-1 py-3.5 bg-[#25D366] hover:bg-[#20bd5a] text-black font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Get Styled on WhatsApp</span>
            </button>
            <a
              href="https://maps.google.com/?q=Jhenda+Chowk,+Belapur+(BK),+Maharashtra"
              target="_blank"
              rel="noopener noreferrer"
              className="py-3.5 px-5 bg-white text-black font-bold text-xs uppercase tracking-wider hover:bg-[#dfba73] transition-all text-center"
            >
              Visit Studio
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
