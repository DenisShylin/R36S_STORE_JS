// Reviews.js - Исправленный скрипт для секции отзывов

// Функция инициализации секции отзывов
export function initReviews() {
  // Получаем базовый путь для корректных URL изображений
  const isDevelopment = import.meta.env?.MODE === 'development';
  const basename = isDevelopment ? '/' : '/R36S_STORE_JS/';

  // Константа для определения мобильного устройства
  const MOBILE_BREAKPOINT = 1200;

  // Путь к изображениям отзывов (оставляем оригинальные пути)
  const reviewImages = {
    review1: {
      webp: `${basename}img/reviews/imm_1_1x.webp`,
      jpg: `${basename}img/reviews/imm_1_1x.jpg`,
    },
    review2: {
      webp: `${basename}img/reviews/imm_2_1x.webp`,
      jpg: `${basename}img/reviews/imm_2_1x.jpg`,
    },
    review3: {
      webp: `${basename}img/reviews/imm_3_1x.webp`,
      jpg: `${basename}img/reviews/imm_3_1x.jpg`,
    },
    review4: {
      webp: `${basename}img/reviews/imm_4_1x.webp`,
      jpg: `${basename}img/reviews/imm_4_1x.jpg`,
    },
  };

  // Данные отзывов (оставляем оригинальные данные)
  const reviews = [
    {
      id: 1,
      rating: 5,
      color: 'Purple 64GB',
      author: 'AliExpress Shopper',
      date: '21 Aug 2024',
      text: "I just got my hands on the R36S retro console and it's seriously amazing for old-school gaming. The screen is super clear, it runs games smoothly, and battery life is solid. I love how I can load up my favorite classics and play...",
      images: {
        webp: reviewImages.review1.webp,
        jpeg: reviewImages.review1.jpg,
      },
      helpful: 12,
      verified: true,
    },
    {
      id: 2,
      rating: 5,
      color: 'Yellow 128G',
      author: 'V***h',
      date: '26 Aug 2024',
      text: "After playing with the R36S for a week, I'm really impressed and absolutely delighted. The build quality feels great, and switching between different retro games is super easy. The controls are comfortable for long gaming sessions.",
      images: {
        webp: reviewImages.review4.webp,
        jpeg: reviewImages.review4.jpg,
      },
      helpful: 8,
      verified: true,
    },
    {
      id: 3,
      rating: 5,
      color: 'White 64GB',
      author: 'M***z',
      date: '22 Aug 2024',
      text: "The R36S has become my go-to gaming device. I wasn't sure about buying another retro console, but this one surprised me. The screen is bright and sharp, games run without issues, and it's small enough to fit in my pocket.",
      images: {
        webp: reviewImages.review3.webp,
        jpeg: reviewImages.review3.jpg,
      },
      helpful: 15,
      verified: true,
    },
    {
      id: 4,
      rating: 5,
      color: 'Black 128GB',
      author: 'K***r',
      date: '28 Aug 2024',
      text: "I've been using the R36S for a few weeks now, and I'm genuinely impressed. The 3.5-inch IPS screen delivers crisp visuals, and the build quality feels solid. The dual analog sticks are responsive, making retro gaming a joy.",
      images: {
        webp: reviewImages.review2.webp,
        jpeg: reviewImages.review2.jpg,
      },
      helpful: 10,
      verified: true,
      mobileOnly: true,
    },
  ];

  // Отслеживаем карточки, которые уже были анимированы
  const animatedCards = new Set();

  // Переменная для отслеживания текущего hoveredCard
  let hoveredCardId = null;

  // Отслеживаем ширину экрана для проверки мобильных устройств
  let isMobile = window.innerWidth <= MOBILE_BREAKPOINT;

  // Функция создания иконки звезды для рейтинга
  function createStarIcon(filled = false) {
    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svg.classList.add('review-card__star');
    svg.setAttribute('viewBox', '0 0 24 24');
    svg.setAttribute('fill', filled ? 'currentColor' : 'none');
    svg.setAttribute('stroke', 'currentColor');
    svg.setAttribute('stroke-width', '2');

    const polygon = document.createElementNS(
      'http://www.w3.org/2000/svg',
      'polygon'
    );
    polygon.setAttribute(
      'points',
      '12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2'
    );
    svg.appendChild(polygon);

    return svg;
  }

  // Функция создания иконки "verified"
  function createVerifiedIcon() {
    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svg.classList.add('review-card__verified');
    svg.setAttribute('width', '16');
    svg.setAttribute('height', '16');
    svg.setAttribute('viewBox', '0 0 24 24');
    svg.setAttribute('fill', 'none');
    svg.setAttribute('stroke', 'currentColor');
    svg.setAttribute('stroke-width', '2');

    const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    path.setAttribute('d', 'M20 6L9 17l-5-5');
    svg.appendChild(path);

    return svg;
  }

  // Создаем карточку отзыва из шаблона
  function createReviewCard(review) {
    const template = document.getElementById('reviewCardTemplate');
    if (!template) {
      console.error('Шаблон карточки отзыва не найден');
      return null;
    }

    const card = template.content.cloneNode(true).querySelector('.review-card');

    // Устанавливаем ID
    card.dataset.id = review.id;

    // Добавляем класс для мобильных устройств, если нужно
    if (review.mobileOnly) {
      card.classList.add('mobile-only');
      if (!isMobile) {
        card.style.display = 'none';
      }
    }

    // Рейтинг
    const ratingContainer = card.querySelector('.review-card__rating');
    for (let i = 0; i < 5; i++) {
      ratingContainer.appendChild(createStarIcon(i < review.rating));
    }

    // Цвет/вариант
    card.querySelector('.review-card__variant').textContent = review.color;

    // Текст отзыва
    card.querySelector('.review-card__text').textContent = review.text;

    // Изображения
    const picture = card.querySelector('picture');
    picture.querySelector('source').setAttribute('srcset', review.images.webp);
    const img = picture.querySelector('img');
    img.setAttribute('src', review.images.jpeg);
    img.setAttribute('alt', `Review ${review.id}`);

    // Информация об авторе
    const nameElement = card.querySelector('.review-card__name');
    if (review.verified) {
      nameElement.prepend(createVerifiedIcon());
    }
    nameElement.appendChild(document.createTextNode(review.author));

    // Дата
    card.querySelector('.review-card__date').textContent = review.date;

    // Счетчик "Helpful"
    card.querySelector(
      '.review-card__helpful-count'
    ).textContent = `Helpful (${review.helpful})`;

    // Обработчики событий
    card.addEventListener('click', handleReviewClick);
    card.addEventListener('mouseenter', () => handleMouseEnter(review.id));
    card.addEventListener('mouseleave', handleMouseLeave);

    // Обработчики для кнопки "Helpful"
    const helpfulButton = card.querySelector('.review-card__helpful');
    helpfulButton.addEventListener('mouseenter', () => {
      helpfulButton.querySelector('svg').setAttribute('fill', 'currentColor');
      helpfulButton.querySelector('svg').classList.add('scale-125');
      helpfulButton.querySelector('svg').classList.remove('scale-100');
    });

    helpfulButton.addEventListener('mouseleave', () => {
      helpfulButton.querySelector('svg').setAttribute('fill', 'none');
      helpfulButton.querySelector('svg').classList.remove('scale-125');
      helpfulButton.querySelector('svg').classList.add('scale-100');
    });

    return card;
  }

  // Обработчик клика по карточке отзыва
  function handleReviewClick() {
    window.open(
      'https://www.aliexpress.com/item/1005007226123844.html#feedback',
      '_blank',
      'noopener,noreferrer'
    );
  }

  // Обработчик наведения на карточку
  function handleMouseEnter(id) {
    hoveredCardId = id;
    const card = document.querySelector(`.review-card[data-id="${id}"]`);
    if (card) {
      const arrow = card.querySelector('.review-card__arrow-wrapper');
      if (arrow) {
        arrow.style.display = 'flex';
      }
    }
  }

  // Обработчик ухода курсора с карточки
  function handleMouseLeave() {
    const card = document.querySelector(
      `.review-card[data-id="${hoveredCardId}"]`
    );
    if (card) {
      const arrow = card.querySelector('.review-card__arrow-wrapper');
      if (arrow) {
        arrow.style.display = 'none';
      }
    }
    hoveredCardId = null;
  }

  // Отображение карточек отзывов
  function renderReviewCards() {
    const grid = document.getElementById('reviewsGrid');
    if (!grid) {
      console.error('Контейнер для отзывов не найден');
      return;
    }

    // Сохраняем шаблон перед манипуляциями
    const template = document.getElementById('reviewCardTemplate');

    // Вместо полной очистки, обновляем только необходимое
    // Проверяем, какие карточки уже существуют
    const existingCards = {};
    grid.querySelectorAll('.review-card').forEach(card => {
      if (card.dataset.id) {
        existingCards[card.dataset.id] = card;
      }
    });

    // Фильтруем отзывы для текущего размера экрана
    const displayedReviews = reviews.filter(
      review => !review.mobileOnly || (review.mobileOnly && isMobile)
    );

    // Создаем массив для хранения порядка карточек
    const cardsToDisplay = [];

    // Обрабатываем каждый отзыв
    displayedReviews.forEach(review => {
      // Проверяем, существует ли уже карточка
      if (existingCards[review.id]) {
        // Если карточка существует, обновляем ее видимость
        const card = existingCards[review.id];
        card.style.display = 'block';
        cardsToDisplay.push(card);
        delete existingCards[review.id]; // Удаляем из списка существующих
      } else {
        // Если карточки нет, создаем новую
        const card = createReviewCard(review);
        if (card) {
          cardsToDisplay.push(card);
        }
      }
    });

    // Скрываем карточки, которые больше не нужны (например, мобильные при переходе на десктоп)
    Object.values(existingCards).forEach(card => {
      if (card !== template) {
        card.style.display = 'none';
      }
    });

    // Очищаем сетку, сохраняя шаблон
    grid.innerHTML = '';
    grid.appendChild(template);

    // Добавляем все карточки в правильном порядке
    cardsToDisplay.forEach(card => {
      grid.appendChild(card);
    });

    // Запускаем наблюдение за видимостью карточек
    observeReviewCards();
  }

  // Наблюдение за видимостью карточек для анимации
  function observeReviewCards() {
    if (!('IntersectionObserver' in window)) {
      console.warn('IntersectionObserver не поддерживается в этом браузере');
      document.querySelectorAll('.review-card').forEach(card => {
        card.classList.add('animate-in');
      });
      return;
    }

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const id = entry.target.dataset.id;
            if (!animatedCards.has(id)) {
              entry.target.classList.add('animate-in');
              animatedCards.add(id);
            }
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('.review-card').forEach(card => {
      observer.observe(card);
    });
  }

  // Обработка изменения размера окна
  function handleResize() {
    const newIsMobile = window.innerWidth <= MOBILE_BREAKPOINT;

    // Обновляем значение флага мобильного устройства
    isMobile = newIsMobile;

    // Обновляем отображение карточек (всегда вызываем для стабильности)
    renderReviewCards();

    // Обновляем видимость мобильных карточек напрямую для большей стабильности
    document.querySelectorAll('.review-card').forEach(card => {
      if (card.classList.contains('mobile-only')) {
        card.style.display = isMobile ? 'block' : 'none';
      }
    });
  }

  // Инициализация
  function init() {
    // Вызываем первичный рендеринг
    renderReviewCards();

    // Добавляем обработчик изменения размера окна с задержкой (debounce)
    let resizeTimeout;
    const debouncedResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(handleResize, 250);
    };

    window.addEventListener('resize', debouncedResize);

    // Добавляем стили для анимации появления карточек
    const style = document.createElement('style');
    style.textContent = `
      .review-card {
        opacity: 0;
        transform: translateY(30px);
        transition: opacity 0.6s ease, transform 0.6s ease;
      }
      .review-card.animate-in {
        opacity: 1;
        transform: translateY(0);
      }
    `;
    document.head.appendChild(style);

    // Запускаем обработчик сразу после загрузки для правильной инициализации
    setTimeout(handleResize, 100);

    // Добавляем базовую микроразметку для SEO (минимальное добавление)
    const reviewsSection = document.getElementById('reviews');
    if (reviewsSection && !reviewsSection.hasAttribute('itemscope')) {
      reviewsSection.setAttribute('itemscope', '');
      reviewsSection.setAttribute('itemtype', 'http://schema.org/Product');

      // Добавляем только основные метатеги
      const metaName = document.createElement('meta');
      metaName.setAttribute('itemprop', 'name');
      metaName.setAttribute('content', 'R36S Handheld Game Console');
      reviewsSection.prepend(metaName);

      const metaDesc = document.createElement('meta');
      metaDesc.setAttribute('itemprop', 'description');
      metaDesc.setAttribute(
        'content',
        'R36S Handheld Game Console with 3.5-inch IPS screen and retro games'
      );
      reviewsSection.prepend(metaDesc);
    }
  }

  // Запускаем инициализацию
  init();

  // Функция очистки (удаление слушателей событий, наблюдателей и т.д.)
  function cleanup() {
    // Удаляем обработчик изменения размера окна
    window.removeEventListener('resize', handleResize);
    window.removeEventListener('resize', () => {}); // Удаляем также debounced версию

    // Если есть активный IntersectionObserver, отключаем его
    if ('IntersectionObserver' in window) {
      const observers = [];
      const observer = new IntersectionObserver(() => {});
      observer.disconnect();
      observers.forEach(obs => obs.disconnect());
    }

    // Удаляем обработчики событий с карточек
    document.querySelectorAll('.review-card').forEach(card => {
      card.removeEventListener('click', handleReviewClick);
      card.removeEventListener('mouseenter', () => {}); // Общий обработчик
      card.removeEventListener('mouseleave', handleMouseLeave);

      // Удаляем персональные обработчики mouseenter
      Object.keys(reviews).forEach(id => {
        card.removeEventListener('mouseenter', () => handleMouseEnter(id));
      });

      const helpfulButton = card.querySelector('.review-card__helpful');
      if (helpfulButton) {
        helpfulButton.removeEventListener('mouseenter', () => {});
        helpfulButton.removeEventListener('mouseleave', () => {});
      }
    });

    // Сообщаем о завершении очистки
    console.log('Reviews section cleanup completed');
  }

  // Возвращаем методы, которые могут понадобиться снаружи
  return {
    cleanup,
    renderReviewCards,
  };
}
