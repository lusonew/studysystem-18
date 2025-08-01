
import { useEffect, useCallback } from "react";
import type { CarouselApi } from "@/components/ui/carousel";

interface UseCarouselAutoScrollProps {
  api: CarouselApi | null;
  interval?: number;
  enabled?: boolean;
}

export const useCarouselAutoScroll = ({
  api,
  interval = 3000,
  enabled = true,
}: UseCarouselAutoScrollProps) => {
  const scrollNext = useCallback(() => {
    if (api) {
      api.scrollNext();
    }
  }, [api]);
  
  useEffect(() => {
    if (!api || !enabled) return;
    
    // Set up auto-scrolling interval
    const autoScrollInterval = setInterval(scrollNext, interval);
    
    // Clean up interval on unmount
    return () => clearInterval(autoScrollInterval);
  }, [api, scrollNext, interval, enabled]);
  
  return { scrollNext };
};
