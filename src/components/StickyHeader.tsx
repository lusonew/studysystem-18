import { useState, useEffect } from "react";
import { Badge } from "@/components/ui/badge";
import { BookOpen } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export const StickyHeader = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show header when scrolled past hero section (approximately 100vh)
      const scrollPosition = window.scrollY;
      const heroHeight = window.innerHeight;
      setIsVisible(scrollPosition > heroHeight);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -100, opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-destructive/20 shadow-sm"
        >
          <div className="container mx-auto px-4 py-2">
            <div className="flex justify-center">
              <Badge 
                variant="destructive" 
                className="bg-destructive/10 text-destructive border-destructive/20 hover:bg-destructive/20 px-4 py-2 text-sm font-medium"
              >
                <BookOpen className="w-4 h-4 mr-2" />
                Back to Uni Relaunch 📚 -30% mit Code "RELAUNCH"
              </Badge>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};