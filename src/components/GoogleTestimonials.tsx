import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

const testimonials = [
  {
    name: "Bilal",
    image: "/lovable-uploads/43343dab-c348-47e4-9033-9cb3adbcbeb4.png",
    rating: 5,
    timeAgo: "vor 11 Wochen",
    text: "Ein sehr durchdachtes Konzept und ein anderer Ansatz sein Leben in den Griff zu kriegen. Man merkt, dass Luis sich sehr viel Mühe dabei gegeben hat."
  },
  {
    name: "Dimitrios Stamatis",
    image: "/lovable-uploads/9482272f-40e4-4922-bc52-ae1ea5fd1691.png", 
    rating: 5,
    timeAgo: "vor 12 Wochen",
    text: "Das neue System ist noch durchdachter, übersichtlicher und hilft mir enorm dabei, mein Studium strukturiert und stressfrei zu organisieren. Besonders der Lernplaner und das Life Center sind echte Gamechanger. Absolute Empfehlung für alle, die ihr Studium ernst nehmen!"
  },
  {
    name: "Desch.",
    badge: "Local Guide",
    image: "/lovable-uploads/eb524b70-f23e-46a6-ab64-ae552b765318.png",
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
            Was Andere sagen
          </h2>
          <p className="text-gray-600 text-xl font-extralight">
            Echte Bewertungen von zufriedenen Studenten
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <Card className="h-full">
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-semibold text-gray-900">{testimonial.name}</h3>
                    {testimonial.badge && (
                      <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full">
                        {testimonial.badge}
                      </span>
                    )}
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="flex">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <span className="text-sm text-gray-500">{testimonial.timeAgo}</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 leading-relaxed">"{testimonial.text}"</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};