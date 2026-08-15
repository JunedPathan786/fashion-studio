import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { images } from '../assets/imageImports';

interface PreloaderProps {
  onLoadingComplete?: () => void;
}

export const Preloader: React.FC<PreloaderProps> = ({ onLoadingComplete }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Clean, quick load transition (800ms)
    const timer = setTimeout(() => {
      setIsVisible(false);
      if (onLoadingComplete) onLoadingComplete();
    }, 850);

    return () => clearTimeout(timer);
  }, [onLoadingComplete]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          id="preloader-overlay"
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            transition: { duration: 0.4, ease: 'easeInOut' },
          }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black text-white px-6 select-none"
        >
          {/* Centered Logo with Subtle Pulse */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
            className="flex flex-col items-center space-y-4"
          >
            {/* Logo Emblem */}
            <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full overflow-hidden border border-white/20 shadow-2xl bg-neutral-900">
              <img
                src={images.logo}
                alt="Fashion Studio 47 Logo"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>

            {/* Brand Title */}
            <div className="text-center">
              <h2 className="text-sm sm:text-base font-bold tracking-[0.25em] text-white uppercase">
                FASHION STUDIO 47
              </h2>
            </div>

            {/* Minimal Spinner / Animated Loading Line */}
            <div className="w-24 h-[1.5px] bg-neutral-800 overflow-hidden relative rounded-full mt-2">
              <motion.div
                className="h-full bg-white w-1/2 rounded-full"
                animate={{
                  x: ['-100%', '200%'],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 1,
                  ease: 'easeInOut',
                }}
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
