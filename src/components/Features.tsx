
import { motion } from "framer-motion";
import { useIsMobile } from "@/hooks/use-mobile";

export const Features = () => {
  const isMobile = useIsMobile();
  
  return (
    <section className="bg-white py-24">
      <div className="container mx-auto px-3 sm:px-6 md:px-20 lg:px-40">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Das System, das dein Studium rettet
          </h2>
        </motion.div>
      </div>
    </section>
  );
};
