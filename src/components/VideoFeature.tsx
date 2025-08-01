
import { motion } from "framer-motion";
import { Puzzle } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { useIsMobile } from "@/hooks/use-mobile";

export const VideoFeature = () => {
  const isMobile = useIsMobile();

  return (
    <section className="bg-white py-[50px]">
      <div className="container mx-auto px-3 md:px-40">
        <motion.div 
          initial={{
            opacity: 0,
            y: 20
          }} 
          whileInView={{
            opacity: 1,
            y: 0
          }} 
          viewport={{
            once: true
          }} 
          transition={{
            duration: 0.6
          }} 
          className="text-center mb-10"
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <Badge variant="secondary" className="bg-amber-100 text-amber-700">
              <Puzzle className="w-4 h-4 mr-1" />
              Video-Vorschau
            </Badge>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Sieh dir das System in Aktion an
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-10">
            In diesem kurzen Video zeige ich dir, wie das Study System 2.0 im Alltag funktioniert
          </p>
          
          {/* Video directly embedded in page */}
          <motion.div
            initial={{
              opacity: 0,
              y: 20
            }} 
            whileInView={{
              opacity: 1,
              y: 0
            }} 
            viewport={{
              once: true
            }} 
            transition={{
              duration: 0.6,
              delay: 0.2
            }}
            className="relative rounded-xl overflow-hidden shadow-xl mx-auto max-w-4xl"
          >
            <div className="relative pt-[56.25%] w-full">
              <iframe
                className="absolute top-0 left-0 w-full h-full rounded-xl"
                src="https://www.youtube.com/embed/T2jl_Tqbpns?autoplay=0"
                title="Study System 2.0 Demo"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
            
            {/* Video duration badge */}
            <div className="absolute bottom-4 right-4 bg-black/70 text-white px-3 py-1 rounded-full text-sm">
              2:41
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default VideoFeature;
