
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useIsMobile } from "@/hooks/use-mobile";

export const CTA = () => {
  const isMobile = useIsMobile();
  
  const scrollToPricing = () => {
    const pricingSection = document.getElementById('pricing');
    if (pricingSection) {
      pricingSection.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };
  
  return <section className="py-24 bg-amber-50">
      <div className="container mx-auto px-3 sm:px-6 md:px-20 lg:px-40">
        <motion.div initial={{
        opacity: 0,
        y: 20
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true,
        margin: "-100px"
      }} transition={{
        duration: 0.6
      }} className="text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
            Bereit dein Studium zu optimieren?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">Starte noch heute mit dem Study System und erlebe, wie einfach effizientes Studieren sein kann.</p>
          <Button size="lg" className="bg-amber-500 hover:bg-amber-600" onClick={scrollToPricing}>
            Jetzt Study System sichern
          </Button>
        </motion.div>
      </div>
    </section>;
};
