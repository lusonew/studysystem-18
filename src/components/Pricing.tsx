
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
          <p className="text-xl text-gray-600">Die Möglichkeit, dein Studium zu revolutionieren</p>
        </motion.div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
          <PricingCard 
            title="Study System" 
            price={<div className="flex items-center gap-2"><span className="text-2xl font-medium">49€</span> <span className="text-sm text-gray-500">Einmalig</span></div>}
            features={basicPricingFeatures} 
            imageUrl="/lovable-uploads/c34105f7-c232-4b70-9d78-f9070f713764.png" 
            ctaUrl="https://www.luisnewton.de/system/buy" 
            className="bg-gradient-to-br from-gray-50 to-white border-gray-200" 
            additionalLink={{
              text: "Hier klicken für Kauf mit Klarna oder Apple/Google Pay",
              url: "https://buy.stripe.com/5kA4jidr45Lz0jmdQQ"
            }}
          />
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
