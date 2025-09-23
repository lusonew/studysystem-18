import { ReactNode } from 'react';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import { cn } from '@/lib/utils';

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  animation?: 'fade-in' | 'slide-up' | 'scale-in';
  delay?: number;
  threshold?: number;
}

export const AnimatedSection = ({ 
  children, 
  className,
  animation = 'fade-in',
  delay = 0,
  threshold = 0.1
}: AnimatedSectionProps) => {
  const { ref, isIntersecting } = useIntersectionObserver({
    threshold,
    triggerOnce: true,
  });

  const getAnimationClasses = () => {
    const baseClasses = 'transition-all duration-700 ease-out';
    
    if (!isIntersecting) {
      switch (animation) {
        case 'fade-in':
          return `${baseClasses} opacity-0 translate-y-8`;
        case 'slide-up':
          return `${baseClasses} opacity-0 translate-y-12`;
        case 'scale-in':
          return `${baseClasses} opacity-0 scale-95`;
        default:
          return `${baseClasses} opacity-0`;
      }
    }
    
    return `${baseClasses} opacity-100 translate-y-0 scale-100`;
  };

  return (
    <div
      ref={ref}
      className={cn(getAnimationClasses(), className)}
      style={{
        transitionDelay: delay ? `${delay}ms` : undefined,
      }}
    >
      {children}
    </div>
  );
};