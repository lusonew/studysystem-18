// Lazy loaded Framer Motion components to reduce initial bundle size
import { lazy, ComponentType } from 'react';
import { HTMLMotionProps } from 'framer-motion';

// Lazy load motion components
export const LazyMotionDiv = lazy(() => 
  import('framer-motion').then(module => ({
    default: module.motion.div as ComponentType<HTMLMotionProps<"div">>
  }))
);

export const LazyMotionSection = lazy(() => 
  import('framer-motion').then(module => ({
    default: module.motion.section as ComponentType<HTMLMotionProps<"section">>
  }))
);

export const LazyMotionH1 = lazy(() => 
  import('framer-motion').then(module => ({
    default: module.motion.h1 as ComponentType<HTMLMotionProps<"h1">>
  }))
);

export const LazyMotionH2 = lazy(() => 
  import('framer-motion').then(module => ({
    default: module.motion.h2 as ComponentType<HTMLMotionProps<"h2">>
  }))
);

export const LazyMotionP = lazy(() => 
  import('framer-motion').then(module => ({
    default: module.motion.p as ComponentType<HTMLMotionProps<"p">>
  }))
);

// Lazy load AnimatePresence
export const LazyAnimatePresence = lazy(() =>
  import('framer-motion').then(module => ({
    default: module.AnimatePresence
  }))
);