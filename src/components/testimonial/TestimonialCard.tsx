
import { Card, CardContent } from "../ui/card";
import { Testimonial } from "@/data/testimonials";
import { memo } from "react";

type TestimonialCardProps = {
  testimonial: Testimonial;
};

// Using memo to prevent unnecessary re-renders when carousel slides
const TestimonialCard = memo(({ testimonial }: TestimonialCardProps) => {
  const { imageUrl } = testimonial;

  return (
    <Card className="bg-white border border-gray-100 shadow-sm h-full">
      <CardContent className="p-0">
        {imageUrl ? (
          <img 
            src={imageUrl} 
            alt="Google Review" 
            className="w-full h-auto rounded-lg"
            loading="lazy"
          />
        ) : (
          <div className="p-6 text-center text-gray-500">
            No image available
          </div>
        )}
      </CardContent>
    </Card>
  );
});

TestimonialCard.displayName = "TestimonialCard";

export default TestimonialCard;
