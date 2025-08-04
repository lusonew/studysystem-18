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
      }} className="">
        <h2 className="font-bold mb-6 text-center text-5xl">"Ein gutes System verändert dein Leben"</h2>
        <div className="flex flex-col lg:flex-row items-center gap-2.5">
          <div className="lg:w-1/2">
            <p className="text-gray-600 mb-4 text-lg font-normal">Falls du mich noch nicht kennst - Hi, mein Name ist Luis 👋


Wie viele Studierende, hatte ich am Anfang große Probleme: Bei Klausuren durchgefallen, durchgehend gestresst und Zweifel, ob ich jemals den Abschluss schaffen würde.</p>
            <p className="text-gray-600 mb-4 text-lg font-normal">Während meines Bachelor- und Masterstudiums habe ich dann über 4 Jahre das Study System PRO entwickelt. Ich bin dadurch 1er-Student geworden, hatte Zeit für einen Werkstudentenjob als IT-Business Analyst, zusätzliche Social Media Content und zugleich ein ausgeglichenes Privatleben.</p>
            <p className="text-gray-600 mb-4 font-normal text-lg">Da habe ich erkannt: Ein System ist im Studium nicht optional. Es ist Grundvoraussetzung für alle, die ihr Studium ernst nehmen.</p>
            <p className="font-medium text-lg">Das Study System PRO ist genau dieses System - und noch mehr. Es macht studieren nicht nur einfacher, sondern hilft dir mehr zu schaffen.</p>
          </div>
          <div className="lg:w-1/2">
            <img src="/lovable-uploads/61d227f3-9e07-4e44-a1ab-3b82b969bfe8.png" alt="Student Portrait" className="w-4/5 h-4/5 object-cover rounded-xl mx-auto" loading="lazy" />
          </div>
        </div>
        </motion.div>
    </div>
  </section>;
};