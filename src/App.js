// App.js - Fixed version

// Import section initializers
import { initHeader } from './sections/Header/Header.js';
import { initHero } from './sections/Hero/Hero.js';
import { initAbout } from './sections/About/About.js';
import { initFeatures } from './sections/Features/Features.js';
import { initCategories } from './sections/Categories/Categories.js';
import { initArticles } from './sections/Articles/Articles.js';
import { initReviews } from './sections/Reviews/Reviews.js';
import { initContact } from './sections/Contact/Contact.js';
import { initProducts } from './sections/Products/Products.js';
import { initFooter } from './sections/Footer/Footer.js';

// Import component initializers
import { initMobileMenu } from './components/MobileMenu/MobileMenu.js';

// Safe Modal import
let initModal = () => console.log('Modal component unavailable');
(async function loadModal() {
  try {
    const module = await import('./components/Modal/ModalPortal.js');
    initModal = module.initModal;
  } catch (error) {
    console.log('Modal.js not loaded:', error);
  }
})();

// Get the correct base path for GitHub Pages
function getBasePath() {
  const isDevelopment = import.meta.env.DEV;
  return isDevelopment ? '/' : '/R36S_STORE_JS/';
}

// Check if resource exists before fetching
async function checkResourceExists(url) {
  try {
    const response = await fetch(url, { method: 'HEAD' });
    return response.ok;
  } catch (error) {
    console.warn(`Resource ${url} is unavailable:`, error);
    return false;
  }
}

// Load HTML sections with proper path handling
async function loadHtmlSection(name) {
  const basename = getBasePath();

  // Fix: Handle paths differently for GitHub Pages vs local development
  // We need to look in the proper location based on how the build tool processes files
  const url = `${basename}sections/${name}/${name}.html`;

  try {
    const exists = await checkResourceExists(url);

    if (!exists) {
      console.warn(`Section ${name} is unavailable, using fallback`);
      return `<section id="${name.toLowerCase()}" class="section">
                <div class="container">
                  <h2>Section ${name}</h2>
                  <p>Content will be available later</p>
                </div>
              </section>`;
    }

    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error ${response.status}`);
    }
    return await response.text();
  } catch (error) {
    console.error(`Error loading section ${name}:`, error);
    return `<div class="error-section">Error loading section ${name}</div>`;
  }
}

// Load HTML components with proper path handling
async function loadHtmlComponent(name) {
  const basename = getBasePath();

  // Fix: Corrected path resolution for components
  const url = `${basename}components/${name}/${name}.html`;

  try {
    const exists = await checkResourceExists(url);

    if (!exists) {
      console.warn(`Component ${name} is unavailable, using fallback`);
      return `<div id="${name.toLowerCase()}" class="component">
                <div class="container">
                  <p>Component ${name} unavailable</p>
                </div>
              </div>`;
    }

    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error ${response.status}`);
    }
    return await response.text();
  } catch (error) {
    console.error(`Error loading component ${name}:`, error);
    return `<div class="error-component">Error loading component ${name}</div>`;
  }
}

// Safe initialization of components
function safeInit(name, initFunction) {
  try {
    initFunction();
    console.log(`${name} initialized`);
  } catch (error) {
    console.error(`${name} initialization error:`, error);
  }
}

// App initialization
async function initApp() {
  console.log('Initializing application');
  const root = document.getElementById('root');
  if (!root) {
    console.error('#root element not found');
    throw new Error('#root element not found');
  }

  // Show loading indicator
  root.innerHTML = `
    <div style="display: flex; justify-content: center; align-items: center; height: 100vh;">
      <div style="text-align: center;">
        <div style="border: 4px solid #f3f3f3; border-top: 4px solid #3498db; border-radius: 50%; width: 50px; height: 50px; animation: spin 2s linear infinite; margin: 0 auto;"></div>
        <p style="margin-top: 15px; font-family: Arial, sans-serif;">Loading...</p>
      </div>
    </div>
    <style>
      @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
      }
    </style>
  `;

  const basename = getBasePath();
  console.log('Base path:', basename);

  try {
    // Load basic HTML fragments with error handling
    const [headerHtml, mobileMenuHtml] = await Promise.all([
      loadHtmlSection('Header').catch(
        () => '<header class="header">Site Header</header>'
      ),
      loadHtmlComponent('MobileMenu').catch(
        () => '<div class="mobile-menu"></div>'
      ),
    ]);

    // Determine current route
    const path = window.location.pathname.replace(basename, '/');
    console.log('Current path:', path);

    if (path === '/' || path === '/index.html') {
      // Main page - load all sections in parallel for speed
      const sectionsPromises = {
        hero: loadHtmlSection('Hero'),
        about: loadHtmlSection('About'),
        features: loadHtmlSection('Features'),
        categories: loadHtmlSection('Categories'),
        articles: loadHtmlSection('Articles'),
        reviews: loadHtmlSection('Reviews'),
        contact: loadHtmlSection('Contact'),
        products: loadHtmlSection('Products'),
        footer: loadHtmlSection('Footer'),
      };

      // Wait for all sections to load, even if some fail
      const results = await Promise.allSettled(Object.values(sectionsPromises));
      const sections = {};

      // Convert Promise.allSettled results to a convenient structure
      Object.keys(sectionsPromises).forEach((key, index) => {
        sections[key] =
          results[index].status === 'fulfilled'
            ? results[index].value
            : `<section id="${key}" class="error-section">Error loading ${key}</section>`;
      });

      // Insert HTML into DOM
      root.innerHTML = `
        ${headerHtml}
        ${mobileMenuHtml}
        <main id="main-content">
          ${sections.hero}
          ${sections.about}
          ${sections.features}
          ${sections.categories}
          ${sections.articles}
          ${sections.reviews}
          ${sections.contact}
          ${sections.products}
        </main>
        ${sections.footer}
      `;

      // Safe initialization of section and component scripts
      safeInit('Header', initHeader);
      safeInit('MobileMenu', initMobileMenu);
      safeInit('Hero', initHero);
      safeInit('About', initAbout);
      safeInit('Features', initFeatures);
      safeInit('Categories', initCategories);
      safeInit('Articles', initArticles);
      safeInit('Reviews', initReviews);
      safeInit('Contact', initContact);
      safeInit('Products', initProducts);
      safeInit('Footer', initFooter);
      safeInit('Modal', initModal);
    } else {
      // 404 page
      const footerHtml = await loadHtmlSection('Footer').catch(
        () => '<footer class="footer"><p>© 2025</p></footer>'
      );

      root.innerHTML = `
        ${headerHtml}
        ${mobileMenuHtml}
        <div class="not-found">
          <div class="container">
            <h1>404</h1>
            <p>Page not found</p>
            <a href="${basename}" class="back-home">Return to home page</a>
          </div>
        </div>
        ${footerHtml}
      `;

      safeInit('Header', initHeader);
      safeInit('MobileMenu', initMobileMenu);
      safeInit('Footer', initFooter);
    }

    console.log('Application initialized');
  } catch (error) {
    console.error('Application initialization error:', error);
    root.innerHTML = `
      <div class="error">
        <h1>Error</h1>
        <p>An error occurred while loading the page:</p>
        <pre>${error.message}</pre>
        <button onclick="location.reload()">Reload page</button>
      </div>
    `;
    throw error; // Propagate error for external handler
  }
}

// Handle URL hash and scroll to corresponding section
function handleHash() {
  if (window.location.hash) {
    const targetId = window.location.hash.substring(1);
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      setTimeout(() => {
        const header = document.querySelector('.header');
        const headerHeight = header ? header.offsetHeight : 0;

        const targetPosition =
          targetElement.getBoundingClientRect().top +
          window.scrollY -
          headerHeight;

        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth',
        });
      }, 300); // Small delay to allow DOM to process
    }
  }
}

// Handle clicks on anchor links
function setupAnchorLinks() {
  document.body.addEventListener('click', e => {
    // Find the closest a element from the click target
    const link = e.target.closest('a');

    // If click was on a link and it's internal (not external)
    if (
      link &&
      link.href &&
      link.href.startsWith(window.location.origin) &&
      !link.dataset.external
    ) {
      const url = new URL(link.href);

      // If this is a hash link to an anchor on current page
      if (url.pathname === window.location.pathname && url.hash) {
        e.preventDefault();

        // Update hash and scroll to element
        window.history.pushState(null, '', url.hash);
        handleHash();
      }
    }
  });
}

// Start application after DOM loads with time limit
document.addEventListener('DOMContentLoaded', () => {
  // Show temporary content while app loads
  const root = document.getElementById('root');
  if (root) {
    root.innerHTML = `
      <div style="padding: 20px; text-align: center;">
        <div style="border: 4px solid #f3f3f3; border-top: 4px solid #3498db; border-radius: 50%; width: 30px; height: 30px; animation: spin 1s linear infinite; margin: 0 auto;"></div>
        <p style="margin-top: 10px;">Loading application...</p>
      </div>
      <style>
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      </style>
    `;
  }

  // Start initialization with timeout for protection against infinite waiting
  const appInitPromise = initApp();
  const timeoutPromise = new Promise((_, reject) => {
    setTimeout(
      () => reject(new Error('Initialization timeout exceeded (15 sec)')),
      15000
    );
  });

  // Use Promise.race to limit waiting time
  Promise.race([appInitPromise, timeoutPromise])
    .then(() => {
      // After initialization, handle hash and anchors
      handleHash();
      setupAnchorLinks();
    })
    .catch(error => {
      console.error('Initialization error:', error);
      if (root) {
        root.innerHTML = `
          <div style="padding: 20px; text-align: center; font-family: Arial, sans-serif;">
            <h1>Failed to load application</h1>
            <p>${error.message}</p>
            <button onclick="location.reload()" style="padding: 10px 20px; margin-top: 15px; cursor: pointer;">
              Try again
            </button>
          </div>
        `;
      }
    });
});

// Handle browser forward/back navigation
window.addEventListener('popstate', handleHash);

// Export functions that may be needed in other modules
export { handleHash, setupAnchorLinks };
