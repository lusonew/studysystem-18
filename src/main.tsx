import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Hide loading spinner
const spinner = document.getElementById('loading-spinner');
if (spinner) {
  spinner.style.display = 'none';
}

createRoot(document.getElementById("root")!).render(<App />);
