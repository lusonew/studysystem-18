
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Users, Clock } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { useIsMobile } from "@/hooks/use-mobile";
import { OptimizedImage } from "@/components/ui/optimized-image";

export const Hero = () => {
  const isMobile = useIsMobile();
  
  const scrollToPricing = () => {
    const pricingSection = document.getElementById('pricing');
    if (pricingSection) {
      pricingSection.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };

  const scrollToProblems = () => {
    const problemsSection = document.getElementById('problems');
    if (problemsSection) {
      problemsSection.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className={`
        min-h-screen flex items-center justify-center 
        bg-gradient-to-br from-amber-50 via-amber-50/50 to-white 
        pt-[30px] pb-[10px] md:py-[10px]
        ${isMobile ? 'mx-[-19px] px-[19px]' : ''}
      `}>
      <div className="container mx-auto px-3 md:px-40">
        <div className="flex flex-col-reverse md:flex-row items-center gap-12">
          <motion.div 
            initial={{
              opacity: 0,
              y: 20
            }} 
            animate={{
              opacity: 1,
              y: 0
            }} 
            transition={{
              duration: 0.6
            }} 
            className="md:w-1/2 text-center md:text-left"
          >
            <div className="flex items-center justify-center md:justify-start gap-2 mb-6 flex-wrap">
              <Badge variant="secondary" className="bg-amber-100 text-amber-700">
                <Users className="w-4 h-4 mr-1" />
                3.000+ Studierende
              </Badge>
              
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-2">Studiere smarter als alle anderen</h1>
            
            <h2 className="text-xl lg:text-2xl text-amber-600 font-medium mb-6">Mehr Produktivität & Bessere Ergebnisse</h2>
            
            <p className="text-gray-600 mb-8">
              Das Study System liefert alles, um dein Studium zu meistern. <em>Mehr Struktur, mehr Produktivität, weniger Lernen und bessere Ergebnisse.</em> Schließ dich 4.000+ Studierenden an und bring System in dein Studium.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start mb-8">
              <Button size="lg" className="bg-amber-500 hover:bg-amber-600 px-5 md:px-8" onClick={scrollToPricing}>
                Jetzt starten
              </Button>
              <Button size="lg" variant="outline" className="px-5 md:px-8" onClick={scrollToProblems}>
                Mehr erfahren
              </Button>
            </div>

            <div className="flex justify-center md:justify-start mb-8">
              <img src="/lovable-uploads/bda10c42-d207-4d8b-b239-f3df3732f038.png" alt="Bewertungen" width={240} height={64} className="h-16 w-auto" loading="eager" fetchPriority="high" />
            </div>
          </motion.div>

          <motion.div 
            initial={{
              opacity: 0,
              y: 20
            }} 
            animate={{
              opacity: 1,
              y: 0
            }} 
            transition={{
              duration: 0.8,
              delay: 0.2
            }} 
            className="md:w-1/2"
          >
            <img 
              src="/lovable-uploads/069c9ad2-3ead-416d-8df0-f82d65531dda.png" 
              alt="Study System Dashboard" 
              width={800} 
              height={600} 
              className="w-full h-auto" 
              loading="eager" 
              fetchPriority="high" 
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
