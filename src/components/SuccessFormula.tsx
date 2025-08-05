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
              Teil 2: Die Erfolgsformel
            </Badge>
          </div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4 lg:text-5xl">Mühelos mehr schaffen als 99% aller Studenten</h2>
          
          <p className="text-gray-600 mb-8 max-w-3xl mx-auto text-lg text-left">
            In der Erfolgsformel erarbeiten wir gemeinsam die genauen Schritte, um erfolgreich zu studieren. Sie ist die perfekte Ergänzung zum Study System und bietet einen Schritt-für-Schritt-Plan für deinen persönlichen Erfolg im Studium - <span className="bg-amber-100">Egal welcher Studiengang oder welche Studienform.</span>
          </p>

          <div className="grid md:grid-cols-2 gap-12">
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
              <p className="text-gray-600 text-lg">Erarbeite gemeinsam mit Luis die wichtigsten Erfolgsaspekte für dein Studium. In kurzen Videos besprechen wir die Ursachen, Bedeutung und Lösungen für: Warum fehlt dir immer wieder Motivation fürs Lernen? Wie etablierst du Routinen und hältst sie bei? Was möchtest du im Studium und darüber hinaus erreichen? Und noch vieles mehr. Bereit?</p>
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
              <img src="/lovable-uploads/b57992a7-2951-476c-b92d-3ddb841de3a5.png" alt="Die Methoden" className="w-full h-auto rounded-xl mb-6" loading="lazy" />
              <h3 className="text-xl font-bold mb-4">Die Methoden</h3>
              <p className="text-gray-600 text-lg">Klare, praktische Übungen & Fragen, um deine individuelle Erfolgsformel zu entwickeln. Jedes Kapitel umfasst neben den Videolektionen auch vorbereitete Aufgaben- und Fragestellungen. So hast du eine klare Anleitung und kannst in kürzester Zeit Fortschritte machen, die dich und dein Studium nachhaltig verändern werden. Vorab spricht Luis jede Aufgabe und jede Frage mit dir gemeinsam einmal durch, damit keine Fragen offen bleiben.</p>
            </motion.div>

          </div>
          
          <div className="text-center mt-12">
            <Button size="lg" className="bg-amber-400 hover:bg-amber-500" onClick={scrollToPricing}>
              JETZT STARTEN
            </Button>
          </div>
        </motion.div>
      </div>
    </section>;
};