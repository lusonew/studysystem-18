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
      className={`${className} p-6 rounded-xl border shadow-sm hover:shadow-lg transition-shadow flex flex-col h-full`}
    >
      {badge && (
        <div className="inline-block px-3 py-1 bg-amber-100 text-amber-800 rounded-full text-xs font-medium mb-3 self-start">
          {badge}
        </div>
      )}

      {/* Image */}
      <div className="text-center mb-4">
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
      <h3 className="text-xl font-bold mb-3 text-center">{title}</h3>

      {/* Price */}
      <div className="mb-4 text-center">
        <div>{price}</div>
      </div>

      {/* Features */}
      <div className="flex-1 mb-6">
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
    </motion.div>
  );
};

export default CheckoutCard;
