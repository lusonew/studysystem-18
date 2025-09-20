import { useState, useEffect } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { OptimizedImage } from "@/components/ui/optimized-image";

export const RelaunchPopup = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Check if popup has been shown before
    const hasSeenPopup = localStorage.getItem("relaunch-popup-seen");
    
    if (!hasSeenPopup) {
      // Show popup after a short delay
      const timer = setTimeout(() => {
        setIsOpen(true);
      }, 1000);
      
      return () => clearTimeout(timer);
    }
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    localStorage.setItem("relaunch-popup-seen", "true");
  };

  const handleStartNow = () => {
    handleClose();
    // Scroll to pricing section or handle navigation
    const pricingSection = document.querySelector('[data-section="pricing"]');
    if (pricingSection) {
      pricingSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleLearnMore = () => {
    handleClose();
    // Scroll to features or handle navigation
    const featuresSection = document.querySelector('[data-section="features"]');
    if (featuresSection) {
      featuresSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="max-w-4xl sm:max-w-md md:max-w-4xl p-0 gap-0 bg-gradient-to-br from-amber-50 via-amber-50/50 to-white border-border m-6 sm:m-6 rounded-xl overflow-hidden">
        <div className="flex flex-col md:flex-row">
          {/* Left side - Image */}
          <div className="flex-1 bg-gradient-to-br from-amber-50 via-amber-50/50 to-white p-4 sm:p-8 flex items-center justify-center">
            <OptimizedImage
              src="/assets/sale-thumbnail.jpg"
              alt="Study System PRO 30% Rabatt"
              className="w-full h-auto max-w-xs sm:max-w-md rounded-lg shadow-lg"
              width={400}
              height={300}
            />
          </div>
          
          {/* Right side - Content */}
          <div className="flex-1 p-4 sm:p-8 flex flex-col justify-center">
            <div className="space-y-4 sm:space-y-6">
              <div>
                <h2 className="text-lg sm:text-2xl font-bold text-foreground mb-2">
                  Back To Uni Relaunch 📚
                </h2>
                <p className="text-muted-foreground text-sm sm:text-lg leading-relaxed">
                  Die neue Version des Study Systems ist passend zum Semesterstart verfügbar! 
                  Sichere dir das beliebeste System für kurze Zeit mit 30% Rabatt.
                </p>
              </div>
              
              <div className="space-y-3">
                <Button 
                  onClick={handleStartNow}
                  className="w-full bg-amber-500 hover:bg-amber-600 text-white font-medium py-2 sm:py-3"
                  size="lg"
                >
                  Jetzt starten
                </Button>
                
                <button
                  onClick={handleLearnMore}
                  className="w-full text-muted-foreground hover:text-foreground transition-colors text-sm font-medium py-2"
                >
                  Mehr erfahren
                </button>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};