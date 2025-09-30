import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ReactNode } from "react";

export type CheckoutFeature = {
  title: string;
  items: string[];
};

export type CheckoutCardProps = {
  title: string | ReactNode;
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
      className={`${className} p-3 rounded-lg border shadow-sm hover:shadow-lg transition-shadow`}
    >
      <div className="flex flex-col">
        {/* Top section - Badge, Title, Price, Image */}
        <div className="text-center mb-3">
          {badge && (
            <div className="inline-block px-1.5 py-0.5 bg-amber-100 text-amber-800 rounded-full text-[8px] font-medium mb-1.5">
              {badge}
            </div>
          )}
          
          <div className="mb-1.5">{title}</div>
          
          {/* Price section */}
          <div className="mb-3">
            <div>{price}</div>
          </div>
          
          <a href={getCtaUrlWithParams()} target="_blank" rel="noreferrer" className="block">
            <img
              src={imageUrl}
              alt={`${title} Preview`}
              className="w-[50%] h-auto rounded-lg mb-2 hover:opacity-90 transition-opacity cursor-pointer mx-auto"
              loading="lazy"
            />
          </a>
        </div>

        {/* Bottom section - Features and Button */}
        <div className="flex flex-col">
          {/* Features */}
          <div className="text-left flex-1 mb-3">
            {features.map((featureGroup, index) => (
              <div key={index} className="mb-2">
                <h4 className="font-semibold text-[10px] mb-1">{featureGroup.title}</h4>
                <ul className="space-y-0.5">
                  {featureGroup.items.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-1 text-[10px]">
                      <span className="inline-flex items-center justify-center w-2.5 h-2.5 rounded-full bg-amber-50 text-amber-700 text-[8px] mt-0.5">
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
            <p className="text-[8px] text-gray-500 mb-1.5">inkl. 14 Tage Geld-Zurück-Garantie</p>
            <Button
              size="sm"
              className="w-full bg-amber-500 hover:bg-amber-600 text-xs h-8"
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
