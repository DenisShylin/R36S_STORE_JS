// src/js/components/footer/PartnershipModal.js
import { Component } from '../../core/Component.js';

export class PartnershipModal extends Component {
  constructor(container, props) {
    super(container, props);

    // Привязываем методы к контексту
    this._handleOverlayClick = this._handleOverlayClick.bind(this);
    this._handleEscapePress = this._handleEscapePress.bind(this);
  }

  /**
   * Обновляет свойства компонента
   * @param {Object} newProps - Новые свойства
   */
  updateProps(newProps) {
    const oldIsOpen = this.props.isOpen;
    this.props = { ...this.props, ...newProps };

    // Если изменилось состояние открытия/закрытия, обновляем DOM
    if (oldIsOpen !== this.props.isOpen) {
      this.update();
    }
  }

  /**
   * Рендерит компонент
   */
  render() {
    const { isOpen, i18n } = this.props;

    // Если модальное окно закрыто, возвращаем пустую строку
    if (!isOpen) {
      return '';
    }

    const translate = key => i18n?.translate(key) || key;

    return `
      <div class="partnership-modal-overlay ${isOpen ? 'active' : ''}">
        <div class="partnership-modal-content ${isOpen ? 'active' : ''}">
          <button
            class="partnership-modal-close"
            aria-label="Close modal"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>

          <h2 class="partnership-modal-title" data-i18n="partnership.title">${translate(
            'partnership.title'
          )}</h2>
          <h2 class="partnership-modal-title" data-i18n="partnership.company">${translate(
            'partnership.company'
          )}</h2>

          <div class="partnership-section">
            <p class="partnership-text" data-i18n="partnership.founded">${translate(
              'partnership.founded'
            )}</p>
            <p class="partnership-text" data-i18n="partnership.employees">${translate(
              'partnership.employees'
            )}</p>
            <p class="partnership-text" data-i18n="partnership.products">${translate(
              'partnership.products'
            )}</p>
            <p class="partnership-text" data-i18n="partnership.revenue">${translate(
              'partnership.revenue'
            )}</p>
            <p class="partnership-text" data-i18n="partnership.markets">${translate(
              'partnership.markets'
            )}</p>
          </div>

          <div class="partnership-section">
            <h3 class="partnership-section-title-2" data-i18n="partnership.wholesale.title">${translate(
              'partnership.wholesale.title'
            )}</h3>
            <p class="partnership-text">
              <span data-i18n="partnership.wholesale.text">${translate(
                'partnership.wholesale.text'
              )}</span>
              <a
                href="https://www.alibaba.com/product-detail/R36S-Retro-3-5-Inch-IPS_1600984248000.html"
                class="partnership-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                www.R36S.ali.com
              </a>
            </p>
          </div>

          <div class="partnership-section">
            <h3 class="partnership-section-title" data-i18n="partnership.introduction.title">${translate(
              'partnership.introduction.title'
            )}</h3>
            <p class="partnership-text" data-i18n="partnership.introduction.text">${translate(
              'partnership.introduction.text'
            )}</p>
          </div>

          <div class="footer__copyright">
            <a href="/" data-i18n="footer.copyright">${translate(
              'footer.copyright'
            )}</a>
          </div>
        </div>
      </div>
    `;
  }

  /**
   * Выполняет действия после рендеринга
   */
  afterRender() {
    // Если модальное окно закрыто, ничего не делаем
    if (!this.props.isOpen) {
      document.removeEventListener('keydown', this._handleEscapePress);
      return;
    }

    // Блокируем прокрутку основного контента
    document.body.style.overflow = 'hidden';

    // Добавляем обработчик нажатия клавиши Escape
    document.addEventListener('keydown', this._handleEscapePress);

    // Добавляем обработчики для закрытия модального окна
    const overlay = this.container.querySelector('.partnership-modal-overlay');
    if (overlay) {
      this.addEventListeners(overlay, 'click', this._handleOverlayClick);
    }

    const closeButton = this.container.querySelector(
      '.partnership-modal-close'
    );
    if (closeButton) {
      this.addEventListeners(closeButton, 'click', this.props.onClose);
    }

    // Переводим элементы, если i18n доступен
    if (this.props.i18n) {
      this.props.i18n.translatePage();
    }
  }

  /**
   * Обработчик клика по оверлею модального окна
   * @param {Event} e - Событие клика
   */
  _handleOverlayClick(e) {
    // Закрываем модальное окно только если клик был по оверлею, а не по контенту
    if (e.target.classList.contains('partnership-modal-overlay')) {
      this.props.onClose();
    }
  }

  /**
   * Обработчик нажатия клавиши Escape
   * @param {KeyboardEvent} e - Событие нажатия клавиши
   */
  _handleEscapePress(e) {
    if (e.key === 'Escape' && this.props.isOpen) {
      this.props.onClose();
    }
  }

  /**
   * Уничтожает компонент и очищает ресурсы
   */
  destroy() {
    // Разблокируем прокрутку основного контента
    document.body.style.overflow = '';

    // Удаляем обработчик нажатия клавиши Escape
    document.removeEventListener('keydown', this._handleEscapePress);

    super.destroy();
  }
}
