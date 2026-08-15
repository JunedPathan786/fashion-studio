import React, { useState } from 'react';
import { MessageCircle, X, Users, Sparkles, Phone, MapPin } from 'lucide-react';
import { STORE_INFO } from '../data/fashionData';

export const WhatsAppFloatingButton: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end">
      
      {/* Floating Popup Card */}
      {isOpen && (
        <div className="mb-3 w-72 sm:w-80 bg-[#121214] border border-white/20 shadow-2xl p-5 text-white animate-fadeIn">
          <div className="flex items-start justify-between pb-3 border-b border-white/10">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full bg-[#25D366]/20 border border-[#25D366]/40 flex items-center justify-center text-[#25D366]">
                <MessageCircle className="w-4 h-4" />
              </div>
              <div>
                <h4 className="font-luxury text-xs font-bold uppercase text-white">
                  Fashion Studio 47
                </h4>
                <span className="text-[10px] text-green-400 font-mono flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                  Online & Active
                </span>
              </div>
            </div>

            <button
              onClick={() => setIsOpen(false)}
              className="text-white/50 hover:text-white"
              aria-label="Close"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <p className="text-xs text-white/70 my-3 font-light leading-relaxed">
            Need sizing advice, new arrivals info, or directions to our Belapur studio?
          </p>

          <div className="space-y-2">
            <a
              href={`https://wa.me/${STORE_INFO.whatsappNumber}?text=Hi%20Fashion%20Studio%2047,%20I'm%20looking%20for%20men's%20clothing%20at%20your%20Belapur%20store.`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2.5 px-3 bg-[#25D366] hover:bg-[#20bd5a] text-black font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Chat on WhatsApp</span>
            </a>

            <a
              href={STORE_INFO.whatsappGroupUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2 px-3 bg-white/10 hover:bg-white/15 text-white font-medium text-[11px] uppercase tracking-wider transition-all flex items-center justify-center gap-2 border border-white/10"
            >
              <Users className="w-3.5 h-3.5 text-[#dfba73]" />
              <span>Join WhatsApp VIP Group</span>
            </a>
          </div>

          <div className="mt-3 pt-2 border-t border-white/5 flex items-center justify-between text-[10px] text-white/40">
            <span>Call: {STORE_INFO.phone}</span>
            <span>Jhenda Chowk, Belapur</span>
          </div>
        </div>
      )}

      {/* Main Toggle Button */}
      <button
        id="floating-whatsapp-btn"
        onClick={() => setIsOpen(!isOpen)}
        className="group flex items-center gap-2 px-4 py-3 bg-[#25D366] hover:bg-[#20bd5a] text-black font-bold shadow-2xl rounded-full transition-all duration-300 transform hover:scale-105 active:scale-95"
        aria-label="Open WhatsApp options"
      >
        <MessageCircle className="w-5 h-5 fill-black text-[#25D366]" />
        <span className="text-xs uppercase tracking-wider hidden sm:inline font-bold">
          {isOpen ? 'Close' : 'Chat with Studio'}
        </span>
      </button>

    </div>
  );
};
