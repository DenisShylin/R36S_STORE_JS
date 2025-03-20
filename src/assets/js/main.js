// main.js - Точка входа в приложение

// Импорт всех стилей
// import '../../assets/js/styles.js';

// Импорт точки входа в приложение
import '../../App.js';

console.log('Main.js инициализирован');

// Вспомогательная функция для определения поддержки браузером
function checkBrowserCompatibility() {
  // Проверка поддержки IntersectionObserver (для анимаций при скролле)
  const hasIntersectionObserver = 'IntersectionObserver' in window;

  // Проверка поддержки Flexbox
  const hasFlexbox = (function () {
    const el = document.createElement('div');
    el.style.display = 'flex';
    return el.style.display === 'flex';
  })();

  // Проверка поддержки CSS Grid
  const hasGrid = (function () {
    const el = document.createElement('div');
    el.style.display = 'grid';
    return el.style.display === 'grid';
  })();

  // Логирование результатов проверок
  console.log('Поддержка браузера:');
  console.log('- IntersectionObserver:', hasIntersectionObserver);
  console.log('- Flexbox:', hasFlexbox);
  console.log('- CSS Grid:', hasGrid);

  // Добавление классов к body для условного стилизования
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

// Инициализация страницы после загрузки DOM
document.addEventListener('DOMContentLoaded', () => {
  console.log('DOM загружен');

  // Проверка совместимости браузера
  const compatibility = checkBrowserCompatibility();

  // Добавим информацию о загрузке страницы в консоль для отладки
  const loadTime = performance.now();
  console.log(`Страница загружена за ${loadTime.toFixed(2)}ms`);

  // Регистрация сервис-воркера для офлайн-функциональности (если нужно)
  if ('serviceWorker' in navigator && import.meta.env.PROD) {
    window.addEventListener('load', () => {
      // Правильный базовый путь для GitHub Pages
      const base = import.meta.env.DEV ? '/' : '/R36S_STORE_JS/';

      navigator.serviceWorker
        .register(`${base}service-worker.js`)
        .then(registration => {
          console.log('ServiceWorker зарегистрирован:', registration);
        })
        .catch(error => {
          console.error('Ошибка регистрации ServiceWorker:', error);
        });
    });
  }

  // Отслеживание производительности страницы
  if ('performance' in window && 'getEntriesByType' in performance) {
    window.addEventListener('load', () => {
      const pageNavigation = performance.getEntriesByType('navigation')[0];
      const pageResources = performance.getEntriesByType('resource');

      // Общее время загрузки страницы
      console.log(
        `Общее время загрузки: ${pageNavigation.loadEventEnd.toFixed(2)}ms`
      );

      // Количество ресурсов и их общий размер
      const totalResourceSize = pageResources.reduce(
        (acc, resource) => acc + resource.transferSize,
        0
      );
      console.log(
        `Загружено ${pageResources.length} ресурсов (${(
          totalResourceSize / 1024
        ).toFixed(2)} KB)`
      );
    });
  }
});

// Обработка ошибок на уровне window
window.onerror = function (message, source, lineno, colno, error) {
  console.error('Глобальная ошибка:', {
    message,
    source,
    lineno,
    colno,
    error,
  });

  return false; // Пусть браузер также показывает ошибки в консоли
};

// Экспорт версии приложения для отладки
window.appVersion = {
  version: '1.0.0',
  buildDate: new Date().toISOString(),
  environment: import.meta.env.MODE,
  basePath: import.meta.env.DEV ? '/' : '/R36S_STORE_JS/',
};

console.log('Main.js выполнение завершено');
