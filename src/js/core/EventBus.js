// src/js/core/EventBus.js
/**
 * Реализация шаблона "Издатель-Подписчик" для связи между компонентами
 */
export class EventBus {
  constructor() {
    this.listeners = {};
  }

  /**
   * Подписывает функцию-обработчик на событие
   * @param {string} event - Название события
   * @param {Function} callback - Функция-обработчик
   * @param {Object} context - Контекст вызова (this для callback)
   */
  on(event, callback, context = null) {
    if (!this.listeners[event]) {
      this.listeners[event] = [];
    }

    this.listeners[event].push({
      callback,
      context,
    });
  }

  /**
   * Отписывает функцию-обработчик от события
   * @param {string} event - Название события
   * @param {Function} callback - Функция-обработчик
   */
  off(event, callback) {
    if (!this.listeners[event]) {
      return;
    }

    this.listeners[event] = this.listeners[event].filter(
      listener => listener.callback !== callback
    );
  }

  /**
   * Вызывает всех обработчиков для указанного события
   * @param {string} event - Название события
   * @param {...any} args - Аргументы, передаваемые обработчикам
   */
  emit(event, ...args) {
    if (!this.listeners[event]) {
      return;
    }

    this.listeners[event].forEach(listener => {
      listener.callback.apply(listener.context, args);
    });
  }

  /**
   * Очищает все слушатели
   */
  clear() {
    this.listeners = {};
  }
}
// Создаем единый экземпляр для всего приложения
export const eventBus = new EventBus();
