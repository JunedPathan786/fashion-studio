import React, { useState } from 'react';
import { X, MessageCircle, Phone, Sparkles, MapPin, Check, Send } from 'lucide-react';
import { STORE_INFO } from '../data/fashionData';

interface QuickInquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const QuickInquiryModal: React.FC<QuickInquiryModalProps> = ({ isOpen, onClose }) => {
  const [name, setName] = useState('');
  const [occasion, setOccasion] = useState('Casual / Everyday Wear');
  const [sizePreference, setSizePreference] = useState('M');
  const [customNote, setCustomNote] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `*VIP Styling & Collection Inquiry - Fashion Studio 47*%0A*Name:* ${encodeURIComponent(
      name || 'Guest'
    )}%0A*Looking For:* ${encodeURIComponent(occasion)}%0A*Preferred Size:* ${encodeURIComponent(
      sizePreference
    )}%0A*Details:* ${encodeURIComponent(customNote || 'Please share available styles at Belapur studio.')}`;
    
    window.open(`https://wa.me/${STORE_INFO.whatsappNumber}?text=${text}`, '_blank');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md animate-fadeIn">
      <div className="absolute inset-0" onClick={onClose} />

      <div className="relative w-full max-w-lg bg-[#121214] border border-white/15 shadow-2xl p-6 sm:p-8 text-white z-10">
        
        {/* Header */}
        <div className="flex items-start justify-between pb-4 border-b border-white/10">
          <div>
            <div className="flex items-center gap-2 text-[#dfba73] text-[10px] uppercase font-mono tracking-widest font-bold">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Fashion Studio 47 Belapur</span>
            </div>
            <h3 className="font-luxury text-xl sm:text-2xl font-bold uppercase text-white mt-1">
              VIP STYLING & INQUIRY
            </h3>
            <p className="text-xs text-white/60 font-light mt-0.5">
              Connect directly with our master stylists near Jhenda Chowk.
            </p>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 text-white/60 hover:text-white bg-white/5 border border-white/10"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="mt-6 space-y-4 text-xs">
          <div>
            <label className="block text-white/70 uppercase tracking-wider font-mono text-[10px] mb-1.5">
              Your Name
            </label>
            <input
              type="text"
              required
              placeholder="e.g. Rahul Sharma"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full bg-black/60 border border-white/15 px-3.5 py-2.5 text-white placeholder-white/40 focus:outline-none focus:border-[#dfba73]"
            />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-white/70 uppercase tracking-wider font-mono text-[10px] mb-1.5">
                Outfit Occasion
              </label>
              <select
                value={occasion}
                onChange={(e) => setOccasion(e.target.value)}
                className="w-full bg-black/60 border border-white/15 px-3 py-2.5 text-white focus:outline-none focus:border-[#dfba73]"
              >
                <option value="Casual / Everyday Wear">Everyday Casual</option>
                <option value="Formal & Festive">Formal / Festive</option>
                <option value="Streetwear & Hoodies">Streetwear Cuts</option>
                <option value="Accessories & Belts">Accessories & Belts</option>
              </select>
            </div>

            <div>
              <label className="block text-white/70 uppercase tracking-wider font-mono text-[10px] mb-1.5">
                Preferred Size
              </label>
              <select
                value={sizePreference}
                onChange={(e) => setSizePreference(e.target.value)}
                className="w-full bg-black/60 border border-white/15 px-3 py-2.5 text-white focus:outline-none focus:border-[#dfba73]"
              >
                <option value="S">Small (S / 38)</option>
                <option value="M">Medium (M / 40)</option>
                <option value="L">Large (L / 42)</option>
                <option value="XL">X-Large (XL / 44)</option>
                <option value="XXL">XX-Large (XXL / 46)</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-white/70 uppercase tracking-wider font-mono text-[10px] mb-1.5">
              Specific Request / Colors (Optional)
            </label>
            <textarea
              rows={3}
              placeholder="e.g. Looking for linen shirts in earthy tones or tailored beige chinos..."
              value={customNote}
              onChange={(e) => setCustomNote(e.target.value)}
              className="w-full bg-black/60 border border-white/15 px-3.5 py-2 text-white placeholder-white/40 focus:outline-none focus:border-[#dfba73] resize-none"
            />
          </div>

          <div className="pt-2 flex flex-col gap-2.5">
            <button
              type="submit"
              className="w-full py-3.5 bg-[#25D366] hover:bg-[#20bd5a] text-black font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Send Message on WhatsApp</span>
            </button>

            <a
              href={`tel:${STORE_INFO.phone}`}
              className="w-full py-3 bg-white/10 hover:bg-white/15 text-white text-center font-semibold uppercase tracking-wider transition-all border border-white/10 flex items-center justify-center gap-2"
            >
              <Phone className="w-3.5 h-3.5 text-[#dfba73]" />
              <span>Call: {STORE_INFO.phone}</span>
            </a>
          </div>
        </form>

        <div className="mt-4 pt-4 border-t border-white/5 flex items-center justify-between text-[10px] text-white/40">
          <span>Location: Nearby Jhenda Chowk, Belapur (BK)</span>
          <span>Open 10 AM - 9 PM</span>
        </div>

      </div>
    </div>
  );
};
