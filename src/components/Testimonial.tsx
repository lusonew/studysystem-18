import { motion } from "framer-motion";
import { TestimonialCarousel } from "./TestimonialCarousel";
import { useIsMobile } from "@/hooks/use-mobile";
export const Testimonial = () => {
  const isMobile = useIsMobile();
  return <section className="bg-gradient-to-br from-amber-50/50 to-white py-[50px]">
      <div className="container mx-auto px-3 md:px-40">
        <motion.div initial={{
        opacity: 0,
        y: 20
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true
      }} transition={{
        duration: 0.6
      }} className="text-center mb-16">
          <h2 className="font-bold mb-4 text-5xl">
            Was andere über das Study System sagen
          </h2>
          
          <div className="flex items-center justify-center mb-8">
            <span className="text-lg text-gray-600 mr-2">auf</span>
            <img src="/lovable-uploads/416f80bd-3c21-4cd2-a11a-4f72d0fbb9ab.png" alt="Google" className="h-8" loading="lazy" />
          </div>
        </motion.div>
        
        <TestimonialCarousel />
      </div>
    </section>;
};