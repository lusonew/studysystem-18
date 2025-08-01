
import { motion } from "framer-motion";
import { Plus } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { useIsMobile } from "@/hooks/use-mobile";
import PricingCard from "./pricing/PricingCard";
import type { PricingFeatureGroup } from "./pricing/PricingCard";

export const Pricing = () => {
  const isMobile = useIsMobile();

  // Define the pricing data for both tiers
  const basicPricingFeatures: PricingFeatureGroup[] = [{
    title: "Das Study System",
    items: ["Haus-/Abschlussarbeiten-System", "Lernaufgaben-Dashboard", "Klausuren-Countdown", "Seiten für jedes Fach (Vorlesungsnotizen, Zusammenfassung etc.)", "und vieles mehr"]
  }, {
    title: "Dashboard",
    items: ["Startseite für dein Notion-System", "Inbox", "Schnellzugriffe"]
  }];

  const proPricingFeatures: PricingFeatureGroup[] = [{
    title: "Teil 1: Das Study System",
    items: ["Haus-/Abschlussarbeiten-System", "Lernaufgaben-Dashboard", "Klausuren-Countdown", "Seiten für jedes Fach (Vorlesungsnotizen, Zusammenfassung etc.)", "und vieles mehr"]
  }, {
    title: "Teil 2: Zugang zur Studium-Erfolgsformel (Videokurs)",
    items: ["Nie wieder Probleme mit Lernmotivation", "Klare Ziele definieren", "Anti-Ziele entwickeln", "Gewohnheiten etablieren", "und viele weitere Aspekte"]
  }, {
    title: "Teil 3: Life Center",
    items: ["Profi Habit Tracker", "Finanzplaner", "Workout Tracker", "Tagesplaner", "etc."]
  }];

  return (
    <section id="pricing" className="py-24 bg-white">
      <div className="container mx-auto px-3 md:px-40">
        <motion.div initial={{
        opacity: 0,
        y: 20
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true,
        margin: "-50px"
      }} transition={{
        duration: 0.4,
        ease: "easeOut"
      }} className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Sichere dir jetzt dein smartes System</h2>
          <p className="text-xl text-gray-600 mb-6">Die Möglichkeit, dein Studium zu revolutionieren</p>
          
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col md:flex-row items-center justify-center gap-3"
          >
            <div className="flex items-center gap-3">
              <span className="text-lg font-semibold text-gray-900">4,9</span>
              <img 
                src="/lovable-uploads/45fd89e4-90b7-463a-8832-956858deec36.png" 
                alt="5 Sterne Bewertung" 
                className="h-6"
              />
            </div>
            <span className="text-lg text-gray-600">
              bei 159 Rezensionen auf{" "}
              <img 
                src="/lovable-uploads/f67852aa-bafe-4f23-82be-4369f750f591.png" 
                alt="Google" 
                className="h-5 inline-block"
              />
            </span>
          </motion.div>
          
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 1.9 }}
            className="w-64 h-0.5 bg-amber-500 mx-auto mt-4 origin-left"
          />
        </motion.div>

        <div className="max-w-4xl mx-auto flex justify-center">
          <PricingCard 
            title="Study System PRO" 
            price={<div className="flex items-center gap-2"><span className="text-2xl font-medium text-green-600">96€</span> <span className="text-sm text-gray-500">Einmalig</span></div>}
            features={proPricingFeatures} 
            imageUrl="/lovable-uploads/f44205c6-0d6a-4a94-b574-46b48d96287a.png" 
            ctaUrl="https://www.luisnewton.de/studypaket/buy" 
            bestSeller={true} 
            className="bg-gradient-to-br from-amber-50 to-white border-amber-200" 
            originalValue="139€" 
            additionalLink={{
              text: "Hier klicken für Kauf mit Klarna oder Apple/Google Pay",
              url: "https://buy.stripe.com/bIY8zygDgfm9c245ko"
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default Pricing;
