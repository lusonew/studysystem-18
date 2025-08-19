import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { X, Cookie, Settings } from "lucide-react";

export const CookieBanner = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showDetails, setShowDetails] = useState(false);

  useEffect(() => {
    // Check if user has already made a choice
    const cookieConsent = localStorage.getItem('cookieConsent');
    if (!cookieConsent) {
      setIsVisible(true);
    }
  }, []);

  const handleAcceptAll = () => {
    localStorage.setItem('cookieConsent', 'accepted');
    setIsVisible(false);
  };

  const handleDeclineAll = () => {
    localStorage.setItem('cookieConsent', 'declined');
    setIsVisible(false);
  };

  const handleAcceptSelected = () => {
    localStorage.setItem('cookieConsent', 'selected');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 100, opacity: 0 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-200 shadow-2xl"
      >
        <div className="container mx-auto px-4 py-6 max-w-6xl">
          <div className="flex items-start gap-4">
            <Cookie className="w-6 h-6 text-amber-600 mt-1 flex-shrink-0" />
            
            <div className="flex-1">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Wir verwenden Cookies
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Diese Website verwendet Cookies, um Ihnen die bestmögliche Nutzererfahrung zu bieten. 
                    Einige Cookies sind für die grundlegende Funktionalität erforderlich, während andere 
                    uns helfen, die Website zu verbessern und Ihnen relevante Inhalte anzuzeigen.
                  </p>
                </div>
                
                <button
                  onClick={() => setIsVisible(false)}
                  className="text-gray-400 hover:text-gray-600 p-1"
                  aria-label="Banner schließen"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {showDetails && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  className="mb-4 p-4 bg-amber-50 rounded-lg border border-amber-100"
                >
                  <h4 className="font-medium text-gray-900 mb-3">Cookie-Kategorien:</h4>
                  <div className="space-y-3 text-sm">
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="font-medium">Notwendige Cookies</span>
                        <p className="text-gray-600">Erforderlich für die grundlegende Funktionalität</p>
                      </div>
                      <span className="text-xs bg-gray-100 px-2 py-1 rounded text-gray-600">Immer aktiv</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="font-medium">Analytische Cookies</span>
                        <p className="text-gray-600">Helfen uns die Website zu verbessern</p>
                      </div>
                      <input type="checkbox" className="rounded border-gray-300" defaultChecked />
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="font-medium">Marketing Cookies</span>
                        <p className="text-gray-600">Ermöglichen personalisierte Werbung</p>
                      </div>
                      <input type="checkbox" className="rounded border-gray-300" />
                    </div>
                  </div>
                </motion.div>
              )}

              <div className="flex flex-col sm:flex-row gap-3">
                <Button
                  onClick={handleAcceptAll}
                  className="bg-amber-500 hover:bg-amber-600 text-white px-6"
                >
                  Alle akzeptieren
                </Button>
                
                <Button
                  onClick={handleDeclineAll}
                  variant="outline"
                  className="border-gray-300 text-gray-700 hover:bg-gray-50 px-6"
                >
                  Alle ablehnen
                </Button>
                
                <Button
                  onClick={() => setShowDetails(!showDetails)}
                  variant="ghost"
                  className="text-amber-600 hover:text-amber-700 hover:bg-amber-50 px-4"
                >
                  <Settings className="w-4 h-4 mr-2" />
                  {showDetails ? 'Weniger' : 'Einstellungen'}
                </Button>
                
                {showDetails && (
                  <Button
                    onClick={handleAcceptSelected}
                    className="bg-amber-500 hover:bg-amber-600 text-white px-6"
                  >
                    Auswahl speichern
                  </Button>
                )}
              </div>
              
              <p className="text-xs text-gray-500 mt-3">
                Weitere Informationen finden Sie in unserer{" "}
                <a href="/datenschutz" className="text-amber-600 hover:text-amber-700 underline">
                  Datenschutzerklärung
                </a>
                {" "}und im{" "}
                <a href="/impressum" className="text-amber-600 hover:text-amber-700 underline">
                  Impressum
                </a>
                .
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};