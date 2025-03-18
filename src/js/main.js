// main.js - Application entry point

// Import CSS files
// Using relative paths to avoid path resolution issues
import '../index.css';
import '../sections/Hero/Hero.css';
import '../sections/Header/Header.css';
import '../sections/About/About.css';
import '../sections/Articles/Articles.css';
import '../sections/Categories/Categories.css';
import '../sections/Contact/Contact.css';
import '../sections/Features/Features.css';
import '../sections/Footer/Footer.css';
import '../sections/Products/Products.css';
import '../sections/Reviews/Reviews.css';
import '../sections/About/ModalAbout/ModalAbout.css';
import '../components/MobileMenu/MobileMenu.css';
import '../sections/Footer/PartnershipModal/PartnershipModal.css';

// Import application entry point with correct path
import '../App.js';

console.log('Main.js initialized');

// Helper function to check browser compatibility
function checkBrowserCompatibility() {
  // Check IntersectionObserver support (for scroll animations)
  const hasIntersectionObserver = 'IntersectionObserver' in window;

  // Check Flexbox support
  const hasFlexbox = (function () {
    const el = document.createElement('div');
    el.style.display = 'flex';
    return el.style.display === 'flex';
  })();

  // Check CSS Grid support
  const hasGrid = (function () {
    const el = document.createElement('div');
    el.style.display = 'grid';
    return el.style.display === 'grid';
  })();

  // Log compatibility results
  console.log('Browser support:');
  console.log('- IntersectionObserver:', hasIntersectionObserver);
  console.log('- Flexbox:', hasFlexbox);
  console.log('- CSS Grid:', hasGrid);

  // Add classes to body for conditional styling
  if (!hasIntersectionObserver)
    document.body.classList.add('no-intersection-observer');
  if (!hasFlexbox) document.body.classList.add('no-flexbox');
  if (!hasGrid) document.body.classList.add('no-grid');

  return {
    hasIntersectionObserver,
    hasFlexbox,
    hasGrid,
  };
}

// Initialize page after DOM load
document.addEventListener('DOMContentLoaded', () => {
  console.log('DOM loaded');

  // Check browser compatibility
  const compatibility = checkBrowserCompatibility();

  // Add page load time info to console for debugging
  const loadTime = performance.now();
  console.log(`Page loaded in ${loadTime.toFixed(2)}ms`);

  // Register service worker for offline functionality (if needed)
  if ('serviceWorker' in navigator && import.meta.env.PROD) {
    window.addEventListener('load', () => {
      // Get the correct base path for GitHub Pages
      const base = import.meta.env.DEV ? '/' : '/R36S_STORE_JS/';

      navigator.serviceWorker
        .register(`${base}service-worker.js`)
        .then(registration => {
          console.log('ServiceWorker registered:', registration);
        })
        .catch(error => {
          console.error('ServiceWorker registration error:', error);
        });
    });
  }

  // Track page performance
  if ('performance' in window && 'getEntriesByType' in performance) {
    window.addEventListener('load', () => {
      const pageNavigation = performance.getEntriesByType('navigation')[0];
      const pageResources = performance.getEntriesByType('resource');

      // Total page load time
      console.log(
        `Total load time: ${pageNavigation.loadEventEnd.toFixed(2)}ms`
      );

      // Count resources and their total size
      const totalResourceSize = pageResources.reduce(
        (acc, resource) => acc + resource.transferSize,
        0
      );
      console.log(
        `Loaded ${pageResources.length} resources (${(
          totalResourceSize / 1024
        ).toFixed(2)} KB)`
      );
    });
  }
});

// Handle global window errors
window.onerror = function (message, source, lineno, colno, error) {
  console.error('Global error:', {
    message,
    source,
    lineno,
    colno,
    error,
  });

  return false; // Let browser also show errors in console
};

// Export app version for debugging
window.appVersion = {
  version: '1.0.0',
  buildDate: new Date().toISOString(),
  environment: import.meta.env.MODE,
  basePath: import.meta.env.DEV ? '/' : '/R36S_STORE_JS/',
};

console.log('Main.js execution completed');
