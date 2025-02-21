// src/js/utils/scrollHandler.js

class ScrollHandler {
  constructor() {
    this.progressBar = this.createProgressBar();
    this.backToTopBtn = this.createBackToTopButton();
    this.init();
  }

  createProgressBar() {
    const bar = document.createElement('div');
    bar.className = 'scroll-progress';
    document.body.appendChild(bar);
    return bar;
  }

  createBackToTopButton() {
    const button = document.createElement('button');
    button.className = 'back-to-top';
    button.setAttribute('aria-label', 'Вернуться к началу страницы');
    button.innerHTML = `
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <path d="M12 19V5M5 12l7-7 7 7"/>
      </svg>
    `;
    document.body.appendChild(button);
    return button;
  }

  handleScroll = () => {
    const scrolled = window.scrollY;
    const maxHeight =
      document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercent = (scrolled / maxHeight) * 100;

    requestAnimationFrame(() => {
      this.progressBar.style.width = `${scrollPercent}%`;
      this.backToTopBtn.classList.toggle(
        'visible',
        scrolled > window.innerHeight / 2
      );
    });
  };

  initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', e => {
        e.preventDefault();
        const target = document.querySelector(anchor.getAttribute('href'));
        if (target) {
          const headerHeight =
            document.querySelector('.header')?.offsetHeight || 0;
          const elementPosition = target.getBoundingClientRect().top;
          const offsetPosition =
            elementPosition + window.scrollY - headerHeight;

          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth',
          });
        }
      });
    });
  }

  handleBackToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  init() {
    // Добавляем слушатели событий
    window.addEventListener('scroll', this.handleScroll, { passive: true });
    this.backToTopBtn.addEventListener('click', this.handleBackToTop);
    this.initSmoothScroll();

    // Инициализируем начальное состояние
    this.handleScroll();
  }

  destroy() {
    window.removeEventListener('scroll', this.handleScroll);
    this.backToTopBtn.removeEventListener('click', this.handleBackToTop);
    this.progressBar.remove();
    this.backToTopBtn.remove();
  }
}

// Экспортируем функцию инициализации
export const initScrollHandler = () => {
  return new ScrollHandler();
};
