// src/js/components/header/Header.js
import { Component } from '../../core/Component.js';
import { MobileMenu } from '../mobileMenu/MobileMenu.js';
import { LanguageSwitcher } from '../../i18n/languageSwitcher.js';

export class Header extends Component {
  constructor(container, props) {
    super(container, props);

    this.state = {
      isScrolled: false,
      isMenuOpen: false,
      isVisible: true,
      prevScrollPos: window.scrollY,
    };

    // Инициализируем дочерние компоненты
    this.children.mobileMenu = null;
    this.children.languageSwitcher = null;

    // Устанавливаем обработчики событий
    this._setupEventListeners();
  }

  /**
   * Устанавливает обработчики событий
   */
  _setupEventListeners() {
    // Обработчик скролла страницы
    this._handleScroll = this._handleScroll.bind(this);
    window.addEventListener('scroll', this._handleScroll, { passive: true });

    // Обработчик изменения размера окна
    this._handleResize = this._handleResize.bind(this);
    window.addEventListener('resize', this._handleResize);
  }

  /**
   * Обработчик события скролла
   */
  _handleScroll() {
    const currentScrollPos = window.scrollY;
    const { prevScrollPos } = this.state;

    // Определяем скролл вниз или вверх
    const isScrollingDown = prevScrollPos < currentScrollPos;

    // Обновляем состояние компонента
    this.setState({
      isScrolled: currentScrollPos > 0,
      isVisible: currentScrollPos <= 100 || !isScrollingDown,
      prevScrollPos: currentScrollPos,
    });
  }

  /**
   * Обработчик события изменения размера окна
   */
  _handleResize() {
    const isMobile = window.innerWidth <= 768;

    // Если был открыт мобильное меню, но размер экрана стал десктопным, закрываем меню
    if (!isMobile && this.state.isMenuOpen) {
      this.setState({ isMenuOpen: false });
      document.body.style.overflow = 'unset';
    }
  }

  /**
   * Обработчик нажатия на пункт меню навигации
   * @param {Event} e - Событие клика
   */
  _handleNavClick(e) {
    e.preventDefault();
    const href = e.currentTarget.getAttribute('href');

    // Если это якорная ссылка
    if (href.startsWith('#')) {
      const targetId = href.replace('#', '');
      const element = document.getElementById(targetId);

      if (element) {
        // Устанавливаем видимость заголовка
        this.setState({ isVisible: true });

        // Добавляем небольшую задержку для обновления DOM
        setTimeout(() => {
          const headerHeight = this.container.offsetHeight;
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition =
            elementPosition + window.scrollY - headerHeight;

          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth',
          });

          // Если меню было открыто, закрываем его
          if (this.state.isMenuOpen) {
            this.setState({ isMenuOpen: false });
            document.body.style.overflow = 'unset';
          }

          // Обновляем URL с помощью History API
          window.history.replaceState(null, '', href);
        }, 50);
      }
    } else {
      // Для обычных ссылок - переход по URL
      window.location.href = href;
    }
  }

  /**
   * Переключает состояние мобильного меню
   */
  _toggleMenu() {
    const newState = !this.state.isMenuOpen;
    this.setState({ isMenuOpen: newState });

    // Блокируем/разблокируем скролл
    document.body.style.overflow = newState ? 'hidden' : 'unset';
  }

  /**
   * Рендер компонента
   */
  render() {
    const { isScrolled, isMenuOpen, isVisible } = this.state;

    // Формируем классы для шапки
    const headerClasses = [
      'header',
      isScrolled ? 'scrolled' : '',
      isMenuOpen ? 'menu-open' : '',
      isVisible ? 'visible' : 'hidden',
    ]
      .filter(Boolean)
      .join(' ');

    return `
      <header class="${headerClasses}">
        <nav class="nav">
          <a href="/" class="logo">R36S</a>
          
          <ul class="desktop-menu">
            <li><a class="our-menu-link" href="#features-r36s" data-nav-link data-i18n="header.functionality">Functionality</a></li>
            <li><a class="our-menu-link" href="#features" data-nav-link data-i18n="header.about">About R36S</a></li>
            <li><a class="our-menu-link" href="#categories" data-nav-link data-i18n="header.video">Video</a></li>
            <li><a class="our-menu-link" href="#reviews" data-nav-link data-i18n="header.reviews">Reviews</a></li>
            <li><a class="our-menu-link" href="#contact" data-nav-link data-i18n="header.contacts">Contacts</a></li>
          </ul>
          
          <div class="header__controls">
            <div class="language-switcher-container"></div>
            
            <button class="burger-btn" aria-expanded="${isMenuOpen}" aria-label="Toggle menu">
              <span class="burger-line ${isMenuOpen ? 'open' : ''}"></span>
            </button>
          </div>
        </nav>
      </header>
    `;
  }

  /**
   * После рендеринга компонента
   */
  afterRender() {
    // Устанавливаем обработчики на ссылки навигации
    const navLinks = this.container.querySelectorAll('[data-nav-link]');
    navLinks.forEach(link => {
      this.addEventListeners(link, 'click', this._handleNavClick.bind(this));
    });

    // Устанавливаем обработчик на кнопку бургер-меню
    const burgerBtn = this.container.querySelector('.burger-btn');
    if (burgerBtn) {
      this.addEventListeners(burgerBtn, 'click', this._toggleMenu.bind(this));
    }

    // Инициализируем мобильное меню
    if (!this.children.mobileMenu) {
      const mobileMenuContainer = document.createElement('div');
      mobileMenuContainer.id = 'mobile-menu-container';
      document.body.appendChild(mobileMenuContainer);

      this.children.mobileMenu = new MobileMenu(mobileMenuContainer, {
        isOpen: this.state.isMenuOpen,
        onClose: this._toggleMenu.bind(this),
        handleNavClick: this._handleNavClick.bind(this),
        i18n: this.props.i18n,
      });
    }

    // Инициализируем переключатель языков
    if (!this.children.languageSwitcher) {
      const languageSwitcherContainer = this.container.querySelector(
        '.language-switcher-container'
      );
      if (languageSwitcherContainer) {
        this.children.languageSwitcher = new LanguageSwitcher(
          languageSwitcherContainer,
          {
            i18n: this.props.i18n,
          }
        );
        this.children.languageSwitcher.mount();
      }
    }

    // Обновляем состояние мобильного меню при изменении
    if (this.children.mobileMenu) {
      this.children.mobileMenu.updateProps({
        isOpen: this.state.isMenuOpen,
      });
    }
  }

  /**
   * Обновление состояния компонента
   */
  update() {
    super.update();

    // Обновляем состояние мобильного меню
    if (this.children.mobileMenu) {
      this.children.mobileMenu.updateProps({
        isOpen: this.state.isMenuOpen,
      });
    }
  }

  /**
   * Уничтожение компонента и удаление обработчиков
   */
  destroy() {
    // Удаляем глобальные обработчики событий
    window.removeEventListener('scroll', this._handleScroll);
    window.removeEventListener('resize', this._handleResize);

    super.destroy();
  }
}
