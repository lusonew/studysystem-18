
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
  const [isHovered, setIsHovered] = useState(false);
  const isMobile = useIsMobile();
  
  // Use the custom hook for auto-scrolling
  useCarouselAutoScroll({
    api,
    interval: 5000, // Longer interval since images need more time to read
    enabled: !isHovered // Pause when hovered
  });

  // Filter testimonials to only show those with images
  const testimonialsWithImages = testimonialData.filter(testimonial => testimonial.imageUrl);

  return (
    <div 
      className="w-full overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Carousel
        opts={{
          align: "center",
          loop: true,
        }}
        className="w-full max-w-4xl mx-auto"
        setApi={setApi}
      >
        <CarouselContent className="gap-8">
          {testimonialsWithImages.map((testimonial, index) => (
            <CarouselItem 
              key={index} 
              className="basis-full"
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
