
import React, { Suspense, useEffect } from "react";
import { Hero } from "@/components/Hero";
import { Problems } from "@/components/Problems";
import { Story } from "@/components/Story";
import { Footer } from "@/components/Footer";

// Lazy-loaded components that are not immediately visible
const SystemFeatures = React.lazy(() => import("@/components/SystemFeatures").then(module => ({ default: module.SystemFeatures })));
const SuccessFormula = React.lazy(() => import("@/components/SuccessFormula").then(module => ({ default: module.SuccessFormula })));
const LifeHub = React.lazy(() => import("@/components/LifeHub").then(module => ({ default: module.LifeHub })));
const Pricing = React.lazy(() => import("@/components/Pricing").then(module => ({ default: module.Pricing })));
const Testimonial = React.lazy(() => import("@/components/Testimonial").then(module => ({ default: module.Testimonial })));
const SatisfactionGuarantee = React.lazy(() => import("@/components/SatisfactionGuarantee").then(module => ({ default: module.SatisfactionGuarantee })));
const CTA = React.lazy(() => import("@/components/CTA").then(module => ({ default: module.CTA })));

const Index = () => {
  // Prefetch components after initial render
  useEffect(() => {
    const prefetchComponents = async () => {
      // Start importing lower priority components
      const importPromises = [
        import("@/components/SystemFeatures"),
        import("@/components/SuccessFormula"),
        import("@/components/LifeHub"),
        import("@/components/Pricing"),
        import("@/components/Testimonial"),
        import("@/components/SatisfactionGuarantee"),
        import("@/components/CTA"),
      ];
      
      await Promise.all(importPromises);
    };
    
    // Use requestIdleCallback if available, otherwise setTimeout
    if ('requestIdleCallback' in window) {
      window.requestIdleCallback(() => prefetchComponents());
    } else {
      setTimeout(prefetchComponents, 1000);
    }
  }, []);

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <div className="flex-grow">
        <Hero />
        <Problems />
        <Story />
        <Suspense fallback={<div className="h-[500px] flex items-center justify-center">Lädt...</div>}>
          <SystemFeatures />
          <SuccessFormula />
          <LifeHub />
          <Pricing />
          <Testimonial />
          <SatisfactionGuarantee />
          <CTA />
        </Suspense>
      </div>
      <Footer />
    </div>
  );
};

export default Index;
