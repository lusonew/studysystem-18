import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ReactNode } from "react";

export type CheckoutFeature = {
  title: string;
  items: string[];
};

export type CheckoutCardProps = {
  title: string;
  price: string | ReactNode;
  features: CheckoutFeature[];
  imageUrl: string;
  ctaUrl: string;
  ctaText?: string;
  className?: string;
  delay?: number;
  badge?: string;
};

export const CheckoutCard = ({
  title,
  price,
  features,
  imageUrl,
  ctaUrl,
  ctaText = "Jetzt upgraden",
  className = "",
  delay = 0,
  badge
}: CheckoutCardProps) => {
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
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.4, delay, ease: "easeOut" }}
      className={`${className} p-8 rounded-xl border shadow-sm hover:shadow-lg transition-shadow`}
    >
      <div className="flex flex-col">
        {/* Top section - Badge, Title, Price, Image */}
        <div className="text-center mb-6">
          {badge && (
            <div className="inline-block px-3 py-1 bg-amber-100 text-amber-800 rounded-full text-xs font-medium mb-3">
              {badge}
            </div>
          )}
          
          <h3 className="text-xl font-bold mb-3">{title}</h3>
          
          {/* Price section */}
          <div className="mb-6">
            <div>{price}</div>
          </div>
          
          <a href={getCtaUrlWithParams()} target="_blank" rel="noreferrer" className="block">
            <img
              src={imageUrl}
              alt={`${title} Preview`}
              className="w-full h-auto rounded-lg mb-4 hover:opacity-90 transition-opacity cursor-pointer max-w-2xl mx-auto"
              loading="lazy"
            />
          </a>
        </div>

        {/* Bottom section - Features and Button */}
        <div className="flex flex-col">
          {/* Features */}
          <div className="text-left flex-1 mb-6">
            {features.map((featureGroup, index) => (
              <div key={index} className="mb-4">
                <h4 className="font-semibold text-sm mb-2">{featureGroup.title}</h4>
                <ul className="space-y-1.5">
                  {featureGroup.items.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm">
                      <span className="inline-flex items-center justify-center w-4 h-4 rounded-full bg-amber-50 text-amber-700 text-xs mt-0.5">
                        ○
                      </span>
                      <span className="flex-1">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Button */}
          <div className="text-center mt-auto">
            <p className="text-xs text-gray-500 mb-3">inkl. 14 Tage Geld-Zurück-Garantie</p>
            <Button
              size="default"
              className="w-full bg-amber-500 hover:bg-amber-600"
              onClick={() => {
                window.open(getCtaUrlWithParams(), '_blank');
              }}
            >
              {ctaText}
            </Button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default CheckoutCard;
