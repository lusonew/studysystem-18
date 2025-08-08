
import { Testimonial } from "@/data/testimonials";
import { memo } from "react";

type TestimonialCardProps = {
  testimonial: Testimonial;
};

// Using memo to prevent unnecessary re-renders when carousel slides
const TestimonialCard = memo(({ testimonial }: TestimonialCardProps) => {
  const { imageUrl } = testimonial;

  return (
    <div className="flex justify-center">
      {imageUrl ? (
        <img 
          src={imageUrl} 
          alt="Google Review" 
          className="w-full max-w-2xl h-auto rounded-lg shadow-lg"
          loading="lazy"
        />
      ) : (
        <div className="p-6 text-center text-gray-500">
          No image available
        </div>
      )}
    </div>
  );
});

TestimonialCard.displayName = "TestimonialCard";

export default TestimonialCard;
