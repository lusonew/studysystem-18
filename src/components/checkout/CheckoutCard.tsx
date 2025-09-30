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
      className={`${className} p-3 rounded-lg border shadow-sm hover:shadow-lg transition-shadow flex flex-col h-full`}
    >
      {badge && (
        <div className="inline-block px-2 py-0.5 bg-amber-100 text-amber-800 rounded-full text-[10px] font-medium mb-1.5 self-start">
          {badge}
        </div>
      )}

      {/* Image */}
      <div className="text-center mb-2">
        <a href={getCtaUrlWithParams()} target="_blank" rel="noreferrer">
          <img
            src={imageUrl}
            alt={`${title} Preview`}
            className="w-full h-auto rounded-lg hover:opacity-90 transition-opacity cursor-pointer"
            loading="lazy"
          />
        </a>
      </div>

      {/* Title */}
      <h3 className="text-sm font-bold mb-1.5 text-center">{title}</h3>

      {/* Price */}
      <div className="mb-2 text-center">
        <div>{price}</div>
      </div>

      {/* Features */}
      <div className="flex-1 mb-3">
        {features.map((featureGroup, index) => (
          <div key={index} className="mb-1.5">
            <h4 className="font-semibold text-[10px] mb-1">{featureGroup.title}</h4>
            <ul className="space-y-0.5">
              {featureGroup.items.map((item, idx) => (
                <li key={idx} className="flex items-start gap-1.5 text-[10px]">
                  <span className="inline-flex items-center justify-center w-3 h-3 rounded-full bg-amber-50 text-amber-700 text-[8px] mt-0.5">
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
        <Button
          size="sm"
          className="w-full bg-amber-500 hover:bg-amber-600 text-xs"
          onClick={() => {
            window.open(getCtaUrlWithParams(), '_blank');
          }}
        >
          {ctaText}
        </Button>
      </div>
    </motion.div>
  );
};

export default CheckoutCard;
