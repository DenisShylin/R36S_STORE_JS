// src/js/sections/about/ModalAbout.js
import { Component } from '../../../core/Component.js';

export class ModalAbout extends Component {
  constructor(container, props) {
    super(container, props);

    this.state = {
      isVideo: false,
      currentImageIndex: 0,
      isMuted: true,
    };

    // Привязываем методы к контексту
    this._handleOverlayClick = this._handleOverlayClick.bind(this);
    this._handleEscapePress = this._handleEscapePress.bind(this);
    this._handleToggleSound = this._handleToggleSound.bind(this);
  }

  /**
   * Обновляет свойства компонента
   * @param {Object} newProps - Новые свойства
   */
  updateProps(newProps) {
    const oldIsOpen = this.props.isOpen;
    const oldFeature = this.props.feature;

    this.props = { ...this.props, ...newProps };

    // Если изменилось состояние открытия/закрытия или функциональность, обновляем DOM
    if (oldIsOpen !== this.props.isOpen || oldFeature !== this.props.feature) {
      // Проверяем, является ли медиа видео
      if (this.props.feature?.videoUrl) {
        this.setState({ isVideo: true });
      } else {
        this.setState({ isVideo: false });
      }

      // Обновляем DOM
      this.update();
    }
  }

  /**
   * Рендерит компонент
   */
  render() {
    const { feature, isOpen } = this.props;
    const { isVideo, currentImageIndex, isMuted } = this.state;

    // Если модальное окно закрыто или нет данных, возвращаем пустую строку
    if (!isOpen || !feature) {
      return '';
    }

    return `
      <div class="modal-about-overlay">
        <div class="modal-about-content">
          <button class="modal-about-close" aria-label="Close modal">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>

          <div class="modal-about-header">
            <div class="modal-about-icon-wrapper">${feature.icon || ''}</div>
            <h3 class="modal-about-title">${feature.title || ''}</h3>
          </div>

          <div class="modal-about-body">
            ${this._renderMedia(feature)}

            <div class="modal-about-stats">
              <div class="modal-about-price-wrapper">
                <span class="modal-about-original-price">US $108.06</span>
                <span class="modal-about-current-price">
                  $35.48
                  <span style="font-size: 24px;">US</span>
                </span>
              </div>

              <a
                href="https://www.aliexpress.com/item/1005007171465465.html"
                class="modal-about-button modal-about-button--primary"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span class="modal-about-button-pulse"></span>
                <span class="modal-about-button-text">BUY NOW -68%</span>
                <span class="modal-about-button-shine"></span>
              </a>
            </div>

            <div class="modal-about-description">
              ${feature.fullDescription || ''}
            </div>
          </div>
        </div>
      </div>
    `;
  }

  /**
   * Отображает медиа-контент в зависимости от типа
   * @param {Object} feature - Данные о функциональности
   * @returns {string} HTML-разметка для медиа-контента
   */
  _renderMedia(feature) {
    if (!feature) return '';

    const { isVideo, currentImageIndex, isMuted } = this.state;

    // Если это набор цветов
    if (feature.title === 'Extensive color selection' && feature.colorImages) {
      return `
        <img
          src="${feature.colorImages[currentImageIndex]}"
          alt="${
            feature.imageAlt || `R36S Color Variant ${currentImageIndex + 1}`
          }"
          class="modal-about-image"
        />
      `;
    }

    // Если это видео
    if (isVideo && feature.videoUrl) {
      return `
        <div class="video-wrapper">
          <video
            class="modal-about-image"
            autoplay
            ${isMuted ? 'muted' : ''}
            loop
            playsinline
            preload="auto"
          >
            <source src="${feature.videoUrl}" type="video/mp4">
            Your browser does not support the video tag.
          </video>
          <button class="sound-control" id="sound-toggle">
            ${
              isMuted
                ? `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M11 5L6 9H2v6h4l5 4V5z"></path>
                  <line x1="23" y1="9" x2="17" y2="15"></line>
                  <line x1="17" y1="9" x2="23" y2="15"></line>
                </svg>`
                : `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
                  <path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"></path>
                </svg>`
            }
          </button>
        </div>
      `;
    }

    // Изображение по умолчанию
    return feature.imageUrl
      ? `<img
           src="${feature.imageUrl}"
           alt="${feature.imageAlt || 'Feature image'}"
           class="modal-about-image"
         />`
      : '';
  }

  /**
   * Выполняет действия после рендеринга
   */
  afterRender() {
    // Если модальное окно закрыто, ничего не делаем
    if (!this.props.isOpen || !this.props.feature) {
      document.removeEventListener('keydown', this._handleEscapePress);
      return;
    }

    // Блокируем прокрутку основного контента
    document.body.style.overflow = 'hidden';

    // Добавляем обработчик нажатия клавиши Escape
    document.addEventListener('keydown', this._handleEscapePress);

    // Добавляем обработчики для закрытия модального окна
    const overlay = this.container.querySelector('.modal-about-overlay');
    if (overlay) {
      this.addEventListeners(overlay, 'click', this._handleOverlayClick);
    }

    const closeButton = this.container.querySelector('.modal-about-close');
    if (closeButton) {
      this.addEventListeners(closeButton, 'click', this.props.onClose);
    }

    // Настраиваем видео
    if (this.state.isVideo) {
      const soundToggleButton = this.container.querySelector('#sound-toggle');
      if (soundToggleButton) {
        this.addEventListeners(
          soundToggleButton,
          'click',
          this._handleToggleSound
        );
      }
    }

    // Настраиваем слайдер цветов
    if (
      this.props.feature?.title === 'Extensive color selection' &&
      this.props.feature.colorImages
    ) {
      this._setupColorSlider();
    }
  }

  /**
   * Настраивает интервал для слайдера цветов
   */
  _setupColorSlider() {
    const { feature } = this.props;

    // Очищаем предыдущий интервал, если он существует
    if (this._colorInterval) {
      clearInterval(this._colorInterval);
    }

    // Устанавливаем новый интервал
    this._colorInterval = setInterval(() => {
      const newIndex =
        (this.state.currentImageIndex + 1) % feature.colorImages.length;
      this.setState({ currentImageIndex: newIndex });
    }, 1000);
  }

  /**
   * Обработчик клика по оверлею модального окна
   * @param {Event} e - Событие клика
   */
  _handleOverlayClick(e) {
    // Закрываем модальное окно только если клик был по оверлею, а не по контенту
    if (e.target.classList.contains('modal-about-overlay')) {
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
   * Обработчик переключения звука видео
   */
  _handleToggleSound() {
    const video = this.container.querySelector('video');
    if (!video) return;

    const newMuted = !this.state.isMuted;
    video.muted = newMuted;

    this.setState({ isMuted: newMuted });
  }

  /**
   * Уничтожает компонент и очищает ресурсы
   */
  destroy() {
    // Разблокируем прокрутку основного контента
    document.body.style.overflow = '';

    // Удаляем обработчик нажатия клавиши Escape
    document.removeEventListener('keydown', this._handleEscapePress);

    // Очищаем интервал слайдера
    if (this._colorInterval) {
      clearInterval(this._colorInterval);
      this._colorInterval = null;
    }

    super.destroy();
  }
}
