
import { useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useIsMobile } from "@/hooks/use-mobile";
import { testimonialData } from "@/data/testimonials";
import TestimonialCard from "./testimonial/TestimonialCard";
import { useCarouselAutoScroll } from "@/hooks/useCarouselAutoScroll";

export const TestimonialCarousel = () => {
  const [api, setApi] = useState<any>(null);
  const isMobile = useIsMobile();
  
  // Use the custom hook for auto-scrolling
  useCarouselAutoScroll({
    api,
    interval: 4000, // Slightly longer interval for better user experience
    enabled: true
  });

  return (
    <div className="w-full overflow-hidden">
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full"
        setApi={setApi}
      >
        <CarouselContent className="gap-4">
          {testimonialData.map((testimonial, index) => (
            <CarouselItem 
              key={index} 
              className={`md:basis-1/2 ${isMobile ? 'basis-full' : 'lg:basis-1/3'}`}
            >
              <TestimonialCard testimonial={testimonial} />
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="hidden md:block">
          <CarouselPrevious className="left-2" />
          <CarouselNext className="right-2" />
        </div>
      </Carousel>
    </div>
  );
};
