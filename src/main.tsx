import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

// Suppress errors from configure-three.vercel.app (likely from browser extension or cached service worker)
window.addEventListener('error', (e) => {
  if (e.message && (e.message.includes('configure-three.vercel.app') || e.message.includes('render.glb'))) {
    e.preventDefault();
    return false;
  }
}, true);

// Suppress fetch errors for the same domain
const originalFetch = window.fetch;
window.fetch = function(...args) {
  const url = typeof args[0] === 'string' ? args[0] : (args[0] instanceof Request ? args[0].url : '');
  if (url && (url.includes('configure-three.vercel.app') || url.includes('render.glb'))) {
    // Return a failed response silently instead of rejecting
    return Promise.resolve(new Response(null, { status: 404, statusText: 'Not Found' }));
  }
  return originalFetch.apply(this, args).catch((error) => {
    const errorMessage = error?.message || String(error) || '';
    if (errorMessage.includes('configure-three.vercel.app') || errorMessage.includes('render.glb')) {
      // Silently ignore this error - return a 404 response
      return Promise.resolve(new Response(null, { status: 404, statusText: 'Not Found' }));
    }
    throw error;
  });
};

createRoot(document.getElementById("root")!).render(<App />);
