import { motion } from "framer-motion";
import { AlarmClock, Frown, HelpCircle } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
const problems = [{
  icon: AlarmClock,
  title: "Stress",
  description: "Schlaflose Nächte vor Klausuren und ständige Anspannung im Semester."
}, {
  icon: Frown,
  title: "Schlechte Leistung",
  description: "Trotz viel Aufwand und Mühe, erhältst du am Ende enttäuschende Ergebnisse."
}, {
  icon: HelpCircle,
  title: "Selbstzweifel",
  description: "Ständiges Hinterfragen deiner Fähigkeiten und deines Potenzials."
}];
export const Problems = () => {
  const isMobile = useIsMobile();
  return <section id="problems" className="bg-white py-[50px]">
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
      }} className="text-center mb-12">
          <h2 className="text-3xl text-gray-900 mb-4 font-semibold lg:text-3xl">Womit du dich bisher rumschlagen musstest</h2>
          <p className="text-gray-600 max-w-3xl mx-auto font-thin text-xl">
            Stress, schlechte Leistung, Selbstzweifel.
            <span className="font-semibold"> Das ist jetzt vorbei.</span>
          </p>
        </motion.div>

        <motion.div className="grid grid-cols-1 md:grid-cols-3 gap-8" initial={{
        opacity: 0,
        y: 20
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true,
        margin: "-150px"
      }} transition={{
        duration: 0.6,
        delay: 0.2
      }}>
          {problems.map((problem, index) => <motion.div key={problem.title} className="flex flex-col items-center p-6 bg-danger-light/50 rounded-lg shadow-sm hover:shadow-md transition-shadow" initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.3,
          delay: 0.1 * index + 0.3
        }}>
              <div className="p-3 bg-danger-border rounded-full mb-4">
                <problem.icon className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{problem.title}</h3>
              <p className="text-gray-600 text-center">{problem.description}</p>
            </motion.div>)}
        </motion.div>
      </div>
    </section>;
};