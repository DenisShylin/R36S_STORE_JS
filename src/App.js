// Импорт инициализаторов секций
import { initHeader } from '/sections/Header/Header.js';
import { initHero } from '/sections/Hero/Hero.js';
// import { initAbout } from '/sections/About/About.js';
// import { initFeatures } from '/sections/Features/Features.js';
// import { initCategories } from '/sections/Categories/Categories.js';
// import { initArticles } from '/sections/Articles/Articles.js';
// import { initReviews } from '/sections/Reviews/Reviews.js';
// import { initContact } from '/sections/Contact/Contact.js';
// import { initProducts } from '/sections/Products/Products.js';
// import { initFooter } from '/sections/Footer/Footer.js';

// Импорт инициализаторов компонентов
import { initMobileMenu } from '/components/MobileMenu/MobileMenu.js';
// Условный импорт Modal
let initModal;
try {
  initModal = (await import('/components/Modal/ModalPortal.js')).initModal;
} catch (error) {
  console.log('Modal.js не загружен:', error);
  initModal = () => console.log('Modal компонент недоступен');
}

// Загрузка HTML-фрагментов секций
async function loadHtmlSection(name) {
  try {
    const response = await fetch(`/sections/${name}/${name}.html`);
    if (!response.ok) {
      throw new Error(`Не удалось загрузить секцию ${name}`);
    }
    return await response.text();
  } catch (error) {
    console.error(`Ошибка загрузки секции ${name}:`, error);
    return `<div class="error-section">Ошибка загрузки секции ${name}</div>`;
  }
}

// Загрузка HTML-фрагментов компонентов
async function loadHtmlComponent(name) {
  try {
    const response = await fetch(`/components/${name}/${name}.html`);
    if (!response.ok) {
      throw new Error(`Не удалось загрузить компонент ${name}`);
    }
    return await response.text();
  } catch (error) {
    console.error(`Ошибка загрузки компонента ${name}:`, error);
    return `<div class="error-component">Ошибка загрузки компонента ${name}</div>`;
  }
}

// Инициализация приложения
async function initApp() {
  console.log('Инициализация приложения');
  const root = document.getElementById('root');
  if (!root) {
    console.error('Элемент #root не найден');
    return;
  }

  const isDevelopment = import.meta.env.MODE === 'development';
  const basename = isDevelopment ? '/' : '/r32s/';

  console.log('Режим:', import.meta.env.MODE);
  console.log('Базовый путь:', basename);

  try {
    // Загрузка HTML-фрагментов
    const headerHtml = await loadHtmlSection('Header');
    const mobileMenuHtml = await loadHtmlComponent('MobileMenu');

    // Определение текущего маршрута
    const path = window.location.pathname.replace(basename, '/');

    if (path === '/' || path === '/index.html') {
      // Главная страница - загружаем все секции
      const heroHtml = await loadHtmlSection('Hero');
      const aboutHtml = await loadHtmlSection('About');
      const featuresHtml = await loadHtmlSection('Features');
      const categoriesHtml = await loadHtmlSection('Categories');
      const articlesHtml = await loadHtmlSection('Articles');
      const reviewsHtml = await loadHtmlSection('Reviews');
      const contactHtml = await loadHtmlSection('Contact');
      const productsHtml = await loadHtmlSection('Products');
      const footerHtml = await loadHtmlSection('Footer');

      // Вставляем HTML в DOM
      root.innerHTML = `
        ${headerHtml}
        ${mobileMenuHtml}
        <main id="main-content">
          ${heroHtml}
          ${aboutHtml}
          ${featuresHtml}
          ${categoriesHtml}
          ${articlesHtml}
          ${reviewsHtml}
          ${contactHtml}
          ${productsHtml}
        </main>
        ${footerHtml}
      `;

      // Инициализация скриптов секций и компонентов
      try {
        initHeader();
        initMobileMenu();
        initHero();
        // initAbout();
        // initFeatures();
        // initCategories();
        // initArticles();
        // initReviews();
        // initContact();
        // initProducts();
        // initFooter();
        // initModal();
      } catch (error) {
        console.error('Ошибка при инициализации скриптов:', error);
      }
    } else {
      // Страница 404
      const footerHtml = await loadHtmlSection('Footer');

      root.innerHTML = `
        ${headerHtml}
        ${mobileMenuHtml}
        <div class="not-found">
          <h1>404</h1>
          <p>Страница не найдена</p>
          <a href="/" class="back-home">Вернуться на главную</a>
        </div>
        ${footerHtml}
      `;

      initHeader();
      initMobileMenu();
      initFooter();
    }

    console.log('Приложение инициализировано');
  } catch (error) {
    console.error('Ошибка при инициализации приложения:', error);
    root.innerHTML = `
      <div class="error">
        <h1>Ошибка</h1>
        <p>Произошла ошибка при загрузке страницы:</p>
        <pre>${error.message}</pre>
        <button onclick="location.reload()">Перезагрузить страницу</button>
      </div>
    `;
  }
}

// Обработка хеша в URL и прокрутка к соответствующей секции
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
      }, 300); // Небольшая задержка, чтобы DOM успел обработаться
    }
  }
}

// Обработка клика по якорным ссылкам
function setupAnchorLinks() {
  document.body.addEventListener('click', e => {
    // Находим ближайший элемент a от целевого элемента клика
    const link = e.target.closest('a');

    // Если клик был по ссылке и она внутренняя (не внешняя)
    if (
      link &&
      link.href &&
      link.href.startsWith(window.location.origin) &&
      !link.dataset.external
    ) {
      const url = new URL(link.href);

      // Если это хеш-ссылка на якорь на текущей странице
      if (url.pathname === window.location.pathname && url.hash) {
        e.preventDefault();

        // Обновляем хеш и прокручиваем к элементу
        window.history.pushState(null, '', url.hash);
        handleHash();
      }
    }
  });
}

// Запускаем приложение после загрузки DOM
document.addEventListener('DOMContentLoaded', () => {
  initApp().then(() => {
    // После инициализации приложения проверяем хеш в URL
    handleHash();
    // Настраиваем обработчики для якорных ссылок
    setupAnchorLinks();
  });
});

// Обработка навигации вперед/назад в браузере
window.addEventListener('popstate', handleHash);
