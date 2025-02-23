// Импорты изображений
import heroImage1x from '../../img/herou1_1x_.png';
import heroImage2x from '../../img/herou1_2x_.png';
import i18next from 'i18next';

// Утилита для предзагрузки изображений
const imagePreloader = {
  init() {
    const preloadLinks = [
      { href: heroImage1x, media: '(max-width: 1x)' },
      { href: heroImage2x, media: '(min-resolution: 2x)' },
    ];

    preloadLinks.forEach(({ href, media }) => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.as = 'image';
      link.href = href;
      if (media) link.media = media;
      document.head.appendChild(link);
    });
  },
};

export const initHero = () => {
  // Получаем элементы
  const heroSection = document.getElementById('hero');

  if (!heroSection) {
    console.error('Hero section not found');
    return;
  }

  const titleRef = heroSection.querySelector('.hero__content');
  const heroDescription = heroSection.querySelector('.hero__description');
  const primaryButton = heroSection.querySelector('.hero__button--primary');
  const secondaryButton = heroSection.querySelector('.hero__button--secondary');
  const titleLines = heroSection.querySelectorAll('.hero__title-line');

  // Состояние
  let isDesktop = window.innerWidth > 1280;

  // Функция обновления изображения
  const updateHeroImage = () => {
    const imageContainer = heroSection.querySelector('.hero__image-wrapper');
    if (imageContainer) {
      imageContainer.innerHTML = `
        <div class="hero__image-glow" aria-hidden="true"></div>
        <picture>
          <source
            media="(-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi)"
            srcset="${heroImage2x}"
            type="image/png"
          />
          <source
            srcset="${heroImage1x}"
            type="image/png"
          />
          <img
            src="${heroImage1x}"
            alt="${i18next.t('hero.image.alt')}"
            class="hero__console-img"
            width="600"
            height="400"
          />
        </picture>
      `;
    }
  };

  // Функция обновления заголовка
  const updateTitle = () => {
    if (titleLines.length === 3) {
      // Теперь всегда показываем все три строки независимо от разрешения
      titleLines[0].textContent = i18next.t('hero.title.line1'); // R36S
      titleLines[1].textContent = i18next.t('hero.title.line2'); // HANDHELD
      titleLines[2].textContent = i18next.t('hero.title.line3'); // GAME CONSOLE

      // Показываем все строки
      titleLines.forEach(line => {
        line.style.display = 'block';
      });
    }
  };

  // Обновление описания
  const updateDescription = () => {
    if (heroDescription) {
      heroDescription.textContent = isDesktop
        ? i18next.t('hero.description.desktop')
        : i18next.t('hero.description.mobile');
    }
  };

  // Обработчики событий
  const handleResize = () => {
    const newIsDesktop = window.innerWidth > 1280;
    if (newIsDesktop !== isDesktop) {
      isDesktop = newIsDesktop;
      updateDescription();
    }
    updateTitle();
  };

  const handleBuyClick = () => {
    window.open(
      'https://www.aliexpress.com/item/1005007171465465.html',
      '_blank',
      'noopener,noreferrer'
    );
  };

  const handleMoreDetailsClick = e => {
    e.preventDefault();
    const featuresSection = document.getElementById('features');
    const header = document.querySelector('.header');

    if (featuresSection && header) {
      const headerHeight = header.offsetHeight;
      const elementPosition = featuresSection.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });

      window.history.replaceState(
        null,
        '',
        `${window.location.pathname}#features`
      );
    }
  };

  // Установка обработчиков событий
  window.addEventListener('resize', handleResize);
  if (primaryButton) primaryButton.addEventListener('click', handleBuyClick);
  if (secondaryButton)
    secondaryButton.addEventListener('click', handleMoreDetailsClick);

  // Слушаем событие изменения языка
  window.addEventListener('languageChanged', () => {
    updateTitle();
    updateDescription();
    updateHeroImage(); // Обновляем alt текст изображения
  });

  // Начальная инициализация
  updateHeroImage();
  updateDescription();
  updateTitle();
  imagePreloader.init();

  // Наблюдатель за появлением секции
  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-in');
      }
    },
    { threshold: 0.1 }
  );

  if (titleRef) observer.observe(titleRef);

  // Возвращаем функцию очистки
  return () => {
    window.removeEventListener('resize', handleResize);
    window.removeEventListener('languageChanged', updateTitle);
    if (primaryButton)
      primaryButton.removeEventListener('click', handleBuyClick);
    if (secondaryButton)
      secondaryButton.removeEventListener('click', handleMoreDetailsClick);
    observer.disconnect();
  };
};
