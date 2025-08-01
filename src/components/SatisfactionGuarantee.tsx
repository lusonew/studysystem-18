
import { motion } from "framer-motion";
import { useIsMobile } from "@/hooks/use-mobile";
import { ShieldCheck } from "lucide-react";

export const SatisfactionGuarantee = () => {
  const isMobile = useIsMobile();
  
  return (
    <section className="py-24 bg-white border-t border-gray-100">
      <div className="container mx-auto px-3 sm:px-6 md:px-20 lg:px-40">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center"
        >
          <div className="flex items-center gap-3 mb-6">
            <ShieldCheck className="w-8 h-8 text-amber-500" />
            <h2 className="text-3xl lg:text-4xl font-bold">Zufriedenheitsgarantie</h2>
          </div>
          
          <div className="max-w-3xl mx-auto">
            <div className="space-y-6">
              <p className="text-lg">
                Das System enthält zusätzlich <span className="bg-amber-100 px-2 py-1 rounded">neue Tutorials</span>, in denen alle Funktionen erklärt werden.
              </p>
              
              <p className="text-lg">
                Außerdem zahlreiche Anmerkungen, um die Funktionen genauer zu beschreiben.
              </p>
              
              <p className="text-lg">
                Kundensupport per Mail an <a href="mailto:support@luisnewton.de" className="text-amber-600 font-medium hover:underline">support@luisnewton.de</a>
              </p>
              
              <p className="text-lg font-medium bg-gradient-to-r from-amber-50 to-white p-4 border-l-4 border-amber-400 rounded">
                Du hast es ausprobiert, aber es passt nicht zu dir? 14-Tage-Geld-Zurück-Garantie ohne Begründung
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
