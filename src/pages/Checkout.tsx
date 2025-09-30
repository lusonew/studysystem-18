import { CheckoutCard } from "@/components/checkout/CheckoutCard";
import type { CheckoutFeature } from "@/components/checkout/CheckoutCard";
import { useIsMobile } from "@/hooks/use-mobile";
export default function Checkout() {
  const isMobile = useIsMobile();

  // Placeholder data - wird später mit echten Daten gefüllt
  const levelUpFeatures: CheckoutFeature[] = [{
    title: "",
    items: ["Ergänze dein Study System PRO um LevelUP 🕹️:", "", "Probleme gute Gewohnheiten beizubehalten oder deine Interessen neben dem Studium zu verfolgen? Mach es dir leicht, indem du es in ein Spiel verwandelst 👾 LevelUP ist ein ergänzendes Notion-System, das deine Gewohnheiten, Ziele und Projekte in ein Spiel verwandelt und so spielende leicht macht 🎮"]
  }];
  const fokusIconsFeatures: CheckoutFeature[] = [{
    title: "",
    items: ["Ergänze dein Study System PRO um Fokus-Icons 📱:", "", "Probleme gute Gewohnheiten beizubehalten oder deine Interessen neben dem Studium zu verfolgen? Mach es dir leicht, indem du es in ein Spiel verwandelst 👾 Die Fokus-Icons sind speziell designte iPhone-Icons, die dich fokussiert halten und Ablenkungen minimieren 🎯"]
  }];
  return <div className={`min-h-screen bg-gradient-to-br from-amber-50 via-amber-50/50 to-white flex items-center justify-center ${isMobile ? 'px-4 py-12' : 'px-6 py-16'}`}>
      <div className="container mx-auto max-w-5xl">
        {/* Header */}
        <div className="text-center mb-4">
          <h1 className="text-xl md:text-2xl font-bold text-gray-900 mb-1.5">Wähle dein einmaliges Angebot</h1>
          <p className="text-xs text-gray-600">
            Erweitere dein Study System PRO mit exklusiven Upgrades
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <CheckoutCard title={<div className="text-center">
                <div className="text-xs text-gray-600 mb-0.5">Study System PRO</div>
                <div className="text-xl font-bold">+ LevelUP</div>
              </div>} price={<div className="flex flex-col items-center gap-0.5">
                <div className="flex items-center gap-1.5">
                  <span className="text-base font-medium text-gray-400 line-through">+ 89€</span>
                  <span className="text-base font-medium text-green-600">+ 44€ (-50%)</span>
                </div>
                <span className="text-xs text-gray-500">Einmalig</span>
              </div>} features={levelUpFeatures} imageUrl="/lovable-uploads/LevelUPSeiten.png" ctaUrl="#" ctaText="Jetzt upgraden" className="bg-gradient-to-br from-amber-50 to-white border-amber-200" delay={0} />

          <CheckoutCard title={<div className="text-center">
                <div className="text-xs text-gray-600 mb-0.5">Study System PRO</div>
                <div className="text-xl font-bold">+ Fokus-Icons (iPhone)</div>
              </div>} price={<div className="flex flex-col items-center gap-0.5">
                <div className="flex items-center gap-1.5">
                  <span className="text-base font-medium text-gray-400 line-through">+ 18€</span>
                  <span className="text-sm font-medium text-green-600">+ 9€ (-50%)</span>
                </div>
                <span className="text-xs text-gray-500">Einmalig</span>
              </div>} features={fokusIconsFeatures} imageUrl="/lovable-uploads/IconsThumbnail.png" ctaUrl="#" ctaText="Jetzt upgraden" className="bg-gradient-to-br from-amber-50 to-white border-amber-200" delay={0.1} badge="Beliebt" />
        </div>

        {/* Decline Button */}
        <div className="text-center">
          <button onClick={() => window.history.back()} className="text-gray-500 hover:text-gray-700 text-sm font-medium px-6 py-2 bg-white rounded-md border border-gray-200 hover:border-gray-300 transition-colors">
            Ohne Upgrade fortfahren.
          </button>
        </div>
      </div>
    </div>;
}