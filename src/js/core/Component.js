// src/js/core/Component.js
/**
 * Базовый класс для всех компонентов
 * Реализует базовую логику для создания, обновления и удаления компонентов
 */
export class Component {
  /**
   * @param {HTMLElement|string} container - DOM элемент или селектор для рендеринга компонента
   * @param {Object} props - Свойства компонента
   */
  constructor(container, props = {}) {
    this.props = { ...props };

    // Если передан селектор, находим элемент в DOM
    if (typeof container === 'string') {
      this.container = document.querySelector(container);
      if (!this.container) {
        throw new Error(`Container element not found: ${container}`);
      }
    } else {
      this.container = container;
    }

    this.state = {};
    this.children = {};
    this.eventListeners = [];
    this.elements = {};
    this._isRendered = false;
  }

  /**
   * Устанавливает новое состояние компонента и запускает перерисовку
   * @param {Object} newState - Новое состояние
   * @param {Function} callback - Функция, которая будет вызвана после обновления
   */
  setState(newState, callback) {
    this.state = { ...this.state, ...newState };

    // Вызываем этот метод только если компонент уже отрендерен
    if (this._isRendered) {
      this.update();
    }

    if (callback && typeof callback === 'function') {
      callback();
    }
  }

  /**
   * Добавляет слушатель события к элементу
   * @param {HTMLElement} element - DOM элемент
   * @param {string} event - Тип события
   * @param {Function} handler - Обработчик события
   */
  addEventListeners(element, event, handler) {
    element.addEventListener(event, handler);

    // Сохраняем информацию о слушателе для будущего удаления
    this.eventListeners.push({ element, event, handler });
  }

  /**
   * Удаляет все слушатели событий
   */
  removeEventListeners() {
    this.eventListeners.forEach(({ element, event, handler }) => {
      element.removeEventListener(event, handler);
    });
    this.eventListeners = [];
  }

  /**
   * Создает HTML разметку компонента
   * @returns {string} HTML разметка
   */
  render() {
    throw new Error('Method render() must be implemented in derived class');
  }

  /**
   * Выполняет начальную отрисовку компонента
   */
  mount() {
    // Рендерим компонент в контейнер
    this.container.innerHTML = this.render();

    // Вызываем метод для настройки после рендеринга
    this.afterRender();

    this._isRendered = true;
  }

  /**
   * Обновляет содержимое компонента
   */
  update() {
    // Сохраняем текущее положение скролла
    const scrollPosition = window.scrollY;

    // Удаляем все слушатели событий перед обновлением DOM
    this.removeEventListeners();

    // Обновляем содержимое
    this.container.innerHTML = this.render();

    // Вызываем метод для настройки после обновления
    this.afterRender();

    // Восстанавливаем положение скролла
    window.scrollTo(0, scrollPosition);
  }

  /**
   * Выполняет действия после рендеринга (навешивание обработчиков и т.д.)
   * Этот метод должен быть переопределен в дочерних классах
   */
  afterRender() {
    // Имплементируется в дочерних классах
  }

  /**
   * Уничтожает компонент, удаляя всех слушателей и очищая контейнер
   */
  destroy() {
    this.removeEventListeners();

    // Очищаем список дочерних компонентов
    Object.values(this.children).forEach(child => {
      if (child && typeof child.destroy === 'function') {
        child.destroy();
      }
    });

    this.children = {};
    this.elements = {};
    this._isRendered = false;
  }
}
