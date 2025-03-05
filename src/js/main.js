// src/js/main.js
import { app } from './core/bootstrap.js';
import { I18n } from './core/i18n.js';
import { EventBus } from './core/EventBus.js';
import { DOMHelper } from './core/DOMHelper.js';
import { initScrollHandler } from './utils/scrollHandler.js';
import { initScrollAnimations } from './utils/scrollAnimations.js';

// Компоненты
import { Header } from './components/header/Header.js';
import { Hero } from './components/sections/hero/Hero.js';
import { About } from './components/sections/about/About.js';
import { Features } from './components/sections/features/Features.js';
import { Categories } from './components/sections/categories/Categories.js';
import { Reviews } from './components/sections/reviews/Reviews.js';
import { Articles } from './components/sections/articles/Articles.js';
import { Contact } from './components/sections/contact/Contact.js';
import { Products } from './components/sections/products/Products.js';
import { Footer } from './components/footer/Footer.js';

/**
 * Класс приложения R36S Store
 */
class R36SApp {
  constructor() {
    // Инициализируем основные модули
    this.i18n = new I18n();
    this.eventBus = new EventBus();

    // Контейнеры для компонентов
    this.components = {};

    // Флаг инициализации
    this.initialized = false;

    // Обработчики анимаций прокрутки
    this.scrollHandler = null;
    this.scrollAnimations = null;
  }

  /**
   * Инициализирует приложение
   */
  async init() {
    console.log('Initializing R36S Store application...');

    if (this.initialized) {
      console.warn('Application already initialized');
      return this;
    }

    try {
      // Инициализируем перевод
      await this.i18n.init();
      console.log(
        `Application initialized with language: ${this.i18n.getCurrentLocale()}`
      );

      // Регистрируем компоненты
      this._registerComponents();

      // Инициализируем компоненты
      await this._initComponents();

      // Инициализируем анимации и обработчики скролла
      this._initScrollHandlers();

      // Устанавливаем флаг инициализации
      this.initialized = true;

      // Оповещаем о завершении инициализации
      this.eventBus.emit('app:initialized');
      console.log('Application fully initialized');

      return this;
    } catch (error) {
      console.error('Error initializing application:', error);
      throw error;
    }
  }

  /**
   * Регистрирует компоненты приложения
   */
  _registerComponents() {
    app.registerComponent('Header', Header);
    app.registerComponent('Hero', Hero);
    app.registerComponent('About', About);
    app.registerComponent('Features', Features);
    app.registerComponent('Categories', Categories);
    app.registerComponent('Reviews', Reviews);
    app.registerComponent('Articles', Articles);
    app.registerComponent('Contact', Contact);
    app.registerComponent('Products', Products);
    app.registerComponent('Footer', Footer);
    console.log('Components registered');
  }

  /**
   * Инициализирует компоненты приложения
   */
  async _initComponents() {
    try {
      // Инициализируем шапку
      this.components.header = app.createComponent(
        'Header',
        '#header-container',
        {
          i18n: this.i18n,
        }
      );
      this.components.header.mount();

      // Инициализируем основные секции
      this.components.hero = app.createComponent('Hero', '#hero-container', {
        i18n: this.i18n,
      });
      this.components.hero.mount();

      this.components.about = app.createComponent('About', '#about-container', {
        i18n: this.i18n,
      });
      this.components.about.mount();

      this.components.features = app.createComponent(
        'Features',
        '#features-container',
        {
          i18n: this.i18n,
        }
      );
      this.components.features.mount();

      this.components.categories = app.createComponent(
        'Categories',
        '#categories-container',
        {
          i18n: this.i18n,
        }
      );
      this.components.categories.mount();

      this.components.reviews = app.createComponent(
        'Reviews',
        '#reviews-container',
        {
          i18n: this.i18n,
        }
      );
      this.components.reviews.mount();

      this.components.articles = app.createComponent(
        'Articles',
        '#articles-container',
        {
          i18n: this.i18n,
        }
      );
      this.components.articles.mount();

      this.components.contact = app.createComponent(
        'Contact',
        '#contact-container',
        {
          i18n: this.i18n,
        }
      );
      this.components.contact.mount();

      this.components.products = app.createComponent(
        'Products',
        '#products-container',
        {
          i18n: this.i18n,
        }
      );
      this.components.products.mount();

      // Инициализируем подвал
      this.components.footer = app.createComponent(
        'Footer',
        '#footer-container',
        {
          i18n: this.i18n,
        }
      );
      this.components.footer.mount();

      console.log('Components initialized');

      // Устанавливаем обработчик для смены языка
      this.i18n.onLocaleChanged(() => this._handleLanguageChange());
    } catch (error) {
      console.error('Error initializing components:', error);
      throw error;
    }
  }

  /**
   * Инициализирует обработчики скролла и анимации
   */
  _initScrollHandlers() {
    // Инициализируем обработчик скролла
    this.scrollHandler = initScrollHandler();

    // Инициализируем анимации прокрутки
    this.scrollAnimations = initScrollAnimations();

    console.log('Scroll handlers initialized');
  }

  /**
   * Обрабатывает смену языка
   */
  _handleLanguageChange() {
    console.log(`Language changed to: ${this.i18n.getCurrentLocale()}`);

    // Перерисовываем все компоненты
    Object.values(this.components).forEach(component => {
      if (component && typeof component.update === 'function') {
        component.update();
      }
    });
  }

  /**
   * Уничтожает приложение и освобождает ресурсы
   */
  destroy() {
    console.log('Destroying application...');

    // Уничтожаем компоненты
    Object.values(this.components).forEach(component => {
      if (component && typeof component.destroy === 'function') {
        component.destroy();
      }
    });

    // Очищаем обработчики
    if (this.scrollHandler) {
      this.scrollHandler.destroy();
    }

    if (this.scrollAnimations) {
      this.scrollAnimations.destroy();
    }

    // Очищаем список компонентов
    this.components = {};

    // Сбрасываем флаг инициализации
    this.initialized = false;

    console.log('Application destroyed');
  }
}

// Создаем экземпляр приложения
const r36sApp = new R36SApp();

// Инициализируем приложение при загрузке DOM
document.addEventListener('DOMContentLoaded', () => {
  r36sApp.init().catch(error => {
    console.error('Failed to initialize application:', error);
  });
});

// Экспортируем экземпляр для возможности использования в других модулях
export default r36sApp;
