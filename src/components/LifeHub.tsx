import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Puzzle } from "lucide-react";
export const LifeHub = () => {
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
        once: true
      }} transition={{
        duration: 0.6
      }} className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Badge variant="secondary" className="bg-amber-100 text-amber-700 text-lg px-6 py-3">
              <Puzzle className="w-8 h-8 mr-2" />
              Teil 3: Das Life Hub
            </Badge>
          </div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4 lg:text-5xl">Bonus: Dein Lebens-Management-System</h2>
          <p className="text-gray-600 text-lg font-thin mb-8">
            Mehr als nur Studium - dein komplettes Leben organisiert
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row items-center gap-12 mb-16">
          <motion.div initial={{
          opacity: 0,
          x: -20
        }} whileInView={{
          opacity: 1,
          x: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.6
        }} className="lg:w-2/3">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Das Life Hub</h3>
            <p className="text-gray-600 mb-6 text-lg">
              Du bist mehr als nur Student. Auch wenn das Studium eine zentrale in deinem Leben spielt, gibt es auch andere wichtige Bereiche. Daher brauchst du ein System, das auch deine persönlichen Ambitionen reflektiert.
            </p>
            <p className="text-gray-600 mb-8 text-lg">
              Genauer bedeutet das, getestete System um täglich dein Leben zu verbessern: Gewohnheiten etablieren, Informationen speichern oder Finanzen verwalten.
            </p>
            <Button size="lg" className="bg-amber-500 hover:bg-amber-600" onClick={scrollToPricing}>
              Jetzt starten
            </Button>
          </motion.div>
          <motion.div initial={{
          opacity: 0,
          x: 20
        }} whileInView={{
          opacity: 1,
          x: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.6,
          delay: 0.2
        }} className="lg:w-1/3">
            <img src="/lovable-uploads/de3f294b-3010-4586-bd98-12ce093511b1.png" alt="Das Life Hub" className="w-full h-auto rounded-xl shadow-lg" loading="lazy" />
          </motion.div>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-12 mb-16">
          <motion.div initial={{
          opacity: 0,
          x: -20
        }} whileInView={{
          opacity: 1,
          x: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.6,
          delay: 0.1
        }} className="lg:w-2/3">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Habit Tracker</h3>
            <p className="text-gray-600 mb-6 text-lg">
              Verfolge deine täglichen Gewohnheiten und baue nachhaltige Routinen auf, die dich deinen Zielen näherbringen.
            </p>
            <p className="text-gray-600 mb-8 text-lg">
              Mit dem integrierten Habit Tracker behältst du den Überblick über deine wichtigsten Gewohnheiten und siehst deinen Fortschritt auf einen Blick.
            </p>
          </motion.div>
          <motion.div initial={{
          opacity: 0,
          x: 20
        }} whileInView={{
          opacity: 1,
          x: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.6,
          delay: 0.3
        }} className="lg:w-1/3">
            <img src="/lovable-uploads/Demo7.gif" alt="Habit Tracker" className="w-full h-auto rounded-xl shadow-lg" loading="lazy" />
          </motion.div>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-12 mb-16">
          <motion.div initial={{
          opacity: 0,
          x: -20
        }} whileInView={{
          opacity: 1,
          x: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.6,
          delay: 0.2
        }} className="lg:w-2/3">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Finanz Tracker</h3>
            <p className="text-gray-600 mb-6 text-lg">
              Behalte deine Finanzen als Student im Blick und entwickle ein gesundes Verhältnis zum Geld.
            </p>
            <p className="text-gray-600 mb-8 text-lg">
              Der Finanz Tracker hilft dir dabei, deine Einnahmen und Ausgaben zu verwalten und finanzielle Ziele zu erreichen.
            </p>
          </motion.div>
          <motion.div initial={{
          opacity: 0,
          x: 20
        }} whileInView={{
          opacity: 1,
          x: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.6,
          delay: 0.4
        }} className="lg:w-1/3">
            <img src="/lovable-uploads/Demo10.gif" alt="Finanz Tracker" className="w-full h-auto rounded-xl shadow-lg" loading="lazy" />
          </motion.div>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-12 mb-16">
          <motion.div initial={{
          opacity: 0,
          x: -20
        }} whileInView={{
          opacity: 1,
          x: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.6,
          delay: 0.3
        }} className="lg:w-2/3">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Workout Tracker</h3>
            <p className="text-gray-600 mb-6 text-lg">
              Plane und verfolge deine Workouts, um körperlich fit und mental stark zu bleiben.
            </p>
            <p className="text-gray-600 mb-8 text-lg">
              Mit dem Workout Tracker organisierst du deine Trainingsroutine und dokumentierst deine Fortschritte im Fitness-Bereich.
            </p>
          </motion.div>
          <motion.div initial={{
          opacity: 0,
          x: 20
        }} whileInView={{
          opacity: 1,
          x: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.6,
          delay: 0.5
        }} className="lg:w-1/3">
            <img src="/lovable-uploads/Demo8.gif" alt="Workout Tracker" className="w-full h-auto rounded-xl shadow-lg" loading="lazy" />
          </motion.div>
        </div>
      </div>
    </section>;
};