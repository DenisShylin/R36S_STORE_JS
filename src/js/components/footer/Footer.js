// src/js/components/footer/Footer.js
import { Component } from '../../core/Component.js';
import { PartnershipModal } from './PartnershipModal.js';
import { DOMHelper } from '../../core/DOMHelper.js';

export class Footer extends Component {
  constructor(container, props) {
    super(container, props);

    this.state = {
      isPartnershipModalOpen: false,
    };

    // Привязываем методы к контексту
    this._handlePartnershipClick = this._handlePartnershipClick.bind(this);
    this._handlePartnershipModalClose =
      this._handlePartnershipModalClose.bind(this);
  }

  /**
   * Рендерит компонент
   */
  render() {
    const { i18n } = this.props;
    const translate = key => i18n?.translate(key) || key;

    // Получаем текущий год
    const currentYear = new Date().getFullYear();

    return `
      <footer class="footer">
        <div class="footer__container">
          <div class="footer__content">
            <div class="footer__brand">
              <a href="/" class="footer__logo">R36S</a>
              <p class="footer__description" data-i18n="footer.description">
                ${translate('footer.description')}
              </p>
              <div class="footer__social">
                
                  href="https://www.aliexpress.com/item/1005007171465465.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="social__link"
                >
                  <img
                    src="/img/icons/aliexpress.svg"
                    alt="AliExpress Store"
                    class="social__icon"
                  />
                </a>
              </div>
            </div>
            <div class="footer__column">
              <h3 class="footer__title" data-i18n="footer.links.products">${translate(
                'footer.links.products'
              )}</h3>
              <ul class="footer__list">
                <li class="footer__item">
                  <a href="#reviews" class="footer__link" data-i18n="footer.links.reviews">${translate(
                    'footer.links.reviews'
                  )}</a>
                </li>
              </ul>
            </div>
            <div class="footer__column">
              <h3 class="footer__title" data-i18n="footer.links.support">${translate(
                'footer.links.support'
              )}</h3>
              <ul class="footer__list">
                <li class="footer__item">
                  <a href="#contact" class="footer__link" data-i18n="footer.links.contacts">${translate(
                    'footer.links.contacts'
                  )}</a>
                </li>
              </ul>
            </div>
            <div class="footer__column">
              <h3 class="footer__title" data-i18n="footer.links.company">${translate(
                'footer.links.company'
              )}</h3>
              <ul class="footer__list">
                <li class="footer__item">
                  <button
                    id="partnership-btn"
                    class="footer__link"
                    data-i18n="footer.links.partnership"
                  >
                    ${translate('footer.links.partnership')}
                  </button>
                </li>
              </ul>
            </div>
          </div>
          <div class="footer__divider"></div>
          <div class="footer__bottom">
            <div class="footer__copyright">
              <a href="/">
                <span data-i18n="footer.copyright">© ${currentYear} R36S. All rights reserved.</span>
              </a>
            </div>
          </div>
        </div>
        <div id="partnership-modal-container"></div>
      </footer>
    `;
  }

  /**
   * Выполняет действия после рендеринга
   */
  afterRender() {
    // Добавляем обработчик для кнопки Partnership
    const partnershipButton = this.container.querySelector('#partnership-btn');
    if (partnershipButton) {
      this.addEventListeners(
        partnershipButton,
        'click',
        this._handlePartnershipClick
      );
    }

    // Инициализируем модальное окно Partnership, если оно открыто
    if (this.state.isPartnershipModalOpen) {
      this._renderPartnershipModal();
    }

    // Добавляем обработчики событий для ссылок
    this._setupLinkHandlers();
  }

  /**
   * Настраивает обработчики для ссылок
   */
  _setupLinkHandlers() {
    const links = this.container.querySelectorAll('.footer__link[href^="#"]');
    links.forEach(link => {
      this.addEventListeners(link, 'click', e => {
        e.preventDefault();
        const target = document.querySelector(link.getAttribute('href'));
        if (target) {
          const headerHeight =
            document.querySelector('.header')?.offsetHeight || 0;
          const elementPosition = target.getBoundingClientRect().top;
          const offsetPosition =
            elementPosition + window.scrollY - headerHeight;

          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth',
          });

          // Обновляем URL с помощью History API
          history.pushState(null, '', link.getAttribute('href'));
        }
      });
    });
  }

  /**
   * Обработчик клика по кнопке Partnership
   */
  _handlePartnershipClick() {
    this.setState(
      {
        isPartnershipModalOpen: true,
      },
      () => {
        this._renderPartnershipModal();
      }
    );
  }

  /**
   * Обработчик закрытия модального окна Partnership
   */
  _handlePartnershipModalClose() {
    this.setState({
      isPartnershipModalOpen: false,
    });
  }

  /**
   * Отображает модальное окно Partnership
   */
  _renderPartnershipModal() {
    const modalContainer = this.container.querySelector(
      '#partnership-modal-container'
    );
    if (!modalContainer) return;

    // Очищаем контейнер перед рендерингом
    DOMHelper.removeAllChildren(modalContainer);

    // Создаем и монтируем компонент модального окна
    this.children.partnershipModal = new PartnershipModal(modalContainer, {
      isOpen: this.state.isPartnershipModalOpen,
      onClose: this._handlePartnershipModalClose,
      i18n: this.props.i18n,
    });

    this.children.partnershipModal.mount();
  }

  /**
   * Обновляет состояние компонента
   */
  update() {
    super.update();

    // Обновляем модальное окно, если оно существует
    if (this.children.partnershipModal) {
      this.children.partnershipModal.updateProps({
        isOpen: this.state.isPartnershipModalOpen,
      });
    }
  }

  /**
   * Уничтожает компонент и очищает ресурсы
   */
  destroy() {
    // Уничтожаем дочерние компоненты
    if (this.children.partnershipModal) {
      this.children.partnershipModal.destroy();
    }

    super.destroy();
  }
}
