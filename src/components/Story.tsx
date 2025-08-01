import { motion } from "framer-motion";
import { useIsMobile } from "@/hooks/use-mobile";
export const Story = () => {
  const isMobile = useIsMobile();
  return <section className="bg-white py-[50px]">
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
      }} className="flex flex-col lg:flex-row items-center gap-5">
          <div className="lg:w-1/2">
            <h2 className="text-4xl font-bold mb-6">&quot;Das System, das dein Studium rettet&quot;</h2>
            <p className="text-gray-600 mb-4">Wie alle Studierenden hatte ich am Anfang große Probleme im Studium.</p>
            <p className="text-gray-600 mb-4">Durch das Study System bin ich nicht nur 1er-Student geworden, sondern hatte genug Zeit um zusätzlich Content Creator und Werkstudent zu sein. Alles mit einem ausgeglichenen Privatleben.</p>
            <p className="text-gray-600 mb-4">
              Ein verlässliches System macht es möglich, <span className="bg-amber-100">stressfrei mehr zu schaffen</span>. Das habe ich selbst gemerkt.
            </p>
            <p className="font-semibold">Das Study System macht studieren nicht nur einfacher, sondern ermöglicht durch seine erprobten Strukturen mehr zu schaffen.</p>
          </div>
          <div className="lg:w-1/2">
            <img src="/lovable-uploads/a068a710-86cc-4a74-b7b7-dbd20cc44132.png" alt="Student Portrait" className="w-1/2 h-auto rounded-xl mx-auto" loading="lazy" />
          </div>
        </motion.div>
    </div>
  </section>;
};