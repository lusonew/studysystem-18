// Performance monitoring utilities

export interface PerformanceMetrics {
  lcp?: number;
  fid?: number;
  cls?: number;
  ttfb?: number;
}

// Track Core Web Vitals
export const trackPerformanceMetrics = () => {
  const metrics: PerformanceMetrics = {};

  // Largest Contentful Paint (LCP)
  const lcpObserver = new PerformanceObserver((list) => {
    const entries = list.getEntries();
    const lastEntry = entries[entries.length - 1] as PerformanceEntry & { startTime: number };
    metrics.lcp = lastEntry.startTime;
    console.log('LCP:', metrics.lcp);
  });

  // First Input Delay (FID)
  const fidObserver = new PerformanceObserver((list) => {
    const entries = list.getEntries();
    entries.forEach((entry: any) => {
      metrics.fid = entry.processingStart - entry.startTime;
      console.log('FID:', metrics.fid);
    });
  });

  // Cumulative Layout Shift (CLS)
  let clsValue = 0;
  const clsObserver = new PerformanceObserver((list) => {
    const entries = list.getEntries();
    entries.forEach((entry: any) => {
      if (!entry.hadRecentInput) {
        clsValue += entry.value;
      }
    });
    metrics.cls = clsValue;
    console.log('CLS:', metrics.cls);
  });

  // Time to First Byte (TTFB)
  const navigationEntry = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
  if (navigationEntry) {
    metrics.ttfb = navigationEntry.responseStart - navigationEntry.requestStart;
    console.log('TTFB:', metrics.ttfb);
  }

  // Start observing
  try {
    lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });
    fidObserver.observe({ entryTypes: ['first-input'] });
    clsObserver.observe({ entryTypes: ['layout-shift'] });
  } catch (error) {
    console.warn('Performance Observer not supported:', error);
  }

  return metrics;
};

// Preload critical resources
export const preloadCriticalResources = () => {
  const criticalImages = [
    '/lovable-uploads/9a5065ac-4c3c-45e8-b8c8-c228e3f18bd7.png',
    '/lovable-uploads/bda10c42-d207-4d8b-b239-f3df3732f038.png',
  ];

  criticalImages.forEach((src) => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.as = 'image';
    link.href = src;
    link.fetchPriority = 'high';
    document.head.appendChild(link);
  });
};

// Register service worker
export const registerServiceWorker = async () => {
  if ('serviceWorker' in navigator) {
    try {
      const registration = await navigator.serviceWorker.register('/sw.js');
      console.log('SW registered:', registration);
    } catch (error) {
      console.warn('SW registration failed:', error);
    }
  }
};