import { motion } from "framer-motion";
import { useIsMobile } from "@/hooks/use-mobile";
import { OptimizedImage } from "@/components/ui/optimized-image";
export const Story = () => {
  const isMobile = useIsMobile();
  return <section id="story" className="bg-white py-[50px]">
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
            <p className="text-gray-600 mb-4 text-lg font-normal">Falls du mich noch nicht kennst - Hi, mein Name ist Luis 👋</p>
            <p className="text-gray-600 mb-4 text-lg font-normal">Ähnlich wie viele Studierende, hatte ich anfangs große Probleme: Bei Klausuren durchgefallen, viel Stress und große Zweifel.</p>
            <p className="text-gray-600 mb-4 text-lg font-normal">Während meines Bachelor- & Masterstudiums habe ich dann über 4 Jahre das Study System PRO erarbeitet. Ich wurde 1er-Student, sicherte mir einen gutbezahlten Werkstudentenjob, machte zusätzlich Social Media und hatte dennoch ein erfülltes Privatleben.</p>
            <p className="text-gray-600 mb-4 font-normal text-lg">Da habe ich erkannt: Ein System ist die Grundvoraussetzung für alle, die etwas Im Leben erreichen wollen.</p>
            <p className="font-medium text-lg">Das Study System PRO ist genau dieses System - und noch mehr. Es macht studieren nicht nur einfacher, sondern hilft dir mehr zu schaffen.</p>
          </div>
          <div className="lg:w-1/2">
            <OptimizedImage src="/lovable-uploads/TransformationStory_2.webp" alt="Student Portrait" className="w-2/3 h-2/3 object-cover rounded-xl mx-auto" priority={true} />
          </div>
        </div>
        </motion.div>
    </div>
  </section>;
};