// src/js/core/Router.js
/**
 * Простой роутер для одностраничного приложения
 */
import { EventBus } from './EventBus.js';
export class Router {
  constructor() {
    this.routes = [];
    this.currentRoute = null;
    this.eventBus = new EventBus();

    // Обработчик изменения URL
    window.addEventListener('popstate', this._handlePopState.bind(this));
  }

  /**
   * Добавляет новый маршрут
   * @param {string} path - Путь URL
   * @param {Function} callback - Функция, вызываемая при переходе на этот URL
   */
  addRoute(path, callback) {
    this.routes.push({ path, callback });
    return this;
  }

  /**
   * Запускает роутер
   */
  start() {
    this._handlePopState();
    return this;
  }

  /**
   * Выполняет навигацию на указанный URL
   * @param {string} path - Путь URL
   * @param {boolean} pushState - Нужно ли добавлять запись в историю браузера
   */
  navigate(path, pushState = true) {
    if (pushState) {
      history.pushState(null, '', path);
    }

    this._handlePathChange(path);
  }

  /**
   * Обрабатывает изменение URL в истории браузера
   */
  _handlePopState() {
    this._handlePathChange(window.location.pathname);
  }

  /**
   * Находит и вызывает обработчик для указанного пути
   * @param {string} path - Путь URL
   */
  _handlePathChange(path) {
    const route = this.routes.find(route => {
      // Простое сравнение путей
      return route.path === path;
    });

    if (route) {
      this.currentRoute = route;
      route.callback();
      this.eventBus.emit('route-changed', route);
    } else {
      // Если маршрут не найден, пытаемся найти маршрут по умолчанию ('/')
      const defaultRoute = this.routes.find(route => route.path === '/');
      if (defaultRoute) {
        this.currentRoute = defaultRoute;
        defaultRoute.callback();
        this.eventBus.emit('route-changed', defaultRoute);
      } else {
        console.error(`Route not found: ${path}`);
      }
    }
  }

  /**
   * Подписывается на событие изменения маршрута
   * @param {Function} callback - Функция-обработчик
   */
  onRouteChange(callback) {
    this.eventBus.on('route-changed', callback);
  }

  /**
   * Уничтожает роутер, удаляя все слушатели
   */
  destroy() {
    window.removeEventListener('popstate', this._handlePopState);
    this.eventBus.clear();
  }
}
