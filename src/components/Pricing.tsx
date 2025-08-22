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
  }];
  const proPricingFeatures: PricingFeatureGroup[] = [{
    title: "Teil 1: Alles aus Study System",
    items: []
  }, {
    title: "Teil 2: Studium-Erfolgsformel (Videokurs)",
    items: ["Nie wieder Probleme mit Lernmotivation", "Klare Ziele definieren", "Anti-Ziele entwickeln", "uvm."]
  }, {
    title: "Teil 3: Life Center (weiteres System)",
    items: ["Profi Habit Tracker", "Finanzplaner", "Workout Tracker", "uvm."]
  }, {
    title: "BONUS: Study System Circle (Community)",
    items: ["Exklusive Community für Study System PRO", "Austausch zu Fragen/Problemen im Studium", "Hilfestellungen zu Notion & Technik"]
  }];
  return <section id="pricing" className="py-24 bg-white">
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
          <h2 className="text-3xl font-bold text-gray-900 mb-4 lg:text-5xl">Starte jetzt mit deinem Study System</h2>
          
          
          <motion.div initial={{
          opacity: 0
        }} whileInView={{
          opacity: 1
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.6,
          delay: 0.2
        }} className="flex flex-col md:flex-row items-center justify-center gap-3">
            <div className="flex items-center gap-3">
              <span className="text-lg font-semibold text-gray-900">4,9</span>
              <img src="/lovable-uploads/45fd89e4-90b7-463a-8832-956858deec36.png" alt="5 Sterne Bewertung" className="h-6" />
            </div>
            <span className="text-lg text-gray-600">
              auf{" "}
              <img src="/lovable-uploads/f67852aa-bafe-4f23-82be-4369f750f591.png" alt="Google" className="h-5 inline-block" />
              {" "}bei 4000+ Kunden
            </span>
          </motion.div>
          
          <motion.div initial={{
          scaleX: 0
        }} whileInView={{
          scaleX: 1
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.8,
          delay: 0.95
        }} className="w-64 h-0.5 bg-amber-500 mx-auto mt-4 origin-left" />
        </motion.div>

        <motion.div initial={{
        opacity: 0,
        y: 20
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true
      }} transition={{
        duration: 0.6,
        delay: 1.1
      }} className="text-center mt-8 mb-16">
          <p className="text-lg text-gray-600 max-w-4xl mx-auto italic">
            "Das neue System ist noch durchdachter, übersichtlicher und hilft mir enorm dabei, mein Studium strukturiert und stressfrei zu organisieren. Besonders der Lernplaner und das Life Center sind echte Gamechanger. Absolute Empfehlung!"
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
          <PricingCard title="Study System" price={<div className="flex items-center gap-2"><span className="text-2xl font-medium text-gray-700">79€</span> <span className="text-sm text-gray-500">Einmalig</span></div>} features={basicPricingFeatures} imageUrl="/lovable-uploads/e542ff79-e94f-4e8f-8631-fda80ba255c4.png" ctaUrl="https://pay.studysystem.de/b/5kA4jidr45Lz0jmdQQ" className="bg-gradient-to-br from-gray-50 to-white border-gray-200" />
          <PricingCard title="Study System PRO" price={<div className="flex items-center gap-2"><span className="text-2xl font-medium text-green-600">96€</span> <span className="text-sm text-gray-500">Einmalig</span></div>} features={proPricingFeatures} imageUrl="/lovable-uploads/2d367a7d-0631-407d-b870-021d9b5db458.png" ctaUrl="https://pay.studysystem.de/b/bIY8zygDgfm9c245ko" bestSeller={true} className="bg-gradient-to-br from-amber-50 to-white border-amber-200" originalValue="139€" imageClassName="!scale-100" additionalLink={{
          text: "Hier klicken für Kauf mit Klarna oder Apple/Google Pay",
          url: "https://pay.studysystem.de/b/bIY8zygDgfm9c245ko"
        }} />
        </div>
      </div>
    </section>;
};
export default Pricing;