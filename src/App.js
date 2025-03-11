// App.js - Модифицированная версия

// Импорт инициализаторов секций
import { initHeader } from '/sections/Header/Header.js';
import { initHero } from '/sections/Hero/Hero.js';
import { initAbout } from '/sections/About/About.js';
import { initFeatures } from '/sections/Features/Features.js';
import { initCategories } from '/sections/Categories/Categories.js';
import { initArticles } from '/sections/Articles/Articles.js';
import { initReviews } from '/sections/Reviews/Reviews.js';
import { initContact } from '/sections/Contact/Contact.js';
import { initProducts } from '/sections/Products/Products.js';
import { initFooter } from '/sections/Footer/Footer.js';

// Импорт инициализаторов компонентов
import { initMobileMenu } from '/components/MobileMenu/MobileMenu.js';

// Безопасный импорт Modal
let initModal = () => console.log('Modal компонент недоступен');
(async function loadModal() {
  try {
    const module = await import('/components/Modal/ModalPortal.js');
    initModal = module.initModal;
  } catch (error) {
    console.log('Modal.js не загружен:', error);
  }
})();

// Функция проверки доступности ресурса перед fetch
async function checkResourceExists(url) {
  try {
    const response = await fetch(url, { method: 'HEAD' });
    return response.ok;
  } catch (error) {
    console.warn(`Ресурс ${url} недоступен:`, error);
    return false;
  }
}

// Загрузка HTML-фрагментов секций с проверкой
async function loadHtmlSection(name) {
  // Получаем базовый путь для корректных URL
  const isDevelopment = import.meta.env.MODE === 'development';
  const basename = isDevelopment ? '/' : '/R36S_STORE_JS/';

  // Формируем URL с учетом базового пути
  const url = `${basename}sections/${name}/${name}.html`;

  try {
    const exists = await checkResourceExists(url);

    if (!exists) {
      console.warn(`Секция ${name} недоступна, используем заглушку`);
      return `<section id="${name.toLowerCase()}" class="section">
                <div class="container">
                  <h2>Секция ${name}</h2>
                  <p>Контент будет доступен позже</p>
                </div>
              </section>`;
    }

    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP ошибка ${response.status}`);
    }
    return await response.text();
  } catch (error) {
    console.error(`Ошибка загрузки секции ${name}:`, error);
    return `<div class="error-section">Ошибка загрузки секции ${name}</div>`;
  }
}

// Загрузка HTML-фрагментов компонентов с проверкой
async function loadHtmlComponent(name) {
  // Получаем базовый путь для корректных URL
  const isDevelopment = import.meta.env.MODE === 'development';
  const basename = isDevelopment ? '/' : '/R36S_STORE_JS/';

  // Формируем URL с учетом базового пути
  const url = `${basename}components/${name}/${name}.html`;

  try {
    const exists = await checkResourceExists(url);

    if (!exists) {
      console.warn(`Компонент ${name} недоступен, используем заглушку`);
      return `<div id="${name.toLowerCase()}" class="component">
                <div class="container">
                  <p>Компонент ${name} недоступен</p>
                </div>
              </div>`;
    }

    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP ошибка ${response.status}`);
    }
    return await response.text();
  } catch (error) {
    console.error(`Ошибка загрузки компонента ${name}:`, error);
    return `<div class="error-component">Ошибка загрузки компонента ${name}</div>`;
  }
}

// Безопасное выполнение инициализации компонентов
function safeInit(name, initFunction) {
  try {
    initFunction();
    console.log(`${name} инициализирован`);
  } catch (error) {
    console.error(`Ошибка инициализации ${name}:`, error);
  }
}

// Инициализация приложения
async function initApp() {
  console.log('Инициализация приложения');
  const root = document.getElementById('root');
  if (!root) {
    console.error('Элемент #root не найден');
    throw new Error('Элемент #root не найден');
  }

  // Показываем индикатор загрузки
  root.innerHTML = `
    <div style="display: flex; justify-content: center; align-items: center; height: 100vh;">
      <div style="text-align: center;">
        <div style="border: 4px solid #f3f3f3; border-top: 4px solid #3498db; border-radius: 50%; width: 50px; height: 50px; animation: spin 2s linear infinite; margin: 0 auto;"></div>
        <p style="margin-top: 15px; font-family: Arial, sans-serif;">Загрузка...</p>
      </div>
    </div>
    <style>
      @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
      }
    </style>
  `;

  const isDevelopment = import.meta.env.MODE === 'development';
  const basename = isDevelopment ? '/' : '/R36S_STORE_JS/';

  console.log('Режим:', import.meta.env.MODE);
  console.log('Базовый путь:', basename);

  try {
    // Загрузка базовых HTML-фрагментов с обработкой ошибок
    const [headerHtml, mobileMenuHtml] = await Promise.all([
      loadHtmlSection('Header').catch(
        () => '<header class="header">Заголовок сайта</header>'
      ),
      loadHtmlComponent('MobileMenu').catch(
        () => '<div class="mobile-menu"></div>'
      ),
    ]);

    // Определение текущего маршрута
    const path = window.location.pathname.replace(basename, '/');

    if (path === '/' || path === '/index.html') {
      // Главная страница - загружаем все секции параллельно для ускорения
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

      // Ждем загрузки всех секций, даже если некоторые завершились с ошибкой
      const results = await Promise.allSettled(Object.values(sectionsPromises));
      const sections = {};

      // Конвертируем результаты Promise.allSettled в удобную структуру
      Object.keys(sectionsPromises).forEach((key, index) => {
        sections[key] =
          results[index].status === 'fulfilled'
            ? results[index].value
            : `<section id="${key}" class="error-section">Ошибка загрузки ${key}</section>`;
      });

      // Вставляем HTML в DOM
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

      // Безопасная инициализация скриптов секций и компонентов
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
      // Страница 404
      const footerHtml = await loadHtmlSection('Footer').catch(
        () => '<footer class="footer"><p>© 2025</p></footer>'
      );

      root.innerHTML = `
        ${headerHtml}
        ${mobileMenuHtml}
        <div class="not-found">
          <div class="container">
            <h1>404</h1>
            <p>Страница не найдена</p>
            <a href="${basename}" class="back-home">Вернуться на главную</a>
          </div>
        </div>
        ${footerHtml}
      `;

      safeInit('Header', initHeader);
      safeInit('MobileMenu', initMobileMenu);
      safeInit('Footer', initFooter);
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
    throw error; // Пробрасываем ошибку дальше для обработки во внешнем обработчике
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

// Запускаем приложение после загрузки DOM с ограничением по времени
document.addEventListener('DOMContentLoaded', () => {
  // Показать временный контент пока загружается приложение
  const root = document.getElementById('root');
  if (root) {
    root.innerHTML = `
      <div style="padding: 20px; text-align: center;">
        <div style="border: 4px solid #f3f3f3; border-top: 4px solid #3498db; border-radius: 50%; width: 30px; height: 30px; animation: spin 1s linear infinite; margin: 0 auto;"></div>
        <p style="margin-top: 10px;">Загрузка приложения...</p>
      </div>
      <style>
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      </style>
    `;
  }

  // Запускаем инициализацию с таймаутом для защиты от бесконечного ожидания
  const appInitPromise = initApp();
  const timeoutPromise = new Promise((_, reject) => {
    setTimeout(
      () =>
        reject(new Error('Превышено время ожидания инициализации (15 сек)')),
      15000
    );
  });

  // Используем Promise.race для ограничения времени ожидания
  Promise.race([appInitPromise, timeoutPromise])
    .then(() => {
      // После инициализации выполняем действия с хешем и якорями
      handleHash();
      setupAnchorLinks();
    })
    .catch(error => {
      console.error('Ошибка инициализации:', error);
      if (root) {
        root.innerHTML = `
          <div style="padding: 20px; text-align: center; font-family: Arial, sans-serif;">
            <h1>Не удалось загрузить приложение</h1>
            <p>${error.message}</p>
            <button onclick="location.reload()" style="padding: 10px 20px; margin-top: 15px; cursor: pointer;">
              Попробовать снова
            </button>
          </div>
        `;
      }
    });
});

// Обработка навигации вперед/назад в браузере
window.addEventListener('popstate', handleHash);

// Экспортируем функции, которые могут понадобиться в других модулях
export { handleHash, setupAnchorLinks };
