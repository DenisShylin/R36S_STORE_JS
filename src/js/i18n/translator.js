// src/js/i18n/translator.js
/**
 * Класс для перевода элементов страницы
 */
export class Translator {
  constructor(i18n) {
    this.i18n = i18n;
  }

  /**
   * Переводит все элементы на странице с атрибутом data-i18n
   */
  translatePage() {
    // Переводим текстовые элементы
    this.translateTextElements();

    // Переводим атрибуты
    this.translateAttributes();

    // Переводим плейсхолдеры
    this.translatePlaceholders();

    // Переводим цены
    this.translatePrices();

    // Переводим кнопки
    this.translateButtons();

    // Переводим теги title и мета-теги
    this.translateMetaTags();
  }

  /**
   * Переводит текстовые элементы
   */
  translateTextElements() {
    document.querySelectorAll('[data-i18n]').forEach(element => {
      const key = element.getAttribute('data-i18n');
      const translatedText = this.i18n.translate(key);

      // Сохраняем оригинальный текст, если это первый перевод
      if (!element.hasAttribute('data-i18n-original')) {
        element.setAttribute('data-i18n-original', element.textContent);
      }

      // Устанавливаем переведенный текст
      element.textContent = translatedText;
    });
  }

  /**
   * Переводит атрибуты элементов
   */
  translateAttributes() {
    document.querySelectorAll('[data-i18n-attr]').forEach(element => {
      const attrs = element.getAttribute('data-i18n-attr').split(',');

      attrs.forEach(attr => {
        const [attrName, keyName] = attr.trim().split(':');
        const key = keyName || element.getAttribute(`data-i18n-${attrName}`);

        if (key) {
          // Сохраняем оригинальное значение атрибута
          if (!element.hasAttribute(`data-i18n-original-${attrName}`)) {
            element.setAttribute(
              `data-i18n-original-${attrName}`,
              element.getAttribute(attrName) || ''
            );
          }

          // Устанавливаем переведенное значение
          element.setAttribute(attrName, this.i18n.translate(key));
        }
      });
    });
  }

  /**
   * Переводит плейсхолдеры в форме
   */
  translatePlaceholders() {
    document.querySelectorAll('[data-i18n-placeholder]').forEach(element => {
      const key = element.getAttribute('data-i18n-placeholder');

      // Сохраняем оригинальный плейсхолдер
      if (!element.hasAttribute('data-i18n-original-placeholder')) {
        element.setAttribute(
          'data-i18n-original-placeholder',
          element.getAttribute('placeholder') || ''
        );
      }

      // Устанавливаем переведенный плейсхолдер
      element.setAttribute('placeholder', this.i18n.translate(key));
    });
  }

  /**
   * Переводит и форматирует цены
   */
  translatePrices() {
    document.querySelectorAll('[data-i18n-price]').forEach(element => {
      const price = parseFloat(element.getAttribute('data-i18n-price'));
      const currency = element.getAttribute('data-i18n-currency') || 'USD';

      if (!isNaN(price)) {
        // Сохраняем оригинальный текст
        if (!element.hasAttribute('data-i18n-original-price')) {
          element.setAttribute('data-i18n-original-price', element.textContent);
        }

        // Форматируем цену в соответствии с локалью
        try {
          element.textContent = new Intl.NumberFormat(
            this.i18n.getCurrentLocale(),
            {
              style: 'currency',
              currency,
            }
          ).format(price);
        } catch (e) {
          // Резервное форматирование при ошибке
          element.textContent = `${currency} ${price.toFixed(2)}`;
        }
      }
    });
  }

  /**
   * Переводит кнопки и элементы формы
   */
  translateButtons() {
    document.querySelectorAll('[data-i18n-value]').forEach(element => {
      const key = element.getAttribute('data-i18n-value');

      // Сохраняем оригинальное значение
      if (!element.hasAttribute('data-i18n-original-value')) {
        element.setAttribute('data-i18n-original-value', element.value || '');
      }

      // Устанавливаем переведенное значение
      element.value = this.i18n.translate(key);
    });
  }

  /**
   * Переводит мета-теги и заголовок страницы
   */
  translateMetaTags() {
    // Переводим title
    const titleElement = document.querySelector('title[data-i18n]');
    if (titleElement) {
      const key = titleElement.getAttribute('data-i18n');
      document.title = this.i18n.translate(key);
    }

    // Переводим мета-теги
    document.querySelectorAll('meta[data-i18n]').forEach(element => {
      const key = element.getAttribute('data-i18n');
      const contentAttr = element.getAttribute('data-i18n-attr') || 'content';

      if (element.hasAttribute(contentAttr)) {
        element.setAttribute(contentAttr, this.i18n.translate(key));
      }
    });
  }

  /**
   * Переводит динамически добавленный элемент
   * @param {HTMLElement} element - Элемент для перевода
   */
  translateElement(element) {
    // Проверяем, есть ли у элемента атрибут data-i18n
    if (element.hasAttribute('data-i18n')) {
      const key = element.getAttribute('data-i18n');
      element.textContent = this.i18n.translate(key);
    }

    // Переводим атрибуты
    if (element.hasAttribute('data-i18n-attr')) {
      const attrs = element.getAttribute('data-i18n-attr').split(',');

      attrs.forEach(attr => {
        const [attrName, keyName] = attr.trim().split(':');
        const key = keyName || element.getAttribute(`data-i18n-${attrName}`);

        if (key) {
          element.setAttribute(attrName, this.i18n.translate(key));
        }
      });
    }

    // Переводим дочерние элементы
    element.querySelectorAll('[data-i18n]').forEach(child => {
      this.translateElement(child);
    });
  }

  /**
   * Переводит строку
   * @param {string} key - Ключ перевода
   * @param {Object} params - Параметры для интерполяции
   * @returns {string} Переведенная строка
   */
  translate(key, params = {}) {
    return this.i18n.translate(key, params);
  }
}
