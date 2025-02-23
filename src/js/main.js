import { setupI18n, setupLanguageSelector } from './i18n/i18n.js';
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

// Объект для хранения функций инициализации секций
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

// Функция для ожидания загрузки DOM
async function waitForDOM() {
  return new Promise(resolve => {
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', resolve);
    } else {
      resolve();
    }
  });
}

// Основная функция инициализации приложения
const initApp = async () => {
  try {
    // Ждем загрузки DOM
    await waitForDOM();

    console.log('Initializing i18n...');

    // Добавляем обработку ошибок при инициализации i18n
    try {
      const i18n = await setupI18n();
      if (!i18n) {
        throw new Error('i18n initialization returned null');
      }
      console.log('i18n initialized successfully');
    } catch (i18nError) {
      console.error('i18n initialization failed:', i18nError);
      // Продолжаем выполнение даже при ошибке i18n
    }

    // Оборачиваем setupLanguageSelector в try-catch
    try {
      setupLanguageSelector();
      console.log('Language selector setup complete');
    } catch (selectorError) {
      console.error('Language selector setup failed:', selectorError);
    }

    // Инициализируем секции с обработкой ошибок
    for (const [name, init] of Object.entries(sections)) {
      try {
        await Promise.resolve(init()); // Оборачиваем в Promise.resolve для единообразной обработки
        console.log(`${name} section initialized`);
      } catch (error) {
        console.error(`Error initializing ${name} section:`, error);
        // Продолжаем с следующей секцией
      }
    }

    // Обновляем контент с обработкой ошибок
    if (window.updateContent) {
      try {
        window.updateContent();
        console.log('Content update complete');
      } catch (updateError) {
        console.error('Content update failed:', updateError);
      }
    }
  } catch (error) {
    console.error('Critical error during app initialization:', error);
  }
};

// Запускаем инициализацию приложения с обработкой ошибок
initApp().catch(error => {
  console.error('Fatal error in initApp:', error);
});

export { initApp };
