import { motion } from "framer-motion";
import { X } from "lucide-react";
import { useState } from "react";

export const BlackFridayBanner = () => {
  const [isVisible, setIsVisible] = useState(true);
  
  if (!isVisible) return null;
  
  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-black text-white overflow-hidden py-3">
      <button
        onClick={() => setIsVisible(false)}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-10 hover:bg-white/10 rounded-full p-1 transition-colors"
        aria-label="Banner schließen"
      >
        <X className="w-5 h-5" />
      </button>
      <div className="flex whitespace-nowrap">
        <motion.div
          className="flex items-center gap-8 text-sm sm:text-base font-medium"
          animate={{
            x: [0, -1000],
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 20,
              ease: "linear",
            },
          }}
        >
          {/* Repeat the text multiple times to create seamless loop */}
          {Array.from({ length: 10 }).map((_, index) => (
            <div key={index} className="flex items-center gap-8">
              <span>Black Friday Angebot</span>
              <span className="text-2xl">•</span>
              <span>-20% Rabatt</span>
              <span className="text-2xl">•</span>
              <span>Nur bis zum 01.12.</span>
              <span className="text-2xl">•</span>
              <span>Jetzt sichern</span>
              <span className="text-2xl">•</span>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};
