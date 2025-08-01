import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Puzzle } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

export const SuccessFormula = () => {
  const isMobile = useIsMobile();
  const scrollToPricing = () => {
    const pricingSection = document.getElementById('pricing');
    if (pricingSection) {
      pricingSection.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };

  return <section className="bg-white py-[50px]">
      <div className="container mx-auto px-3 md:px-40">
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
      }} className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Badge variant="secondary" className="bg-amber-100 text-amber-700 text-lg px-6 py-3">
              <Puzzle className="w-8 h-8 mr-2" />
              Teil 2
            </Badge>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Darum schaffst du mehr als 99% aller Studenten</h2>
          <p className="text-xl text-gray-600 mb-6">Die Studium-Erfolgsformel</p>
          <p className="text-gray-600 mb-8 max-w-3xl mx-auto">
            In der Erfolgsformel erarbeiten wir gemeinsam die genauen Schritte, um erfolgreich zu studieren. Sie ist die perfekte Ergänzung zum Study System und bietet einen Schritt-für-Schritt-Plan für deinen persönlichen Erfolg im Studium - <span className="bg-amber-100">Egal welcher Studiengang oder welche Studienform.</span>
          </p>
          <Button size="lg" className="bg-amber-400 hover:bg-amber-500 mb-16" onClick={scrollToPricing}>
            JETZT STARTEN
          </Button>

          <div className="grid md:grid-cols-3 gap-12">
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
          }} className="text-left">
              <img src="/lovable-uploads/f550ee9d-cf68-4457-a4dc-358b3a758f0c.png" alt="Die Formel" className="w-full h-auto rounded-xl mb-6" loading="lazy" />
              <h3 className="text-xl font-bold mb-4">Die Formel</h3>
              <p className="text-gray-600">
                Erarbeite gemeinsam mit Luis die wichtigsten Erfolgsaspekte für dein Studium. In kurzen Videos besprechen wir die Bedeutung und Probleme jedes Themenbereichs. So verstehen wir besser, worum es genau geht und warum diese Themen wichtig sind. Unter anderem: Mindset, Anti-/Ziele, Gewohnheiten und mehr.
              </p>
            </motion.div>

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
            duration: 0.6,
            delay: 0.2
          }} className="text-left">
              <img src="/lovable-uploads/455b7185-b638-40e5-982f-7535b8e14697.png" alt="Die Methoden" className="w-full h-auto rounded-xl mb-6" loading="lazy" />
              <h3 className="text-xl font-bold mb-4">Die Methoden</h3>
              <p className="text-gray-600">
                Klare, praktische Übungen & Fragen, um deine individuelle Erfolgsformel zu entwickeln. Jedes Kapitel umfasst vorbereitete Aufgaben- und Fragestellungen, damit du eine klare Anleitung hast und in kürzester Zeit Fortschritte machst. Wir sprechen jede Aufgabe und jede Frage vorab gemeinsam durch.
              </p>
            </motion.div>

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
            duration: 0.6,
            delay: 0.4
          }} className="text-left">
              <img src="/lovable-uploads/de3f294b-3010-4586-bd98-12ce093511b1.png" alt="Das Life Hub" className="w-full h-auto rounded-xl mb-6" loading="lazy" />
              <h3 className="text-xl font-bold mb-4">Das Life Hub</h3>
              <p className="text-gray-600">
                Erhalte ein Notion-System, das dich und deine persönlichen Ambitionen reflektiert. Darin findest du nicht nur deine individuelle Erfolgsformel wieder, sondern auch Systeme, um langfristig dranzubleiben. Tages-, Gewohnheits-, Workout-, Projektplan etc. alles ist Teil deines Life Hubs.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>;
};
