import { motion } from "framer-motion";

export const BlackFridayBanner = () => {
  const text = "Black Friday Angebot • -20% Rabatt • Nur bis zum 01.12. • Jetzt sichern";
  
  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-black text-white overflow-hidden py-3">
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
