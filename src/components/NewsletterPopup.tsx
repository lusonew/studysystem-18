import { useState, useEffect } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";

export const NewsletterPopup = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const hasSeenPopup = localStorage.getItem("newsletter-popup-seen");
    
    if (!hasSeenPopup) {
      const timer = setTimeout(() => {
        setIsOpen(true);
      }, 3000);
      
      return () => clearTimeout(timer);
    }
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    localStorage.setItem("newsletter-popup-seen", "true");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!firstName.trim() || !email.trim()) {
      toast.error("Bitte fülle alle Felder aus");
      return;
    }

    if (!email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
      toast.error("Bitte gib eine gültige E-Mail-Adresse ein");
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("https://hook.eu2.make.com/3bkx342t72ge3re7fhsblisr1teiq47h", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          firstName: firstName.trim(),
          email: email.trim(),
        }),
      });

      if (response.ok) {
        toast.success("Gutschein wurde verschickt! Check deine E-Mails 📧");
        handleClose();
      } else {
        toast.error("Ein Fehler ist aufgetreten. Bitte versuche es erneut.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error("Ein Fehler ist aufgetreten. Bitte versuche es erneut.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="max-w-[90vw] sm:max-w-md md:max-w-4xl p-0 gap-0 bg-gradient-to-br from-amber-50 via-amber-50/50 to-white border-border mx-auto my-6 rounded-xl overflow-hidden">
        <div className="flex flex-col md:flex-row">
          {/* Left side - Image */}
          <div className="flex-1 bg-gradient-to-br from-amber-50 via-amber-50/50 to-white p-4 sm:p-8 flex items-center justify-center">
            <img
              src="/assets/newsletter-popup.png"
              alt="Newsletter Rabatt"
              className="w-full h-auto max-w-xs sm:max-w-md rounded-lg shadow-lg"
            />
          </div>
          
          {/* Right side - Content */}
          <div className="flex-1 p-4 sm:p-8 flex flex-col justify-center">
            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
              <div>
                <h2 className="text-lg sm:text-2xl font-bold text-foreground mb-2">
                  Lust auf 5€ Rabatt?
                </h2>
                <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
                  Werde Teil der wöchentlichen Newton Notes mit exklusiven Tipps für deine Produktivität und erhalte zum Start einen exklusiven 5€ Rabatt-Gutschein.
                </p>
              </div>
              
              <div className="space-y-4">
                <div>
                  <Label htmlFor="firstName" className="text-sm font-medium">
                    Vorname *
                  </Label>
                  <Input
                    id="firstName"
                    type="text"
                    placeholder="Dein Vorname"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    required
                    className="mt-1"
                  />
                </div>
                
                <div>
                  <Label htmlFor="email" className="text-sm font-medium">
                    E-Mail-Adresse *
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="deine@email.de"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="mt-1"
                  />
                </div>
              </div>
              
              <div className="space-y-3">
                <Button 
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-amber-500 hover:bg-amber-600 text-white font-medium py-2 sm:py-3"
                  size="lg"
                >
                  {isSubmitting ? "Wird gesendet..." : "Gutschein sichern"}
                </Button>
                
                <Button 
                  type="button"
                  onClick={handleClose}
                  variant="outline"
                  className="w-full font-medium py-2 sm:py-3"
                  size="lg"
                >
                  Ich möchte keinen Gutschein haben
                </Button>
              </div>
            </form>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
