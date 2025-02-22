import { setupI18n, setupLanguageSelector } from './components/i18n/i18n';
import '../css/styles.css';
import '../css/components/languageSelector.css';
import '../css/components/rtl.css';

import { initHero } from './sections/hero';
import { initHeader } from './sections/header';
import { initAbout } from './sections/about';
import { initFeatures } from './sections/features';
import { initCategories } from './sections/categories';
import { initProducts } from './sections/products';
import { initArticles } from './sections/articles';
import { initReviews } from './sections/reviews';
import { initContact } from './sections/contact';
import { initFooter } from './sections/footer';

const sections = {
  header: initHeader,
  hero: initHero,
  about: initAbout,
  features: initFeatures,
  categories: initCategories,
  products: initProducts,
  articles: initArticles,
  reviews: initReviews,
  contact: initContact,
  footer: initFooter,
};

const initApp = async () => {
  try {
    const i18n = await setupI18n();
    if (!i18n) {
      throw new Error('Failed to initialize i18n');
    }

    setupLanguageSelector();

    for (const [name, init] of Object.entries(sections)) {
      try {
        await init();
        console.log(`${name} section initialized`);
      } catch (error) {
        console.error(`Error initializing ${name} section:`, error);
      }
    }

    window.updateContent();
  } catch (error) {
    console.error('Error during app initialization:', error);
  }
};

document.addEventListener('DOMContentLoaded', initApp);

export { initApp };
