// src/js/sections/categories/Categories.js
import { Component } from '../../../core/Component.js';

export class Categories extends Component {
  constructor(container, props) {
    super(container, props);

    this.state = {
      isPlaying: true,
      isMuted: true,
      currentTime: 0,
      duration: 0,
      isAnimated: false,
    };

    // Привязываем методы к контексту
    this._togglePlay = this._togglePlay.bind(this);
    this._toggleMute = this._toggleMute.bind(this);
    this._handleTimeUpdate = this._handleTimeUpdate.bind(this);
    this._handleVideoClick = this._handleVideoClick.bind(this);
  }

  /**
   * Форматирует время в формат "минуты:секунды"
   * @param {number} time - Время в секундах
   * @returns {string} Отформатированное время
   */
  _formatTime(time) {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  }

  /**
   * Рендерит компонент
   */
  render() {
    const { i18n } = this.props;
    const translate = key => i18n?.translate(key) || key;
    const { isPlaying, isMuted, currentTime, duration } = this.state;

    return `
      <section class="categories" id="categories">
        <div class="categories__container">
          <div class="categories__content ${
            this.state.isAnimated ? 'animate-in' : ''
          }">
            <div class="categories__info">
              <div class="categories__labels">
                <span class="categories__label" data-i18n="categories.label">${translate(
                  'categories.label'
                )}</span>
                <span class="categories__label categories__label--outline" data-i18n="categories.label_outline">${translate(
                  'categories.label_outline'
                )}</span>
              </div>
              <h2 class="categories__title" data-i18n="categories.title">${translate(
                'categories.title'
              )}</h2>
              <p class="categories__description" data-i18n="categories.description">${translate(
                'categories.description'
              )}</p>
            </div>

            <div class="categories__video-wrapper">
              <div class="categories__video-container">
                <video
                  id="categories-video"
                  class="categories__video"
                  autoplay
                  muted
                  loop
                  playsinline
                  src="/video/video_categories_.MP4"
                >
                  Your browser does not support the video tag.
                </video>
                <div class="categories__video-overlay"></div>

                <div class="categories__video-controls">
                  <button
                    class="categories__video-play"
                    aria-label="${isPlaying ? 'Pause' : 'Play'}"
                  >
                    ${
                      isPlaying
                        ? `<svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                        >
                          <rect x="6" y="4" width="4" height="16"></rect>
                          <rect x="14" y="4" width="4" height="16"></rect>
                        </svg>`
                        : `<svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                        >
                          <polygon points="5 3 19 12 5 21 5 3"></polygon>
                        </svg>`
                    }
                  </button>

                  <button
                    class="categories__video-mute"
                    aria-label="${isMuted ? 'Unmute' : 'Mute'}"
                  >
                    ${
                      isMuted
                        ? `<svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                        >
                          <path d="M11 5L6 9H2v6h4l5 4V5z"></path>
                          <line x1="23" y1="9" x2="17" y2="15"></line>
                          <line x1="17" y1="9" x2="23" y2="15"></line>
                        </svg>`
                        : `<svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                        >
                          <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
                          <path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"></path>
                        </svg>`
                    }
                  </button>

                  <div class="categories__video-progress">
                    <input
                      type="range"
                      min="0"
                      max="${duration}"
                      value="${currentTime}"
                      class="categories__video-slider"
                      id="video-progress-slider"
                    />
                    <div class="categories__video-time">
                      <span>${this._formatTime(currentTime)}</span>
                      <span>${this._formatTime(duration)}</span>
                    </div>
                  </div>
                </div>
              </div>

              <div class="categories__video-info">
                <div class="categories__video-stats">
                  <div class="categories__stat">
                    <span class="categories__stat-number">60</span>
                    <span class="categories__stat-label">FPS</span>
                  </div>
                  <div class="categories__stat">
                    <span class="categories__stat-number">HD</span>
                    <span class="categories__stat-label">Quality</span>
                  </div>
                  <div class="categories__stat">
                    <span class="categories__stat-number">3.5*</span>
                    <span class="categories__stat-label">IPS Screen</span>
                  </div>
                </div>
              </div>
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
    // Инициализируем видео
    const video = this.container.querySelector('#categories-video');
    if (video) {
      // Добавляем обработчики событий
      this.addEventListeners(video, 'loadedmetadata', () => {
        this.setState({ duration: video.duration });
      });

      this.addEventListeners(video, 'timeupdate', () => {
        this.setState({ currentTime: video.currentTime });
      });

      // Обработчик клика по контейнеру видео
      const videoContainer = this.container.querySelector(
        '.categories__video-container'
      );
      if (videoContainer) {
        this.addEventListeners(videoContainer, 'click', this._handleVideoClick);
      }
    }

    // Кнопка воспроизведения/паузы
    const playButton = this.container.querySelector('.categories__video-play');
    if (playButton) {
      this.addEventListeners(playButton, 'click', e => {
        e.stopPropagation();
        this._togglePlay();
      });
    }

    // Кнопка включения/отключения звука
    const muteButton = this.container.querySelector('.categories__video-mute');
    if (muteButton) {
      this.addEventListeners(muteButton, 'click', e => {
        e.stopPropagation();
        this._toggleMute();
      });
    }

    // Слайдер прогресса
    const progressSlider = this.container.querySelector(
      '#video-progress-slider'
    );
    if (progressSlider) {
      this.addEventListeners(progressSlider, 'input', this._handleTimeUpdate);

      // Предотвращаем всплытие события клика для слайдера
      this.addEventListeners(progressSlider, 'click', e => {
        e.stopPropagation();
      });
    }

    // Инициализируем IntersectionObserver для анимации
    this._setupIntersectionObserver();
  }

  /**
   * Настраивает IntersectionObserver для анимации
   */
  _setupIntersectionObserver() {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          this.setState({ isAnimated: true });

          // Если видео видно, но звук выключен, сохраняем это состояние
          const video = this.container.querySelector('#categories-video');
          if (video) {
            video.muted = this.state.isMuted;
          }
        } else {
          // Когда секция уходит из вида, отключаем звук
          const video = this.container.querySelector('#categories-video');
          if (video && !this.state.isMuted) {
            video.muted = true;
            this.setState({ isMuted: true });
          }
        }
      },
      { threshold: 0.1 }
    );

    // Начинаем наблюдение за секцией
    observer.observe(this.container);

    // Сохраняем observer для последующего удаления
    this._observer = observer;
  }

  /**
   * Обработчик клика по видео
   * @param {Event} e - Событие клика
   */
  _handleVideoClick(e) {
    // Игнорируем клики по элементам управления
    if (e.target.closest('.categories__video-controls')) {
      return;
    }

    this._togglePlay();
  }

  /**
   * Переключает воспроизведение/паузу видео
   */
  _togglePlay() {
    const video = this.container.querySelector('#categories-video');
    if (!video) return;

    if (this.state.isPlaying) {
      video.pause();
    } else {
      video.play();
    }

    this.setState({ isPlaying: !this.state.isPlaying });
  }

  /**
   * Переключает включение/отключение звука видео
   */
  _toggleMute() {
    const video = this.container.querySelector('#categories-video');
    if (!video) return;

    const newMuted = !this.state.isMuted;
    video.muted = newMuted;

    this.setState({ isMuted: newMuted });
  }

  /**
   * Обработчик изменения времени видео через слайдер
   * @param {Event} e - Событие изменения
   */
  _handleTimeUpdate(e) {
    const video = this.container.querySelector('#categories-video');
    if (!video) return;

    const time = parseFloat(e.target.value);
    video.currentTime = time;

    this.setState({ currentTime: time });
  }

  /**
   * Уничтожает компонент и очищает ресурсы
   */
  destroy() {
    // Останавливаем видео при уничтожении компонента
    const video = this.container.querySelector('#categories-video');
    if (video) {
      video.pause();
    }

    // Уничтожаем observer
    if (this._observer) {
      this._observer.disconnect();
    }

    super.destroy();
  }
}
