import { motion } from "framer-motion";
import { OptimizedImage } from "@/components/ui/optimized-image";

export const Experiences = () => {
  return (
    <section className="bg-white py-[50px]">
      <div className="container mx-auto px-3 sm:px-6 md:px-20 lg:px-40">
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
            once: true,
            margin: "-100px"
          }} 
          transition={{
            duration: 0.6
          }} 
          className="text-center"
        >
          <h3 className="font-bold mb-8 text-5xl">Bisherige Erfahrungen</h3>
          
          <div className="flex justify-center">
            <OptimizedImage 
              src="/lovable-uploads/a0381240-ec1e-4bb6-ac1c-bc7346598132.png" 
              alt="Bisherige Kundenerfahrungen und Bewertungen" 
              className="w-full max-w-4xl h-auto rounded-lg"
              priority={false}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};