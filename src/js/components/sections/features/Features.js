// src/js/sections/features/Features.js
import { Component } from '../../../core/Component.js';

export class Features extends Component {
  constructor(container, props) {
    super(container, props);

    this.state = {
      isMuted: true,
    };

    // Привязываем методы к контексту
    this._handleBuyClick = this._handleBuyClick.bind(this);
    this._handleDetailsClick = this._handleDetailsClick.bind(this);
    this._toggleSound = this._toggleSound.bind(this);
    this._handleVideoClick = this._handleVideoClick.bind(this);
  }

  /**
   * Рендерит компонент
   */
  render() {
    const { i18n } = this.props;
    const translate = key => i18n?.translate(key) || key;
    const { isMuted } = this.state;

    return `
      <section class="features" id="features">
        <div class="features__container">
          <div class="features__content">
            <h2 class="features__title" data-i18n="features.title">${translate(
              'features.title'
            )}</h2>

            <div class="features__description" data-i18n="features.description">
              <p>${translate('features.description')}</p>
            </div>

            <div class="features__buttons">
              <button class="features__button" id="features-buy-button" aria-label="Buy now">
                <span data-i18n="features.buttons.buy_now">${translate(
                  'features.buttons.buy_now'
                )}</span>
              </button>

              <button class="features__button-secondary" id="features-details-button" aria-label="Show Details">
                <span data-i18n="features.buttons.show_details">${translate(
                  'features.buttons.show_details'
                )}</span>
              </button>
            </div>
          </div>

          <div class="features__image">
            <div class="features__image-wrapper">
              <video
                id="features-video"
                class="features__console-img"
                loop
                muted
                playsinline
                autoplay
                src="/video/video_features_.MP4">
                Your browser does not support the video tag.
              </video>
              <button class="features__sound-toggle" aria-label="${
                isMuted ? 'Unmute video' : 'Mute video'
              }">
                ${
                  isMuted
                    ? `<svg xmlns="http://www.w3.org/2000/svg" class="features__sound-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                      <path d="M11 5L6 9H2v6h4l5 4V5z"></path>
                      <line x1="23" y1="9" x2="17" y2="15"></line>
                      <line x1="17" y1="9" x2="23" y2="15"></line>
                     </svg>`
                    : `<svg xmlns="http://www.w3.org/2000/svg" class="features__sound-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                      <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
                      <path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"></path>
                     </svg>`
                }
              </button>
            </div>
          </div>
        </div>
      </section>
    `;
  }

  /**
   * Выполняет действия после рендеринга
   */
  afterRender() {
    // Настраиваем обработчики для кнопок
    const buyButton = this.container.querySelector('#features-buy-button');
    if (buyButton) {
      this.addEventListeners(buyButton, 'click', this._handleBuyClick);
    }

    const detailsButton = this.container.querySelector(
      '#features-details-button'
    );
    if (detailsButton) {
      this.addEventListeners(detailsButton, 'click', this._handleDetailsClick);
    }

    // Настраиваем обработчики для видео
    const video = this.container.querySelector('#features-video');
    if (video) {
      // Устанавливаем громкость и автозапуск
      video.volume = 0.5;
      video.play().catch(error => {
        console.log('Автовоспроизведение не удалось:', error);
      });

      // Обработчик клика по видео для запуска/остановки
      this.addEventListeners(
        video.parentElement,
        'click',
        this._handleVideoClick
      );
    }

    // Настраиваем обработчик для кнопки звука
    const soundToggle = this.container.querySelector('.features__sound-toggle');
    if (soundToggle) {
      this.addEventListeners(soundToggle, 'click', e => {
        e.stopPropagation(); // Предотвращаем всплытие события
        this._toggleSound();
      });
    }

    // Настраиваем обработчик скролла для автоматического отключения звука
    this._setupScrollHandler();
  }

  /**
   * Настраивает обработчик скролла для отключения звука
   */
  _setupScrollHandler() {
    const handleScroll = () => {
      const video = this.container.querySelector('#features-video');
      if (!video || this.state.isMuted) return;

      const rect = this.container.getBoundingClientRect();
      const isVisible = rect.top < window.innerHeight && rect.bottom > 0;

      if (!isVisible) {
        video.muted = true;
        this.setState({ isMuted: true });
      }
    };

    // Добавляем обработчик скролла
    window.addEventListener('scroll', handleScroll);

    // Сохраняем обработчик для последующего удаления
    this.eventListeners.push({
      element: window,
      event: 'scroll',
      handler: handleScroll,
    });
  }

  /**
   * Обработчик клика по кнопке покупки
   */
  _handleBuyClick() {
    window.open(
      'https://www.aliexpress.com/item/1005007171465465.html',
      '_blank',
      'noopener,noreferrer'
    );
  }

  /**
   * Обработчик клика по кнопке подробностей
   */
  _handleDetailsClick() {
    const aboutSection = document.getElementById('features-r36s');
    if (!aboutSection) return;

    const header = document.querySelector('.header');
    const headerHeight = header ? header.offsetHeight : 0;

    const elementPosition = aboutSection.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.scrollY - headerHeight;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth',
    });

    // Обновляем URL с помощью History API
    window.history.replaceState(
      null,
      '',
      `${window.location.pathname}#features-r36s`
    );
  }

  /**
   * Обработчик клика по видео
   * @param {Event} e - Событие клика
   */
  _handleVideoClick(e) {
    // Игнорируем клики по кнопке звука
    if (e.target.closest('.features__sound-toggle')) return;

    const video = this.container.querySelector('#features-video');
    if (!video) return;

    if (video.paused) {
      video.play();
    } else {
      video.pause();
    }
  }

  /**
   * Переключает звук видео
   */
  _toggleSound() {
    const video = this.container.querySelector('#features-video');
    if (!video) return;

    const newMuted = !this.state.isMuted;
    video.muted = newMuted;

    if (!newMuted) {
      video.volume = 0.5;
    }

    this.setState({ isMuted: newMuted });
  }

  /**
   * Уничтожает компонент и очищает ресурсы
   */
  destroy() {
    super.destroy();
  }
}
