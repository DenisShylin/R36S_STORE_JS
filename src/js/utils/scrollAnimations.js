// src/js/utils/scrollAnimations.js
/**
 * Класс для анимации элементов при прокрутке страницы
 */
export class ScrollAnimations {
  constructor() {
    // Элементы, которые будем анимировать
    this.animatedElements = document.querySelectorAll('[data-scroll]');

    // Опции для IntersectionObserver
    this.options = {
      threshold: 0.2, // Элемент будет анимирован когда 20% его видно
      rootMargin: '0px',
    };

    this.init();
  }

  /**
   * Инициализирует IntersectionObserver и начинает наблюдение за элементами
   */
  init() {
    // Создаем observer
    this.observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Добавляем класс для анимации
          entry.target.classList.add('scroll-animated');

          // Получаем тип анимации из data-атрибута
          const animationType = entry.target.dataset.scroll;
          if (animationType) {
            entry.target.classList.add(`scroll-${animationType}`);
          }

          // Удаляем наблюдение после первой анимации
          this.observer.unobserve(entry.target);
        }
      });
    }, this.options);

    // Начинаем наблюдение за элементами
    this.animatedElements.forEach(element => {
      this.observer.observe(element);
    });
  }

  /**
   * Метод для обновления наблюдаемых элементов
   * Полезно при динамическом добавлении контента на страницу
   */
  refresh() {
    // Обновляем список элементов
    this.animatedElements = document.querySelectorAll('[data-scroll]');

    // Отключаем предыдущий observer
    if (this.observer) {
      this.observer.disconnect();
    }

    // Инициализируем с новыми элементами
    this.init();
  }

  /**
   * Удаляет observer и очищает ресурсы
   */
  destroy() {
    if (this.observer) {
      this.observer.disconnect();
    }
  }
}

/**
 * Функция для инициализации анимаций при прокрутке
 * @returns {ScrollAnimations} Экземпляр класса для управления анимациями
 */
export const initScrollAnimations = () => {
  return new ScrollAnimations();
};
