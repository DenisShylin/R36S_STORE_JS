// src/js/i18n/languageSwitcher.js
/**
 * Компонент для переключения языков
 */
import { Component } from '../core/Component.js';
import { LanguageDetector } from './languageDetector.js';

export class LanguageSwitcher extends Component {
  constructor(container, props) {
    super(container, props);

    this.i18n = props.i18n;
    this.detector = new LanguageDetector();

    // Получаем текущий язык
    this.currentLocale = this.i18n.getCurrentLocale();

    // Получаем список поддерживаемых языков
    this.languages = this.detector.getSupportedLanguages();
  }

  /**
   * Отрисовывает переключатель языков
   */
  render() {
    const currentLanguage = this.languages.find(
      lang => lang.code === this.currentLocale
    );

    return `
      <div class="language-switcher">
        <button class="language-switcher__current" aria-haspopup="true" aria-expanded="false">
          <span class="language-switcher__code">${currentLanguage?.code.toUpperCase()}</span>
          <span class="language-switcher__name">${currentLanguage?.name}</span>
          <svg class="language-switcher__arrow" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <polyline points="6 9 12 15 18 9"></polyline>
          </svg>
        </button>
        <div class="language-switcher__dropdown" aria-hidden="true">
          <ul class="language-switcher__list">
            ${this.languages
              .map(
                lang => `
              <li class="language-switcher__item ${
                lang.code === this.currentLocale
                  ? 'language-switcher__item--active'
                  : ''
              }">
                <button class="language-switcher__button" data-locale="${
                  lang.code
                }">
                  <span class="language-switcher__code">${lang.code.toUpperCase()}</span>
                  <span class="language-switcher__name">${lang.name}</span>
                </button>
              </li>
            `
              )
              .join('')}
          </ul>
        </div>
      </div>
    `;
  }

  /**
   * Настраивает обработчики событий после рендеринга
   */
  afterRender() {
    // Находим кнопку переключателя и выпадающий список
    const toggleButton = this.container.querySelector(
      '.language-switcher__current'
    );
    const dropdown = this.container.querySelector(
      '.language-switcher__dropdown'
    );

    // Добавляем обработчик клика по кнопке
    this.addEventListeners(toggleButton, 'click', () => {
      const isExpanded = toggleButton.getAttribute('aria-expanded') === 'true';

      toggleButton.setAttribute('aria-expanded', !isExpanded);
      dropdown.setAttribute('aria-hidden', isExpanded);

      dropdown.classList.toggle('language-switcher__dropdown--open');
    });

    // Добавляем обработчики для кнопок выбора языка
    const languageButtons = this.container.querySelectorAll(
      '.language-switcher__button'
    );
    languageButtons.forEach(button => {
      this.addEventListeners(button, 'click', () => {
        const locale = button.getAttribute('data-locale');
        this.changeLanguage(locale);

        // Закрываем выпадающий список
        toggleButton.setAttribute('aria-expanded', 'false');
        dropdown.setAttribute('aria-hidden', 'true');
        dropdown.classList.remove('language-switcher__dropdown--open');
      });
    });

    // Закрываем выпадающий список при клике вне компонента
    this.addEventListeners(document, 'click', event => {
      if (!this.container.contains(event.target)) {
        toggleButton.setAttribute('aria-expanded', 'false');
        dropdown.setAttribute('aria-hidden', 'true');
        dropdown.classList.remove('language-switcher__dropdown--open');
      }
    });
  }

  /**
   * Изменяет язык интерфейса
   * @param {string} locale - Новый язык
   */
  async changeLanguage(locale) {
    if (locale === this.currentLocale) {
      return;
    }

    // Изменяем язык в i18n
    await this.i18n.changeLocale(locale);

    // Обновляем состояние компонента
    this.currentLocale = locale;

    // Сохраняем выбранный язык
    this.detector.saveUserLanguage(locale);

    // Применяем направление текста для RTL языков
    this.detector.applyTextDirection(locale);

    // Перерисовываем компонент
    this.update();
  }
}
