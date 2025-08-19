import React from "react";
import { motion } from "framer-motion";
import { PlayCircle, CheckCircle, BookOpen, Target, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const Intro = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Willkommen zum
              <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent block">
                Study System
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Herzlichen Glückwunsch zu deinem Kauf! Du bist jetzt bereit, dein Lernen zu revolutionieren. 
              Lass uns gemeinsam deinen Weg zum Lernerfolg beginnen.
            </p>
          </motion.div>

          {/* Video Section */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-20"
          >
            <div className="relative max-w-4xl mx-auto">
              <div className="aspect-video bg-gray-100 rounded-2xl overflow-hidden shadow-2xl">
                {/* Placeholder for video - replace with actual video embed */}
                <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-purple-50 to-blue-50">
                  <div className="text-center">
                    <PlayCircle className="w-20 h-20 text-purple-600 mx-auto mb-4" />
                    <h3 className="text-2xl font-semibold text-gray-800 mb-2">
                      Dein Start ins Study System
                    </h3>
                    <p className="text-gray-600">
                      Klicke hier, um das Einführungsvideo zu starten
                    </p>
                  </div>
                </div>
                {/* Uncomment and replace with your actual video embed:
                <iframe
                  src="YOUR_VIDEO_URL"
                  title="Study System Einführung"
                  className="w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
                */}
              </div>
            </div>
          </motion.div>

          {/* Getting Started Steps */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mb-20"
          >
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
              Deine ersten Schritte zum Erfolg
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="border-2 border-purple-100 hover:border-purple-200 transition-colors">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <BookOpen className="w-8 h-8 text-purple-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    1. System verstehen
                  </h3>
                  <p className="text-gray-600">
                    Schaue dir das Einführungsvideo an und verstehe die Grundlagen des Study Systems.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 border-blue-100 hover:border-blue-200 transition-colors">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Target className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    2. Ziele definieren
                  </h3>
                  <p className="text-gray-600">
                    Definiere deine Lernziele und erstelle deinen persönlichen Lernplan.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 border-green-100 hover:border-green-200 transition-colors">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Clock className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    3. Routine aufbauen
                  </h3>
                  <p className="text-gray-600">
                    Beginne mit deiner täglichen Lernroutine und verfolge deinen Fortschritt.
                  </p>
                </CardContent>
              </Card>
            </div>
          </motion.div>

          {/* Key Benefits */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mb-20"
          >
            <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-3xl p-8 md:p-12">
              <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">
                Was dich erwartet
              </h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  "Effiziente Lernmethoden, die nachweislich funktionieren",
                  "Strukturierte Pläne für maximalen Lernerfolg",
                  "Zeitersparnis durch optimierte Lernstrategien",
                  "Langfristige Wissensspeicherung und -abruf",
                  "Motivation und Durchhaltevermögen stärken",
                  "Prüfungsangst überwinden und selbstsicher werden"
                ].map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                    className="flex items-center space-x-3"
                  >
                    <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0" />
                    <span className="text-gray-700">{benefit}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-center"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Bereit zu starten?
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Dein Lernerfolg beginnt jetzt. Folge dem System und erlebe, 
              wie sich deine Noten und dein Verständnis drastisch verbessern.
            </p>
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-4 text-lg"
            >
              Jetzt mit dem System starten
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Intro;