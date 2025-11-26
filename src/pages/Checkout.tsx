import { CheckoutCard } from "@/components/checkout/CheckoutCard";
import type { CheckoutFeature } from "@/components/checkout/CheckoutCard";
import { useIsMobile } from "@/hooks/use-mobile";
import { BlackFridayBanner } from "@/components/BlackFridayBanner";
export default function Checkout() {
  const isMobile = useIsMobile();

  const getUrlWithParams = (baseUrl: string) => {
    const currentParams = new URLSearchParams(window.location.search);
    if (currentParams.toString()) {
      const separator = baseUrl.includes('?') ? '&' : '?';
      return `${baseUrl}${separator}${currentParams.toString()}`;
    }
    return baseUrl;
  };

  // Placeholder data - wird später mit echten Daten gefüllt
  const levelUpFeatures: CheckoutFeature[] = [{
    title: "",
    items: ["Ergänze dein Study System PRO um LevelUP 🕹️:", "", "", "Hast du Probleme, gute Gewohnheiten beizubehalten oder deine Interessen neben dem Studium zu verfolgen? Mach es dir leicht, indem du sie in ein Spiel verwandelst 👾 LevelUP ist ein ergänzendes Notion-System, das deine Gewohnheiten, Ziele und Projekte durch Erfahrungspunkte, Münzen, Strafen und Belohnungen spielend leicht macht 🎮"]
  }];
  const fokusIconsFeatures: CheckoutFeature[] = [{
    title: "",
    items: ["Ergänze dein Study System PRO um Fokus-Icons 📱:", "", "", "Lässt du dich immer wieder von deinem Handy ablenken? Gib deinem Handy einen einzigartigen Look und reduziere gleichzeitig deine Bildschirmzeit. Dieses Icon-Set wurde extra dafür designt, um Ablenkungen durch dein Handy zu reduzieren."]
  }];
  return <>
    <BlackFridayBanner />
    <div className={`min-h-screen bg-white flex items-center justify-center ${isMobile ? 'px-4 pt-24 pb-12' : 'px-6 pt-28 pb-16'}`}>
      <div className="container mx-auto max-w-5xl">
        {/* Header */}
        <div className="text-center mb-4">
          {/* Black Friday Badge */}
          <div className="mb-4 inline-block">
            <div className="bg-black text-white px-6 py-2 rounded-full font-bold text-sm sm:text-base animate-pulse">
              🔥 BLACK FRIDAY: -20% auf alle Produkte bis 01.12. 🔥
            </div>
          </div>
          <h1 className="text-xl md:text-2xl font-bold text-gray-900 mb-1.5">Wähle dein einmaliges Angebot</h1>
          <p className="text-xs text-gray-600">
            Erweitere dein Study System PRO mit exklusiven Upgrades
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <CheckoutCard title={<div className="text-center">
                <div className="text-xs text-gray-600 mb-0.5">Study System PRO</div>
                <div className="text-3xl font-bold">+ LevelUP</div>
              </div>} price={<div className="flex flex-col items-center gap-0.5">
                <div className="flex items-center gap-1.5">
                  <span className="text-base font-medium text-gray-400 line-through">+ 89€</span>
                  <span className="text-base font-medium text-green-600">+ 40€ (-55%)</span>
                </div>
                <span className="text-xs text-gray-500">Einmalig</span>
              </div>} features={levelUpFeatures} imageUrl="/lovable-uploads/LevelUPSeiten.webp" ctaUrl="https://pay.studysystem.de/b/6oU7sL7Q4c4O3fS4pH3cc0b?prefilled_promo_code=LEVELUP40" ctaText="Jetzt upgraden" className="bg-gradient-to-br from-amber-50 to-white border-amber-200" delay={0} badge="Beliebt" />

          <CheckoutCard title={<div className="text-center">
                <div className="text-xs text-gray-600 mb-0.5">Study System PRO</div>
                <div className="text-3xl font-bold">+ Fokus-Icons (iPhone)</div>
              </div>} price={<div className="flex flex-col items-center gap-0.5">
                <div className="flex items-center gap-1.5">
                  <span className="text-base font-medium text-gray-400 line-through">+ 30€</span>
                  <span className="text-sm font-medium text-green-600">+ 10€ (-66%)</span>
                </div>
                <span className="text-xs text-gray-500">Einmalig</span>
              </div>} features={fokusIconsFeatures} imageUrl="/lovable-uploads/IconsThumbnail.webp" ctaUrl="https://pay.studysystem.de/b/4gMdR96M03yi6s4g8p3cc0c?prefilled_promo_code=FOKUS20" ctaText="Jetzt upgraden" className="bg-white border-gray-200" delay={0.1} />
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
          <button onClick={() => window.open(getUrlWithParams('https://pay.studysystem.de/b/5kQ3cv3zO9WG6s4f4l3cc0a?prefilled_promo_code=BFStudySystemPRO'), '_blank')} className="text-gray-500 hover:text-gray-700 text-sm font-medium px-6 py-2 bg-white rounded-md border border-gray-200 hover:border-gray-300 transition-colors order-2 sm:order-1">
            Ohne Upgrade fortfahren.
          </button>
          <button onClick={() => {
            window.open(getUrlWithParams('https://pay.studysystem.de/b/3cI8wPgmAecWaIk6xP3cc0d?prefilled_promo_code=Bundle60'), '_blank');
          }} className="bg-white text-amber-500 border-2 border-amber-500 hover:bg-amber-50 text-sm font-medium px-6 py-2 rounded-md transition-colors order-1 sm:order-2">
            Beide Upgrades sichern.
          </button>
        </div>
      </div>
    </div>
  </>;
}