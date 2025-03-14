/**
 * @fileoverview Модуль инициализации секции Hero
 * @description Содержит функцию для настройки секции Hero, управления изображениями,
 * адаптивностью и обработчиками событий для кнопок.
 */

/**
 * Инициализирует секцию Hero на странице.
 * Устанавливает изображения, обрабатывает события загрузки,
 * настраивает адаптивность и анимации.
 * @returns {void}
 */
export function initHero() {
  console.log('Hero section initialized');

  // DOM элементы
  const heroSection = document.querySelector('.hero');
  const heroImage = document.querySelector('.hero__console-img');
  const heroImageSource = document.querySelector('.hero__image source');
  const heroContent = document.querySelector('.hero__content');
  const desktopDescription = document.querySelector(
    '.hero__description--desktop'
  );
  const mobileDescription = document.querySelector(
    '.hero__description--mobile'
  );
  const heroPricing = document.querySelector('.hero__pricing');
  const buyButton = document.getElementById('buy-button');
  const moreDetailsButton = document.getElementById('more-details-button');

  // Используем проверенные рабочие пути из публичной директории
  const heroImage1x = '/img/hero/herou1_1x_.png';
  const heroImage2x = '/img/hero/herou1_2x_.png';

  console.log('Using image paths:', { heroImage1x, heroImage2x });

  /**
   * Настраивает изображения секции Hero.
   * Устанавливает пути и обработчики событий для главного изображения.
   * @private
   */
  function setupHeroImage() {
    if (!heroImage) {
      console.error('Hero image element not found');
      return;
    }

    console.log('Setting hero image paths');

    // Обработчики событий
    heroImage.onerror = () => {
      console.error('Failed to load hero image:', heroImage.src);
      heroSection.classList.add('hero--loaded'); // Все равно показываем секцию
    };

    heroImage.onload = () => {
      console.log('Hero image loaded successfully');
      heroSection.classList.add('hero--loaded');
    };

    // Устанавливаем атрибуты
    heroImage.src = heroImage2x;
    heroImage.srcset = `${heroImage1x} 1x, ${heroImage2x} 2x`;

    // Если изображение уже загружено (из кэша)
    if (heroImage.complete) {
      console.log('Hero image already loaded (from cache)');
      heroSection.classList.add('hero--loaded');
    }
  }

  /**
   * Настраивает source элемент для изображения с высоким разрешением.
   * @private
   */
  function setupSourceElement() {
    if (heroImageSource) {
      heroImageSource.srcset = heroImage1x;
    } else {
      console.warn('Hero image source element not found');
    }
  }

  /**
   * Адаптирует контент под разные размеры экрана.
   * Переключает между мобильной и десктопной версиями описания.
   * @private
   */
  function adjustForViewport() {
    const isDesktop = window.innerWidth > 992;

    if (desktopDescription && mobileDescription && heroPricing) {
      if (isDesktop) {
        desktopDescription.style.display = 'block';
        mobileDescription.style.display = 'none';
      } else {
        desktopDescription.style.display = 'none';
        mobileDescription.style.display = 'block';
      }
    }
  }

  /**
   * Настраивает анимацию появления контента при прокрутке.
   * Использует IntersectionObserver для определения видимости элемента.
   * @private
   */
  function setupContentAnimation() {
    if (!heroContent) return;

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    observer.observe(heroContent);
  }

  /**
   * Настраивает обработчики событий для кнопок секции.
   * @private
   */
  function setupButtonHandlers() {
    // Обработчик для кнопки покупки
    if (buyButton) {
      buyButton.addEventListener('click', () => {
        // Открываем ссылку на продукт в новой вкладке
        window.open(
          'https://www.aliexpress.com/item/1005007171465465.html',
          '_blank',
          'noopener,noreferrer'
        );
      });
    }

    // Обработчик для кнопки "Подробнее"
    if (moreDetailsButton) {
      moreDetailsButton.addEventListener('click', handleMoreDetailsClick);
    }
  }

  /**
   * Обрабатывает клик по кнопке "Подробнее".
   * Выполняет плавную прокрутку к секции features.
   * @param {Event} e - Событие клика
   * @private
   */
  function handleMoreDetailsClick(e) {
    e.preventDefault();
    const featuresSection = document.getElementById('features');
    const header = document.querySelector('.header');

    if (featuresSection && header) {
      // Учитываем высоту фиксированного заголовка при прокрутке
      const headerHeight = header.offsetHeight;
      const elementPosition = featuresSection.getBoundingClientRect().top;
      const currentScrollY = window.scrollY || window.pageYOffset;
      const offsetPosition = elementPosition + currentScrollY - headerHeight;

      // Плавная прокрутка к секции features
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });

      // Обновляем URL без перезагрузки страницы
      window.history.replaceState(
        null,
        '',
        `${window.location.pathname}#features`
      );
    }
  }

  // Инициализация компонента
  setupHeroImage();
  setupSourceElement();
  adjustForViewport();
  setupContentAnimation();
  setupButtonHandlers();

  // Слушаем событие изменения размера окна
  window.addEventListener('resize', adjustForViewport);
}
