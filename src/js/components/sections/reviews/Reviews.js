// src/js/sections/reviews/Reviews.js
import { Component } from '../../../core/Component.js';

export class Reviews extends Component {
  constructor(container, props) {
    super(container, props);

    this.state = {
      animatedCards: [],
      hoveredCard: null,
      isMobile: window.innerWidth <= 1200,
    };

    // Привязываем методы к контексту
    this._handleReviewClick = this._handleReviewClick.bind(this);
    this._handleResize = this._handleResize.bind(this);
  }

  /**
   * Инициализирует данные отзывов
   */
  _initReviews() {
    return [
      {
        id: 1,
        rating: 5,
        color: 'Purple 64GB',
        author: 'AliExpress Shopper',
        date: '21 Aug 2024',
        text: "I just got my hands on the R36S retro console and it's seriously amazing for old-school gaming. The screen is super clear, it runs games smoothly, and battery life is solid. I love how I can load up my favorite classics and play anywhere.",
        images: {
          webp: '/img/reviews/review1.webp',
          jpeg: '/img/reviews/review1.jpg',
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
          webp: '/img/reviews/review4.webp',
          jpeg: '/img/reviews/review4.jpg',
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
          webp: '/img/reviews/review3.webp',
          jpeg: '/img/reviews/review3.jpg',
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
          webp: '/img/reviews/review2.webp',
          jpeg: '/img/reviews/review2.jpg',
        },
        helpful: 10,
        verified: true,
        mobileOnly: true,
      },
    ];
  }

  /**
   * Рендерит компонент
   */
  render() {
    const { i18n } = this.props;
    const translate = key => i18n?.translate(key) || key;

    const { isMobile, hoveredCard } = this.state;
    const reviews = this._initReviews();

    // Фильтруем отзывы в зависимости от размера экрана
    const displayedReviews = reviews.filter(
      review => !review.mobileOnly || (review.mobileOnly && isMobile)
    );

    return `
      <section class="reviews" id="reviews">
        <div class="reviews__container">
          <div class="reviews__header">
            <span class="reviews__label" data-i18n="reviews.label">${translate(
              'reviews.label'
            )}</span>
            <h2 class="reviews__title" data-i18n="reviews.title">${translate(
              'reviews.title'
            )}</h2>
          </div>

          <div class="reviews__grid">
            ${displayedReviews
              .map(
                review => `
              <div
                class="review-card ${
                  this.state.animatedCards.includes(review.id)
                    ? 'animate-in'
                    : ''
                } ${review.mobileOnly ? 'mobile-only' : ''}"
                data-id="${review.id}"
              >
                <div class="review-card__content">
                  <div class="review-card__header">
                    <div class="review-card__rating">
                      ${this._renderStars(review.rating)}
                    </div>
                    <span class="review-card__variant">${review.color}</span>
                  </div>

                  <p class="review-card__text">${review.text}</p>

                  <div class="review-card__image-wrapper">
                    <picture>
                      <source srcSet="${
                        review.images.webp
                      }" type="image/webp" />
                      <img
                        src="${review.images.jpeg}"
                        alt="Review ${review.id}"
                        class="review-card__image"
                        loading="lazy"
                      />
                    </picture>
                    ${
                      hoveredCard === review.id
                        ? this._renderAnimatedArrow()
                        : ''
                    }
                  </div>

                  <div class="review-card__footer">
                    <div class="review-card__author">
                      <span class="review-card__name">
                        ${
                          review.verified
                            ? `
                          <svg
                            class="review-card__verified"
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                          >
                            <path d="M20 6L9 17l-5-5" />
                          </svg>
                        `
                            : ''
                        }
                        ${review.author}
                      </span>
                      <span class="review-card__date">${review.date}</span>
                    </div>
                    <div class="review-card__helpful">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path d="M14 9V5a3 3 0 0 0-3-3L7 11v10h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3" />
                      </svg>
                      <span>Helpful (${review.helpful})</span>
                    </div>
                  </div>
                </div>
              </div>
            `
              )
              .join('')}
          </div>
        </div>
      </section>
    `;
  }

  /**
   * Рендерит звездочки рейтинга
   * @param {number} rating - Рейтинг (от 1 до 5)
   * @returns {string} HTML-разметка звездочек
   */
  _renderStars(rating) {
    let stars = '';

    for (let i = 0; i < 5; i++) {
      stars += `
        <svg
          class="review-card__star"
          viewBox="0 0 24 24"
          fill="${i < rating ? 'currentColor' : 'none'}"
          stroke="currentColor"
          strokeWidth="2"
        >
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
      `;
    }

    return stars;
  }

  /**
   * Рендерит анимированную стрелку
   * @returns {string} HTML-разметка стрелки
   */
  _renderAnimatedArrow() {
    return `
      <div class="review-card__arrow-wrapper">
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
          class="review-card__arrow"
        >
          <path d="M5 12h14M12 5l7 7-7 7" />
        </svg>
      </div>
    `;
  }

  /**
   * Выполняет действия после рендеринга
   */
  afterRender() {
    // Инициализируем IntersectionObserver для анимации
    this._setupIntersectionObserver();

    // Добавляем обработчики для карточек отзывов
    const cards = this.container.querySelectorAll('.review-card');
    cards.forEach(card => {
      // Обработчик наведения мыши
      this.addEventListeners(card, 'mouseenter', () => {
        const id = parseInt(card.dataset.id);
        this.setState({ hoveredCard: id });
      });

      this.addEventListeners(card, 'mouseleave', () => {
        this.setState({ hoveredCard: null });
      });

      // Обработчик клика для перехода на страницу отзывов
      this.addEventListeners(card, 'click', this._handleReviewClick);
    });

    // Добавляем обработчик изменения размера окна
    window.addEventListener('resize', this._handleResize);
  }

  /**
   * Настраивает IntersectionObserver для анимации
   */
  _setupIntersectionObserver() {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            // Получаем id карточки
            const id = parseInt(entry.target.dataset.id);

            // Добавляем id в массив анимированных карточек
            this.setState(prevState => ({
              animatedCards: [...prevState.animatedCards, id],
            }));

            // Прекращаем наблюдение за этой карточкой
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    // Начинаем наблюдение за карточками
    const cards = this.container.querySelectorAll('.review-card');
    cards.forEach(card => {
      observer.observe(card);
    });

    // Сохраняем observer для последующего удаления
    this._observer = observer;
  }

  /**
   * Обработчик клика по карточке отзыва
   */
  _handleReviewClick() {
    window.open(
      'https://www.aliexpress.com/item/1005007226123844.html#feedback',
      '_blank',
      'noopener,noreferrer'
    );
  }

  /**
   * Обработчик изменения размера окна
   */
  _handleResize() {
    const isMobile = window.innerWidth <= 1200;

    if (isMobile !== this.state.isMobile) {
      this.setState({ isMobile });
    }
  }

  /**
   * Уничтожает компонент и очищает ресурсы
   */
  destroy() {
    // Удаляем обработчик изменения размера окна
    window.removeEventListener('resize', this._handleResize);

    // Уничтожаем observer
    if (this._observer) {
      this._observer.disconnect();
    }

    super.destroy();
  }
}
