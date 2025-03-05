// src/js/components/mobileMenu/MobileMenu.js
import { Component } from '../../core/Component.js';

export class MobileMenu extends Component {
  constructor(container, props) {
    super(container, props);

    // Привязываем методы к контексту
    this._handleEscape = this._handleEscape.bind(this);
    this._handleOverlayClick = this._handleOverlayClick.bind(this);
  }

  /**
   * Обновляет свойства компонента и перерисовывает при необходимости
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
   * Обработчик нажатия клавиши Escape
   * @param {KeyboardEvent} e - Событие нажатия клавиши
   */
  _handleEscape(e) {
    if (e.key === 'Escape' && this.props.isOpen) {
      this.props.onClose();
    }
  }

  /**
   * Обработчик клика по оверлею
   * @param {MouseEvent} e - Событие клика
   */
  _handleOverlayClick(e) {
    if (e.target.classList.contains('mobile-menu')) {
      this.props.onClose();
    }
  }

  /**
   * Рендер компонента
   */
  render() {
    const { isOpen } = this.props;

    // Если меню закрыто, возвращаем пустую строку
    if (!isOpen) {
      return '';
    }

    return `
      <div class="mobile-menu ${
        isOpen ? 'open' : ''
      }" role="dialog" aria-modal="true" aria-label="Mobile navigation menu">
        <div class="mobile-menu__background"></div>
        <div class="mobile-menu__container">
          <button class="mobile-menu__close-btn" aria-label="Close menu">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
          
          <nav class="mobile-menu__nav">
            <ul class="mobile-menu__list">
              <li class="mobile-menu__item">
                <a href="#features-r36s" class="mobile-menu__link" data-nav-link>
                  <span class="mobile-menu__icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <rect x="2" y="6" width="20" height="12" rx="2"></rect>
                      <line x1="6" y1="12" x2="10" y2="12"></line>
                      <line x1="8" y1="10" x2="8" y2="14"></line>
                      <line x1="15" y1="13" x2="15.01" y2="13"></line>
                      <line x1="18" y1="11" x2="18.01" y2="11"></line>
                    </svg>
                  </span>
                  <span class="mobile-menu__text" data-i18n="header.functionality">Functionality</span>
                </a>
              </li>
              <li class="mobile-menu__item">
                <a href="#features" class="mobile-menu__link" data-nav-link>
                  <span class="mobile-menu__icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                      <line x1="8" y1="21" x2="16" y2="21"></line>
                      <line x1="12" y1="17" x2="12" y2="21"></line>
                    </svg>
                  </span>
                  <span class="mobile-menu__text" data-i18n="header.about">About R36S</span>
                </a>
              </li>
              <li class="mobile-menu__item">
                <a href="#categories" class="mobile-menu__link" data-nav-link>
                  <span class="mobile-menu__icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <circle cx="12" cy="12" r="10"></circle>
                      <polygon points="10 8 16 12 10 16 10 8"></polygon>
                    </svg>
                  </span>
                  <span class="mobile-menu__text" data-i18n="header.video">Video</span>
                </a>
              </li>
              <li class="mobile-menu__item">
                <a href="#reviews" class="mobile-menu__link" data-nav-link>
                  <span class="mobile-menu__icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                    </svg>
                  </span>
                  <span class="mobile-menu__text" data-i18n="header.reviews">Reviews</span>
                </a>
              </li>
              <li class="mobile-menu__item">
                <a href="#contact" class="mobile-menu__link" data-nav-link>
                  <span class="mobile-menu__icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                    </svg>
                  </span>
                  <span class="mobile-menu__text" data-i18n="header.contacts">Contacts</span>
                </a>
              </li>
            </ul>
          </nav>
          
          <div class="mobile-menu__footer" data-i18n="footer.copyright">© 2025 R36S. Official website</div>
        </div>
      </div>
    `;
  }

  /**
   * После рендеринга компонента
   */
  afterRender() {
    // Если меню закрыто, ничего не делаем
    if (!this.props.isOpen) {
      document.removeEventListener('keydown', this._handleEscape);
      return;
    }

    // Устанавливаем обработчик Escape
    document.addEventListener('keydown', this._handleEscape);

    // Устанавливаем обработчик клика по оверлею
    const mobileMenu = this.container.querySelector('.mobile-menu');
    if (mobileMenu) {
      this.addEventListeners(mobileMenu, 'click', this._handleOverlayClick);
    }

    // Устанавливаем обработчик кнопки закрытия
    const closeButton = this.container.querySelector('.mobile-menu__close-btn');
    if (closeButton) {
      this.addEventListeners(closeButton, 'click', this.props.onClose);
    }

    // Устанавливаем обработчики на ссылки навигации
    const navLinks = this.container.querySelectorAll('[data-nav-link]');
    navLinks.forEach(link => {
      this.addEventListeners(link, 'click', e => {
        // Вызываем обработчик из пропсов
        if (this.props.handleNavClick) {
          this.props.handleNavClick(e);
        }
      });
    });

    // Переводим элементы, если i18n доступен
    if (this.props.i18n) {
      this.props.i18n.translatePage();
    }
  }

  /**
   * Уничтожение компонента
   */
  destroy() {
    document.removeEventListener('keydown', this._handleEscape);
    super.destroy();
  }
}
