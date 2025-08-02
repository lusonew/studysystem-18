import { motion } from "framer-motion";
import { useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { X, Book, Calendar, Star, Puzzle } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { useIsMobile } from "@/hooks/use-mobile";
import { Button } from "@/components/ui/button";

const features = [{
  icon: Book,
  title: "Weniger Stress",
  subtitle: "Studienorganisation",
  description: "Alle Unterlagen und Notizen an einem Ort perfekt strukturiert."
}, {
  icon: Calendar,
  title: "Mehr Struktur",
  subtitle: "Zeitmanagement",
  description: "Integrierter Kalender und To-Do System für optimale Planung."
}, {
  icon: Star,
  title: "Bessere Noten",
  subtitle: "Prüfungsvorbereitung",
  description: "Effektive Vorlagen für die optimale Prüfungsvorbereitung."
}];

export const SystemFeatures = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [zoomPosition, setZoomPosition] = useState({
    x: 0,
    y: 0
  });
  const [zoomLevel, setZoomLevel] = useState(1);
  const isMobile = useIsMobile();

  const scrollToPricing = () => {
    const pricingSection = document.getElementById('pricing');
    if (pricingSection) {
      pricingSection.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };

  const handleImageClick = (imageSrc: string) => {
    setSelectedImage(imageSrc);
    setZoomLevel(1); // Reset zoom when opening a new image
  };

  const closeFullscreen = () => {
    setSelectedImage(null);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!selectedImage || zoomLevel === 1) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width * 100;
    const y = (e.clientY - rect.top) / rect.height * 100;
    setZoomPosition({
      x,
      y
    });
  };

  const handleWheel = (e: React.WheelEvent) => {
    e.preventDefault();
    if (!selectedImage) return;
    const delta = e.deltaY * -0.01;
    const newZoom = Math.min(Math.max(1, zoomLevel + delta), 3);
    setZoomLevel(newZoom);
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
              Teil 1
            </Badge>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Das hast du den anderen voraus</h2>
          <p className="text-gray-600 text-xl font-thin">Die Vorteile, die du als jemand mit System hast</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => <motion.div key={index} initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.6,
          delay: index * 0.2
        }} className="flex flex-col items-center text-center p-6 rounded-lg bg-amber-50/50 hover:bg-amber-50 transition-colors">
              <div className="w-16 h-16 flex items-center justify-center rounded-full bg-amber-500/10 mb-4">
                <feature.icon className="w-8 h-8 text-amber-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-1">
                {feature.title}
              </h3>
              <p className="text-sm text-amber-600 mb-2">
                {feature.subtitle}
              </p>
              <p className="text-gray-600">
                {feature.description}
              </p>
            </motion.div>)}
        </div>
        
        {/* New CTA Button */}
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
      }} className="flex justify-center mb-16">
          <Button size="lg" className="bg-amber-500 hover:bg-amber-600" onClick={scrollToPricing}>
            Jetzt starten
          </Button>
        </motion.div>

        {/* GIF Demo Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex flex-col items-center">
            <motion.img 
              initial={{ opacity: 0, y: 20 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: true }} 
              transition={{ duration: 0.6 }} 
              src="/lovable-uploads/Demo1.gif" 
              alt="Study System Demo 1" 
              className="w-full h-auto rounded-xl shadow-lg cursor-pointer hover:opacity-95 transition-opacity transform scale-50 origin-center" 
              onClick={() => handleImageClick("/lovable-uploads/Demo1.gif")}
            />
            <p className="text-gray-500 text-center mt-3 text-sm">Lernaufgaben schnell erstellen</p>
          </div>
          <div className="flex flex-col items-center">
            <motion.img 
              initial={{ opacity: 0, y: 20 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: true }} 
              transition={{ duration: 0.6, delay: 0.1 }} 
              src="/lovable-uploads/Demo3.gif" 
              alt="Study System Demo 3" 
              className="w-full h-auto rounded-xl shadow-lg cursor-pointer hover:opacity-95 transition-opacity transform scale-50 origin-center" 
              onClick={() => handleImageClick("/lovable-uploads/Demo3.gif")}
            />
            <p className="text-gray-500 text-center mt-3 text-sm">Termine schnell aufschreiben</p>
          </div>
          <div className="flex flex-col items-center">
            <motion.img 
              initial={{ opacity: 0, y: 20 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: true }} 
              transition={{ duration: 0.6, delay: 0.2 }} 
              src="/lovable-uploads/Demo2.gif" 
              alt="Study System Demo 2" 
              className="w-full h-auto rounded-xl shadow-lg cursor-pointer hover:opacity-95 transition-opacity transform scale-50 origin-center" 
              onClick={() => handleImageClick("/lovable-uploads/Demo2.gif")}
            />
            <p className="text-gray-500 text-center mt-3 text-sm">Notizen & Aufgaben für Fächer</p>
          </div>
          <div className="flex flex-col items-center">
            <motion.img 
              initial={{ opacity: 0, y: 20 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: true }} 
              transition={{ duration: 0.6, delay: 0.3 }} 
              src="/lovable-uploads/Demo4.gif" 
              alt="Study System Demo 4" 
              className="w-full h-auto rounded-xl shadow-lg cursor-pointer hover:opacity-95 transition-opacity transform scale-50 origin-center" 
              onClick={() => handleImageClick("/lovable-uploads/Demo4.gif")}
            />
            <p className="text-gray-500 text-center mt-3 text-sm">Die Studium-Erfolgsformel</p>
          </div>
        </div>

        {selectedImage && <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4" onClick={closeFullscreen}>
            <div className="relative max-w-[95%] max-h-[95%] bg-white rounded-lg overflow-hidden" onClick={e => e.stopPropagation()} onMouseMove={handleMouseMove} onWheel={handleWheel} style={{
          cursor: zoomLevel > 1 ? 'move' : 'zoom-in'
        }}>
              <button onClick={closeFullscreen} className="absolute top-2 right-2 text-gray-800 hover:text-amber-600 transition-colors z-10 bg-white/80 p-1 rounded-full">
                <X size={24} />
                <span className="sr-only">Schließen</span>
              </button>
              <div className="relative overflow-hidden">
                <div style={{
              transform: `scale(${zoomLevel})`,
              transformOrigin: zoomLevel > 1 ? `${zoomPosition.x}% ${zoomPosition.y}%` : 'center',
              transition: zoomLevel === 1 ? 'transform 0.2s ease-out' : 'none'
            }}>
                  <img src={selectedImage} alt="Vollbildansicht" className="max-w-full max-h-[90vh] object-contain" />
                </div>
              </div>
              <div className="absolute bottom-2 left-2 bg-white/80 px-2 py-1 rounded text-sm">
                {Math.round(zoomLevel * 100)}% • Mausrad zum Zoomen
              </div>
            </div>
          </div>}
      </div>
    </section>;
};
