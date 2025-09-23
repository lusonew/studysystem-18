import { useEffect, useState } from 'react';
import { throttle } from '@/utils/debounce';

export const useScrollThrottle = (delay: number = 100) => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = throttle(() => {
      setScrollY(window.scrollY);
    }, delay);

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [delay]);

  return scrollY;
};