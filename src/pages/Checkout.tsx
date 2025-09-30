import { CheckoutCard } from "@/components/checkout/CheckoutCard";
import type { CheckoutFeature } from "@/components/checkout/CheckoutCard";
import { useIsMobile } from "@/hooks/use-mobile";

export default function Checkout() {
  const isMobile = useIsMobile();

  // Placeholder data - wird später mit echten Daten gefüllt
  const levelUpFeatures: CheckoutFeature[] = [
    {
      title: "Enthält:",
      items: [
        "Study System PRO",
        "LevelUP Bundle",
        "Weitere Features folgen"
      ]
    }
  ];

  const fokusIconsFeatures: CheckoutFeature[] = [
    {
      title: "Enthält:",
      items: [
        "Study System PRO",
        "Fokus-Icons (iPhone)",
        "Weitere Features folgen"
      ]
    }
  ];

  return (
    <div className={`min-h-screen bg-gradient-to-br from-amber-50 via-amber-50/50 to-white py-16 ${isMobile ? 'px-4' : 'px-6'}`}>
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Wähle deine Upgrade
          </h1>
          <p className="text-lg text-gray-600">
            Erweitere dein Study System PRO mit exklusiven Upgrades
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <CheckoutCard
            title="Study System PRO x LevelUP Bundle"
            price={
              <div className="flex flex-col items-center gap-1">
                <div className="flex items-center gap-2">
                  <span className="text-3xl font-bold text-green-600">99€</span>
                  <span className="text-sm text-gray-500">Einmalig</span>
                </div>
              </div>
            }
            features={levelUpFeatures}
            imageUrl="/placeholder.svg"
            ctaUrl="#"
            ctaText="Jetzt upgraden"
            className="bg-white"
            delay={0}
          />

          <CheckoutCard
            title="Study System PRO x Fokus-Icons (iPhone)"
            price={
              <div className="flex flex-col items-center gap-1">
                <div className="flex items-center gap-2">
                  <span className="text-3xl font-bold text-green-600">79€</span>
                  <span className="text-sm text-gray-500">Einmalig</span>
                </div>
              </div>
            }
            features={fokusIconsFeatures}
            imageUrl="/placeholder.svg"
            ctaUrl="#"
            ctaText="Jetzt upgraden"
            className="bg-white"
            delay={0.1}
            badge="Beliebt"
          />
        </div>
      </div>
    </div>
  );
}
