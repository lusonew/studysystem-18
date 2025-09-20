import { motion } from "framer-motion";

export const VideoFeature = () => {
  return (
    <section id="video-feature" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Entdecke das System in Aktion
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Sieh dir an, wie das Study System PRO funktioniert und wie es dein Studium revolutionieren wird.
          </p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="aspect-video bg-gray-100 rounded-2xl overflow-hidden shadow-2xl"
        >
          <iframe
            src="https://www.loom.com/embed/f91d2d3134a04c96b9215168302ecdc5?sid=d7636d95-3ddd-46ea-a5ab-ef597ace7862"
            title="Study System PRO in Aktion"
            className="w-full h-full"
            frameBorder="0"
            allowFullScreen
          />
        </motion.div>
      </div>
    </section>
  );
};
export default VideoFeature;