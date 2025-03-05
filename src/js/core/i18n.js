// src/js/core/i18n.js
/**
 * Модуль для работы с многоязычностью
 */
import { EventBus } from './EventBus.js';
export class I18n {
  constructor() {
    this.translations = {};
    this.currentLocale = 'en';
    this.fallbackLocale = 'en';
    this.eventBus = new EventBus();

    // Устанавливаем начальную локаль при создании
    this.init();
  }

  /**
   * Инициализирует модуль
   */
  async init() {
    // Определяем локаль
    this.currentLocale = this._detectLocale();

    // Применяем направление текста для RTL языков
    this._applyTextDirection();

    // Загружаем файлы переводов
    await this.loadTranslations(this.currentLocale);

    // Переводим страницу
    this.translatePage();
  }

  /**
   * Определяет локаль пользователя
   * @returns {string} Код локали
   */
  _detectLocale() {
    // Приоритет:
    // 1. Локаль из localStorage
    // 2. Локаль из URL
    // 3. Локаль браузера
    // 4. Дефолтная локаль (en)

    // Проверяем localStorage
    const savedLocale = localStorage.getItem('userLanguage');
    if (savedLocale) {
      return savedLocale;
    }

    // Проверяем URL
    const path = window.location.pathname;
    const localeMatch = path.match(/^\/([a-z]{2})\//);
    if (localeMatch) {
      return localeMatch[1];
    }

    // Проверяем настройки браузера
    const browserLocale = navigator.language.split('-')[0];

    // Список поддерживаемых языков
    const supportedLocales = [
      'en',
      'ru',
      'tr',
      'uk',
      'nl',
      'fr',
      'de',
      'it',
      'pt',
      'es',
      'tg',
      'uz',
      'be',
      'ky',
      'ar',
    ];

    if (supportedLocales.includes(browserLocale)) {
      return browserLocale;
    }

    return this.fallbackLocale;
  }

  /**
   * Устанавливает направление текста для RTL языков
   */
  _applyTextDirection() {
    const rtlLocales = ['ar']; // Арабский и другие RTL языки
    const direction = rtlLocales.includes(this.currentLocale) ? 'rtl' : 'ltr';

    document.documentElement.setAttribute('dir', direction);
    document.documentElement.setAttribute('lang', this.currentLocale);

    // Добавляем/удаляем класс для CSS
    if (direction === 'rtl') {
      document.body.classList.add('rtl');
    } else {
      document.body.classList.remove('rtl');
    }
  }

  /**
   * Загружает файлы переводов для указанной локали
   * @param {string} locale - Код локали
   */
  async loadTranslations(locale) {
    try {
      // Пробуем несколько вариантов путей
      const pathsToTry = [
        `/locales/${locale}.json`,
        `/${locale}.json`,
        `/public/locales/${locale}.json`,
        `${import.meta.env.BASE_URL || '/'}locales/${locale}.json`,
      ];

      // Пробуем загрузить перевод по каждому из путей
      for (const path of pathsToTry) {
        try {
          console.log(`Trying to load translations from ${path}`);
          const response = await fetch(path);
          if (response.ok) {
            const translations = await response.json();
            this.translations[locale] = translations;
            console.log(`Successfully loaded translations from ${path}`);
            return translations;
          }
        } catch (e) {
          console.warn(`Failed to load translations from ${path}:`, e);
        }
      }

      throw new Error(
        `Could not load translations for ${locale} from any path`
      );
    } catch (error) {
      console.error(`Error loading translations:`, error);

      // Если не удалось загрузить переводы, используем запасную локаль
      if (locale !== this.fallbackLocale) {
        return this.loadTranslations(this.fallbackLocale);
      }

      // Если и для запасной локали не удалось - возвращаем пустой объект
      return {};
    }
  }

  /**
   * Переводит ключ на текущий язык
   * @param {string} key - Ключ перевода (напр. "common.button.submit")
   * @param {Object} params - Параметры для подстановки
   * @returns {string} Переведенная строка
   */
  translate(key, params = {}) {
    // Получаем текущие переводы
    const translations = this.translations[this.currentLocale] || {};
    const fallbackTranslations = this.translations[this.fallbackLocale] || {};

    // Находим значение по ключу
    let value = this._getNestedValue(translations, key);

    // Если перевод не найден, используем запасную локаль
    if (value === undefined) {
      value = this._getNestedValue(fallbackTranslations, key);
    }

    // Если и там не найдено, возвращаем ключ
    if (value === undefined) {
      return key;
    }

    // Подставляем параметры
    return this._interpolate(value, params);
  }

  /**
   * Получает вложенное значение из объекта по строке-пути
   * @param {Object} obj - Объект
   * @param {string} path - Путь (например, "common.button.submit")
   * @returns {any} Значение или undefined
   */
  _getNestedValue(obj, path) {
    return path.split('.').reduce((prev, curr) => {
      return prev && prev[curr] !== undefined ? prev[curr] : undefined;
    }, obj);
  }

  /**
   * Подставляет параметры в строку
   * @param {string} text - Строка с плейсхолдерами {{name}}
   * @param {Object} params - Параметры для подстановки
   * @returns {string} Строка с подставленными параметрами
   */
  _interpolate(text, params) {
    return text.replace(/{{(\w+)}}/g, (_, key) => {
      return params[key] !== undefined ? params[key] : `{{${key}}}`;
    });
  }

  /**
   * Изменяет текущую локаль
   * @param {string} locale - Новая локаль
   */
  async changeLocale(locale) {
    if (locale === this.currentLocale) {
      return;
    }

    // Сохраняем выбор пользователя
    localStorage.setItem('userLanguage', locale);

    // Меняем локаль
    this.currentLocale = locale;

    // Применяем направление текста
    this._applyTextDirection();

    // Загружаем переводы, если их ещё нет
    if (!this.translations[locale]) {
      await this.loadTranslations(locale);
    }

    // Переводим страницу
    this.translatePage();

    // Генерируем событие изменения языка
    this.eventBus.emit('localeChanged', locale);
  }

  /**
   * Переводит все элементы на странице с атрибутом data-i18n
   */
  translatePage() {
    // Находим все элементы с атрибутом data-i18n
    document.querySelectorAll('[data-i18n]').forEach(element => {
      const key = element.getAttribute('data-i18n');
      const translatedText = this.translate(key);

      // В зависимости от типа элемента, устанавливаем перевод
      if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
        // Для полей ввода устанавливаем placeholder или value
        if (element.hasAttribute('placeholder')) {
          element.setAttribute('placeholder', translatedText);
        } else {
          element.value = translatedText;
        }
      } else {
        // Для остальных элементов устанавливаем textContent
        element.textContent = translatedText;
      }
    });

    // Переводим специальные атрибуты (title, alt и т.д.)
    document.querySelectorAll('[data-i18n-attr]').forEach(element => {
      const attrs = element.getAttribute('data-i18n-attr').split(',');

      attrs.forEach(attr => {
        const [attrName, keyName] = attr.trim().split(':');
        const key = keyName || element.getAttribute(`data-i18n-${attrName}`);

        if (key) {
          element.setAttribute(attrName, this.translate(key));
        }
      });
    });

    // Обрабатываем цены
    document.querySelectorAll('[data-i18n-price]').forEach(element => {
      const price = parseFloat(element.getAttribute('data-i18n-price'));
      if (!isNaN(price)) {
        element.textContent = this._formatPrice(price);
      }
    });
  }

  /**
   * Форматирует цену в соответствии с текущей локалью
   * @param {number} price - Цена
   * @param {string} currencyCode - Код валюты
   * @returns {string} Отформатированная цена
   */
  _formatPrice(price, currencyCode = 'USD') {
    try {
      return new Intl.NumberFormat(this.currentLocale, {
        style: 'currency',
        currency: currencyCode,
      }).format(price);
    } catch (e) {
      // Если не удалось отформатировать, возвращаем простое форматирование
      return `${currencyCode} ${price.toFixed(2)}`;
    }
  }

  /**
   * Добавляет обработчик события изменения языка
   * @param {Function} callback - Функция-обработчик
   */
  onLocaleChanged(callback) {
    this.eventBus.on('localeChanged', callback);
  }

  /**
   * Возвращает текущую локаль
   * @returns {string} Текущая локаль
   */
  getCurrentLocale() {
    return this.currentLocale;
  }

  /**
   * Возвращает список поддерживаемых локалей
   * @returns {Array<string>} Список локалей
   */
  getSupportedLocales() {
    return [
      'en',
      'ru',
      'tr',
      'uk',
      'nl',
      'fr',
      'de',
      'it',
      'pt',
      'es',
      'tg',
      'uz',
      'be',
      'ky',
      'ar',
    ];
  }
}
