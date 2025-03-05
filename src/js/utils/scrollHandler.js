// src/js/utils/scrollHandler.js
/**
 * Класс для управления прокруткой страницы и связанными элементами
 */
export class ScrollHandler {
  constructor() {
    // Используем существующие элементы, если они уже есть в DOM
    this.progressBar =
      document.getElementById('scrollProgress') || this.createProgressBar();
    this.backToTopBtn =
      document.getElementById('backToTop') || this.createBackToTopButton();

    // Инициализация
    this.init();
  }

  /**
   * Создает индикатор прогресса прокрутки, если его нет в DOM
   * @returns {HTMLElement} Созданный элемент индикатора
   */
  createProgressBar() {
    const bar = document.createElement('div');
    bar.className = 'scroll-progress';
    bar.id = 'scrollProgress';
    document.body.appendChild(bar);
    return bar;
  }

  /**
   * Создает кнопку возврата наверх, если её нет в DOM
   * @returns {HTMLElement} Созданная кнопка
   */
  createBackToTopButton() {
    // Проверяем, существует ли уже кнопка в wrapper
    const cornerControls = document.querySelector('.corner-controls');
    if (cornerControls) {
      const existingButton = cornerControls.querySelector('.back-to-top');
      if (existingButton) {
        return existingButton;
      }

      // Если есть corner-controls, но нет кнопки, создаем и добавляем в wrapper
      const button = document.createElement('div');
      button.className = 'back-to-top';
      button.id = 'backToTop';
      button.setAttribute('aria-label', 'Back to top');
      button.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="m18 15-6-6-6 6"/>
        </svg>
      `;
      cornerControls.insertBefore(button, cornerControls.firstChild);
      return button;
    }

    // Если нет corner-controls, создаем контейнер
    const cornerControlsWrapper = document.createElement('div');
    cornerControlsWrapper.className = 'corner-controls';

    const button = document.createElement('div');
    button.className = 'back-to-top';
    button.id = 'backToTop';
    button.setAttribute('aria-label', 'Back to top');
    button.innerHTML = `
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="m18 15-6-6-6 6"/>
      </svg>
    `;

    cornerControlsWrapper.appendChild(button);
    document.body.appendChild(cornerControlsWrapper);
    return button;
  }

  /**
   * Обработчик события прокрутки
   */
  handleScroll = () => {
    const scrolled = window.scrollY;
    const maxHeight =
      document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercent = (scrolled / maxHeight) * 100;

    // Используем requestAnimationFrame для оптимизации производительности
    requestAnimationFrame(() => {
      // Обновляем ширину индикатора прогресса
      this.progressBar.style.width = `${scrollPercent}%`;

      // Показываем/скрываем кнопку возврата наверх
      this.backToTopBtn.classList.toggle(
        'visible',
        scrolled > window.innerHeight / 2
      );
    });
  };

  /**
   * Инициализирует плавную прокрутку для якорных ссылок
   */
  initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', e => {
        const href = anchor.getAttribute('href');

        // Пропускаем пустые ссылки и ссылки с '#' (чтобы не скроллить наверх)
        if (href === '#' || href === '') return;

        e.preventDefault();
        const target = document.querySelector(href);

        if (target) {
          // Учитываем высоту шапки при прокрутке
          const headerHeight =
            document.querySelector('.header')?.offsetHeight || 0;
          const elementPosition = target.getBoundingClientRect().top;
          const offsetPosition =
            elementPosition + window.scrollY - headerHeight;

          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth',
          });

          // Обновляем URL с помощью History API
          history.pushState(null, '', href);
        }
      });
    });
  }

  /**
   * Обработчик клика по кнопке возврата наверх
   */
  handleBackToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  /**
   * Инициализирует все обработчики
   */
  init() {
    // Добавляем слушатели событий
    window.addEventListener('scroll', this.handleScroll, { passive: true });
    this.backToTopBtn.addEventListener('click', this.handleBackToTop);
    this.initSmoothScroll();

    // Инициализируем начальное состояние
    this.handleScroll();
  }

  /**
   * Удаляет все обработчики и элементы
   */
  destroy() {
    window.removeEventListener('scroll', this.handleScroll);
    this.backToTopBtn.removeEventListener('click', this.handleBackToTop);

    // Не удаляем элементы из DOM, если они были изначально в HTML
    if (!document.getElementById('scrollProgress') && this.progressBar) {
      this.progressBar.remove();
    }

    if (!document.getElementById('backToTop') && this.backToTopBtn) {
      const cornerControls = this.backToTopBtn.closest('.corner-controls');
      if (cornerControls && cornerControls.children.length <= 1) {
        cornerControls.remove();
      } else {
        this.backToTopBtn.remove();
      }
    }
  }
}

// Экспортируем функцию инициализации
export const initScrollHandler = () => {
  return new ScrollHandler();
};
