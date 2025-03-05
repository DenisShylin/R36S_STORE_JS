// src/js/core/bootstrap.js
/**
 * Модуль для инициализации приложения
 */

import { I18n } from './i18n.js';
import { Router } from './Router.js';
import { Store } from './Store.js';
import { EventBus } from './EventBus.js';

export class App {
  constructor() {
    // Создаем экземпляры основных модулей
    this.i18n = new I18n();
    this.router = new Router();
    this.store = new Store();
    this.eventBus = new EventBus();

    // Контейнер для компонентов
    this.components = {};

    // Флаг инициализации
    this.initialized = false;
  }

  /**
   * Инициализирует приложение
   */
  async init() {
    if (this.initialized) {
      return;
    }

    // Загружаем переводы и другие необходимые ресурсы
    await this.i18n.init();

    // Инициализируем роутер
    this.router.start();

    // Устанавливаем флаг инициализации
    this.initialized = true;

    // Оповещаем о завершении инициализации
    this.eventBus.emit('app:initialized');

    return this;
  }

  /**
   * Регистрирует компонент
   * @param {string} name - Имя компонента
   * @param {Function} ComponentClass - Класс компонента
   */
  registerComponent(name, ComponentClass) {
    this.components[name] = ComponentClass;
    return this;
  }

  /**
   * Создает экземпляр компонента
   * @param {string} name - Имя компонента
   * @param {HTMLElement|string} container - Контейнер или его селектор
   * @param {Object} props - Свойства компонента
   * @returns {Component} Экземпляр компонента
   */
  createComponent(name, container, props = {}) {
    const ComponentClass = this.components[name];

    if (!ComponentClass) {
      throw new Error(`Component not registered: ${name}`);
    }

    return new ComponentClass(container, props);
  }
}

// Создаем и экспортируем единственный экземпляр приложения
export const app = new App();
