// src/js/i18n/languageDetector.js
/**
 * Класс для определения языка пользователя
 */
export class LanguageDetector {
  constructor() {
    // Список поддерживаемых языков
    this.supportedLocales = [
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

    // Язык по умолчанию
    this.defaultLocale = 'en';
  }

  /**
   * Определяет язык пользователя с учетом приоритетов
   * @returns {string} Код языка
   */
  detect() {
    // Приоритет:
    // 1. Локаль из localStorage
    // 2. Локаль из URL
    // 3. Локаль из geolocation API (если доступно)
    // 4. Локаль из настроек браузера
    // 5. Дефолтная локаль (en)

    const savedLocale = this.getFromLocalStorage();
    if (savedLocale) {
      return savedLocale;
    }

    const urlLocale = this.getFromUrl();
    if (urlLocale) {
      return urlLocale;
    }

    const browserLocale = this.getFromBrowser();
    if (browserLocale) {
      return browserLocale;
    }

    return this.defaultLocale;
  }

  /**
   * Получает локаль из localStorage
   * @returns {string|null} Код языка или null
   */
  getFromLocalStorage() {
    const savedLocale = localStorage.getItem('userLanguage');

    if (savedLocale && this.supportedLocales.includes(savedLocale)) {
      return savedLocale;
    }

    return null;
  }

  /**
   * Получает локаль из URL
   * @returns {string|null} Код языка или null
   */
  getFromUrl() {
    const path = window.location.pathname;
    const localeMatch = path.match(/^\/([a-z]{2})\//);

    if (localeMatch && this.supportedLocales.includes(localeMatch[1])) {
      return localeMatch[1];
    }

    return null;
  }

  /**
   * Получает локаль из настроек браузера
   * @returns {string|null} Код языка или null
   */
  getFromBrowser() {
    // Пробуем получить язык из navigator.language
    const fullLocale = navigator.language || navigator.userLanguage || '';
    const browserLocale = fullLocale.split('-')[0];

    if (browserLocale && this.supportedLocales.includes(browserLocale)) {
      return browserLocale;
    }

    // Если не нашли прямое совпадение, пробуем найти похожие языки
    const languageMap = {
      be: ['ru'], // Для белорусского можно предложить русский
      uk: ['ru'], // Для украинского можно предложить русский
      kk: ['ru'], // Для казахского можно предложить русский
      ky: ['ru'], // Для киргизского можно предложить русский
      uz: ['ru'], // Для узбекского можно предложить русский
      tg: ['ru'], // Для таджикского можно предложить русский
      'en-US': ['en'],
      'en-GB': ['en'],
      'fr-FR': ['fr'],
      'fr-CA': ['fr'],
      'fr-BE': ['fr'],
      'fr-CH': ['fr'],
      'de-DE': ['de'],
      'de-AT': ['de'],
      'de-CH': ['de'],
      'es-ES': ['es'],
      'es-MX': ['es'],
      'es-AR': ['es'],
      'it-IT': ['it'],
      'nl-NL': ['nl'],
      'nl-BE': ['nl'],
      'pt-PT': ['pt'],
      'pt-BR': ['pt'],
      'tr-TR': ['tr'],
    };

    // Пробуем найти по полной локали
    if (
      fullLocale &&
      languageMap[fullLocale] &&
      this.supportedLocales.includes(languageMap[fullLocale][0])
    ) {
      return languageMap[fullLocale][0];
    }

    // Пробуем найти по основному языку
    if (
      browserLocale &&
      languageMap[browserLocale] &&
      this.supportedLocales.includes(languageMap[browserLocale][0])
    ) {
      return languageMap[browserLocale][0];
    }

    return null;
  }

  /**
   * Определяет, является ли язык RTL (справа-налево)
   * @param {string} locale - Код языка
   * @returns {boolean} true для RTL языков
   */
  isRtlLanguage(locale) {
    const rtlLocales = ['ar']; // Арабский и другие RTL языки
    return rtlLocales.includes(locale);
  }

  /**
   * Сохраняет выбранный пользователем язык
   * @param {string} locale - Код языка
   */
  saveUserLanguage(locale) {
    if (this.supportedLocales.includes(locale)) {
      localStorage.setItem('userLanguage', locale);
    }
  }

  /**
   * Применяет направление текста для текущего языка
   * @param {string} locale - Код языка
   */
  applyTextDirection(locale) {
    const direction = this.isRtlLanguage(locale) ? 'rtl' : 'ltr';

    document.documentElement.setAttribute('dir', direction);
    document.documentElement.setAttribute('lang', locale);

    // Добавляем/удаляем класс для CSS
    if (direction === 'rtl') {
      document.body.classList.add('rtl');
    } else {
      document.body.classList.remove('rtl');
    }
  }

  /**
   * Получает список поддерживаемых языков с их названиями
   * @returns {Array<Object>} Массив языков с кодами и названиями
   */
  getSupportedLanguages() {
    return [
      { code: 'en', name: 'English' },
      { code: 'ru', name: 'Русский' },
      { code: 'tr', name: 'Türkçe' },
      { code: 'uk', name: 'Українська' },
      { code: 'nl', name: 'Nederlands' },
      { code: 'fr', name: 'Français' },
      { code: 'de', name: 'Deutsch' },
      { code: 'it', name: 'Italiano' },
      { code: 'pt', name: 'Português' },
      { code: 'es', name: 'Español' },
      { code: 'tg', name: 'Тоҷикӣ' },
      { code: 'uz', name: "O'zbek" },
      { code: 'be', name: 'Беларуская' },
      { code: 'ky', name: 'Кыргызча' },
      { code: 'ar', name: 'العربية' },
    ];
  }
}
