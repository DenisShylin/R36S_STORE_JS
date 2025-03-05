// src/js/sections/about/About.js
import { Component } from '../../../core/Component.js';
import { ModalAbout } from './ModalAbout.js';

export class About extends Component {
  constructor(container, props) {
    super(container, props);

    this.state = {
      activeCard: null,
      mousePosition: { x: 0, y: 0 },
      isModalOpen: false,
      selectedFeature: null,
    };

    // Привязываем методы к контексту
    this._handleMouseMove = this._handleMouseMove.bind(this);
    this._handleOpenModal = this._handleOpenModal.bind(this);
    this._handleCloseModal = this._handleCloseModal.bind(this);
  }

  /**
   * Инициализирует данные для компонента
   */
  _initFeatures() {
    const { i18n } = this.props;
    const translate = key => i18n?.translate(key) || key;

    return [
      {
        id: 1,
        icon: `
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="about-card__icon"
            width="44"
            height="44"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <line x1="6" y1="12" x2="10" y2="12"></line>
            <line x1="8" y1="10" x2="8" y2="14"></line>
            <line x1="15" y1="13" x2="15.01" y2="13"></line>
            <line x1="18" y1="11" x2="18.01" y2="11"></line>
            <rect x="2" y="6" width="20" height="12" rx="2"></rect>
          </svg>
        `,
        title: translate('about.features.retro_games.title'),
        description: translate('about.features.retro_games.description'),
        number: translate('about.features.retro_games.number'),
        detail: translate('about.features.retro_games.detail'),
        fullDescription: translate(
          'about.features.retro_games.full_description'
        ),
        imageUrl: '/img/modal/video_1_.gif',
        imageAlt: 'Коллекция ретро-игр',
      },
      {
        id: 2,
        icon: `
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="about-card__icon"
            width="44"
            height="44"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
            <line x1="8" y1="21" x2="16" y2="21"></line>
            <line x1="12" y1="17" x2="12" y2="21"></line>
          </svg>
        `,
        title: translate('about.features.display.title'),
        description: translate('about.features.display.description'),
        number: translate('about.features.display.number'),
        detail: translate('about.features.display.detail'),
        fullDescription: translate('about.features.display.full_description'),
        imageUrl: '/img/modal/video_2_.gif',
        imageAlt: 'Display Technologies',
      },
      {
        id: 3,
        icon: `
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="about-card__icon"
            width="44"
            height="44"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <rect x="2" y="7" width="16" height="10" rx="2" ry="2"></rect>
            <line x1="22" y1="11" x2="22" y2="13"></line>
          </svg>
        `,
        title: translate('about.features.battery.title'),
        description: translate('about.features.battery.description'),
        number: translate('about.features.battery.number'),
        detail: translate('about.features.battery.detail'),
        fullDescription: translate('about.features.battery.full_description'),
        videoUrl: '/video/video_3_batrey_.MP4',
        imageAlt: 'Battery Life',
      },
      {
        id: 4,
        icon: `
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="about-card__icon"
            width="44"
            height="44"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <circle cx="12" cy="12" r="10"></circle>
            <circle cx="12" cy="12" r="6"></circle>
            <circle cx="12" cy="12" r="2"></circle>
          </svg>
        `,
        title: translate('about.features.colors.title'),
        description: translate('about.features.colors.description'),
        number: translate('about.features.colors.number'),
        detail: translate('about.features.colors.detail'),
        fullDescription: translate('about.features.colors.full_description'),
        colorImages: [
          '/img/modal/Untitled_1_1x.jpg',
          '/img/modal/Untitled_2_1x.jpg',
          '/img/modal/Untitled_3_1x.jpg',
          '/img/modal/Untitled_4_1x.jpg',
        ],
        imageAlt: 'R36S Color Variants',
      },
      {
        id: 5,
        icon: `
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="about-card__icon"
            width="44"
            height="44"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <circle cx="12" cy="12" r="3"></circle>
            <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
          </svg>
        `,
        title: translate('about.features.settings.title'),
        description: translate('about.features.settings.description'),
        number: translate('about.features.settings.number'),
        detail: translate('about.features.settings.detail'),
        fullDescription: translate('about.features.settings.full_description'),
        videoUrl: '/video/video_5_option_.MP4',
        imageAlt: 'R36S Settings',
      },
      {
        id: 6,
        icon: `
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="about-card__icon"
            width="44"
            height="44"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
            <circle cx="9" cy="7" r="4"></circle>
            <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
            <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
          </svg>
        `,
        title: translate('about.features.portability.title'),
        description: translate('about.features.portability.description'),
        number: translate('about.features.portability.number'),
        detail: translate('about.features.portability.detail'),
        fullDescription: translate(
          'about.features.portability.full_description'
        ),
        videoUrl: '/video/video_6_.MP4',
        imageAlt: 'R36S Portability',
      },
    ];
  }

  /**
   * Рендерит компонент
   */
  render() {
    const { i18n } = this.props;
    const translate = key => i18n?.translate(key) || key;

    const features = this._initFeatures();

    return `
      <section class="about" id="features-r36s">
        <div class="about__container">
          <div class="about__header">
            <div class="about__labels">
              <span class="about__label" data-i18n="about.label">${translate(
                'about.label'
              )}</span>
              <span class="about__label about__label--outline" data-i18n="about.label_outline">${translate(
                'about.label_outline'
              )}</span>
            </div>
            <h2 class="about__title" data-i18n="about.title">${translate(
              'about.title'
            )}</h2>
            <p class="about__subtitle" data-i18n="about.subtitle">${translate(
              'about.subtitle'
            )}</p>
          </div>

          <div class="about__cards">
            ${features
              .map(
                feature => `
              <div 
                class="about-card ${
                  this.state.activeCard === feature.id ? 'active' : ''
                }" 
                data-id="${feature.id}"
                style="--mouse-x: ${this.state.mousePosition.x}px; --mouse-y: ${
                  this.state.mousePosition.y
                }px;"
              >
                <div class="card-blur"></div>
                <div class="card-glow"></div>
                <div class="about-card__content">
                  <div class="about-card__icon-wrapper">${feature.icon}</div>
                  <h3 class="about-card__title">${feature.title}</h3>
                  <p class="about-card__description">${feature.description}</p>
                  <div class="about-card__stats">
                    <span class="about-card__number">${feature.number}</span>
                    <span class="about-card__detail">${feature.detail}</span>
                  </div>
                  <button class="about-card__button" data-feature-id="${
                    feature.id
                  }">
                    <span class="button-text">${
                      translate('about.more_details') || 'More details'
                    }</span>
                    <span class="button-icon">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <line x1="5" y1="12" x2="19" y2="12"></line>
                        <polyline points="12 5 19 12 12 19"></polyline>
                      </svg>
                    </span>
                  </button>
                </div>
                <div class="card-indicator"></div>
              </div>
            `
              )
              .join('')}
          </div>
        </div>
        
        <!-- Контейнер для модального окна -->
        <div id="modal-about-container"></div>
      </section>
    `;
  }

  /**
   * Выполняется после рендеринга
   */
  afterRender() {
    // Добавляем обработчики для карточек
    const cards = this.container.querySelectorAll('.about-card');

    cards.forEach(card => {
      // Обработчик наведения мыши
      this.addEventListeners(card, 'mouseenter', () => {
        const id = parseInt(card.dataset.id);
        this.setState({ activeCard: id });
      });

      this.addEventListeners(card, 'mouseleave', () => {
        this.setState({ activeCard: null });
      });

      this.addEventListeners(card, 'mousemove', this._handleMouseMove);

      // Обработчик для кнопки "Подробнее"
      const moreButton = card.querySelector('.about-card__button');
      if (moreButton) {
        this.addEventListeners(moreButton, 'click', e => {
          e.preventDefault();
          e.stopPropagation();
          const id = parseInt(moreButton.dataset.featureId);
          const feature = this._initFeatures().find(f => f.id === id);
          this._handleOpenModal(feature, e);
        });
      }
    });

    // Отображаем модальное окно, если оно открыто
    if (this.state.isModalOpen && this.state.selectedFeature) {
      this._renderModal();
    }
  }

  /**
   * Обработчик движения мыши
   * @param {MouseEvent} e - Событие движения мыши
   */
  _handleMouseMove(e) {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();

    this.setState({
      mousePosition: {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      },
    });
  }

  /**
   * Обработчик открытия модального окна
   * @param {Object} feature - Данные о функциональности
   * @param {Event} e - Событие клика
   */
  _handleOpenModal(feature, e) {
    e.preventDefault();
    e.stopPropagation();

    this.setState(
      {
        selectedFeature: feature,
        isModalOpen: true,
      },
      () => {
        this._renderModal();
      }
    );
  }

  /**
   * Обработчик закрытия модального окна
   */
  _handleCloseModal() {
    this.setState({
      isModalOpen: false,
    });

    // Очищаем выбранную функциональность с небольшой задержкой
    setTimeout(() => {
      this.setState({
        selectedFeature: null,
      });
    }, 100);
  }

  /**
   * Отображает модальное окно
   */
  _renderModal() {
    const modalContainer = this.container.querySelector(
      '#modal-about-container'
    );
    if (!modalContainer) return;

    // Создаем и монтируем компонент модального окна
    this.children.modalAbout = new ModalAbout(modalContainer, {
      feature: this.state.selectedFeature,
      onClose: this._handleCloseModal.bind(this),
      isOpen: this.state.isModalOpen,
      i18n: this.props.i18n,
    });

    this.children.modalAbout.mount();
  }

  /**
   * Обновляет состояние компонента
   */
  update() {
    super.update();

    // Обновляем модальное окно, если оно существует
    if (this.children.modalAbout) {
      this.children.modalAbout.updateProps({
        feature: this.state.selectedFeature,
        isOpen: this.state.isModalOpen,
      });
    }
  }

  /**
   * Уничтожает компонент и очищает ресурсы
   */
  destroy() {
    // Очищаем обработчики событий
    if (this.children.modalAbout) {
      this.children.modalAbout.destroy();
    }

    super.destroy();
  }
}
