// Импорт стилей
import '../css/styles.css';
import '../css/components/scroll.css';

// Импорт утилит
import { initLazyLoading } from './utils/lazyLoader';
import { initScrollHandler } from './utils/scrollHandler';

// Импорт секций
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

// Функция инициализации
const initApp = () => {
  // Инициализация утилит
  initLazyLoading();
  initScrollHandler();

  // Инициализация секций
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

  // Инициализируем каждую секцию с обработкой ошибок
  Object.entries(sections).forEach(([name, init]) => {
    try {
      init();
      console.log(`${name} section initialized`);
    } catch (error) {
      console.error(`Error initializing ${name} section:`, error);
    }
  });
};

// Запуск после загрузки DOM
document.addEventListener('DOMContentLoaded', initApp);
