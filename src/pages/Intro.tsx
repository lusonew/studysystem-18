import React from "react";
import { motion } from "framer-motion";
import { PlayCircle, CheckCircle, BookOpen, Target, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const Intro = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-amber-50/50 to-white">
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
              <span className="text-amber-600 block">
                Study System PRO
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
                <iframe
                  src="https://www.loom.com/embed/d1ce017421504aa188f927403ca1b109?sid=34d12a93-23b2-4021-a486-9c5a08aec78f"
                  title="Study System PRO Einführung"
                  className="w-full h-full rounded-2xl"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
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
              <Card className="border-2 border-amber-100 hover:border-amber-200 transition-colors">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <BookOpen className="w-8 h-8 text-amber-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    1. E-Mail öffnen
                  </h3>
                  <p className="text-gray-600">
                    Öffne deine E-Mail und finde die Willkommensnachricht mit allen wichtigen Informationen.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 border-amber-100 hover:border-amber-200 transition-colors">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Target className="w-8 h-8 text-amber-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    2. Konto anlegen
                  </h3>
                  <p className="text-gray-600">
                    Erstelle dein persönliches Konto mit den Zugangsdaten aus der E-Mail.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 border-amber-100 hover:border-amber-200 transition-colors">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Clock className="w-8 h-8 text-amber-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    3. Anleitung herunterladen
                  </h3>
                  <p className="text-gray-600">
                    Lade die vollständige Anleitung herunter und beginne mit dem Study System.
                  </p>
                </CardContent>
              </Card>
            </div>
          </motion.div>

          {/* Support Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-center"
          >
            <p className="text-lg text-gray-600">
              Fragen oder Probleme? Schreibe jederzeit an{" "}
              <a 
                href="mailto:support@luisnewton.de" 
                className="text-amber-600 hover:text-amber-700 underline"
              >
                support@luisnewton.de
              </a>
            </p>
          </motion.div>

        </div>
      </section>
    </div>
  );
};

export default Intro;
