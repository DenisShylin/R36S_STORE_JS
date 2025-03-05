// src/js/components/sections/hero/Hero.js
import { Component } from '../../../core/Component.js';
import { DOMHelper } from '../../../core/DOMHelper.js';

export class Hero extends Component {
  constructor(container, props) {
    super(container, props);

    this.state = {
      isAnimated: false,
    };

    // Привязываем методы
    this._handleBuyClick = this._handleBuyClick.bind(this);
    this._handleDetailsClick = this._handleDetailsClick.bind(this);
  }

  /**
   * Рендер компонента
   */
  render() {
    const { i18n } = this.props;
    const translate = key => i18n?.translate(key) || key;

    return `
      <section class="hero">
        <div class="hero__background"></div>
        <div class="hero__overlay"></div>
        
        <div class="hero__container">
          <div class="hero__content-wrapper">
            <div class="hero__image">
              <div class="hero__image-wrapper">
                <div class="hero__image-glow"></div>
                <img 
                  src="/img/r36s-console.png" 
                  alt="R36S Retro Game Console" 
                  class="hero__console-img" 
                  width="600" 
                  height="400"
                >
              </div>
            </div>
            
            <h1 class="hero__title">
              <span class="hero__title-line" data-i18n="hero.title.line1">${translate(
                'hero.title.line1'
              )}</span>
              <span class="hero__title-line" data-i18n="hero.title.line2">${translate(
                'hero.title.line2'
              )}</span>
              <span class="hero__title-line hero__title-line--brand" data-i18n="hero.title.brand">${translate(
                'hero.title.brand'
              )}</span>
            </h1>
            
            <div class="hero__content">
              <p class="hero__description hero__description--desktop" data-i18n="hero.description">
                ${translate('hero.description')}
              </p>
              
              <div class="hero__pricing">
                <div class="hero__price-wrapper">
                  <span class="hero__original-price" data-i18n="hero.original_price">${translate(
                    'hero.original_price'
                  )}</span>
                  <span class="hero__current-price" data-i18n="hero.current_price">${translate(
                    'hero.current_price'
                  )}</span>
                </div>
                <span class="hero__discount-badge" data-i18n="hero.discount">${translate(
                  'hero.discount'
                )}</span>
              </div>
              
              <div class="hero__buttons">
                <button class="hero__button hero__button--primary" id="hero-buy-button">
                  <span class="hero__button-pulse"></span>
                  <span class="hero__button-text" data-i18n="hero.buttons.buy_now">${translate(
                    'hero.buttons.buy_now'
                  )}</span>
                  <span class="hero__button-shine"></span>
                </button>
                
                <button class="hero__button hero__button--secondary" id="hero-details-button">
                  <span class="hero__button-text" data-i18n="hero.buttons.show_details">${translate(
                    'hero.buttons.show_details'
                  )}</span>
                </button>
              </div>
            </div>
            
            <p class="hero__description hero__description--mobile" data-i18n="hero.description">
              ${translate('hero.description')}
            </p>
          </div>
        </div>
      </section>
    `;
  }

  /**
   * Настройка после рендеринга
   */
  afterRender() {
    // Настраиваем обработчики событий для кнопок
    const buyButton = this.container.querySelector('#hero-buy-button');
    if (buyButton) {
      this.addEventListeners(buyButton, 'click', this._handleBuyClick);
    }

    const detailsButton = this.container.querySelector('#hero-details-button');
    if (detailsButton) {
      this.addEventListeners(detailsButton, 'click', this._handleDetailsClick);
    }

    // Добавляем класс для анимации
    this._animateContent();

    // Настраиваем эффект движения для заголовка
    this._setupTitleAnimations();
  }

  /**
   * Обработчик нажатия на кнопку покупки
   */
  _handleBuyClick() {
    // Открываем ссылку на AliExpress в новой вкладке
    window.open(
      'https://www.aliexpress.com/item/1005007171465465.html',
      '_blank',
      'noopener,noreferrer'
    );
  }

  /**
   * Обработчик нажатия на кнопку подробностей
   */
  _handleDetailsClick() {
    // Получаем элемент "features-r36s"
    const featuresSection = document.getElementById('features-r36s');

    if (featuresSection) {
      // Получаем высоту шапки для правильного скролла
      const header = document.querySelector('.header');
      const headerHeight = header ? header.offsetHeight : 0;

      // Вычисляем позицию для скролла
      const elementPosition = featuresSection.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerHeight;

      // Выполняем плавный скролл
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
  }

  /**
   * Добавляет класс анимации к контенту
   */
  _animateContent() {
    // Если анимация уже была запущена - выходим
    if (this.state.isAnimated) {
      return;
    }

    // Находим контент
    const content = this.container.querySelector('.hero__content');

    if (content) {
      // Добавляем класс для анимации
      setTimeout(() => {
        content.classList.add('animate-in');
        this.setState({ isAnimated: true });
      }, 100);
    }
  }

  /**
   * Настраивает анимации для заголовка при движении мыши
   */
  _setupTitleAnimations() {
    const titleElement = this.container.querySelector(
      '.hero__title-line--brand'
    );
    const heroSection = this.container;

    if (!titleElement || !heroSection) {
      return;
    }

    // Добавляем обработчик движения мыши
    const handleMouseMove = e => {
      // Только для desktop версии (ширина экрана больше 992px)
      if (window.innerWidth <= 992) {
        return;
      }

      // Вычисляем положение курсора относительно секции
      const rect = heroSection.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      // Вычисляем смещение (максимум 15px в любом направлении)
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      // Смещение в зависимости от положения курсора (от -5 до 5 градусов)
      const rotateX = -1 * ((y - centerY) / centerY) * 5;
      const rotateY = ((x - centerX) / centerX) * 5;

      // Применяем трансформацию
      titleElement.style.transform = `perspective(500px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    };

    // Сбрасываем трансформацию при выходе курсора
    const handleMouseLeave = () => {
      titleElement.style.transform = 'perspective(500px) rotateX(10deg)';
    };

    // Добавляем обработчики
    this.addEventListeners(heroSection, 'mousemove', handleMouseMove);
    this.addEventListeners(heroSection, 'mouseleave', handleMouseLeave);

    // Для мобильных устройств
    if ('DeviceMotionEvent' in window) {
      // Обработчик движения устройства
      const handleDeviceMotion = e => {
        // Если ширина устройства меньше 992px
        if (window.innerWidth <= 992) {
          return;
        }

        const accelerationX = e.accelerationIncludingGravity.x;
        const accelerationY = e.accelerationIncludingGravity.y;

        // Максимальный угол наклона (от -3 до 3 градуса)
        const rotateX = Math.min(Math.max(accelerationY * 0.5, -3), 3);
        const rotateY = Math.min(Math.max(accelerationX * 0.5, -3), 3);

        // Применяем трансформацию
        titleElement.style.transform = `perspective(500px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
      };

      // Добавляем обработчик
      window.addEventListener('devicemotion', handleDeviceMotion);

      // Сохраняем для последующего удаления
      this.eventListeners.push({
        element: window,
        event: 'devicemotion',
        handler: handleDeviceMotion,
      });
    }
  }

  /**
   * Уничтожение компонента
   */
  destroy() {
    super.destroy();
  }
}
