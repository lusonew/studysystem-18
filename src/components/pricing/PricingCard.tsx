
import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import PricingFeatureGroup from "./PricingFeatureList";
import { ReactNode } from "react";

export type PricingFeatureGroup = {
  title: string;
  items: string[];
  icon?: ReactNode;
  description?: string;
};

export type PricingCardProps = {
  title: string;
  price: string | ReactNode;
  features: PricingFeatureGroup[];
  imageUrl: string;
  ctaUrl: string;
  bestSeller?: boolean;
  className?: string;
  delay?: number;
  originalValue?: string;
  imageClassName?: string;
  additionalLink?: {
    text: string;
    url: string;
  };
};

export const PricingCard = ({
  title,
  price,
  features,
  imageUrl,
  ctaUrl,
  bestSeller = false,
  className = "",
  delay = 0,
  originalValue,
  imageClassName = "",
  additionalLink
}: PricingCardProps) => {
  // Get current URL parameters and append them to the CTA URL
  const getCtaUrlWithParams = () => {
    const currentParams = new URLSearchParams(window.location.search);
    if (currentParams.toString()) {
      const separator = ctaUrl.includes('?') ? '&' : '?';
      return `${ctaUrl}${separator}${currentParams.toString()}`;
    }
    return ctaUrl;
  };

  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 20
      }}
      whileInView={{
        opacity: 1,
        y: 0
      }}
      viewport={{
        once: true,
        margin: "-100px"
      }}
      transition={{
        duration: 0.4,
        delay,
        ease: "easeOut"
      }}
      className={`${className} p-5 rounded-xl border shadow-sm hover:shadow-lg transition-shadow max-w-2xl mx-auto`}
    >
      <div className="flex flex-col gap-5">
        {/* Top section - Image and basic info */}
        <div className="text-center">
          {bestSeller && (
            <div className="inline-block px-3 py-1 bg-amber-100 text-amber-800 rounded-full text-xs font-medium mb-3">
              Bestseller
            </div>
          )}
          <h3 className="text-xl font-bold mb-3">{title}</h3>
          
          {/* Price section moved under title */}
          <div className="mb-4 flex items-center justify-center gap-2">
            {originalValue && (
              <span className="line-through text-3xl text-gray-400">{originalValue}</span>
            )}
            <div>{price}</div>
          </div>
          
          <a href={getCtaUrlWithParams()} target="_blank" rel="noreferrer" className="block">
            <img
              src={imageUrl}
              alt={`${title} Preview`}
              width="300"
              height="225"
              className={`w-full h-auto rounded-lg mb-4 hover:opacity-90 transition-opacity cursor-pointer max-w-sm mx-auto scale-[0.85] ${imageClassName}`}
              loading="lazy"
            />
          </a>
        </div>

        {/* Middle section - Features */}
        <div className="text-left">
          {features.map((featureGroup, index) => (
            <React.Fragment key={index}>
              {featureGroup.description}
              <PricingFeatureGroup
                title={featureGroup.title}
                items={featureGroup.items}
                icon={featureGroup.icon}
              />
            </React.Fragment>
          ))}
        </div>

        {/* Bottom section - Button */}
        <div className="text-center">
          <p className="text-xs text-gray-500 mb-3">inkl. 14 Tage Geld-Zurück-Garantie</p>
          <Button
            size="default" 
            className="w-full bg-amber-500 hover:bg-amber-600" 
            onClick={() => {
              (window as any).trackPurchaseIntent?.();
              window.open(getCtaUrlWithParams(), '_blank');
            }}
          >
            Jetzt Kaufen
          </Button>
          {additionalLink && (
            <a 
              href={additionalLink.url} 
              target="_blank" 
              rel="noreferrer" 
              className="block mt-3 text-sm text-gray-500 hover:text-gray-700 transition-colors"
            >
              {additionalLink.text}
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default PricingCard;
