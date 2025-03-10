// Инициализация событий для секции Hero
export function initHero() {
  // Обработка загрузки изображения
  const heroSection = document.querySelector('.hero');
  const heroImage = document.querySelector('.hero__console-img');
  const heroContent = document.querySelector('.hero__content');

  if (heroImage) {
    heroImage.onload = () => {
      heroSection.classList.add('hero--loaded');
    };

    // Если изображение уже загружено (из кэша)
    if (heroImage.complete) {
      heroSection.classList.add('hero--loaded');
    }
  }

  // Настройка медиа-запросов для десктопа/мобильного
  const isDesktop = window.innerWidth > 1280;
  const desktopDescription = document.querySelector(
    '.hero__description--desktop'
  );
  const mobileDescription = document.querySelector(
    '.hero__description--mobile'
  );
  const heroPricing = document.querySelector('.hero__pricing');

  // Показываем/скрываем нужные элементы в зависимости от разрешения
  if (isDesktop) {
    desktopDescription.style.display = 'block';
    mobileDescription.style.display = 'none';
    heroPricing.style.display = 'flex';
  } else {
    desktopDescription.style.display = 'none';
    mobileDescription.style.display = 'block';
    heroPricing.style.display = 'none';
  }

  // Обработчик изменения размера окна
  window.addEventListener('resize', () => {
    const isDesktopNow = window.innerWidth > 1280;

    if (isDesktopNow) {
      desktopDescription.style.display = 'block';
      mobileDescription.style.display = 'none';
      heroPricing.style.display = 'flex';
    } else {
      desktopDescription.style.display = 'none';
      mobileDescription.style.display = 'block';
      heroPricing.style.display = 'none';
    }
  });

  // Кнопка "Shop With Discount"
  const buyButton = document.getElementById('buy-button');
  if (buyButton) {
    buyButton.addEventListener('click', () => {
      window.open(
        'https://www.aliexpress.com/item/1005007171465465.html',
        '_blank',
        'noopener,noreferrer'
      );
    });
  }

  // Кнопка "More details"
  const moreDetailsButton = document.getElementById('more-details-button');
  if (moreDetailsButton) {
    moreDetailsButton.addEventListener('click', e => {
      e.preventDefault();
      const featuresSection = document.getElementById('features');
      const header = document.querySelector('.header');

      if (featuresSection && header) {
        const headerHeight = header.offsetHeight;
        const elementPosition = featuresSection.getBoundingClientRect().top;
        const currentScrollY = window.scrollY || window.pageYOffset;
        const offsetPosition = elementPosition + currentScrollY - headerHeight;

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
    });
  }

  // Анимация появления контента
  if (heroContent) {
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
}
