
import React from "react";

type FeatureItemProps = {
  text: string;
  isSubItem?: boolean;
};

const FeatureItem: React.FC<FeatureItemProps> = ({ text, isSubItem = false }) => (
  <li className="flex items-start gap-3">
    <span className="inline-flex items-center justify-center w-4 h-4 rounded-full bg-amber-50 text-amber-700 text-xs mt-1">
      ○
    </span>
    <span>{text}</span>
  </li>
);

type FeatureGroupProps = {
  title: string;
  items: string[];
  icon?: React.ReactNode;
};

export const PricingFeatureGroup: React.FC<FeatureGroupProps> = ({ 
  title, 
  items,
  icon
}) => (
  <div className="space-y-2 mb-4">
    <h4 className="font-bold flex items-center gap-2 mt-4">
      {icon ? (
        icon
      ) : (
        <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-amber-100 text-amber-800">
          •
        </span>
      )}
      {title}
    </h4>
    <ul className="space-y-2 pl-10">
      {items.map((item, index) => (
        <FeatureItem key={index} text={item} />
      ))}
    </ul>
  </div>
);

export default PricingFeatureGroup;
