// src/js/core/Store.js
/**
 * Хранилище состояния приложения (аналог Redux)
 */
export class Store {
  constructor(initialState = {}) {
    this.state = { ...initialState };
    this.listeners = [];
  }

  /**
   * Возвращает текущее состояние или его часть
   * @param {string} path - Путь к нужной части состояния (например, 'user.name')
   * @returns {any} Состояние или его часть
   */
  getState(path = '') {
    if (!path) {
      return this.state;
    }

    return path.split('.').reduce((obj, key) => {
      return obj && obj[key] !== undefined ? obj[key] : undefined;
    }, this.state);
  }

  /**
   * Обновляет состояние
   * @param {Object|Function} updaterOrFunction - Новое состояние или функция обновления
   */
  setState(updaterOrFunction) {
    let newState;

    if (typeof updaterOrFunction === 'function') {
      newState = updaterOrFunction(this.state);
    } else {
      newState = { ...this.state, ...updaterOrFunction };
    }

    this.state = newState;
    this._notifyListeners();
  }

  /**
   * Подписывается на изменения состояния
   * @param {Function} listener - Функция-обработчик
   * @returns {Function} Функция для отписки
   */
  subscribe(listener) {
    this.listeners.push(listener);

    // Возвращаем функцию для отписки
    return () => {
      this.listeners = this.listeners.filter(l => l !== listener);
    };
  }

  /**
   * Уведомляет всех подписчиков об изменении состояния
   */
  _notifyListeners() {
    this.listeners.forEach(listener => listener(this.state));
  }
}
