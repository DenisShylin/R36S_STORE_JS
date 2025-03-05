// src/js/utils/lazyLoading.js
/**
 * Класс для ленивой загрузки изображений
 */
export class LazyLoader {
  constructor() {
    // Выбираем все изображения с атрибутом data-src
    this.images = document.querySelectorAll(
      'img[data-src], source[data-srcset]'
    );

    // Опции для IntersectionObserver
    this.options = {
      rootMargin: '0px 0px 200px 0px', // Предзагрузка за 200px до появления
      threshold: 0,
    };

    this.init();
  }

  /**
   * Инициализирует ленивую загрузку
   */
  init() {
    // Проверяем поддержку IntersectionObserver
    if (!('IntersectionObserver' in window)) {
      this.loadAllImages();
      return;
    }

    // Создаем observer
    this.observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          this.loadImage(entry.target);
          observer.unobserve(entry.target);
        }
      });
    }, this.options);

    // Наблюдаем за всеми изображениями
    this.images.forEach(image => {
      this.observer.observe(image);
    });
  }

  /**
   * Загружает изображение, заменяя data-src на src
   * @param {HTMLElement} image - Элемент изображения
   */
  loadImage(image) {
    // Для обычных изображений
    if (image.dataset.src) {
      image.src = image.dataset.src;
    }

    // Для source элементов
    if (image.dataset.srcset) {
      image.srcset = image.dataset.srcset;
    }

    // Добавляем класс loaded для возможных анимаций
    image.classList.add('loaded');

    // Уведомляем об успешной загрузке
    image.addEventListener('load', () => {
      image.removeAttribute('data-src');
      image.removeAttribute('data-srcset');
    });
  }

  /**
   * Загружает все изображения без ленивой загрузки
   * Используется как фолбэк для браузеров без поддержки IntersectionObserver
   */
  loadAllImages() {
    this.images.forEach(image => {
      this.loadImage(image);
    });
  }

  /**
   * Обновляет список изображений для ленивой загрузки
   */
  refresh() {
    // Обновляем список изображений
    this.images = document.querySelectorAll(
      'img[data-src], source[data-srcset]'
    );

    // Если observer уже существует, добавляем новые изображения
    if (this.observer) {
      this.images.forEach(image => {
        if (!image.classList.contains('loaded')) {
          this.observer.observe(image);
        }
      });
    } else {
      // Инициализируем заново
      this.init();
    }
  }

  /**
   * Уничтожает observer и очищает ресурсы
   */
  destroy() {
    if (this.observer) {
      this.observer.disconnect();
    }
  }
}

/**
 * Функция для инициализации ленивой загрузки
 * @returns {LazyLoader} Экземпляр класса для управления ленивой загрузкой
 */
export const initLazyLoading = () => {
  return new LazyLoader();
};
