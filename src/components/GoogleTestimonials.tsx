import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Bilal",
    image: "/lovable-uploads/44ba3e12-4385-44b8-ba4e-a3ec6afa9872.png",
    rating: 5,
    timeAgo: "vor 11 Wochen",
    text: "Ein sehr durchdachtes Konzept und ein anderer Ansatz sein Leben in den Griff zu kriegen. Man merkt, dass Luis sich sehr viel Mühe dabei gegeben hat."
  },
  {
    name: "Dimitrios Stamatis",
    image: "/lovable-uploads/f98498a9-97f8-4ab2-aca0-c606f0af43aa.png", 
    rating: 5,
    timeAgo: "vor 12 Wochen",
    text: "Das neue System ist noch durchdachter, übersichtlicher und hilft mir enorm dabei, mein Studium strukturiert und stressfrei zu organisieren. Besonders der Lernplaner und das Life Center sind echte Gamechanger. Absolute Empfehlung für alle, die ihr Studium ernst nehmen!"
  },
  {
    name: "Desch.",
    badge: "Local Guide",
    image: "/lovable-uploads/c227124a-2d86-4c8e-9b54-cf47416a25c5.png",
    rating: 5,
    timeAgo: "vor 13 Wochen", 
    text: "Top Creator, top Notion Vorlagen, top Service. Auch wenn es mal nicht 100% passen sollte bietet er eine Geld-zurück-Garantie an die absolut problemlos funktioniert. Kann ich nur wärmstens empfehlen."
  }
];

export const GoogleTestimonials = () => {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-3 md:px-40">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-4 lg:text-5xl">
            Was unsere Kunden sagen
          </h2>
          <p className="text-gray-600 text-xl font-extralight">
            Echte Bewertungen von zufriedenen Studenten
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="flex justify-center"
            >
              <img 
                src={testimonial.image} 
                alt={`Bewertung von ${testimonial.name}`}
                className="w-full max-w-md h-auto rounded-lg"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};