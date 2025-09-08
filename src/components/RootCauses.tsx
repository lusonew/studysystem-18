import { motion } from "framer-motion";
import { OptimizedImage } from "@/components/ui/optimized-image";

export const RootCauses = () => {
  return (
    <section className="bg-white py-[80px]">
      <div className="container mx-auto px-3 md:px-40">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left column - Text content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h2 className="text-3xl lg:text-4xl font-semibold text-gray-900 leading-tight">
              Das sind die wahren Ursachen deiner Probleme
            </h2>
            
            <div className="space-y-4 text-gray-700">
              <p className="text-lg">
                <span className="font-semibold text-gray-900">Fehlende Struktur:</span> Du lernst planlos und weißt nicht, womit du anfangen sollst.
              </p>
              
              <p className="text-lg">
                <span className="font-semibold text-gray-900">Ineffiziente Methoden:</span> Du verwendest veraltete Lerntechniken, die viel Zeit kosten, aber wenig bringen.
              </p>
              
              <p className="text-lg">
                <span className="font-semibold text-gray-900">Keine klaren Ziele:</span> Dir fehlt eine konkrete Strategie, wie du deine Traumzensur erreichst.
              </p>
              
              <p className="text-lg">
                <span className="font-semibold text-gray-900">Falsche Prioritäten:</span> Du konzentrierst dich auf unwichtige Details statt auf das Wesentliche.
              </p>
            </div>
            
            <div className="pt-4">
              <p className="text-xl text-gray-900 font-medium">
                Aber das muss nicht so bleiben. Es gibt einen besseren Weg.
              </p>
            </div>
          </motion.div>
          
          {/* Right column - Image */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative">
              <OptimizedImage
                src="/lovable-uploads/5feba1e7-4c39-4564-a3dc-20ffe7bf512f.png"
                alt="Gestresster Student beim Lernen - typische Probleme beim Studium"
                className="w-full h-auto object-cover rounded-2xl"
                width={600}
                height={600}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};