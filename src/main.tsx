import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Hide loading spinner
const spinner = document.getElementById('loading-spinner');
if (spinner) {
  spinner.style.display = 'none';
}

// Initialize React first
const root = createRoot(document.getElementById("root")!);
root.render(<App />);

// Initialize performance monitoring after React is ready
import('./utils/performance').then(({ trackPerformanceMetrics, registerServiceWorker, preloadCriticalResources }) => {
  // Initialize performance monitoring
  trackPerformanceMetrics();
  
  // Register service worker for caching
  registerServiceWorker();
  
  // Preload critical resources
  preloadCriticalResources();
});
