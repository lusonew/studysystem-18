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
    <div className={`h-screen bg-gradient-to-br from-amber-50 via-amber-50/50 to-white flex items-center justify-center ${isMobile ? 'px-4 py-6' : 'px-6 py-8'}`}>
      <div className="container mx-auto max-w-5xl">
        {/* Header */}
        <div className="text-center mb-6">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
            Wähle deine Upgrade
          </h1>
          <p className="text-base text-gray-600">
            Erweitere dein Study System PRO mit exklusiven Upgrades
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <CheckoutCard
            title="Study System PRO x LevelUP Bundle"
            price={
              <div className="flex flex-col items-center gap-1">
                <div className="flex items-center gap-2">
                  <span className="text-2xl font-medium text-green-600">99€</span>
                  <span className="text-sm text-gray-500">Einmalig</span>
                </div>
              </div>
            }
            features={levelUpFeatures}
            imageUrl="/placeholder.svg"
            ctaUrl="#"
            ctaText="Jetzt upgraden"
            className="bg-gradient-to-br from-amber-50 to-white border-amber-200"
            delay={0}
          />

          <CheckoutCard
            title="Study System PRO x Fokus-Icons (iPhone)"
            price={
              <div className="flex flex-col items-center gap-1">
                <div className="flex items-center gap-2">
                  <span className="text-2xl font-medium text-green-600">79€</span>
                  <span className="text-sm text-gray-500">Einmalig</span>
                </div>
              </div>
            }
            features={fokusIconsFeatures}
            imageUrl="/placeholder.svg"
            ctaUrl="#"
            ctaText="Jetzt upgraden"
            className="bg-gradient-to-br from-amber-50 to-white border-amber-200"
            delay={0.1}
            badge="Beliebt"
          />
        </div>

        {/* Decline Button */}
        <div className="text-center">
          <button
            onClick={() => window.history.back()}
            className="text-gray-500 hover:text-gray-700 text-sm font-medium px-6 py-2 bg-white rounded-md border border-gray-200 hover:border-gray-300 transition-colors"
          >
            Nein, danke.
          </button>
        </div>
      </div>
    </div>
  );
}
