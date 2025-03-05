// src/js/core/DOMHelper.js
/**
 * Вспомогательные методы для работы с DOM
 */
export class DOMHelper {
  /**
   * Создает элемент с указанными параметрами
   * @param {string} tagName - Тег элемента
   * @param {Object} attributes - Атрибуты элемента
   * @param {string|HTMLElement|Array<HTMLElement>} content - Содержимое элемента
   * @returns {HTMLElement} Созданный элемент
   */
  static createElement(tagName, attributes = {}, content = '') {
    const element = document.createElement(tagName);

    // Устанавливаем атрибуты
    Object.entries(attributes).forEach(([key, value]) => {
      if (key === 'className') {
        element.className = value;
      } else if (key === 'dataset') {
        Object.entries(value).forEach(([dataKey, dataValue]) => {
          element.dataset[dataKey] = dataValue;
        });
      } else if (key === 'style' && typeof value === 'object') {
        Object.entries(value).forEach(([styleKey, styleValue]) => {
          element.style[styleKey] = styleValue;
        });
      } else {
        element.setAttribute(key, value);
      }
    });

    // Добавляем содержимое
    if (content) {
      if (typeof content === 'string') {
        element.innerHTML = content;
      } else if (content instanceof HTMLElement) {
        element.appendChild(content);
      } else if (Array.isArray(content)) {
        content.forEach(item => {
          if (item instanceof HTMLElement) {
            element.appendChild(item);
          }
        });
      }
    }

    return element;
  }

  /**
   * Удаляет все дочерние элементы из родительского
   * @param {HTMLElement} element - Родительский элемент
   */
  static removeAllChildren(element) {
    while (element.firstChild) {
      element.removeChild(element.firstChild);
    }
  }

  /**
   * Заменяет элемент новым
   * @param {HTMLElement} oldElement - Старый элемент
   * @param {HTMLElement} newElement - Новый элемент
   */
  static replaceElement(oldElement, newElement) {
    if (oldElement.parentNode) {
      oldElement.parentNode.replaceChild(newElement, oldElement);
    }
  }

  /**
   * Вставляет элемент после указанного
   * @param {HTMLElement} newElement - Новый элемент
   * @param {HTMLElement} referenceElement - Элемент, после которого вставить
   */
  static insertAfter(newElement, referenceElement) {
    referenceElement.parentNode.insertBefore(
      newElement,
      referenceElement.nextSibling
    );
  }

  /**
   * Добавляет делегированный обработчик события
   * @param {HTMLElement} element - Родительский элемент
   * @param {string} eventType - Тип события
   * @param {string} selector - CSS селектор для целевых элементов
   * @param {Function} handler - Обработчик события
   */
  static addEventDelegate(element, eventType, selector, handler) {
    element.addEventListener(eventType, event => {
      const targetElement = event.target.closest(selector);

      if (targetElement && element.contains(targetElement)) {
        handler.call(targetElement, event, targetElement);
      }
    });
  }

  /**
   * Добавляет обработчик события с автоматическим удалением
   * @param {HTMLElement} element - Элемент
   * @param {string} eventType - Тип события
   * @param {Function} handler - Обработчик события
   * @param {Object} options - Опции события
   * @returns {Function} Функция для удаления обработчика
   */
  static addEventOnce(element, eventType, handler, options = {}) {
    const onceHandler = event => {
      handler(event);
      element.removeEventListener(eventType, onceHandler, options);
    };

    element.addEventListener(eventType, onceHandler, options);

    return () => {
      element.removeEventListener(eventType, onceHandler, options);
    };
  }

  /**
   * Проверяет, находится ли элемент в видимой области экрана
   * @param {HTMLElement} element - Проверяемый элемент
   * @param {Object} options - Опции
   * @returns {boolean} true, если элемент виден
   */
  static isElementInViewport(element, { partial = true } = {}) {
    const rect = element.getBoundingClientRect();

    return partial
      ? rect.top < window.innerHeight &&
          rect.bottom > 0 &&
          rect.left < window.innerWidth &&
          rect.right > 0
      : rect.top >= 0 &&
          rect.left >= 0 &&
          rect.bottom <= window.innerHeight &&
          rect.right <= window.innerWidth;
  }

  /**
   * Плавно прокручивает страницу к указанному элементу
   * @param {HTMLElement|string} element - Элемент или селектор
   * @param {Object} options - Опции прокрутки
   */
  static scrollToElement(element, { offset = 0, behavior = 'smooth' } = {}) {
    const targetElement =
      typeof element === 'string' ? document.querySelector(element) : element;

    if (!targetElement) {
      return;
    }

    const rect = targetElement.getBoundingClientRect();
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    window.scrollTo({
      top: rect.top + scrollTop - offset,
      behavior,
    });
  }

  /**
   * Создает и возвращает обертку для Intersection Observer
   * @param {Function} callback - Функция обратного вызова
   * @param {Object} options - Опции для IntersectionObserver
   * @returns {IntersectionObserver} Созданный IntersectionObserver
   */
  static createIntersectionObserver(callback, options = {}) {
    return new IntersectionObserver(callback, {
      threshold: 0.1,
      rootMargin: '0px',
      ...options,
    });
  }
}
