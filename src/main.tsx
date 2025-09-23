import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { trackPerformanceMetrics, registerServiceWorker, preloadCriticalResources } from './utils/performance'

// Initialize performance monitoring
trackPerformanceMetrics();

// Register service worker for caching
registerServiceWorker();

// Preload critical resources
preloadCriticalResources();

// Hide loading spinner
const spinner = document.getElementById('loading-spinner');
if (spinner) {
  spinner.style.display = 'none';
}

createRoot(document.getElementById("root")!).render(<App />);
