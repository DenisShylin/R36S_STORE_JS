// src/js/sections/articles/Articles.js
import { Component } from '../../../core/Component.js';

export class Articles extends Component {
  constructor(container, props) {
    super(container, props);

    this.state = {
      animatedArticles: [],
    };

    // Ссылки на элементы
    this.articlesRef = [];
  }

  /**
   * Инициализирует данные статей
   */
  _initArticles() {
    const { i18n } = this.props;
    const translate = key => i18n?.translate(key) || key;

    return [
      {
        id: 1,
        title: translate('articles.global_expansion.title'),
        sections: [
          {
            subtitle: translate(
              'articles.global_expansion.sections.global_market.subtitle'
            ),
            content: translate(
              'articles.global_expansion.sections.global_market.content'
            ),
          },
          // Можно добавить больше секций при необходимости
        ],
      },
      {
        id: 2,
        title:
          translate('articles.revolutionizing_retro_gaming.title') ||
          'Revolutionizing Retro Gaming: The R36S Story',
        sections: [
          {
            subtitle:
              translate(
                'articles.revolutionizing_retro_gaming.sections.new_era.subtitle'
              ) || 'A New Era in Handheld Gaming',
            content:
              translate(
                'articles.revolutionizing_retro_gaming.sections.new_era.content'
              ) ||
              'Welcome to the world of R36S, where nostalgia meets innovation. The R36S handheld has quickly become a dominant force in English-speaking markets, captivating gamers from the United States to Australia.',
          },
          // Можно добавить больше секций при необходимости
        ],
      },
    ];
  }

  /**
   * Рендерит компонент
   */
  render() {
    const articles = this._initArticles();

    return `
      <section class="articles" id="articles">
        <div class="articles__container">
          <div class="articles__grid">
            ${articles
              .map(
                (article, index) => `
              <article class="article" data-article-id="${article.id}">
                <h2 class="article__title">${article.title}</h2>
                ${article.sections
                  .map(
                    (section, sectionIndex) => `
                  <div>
                    <h3 class="article__subtitle">${section.subtitle}</h3>
                    <div class="article__content">
                      <p>${section.content}</p>
                    </div>
                  </div>
                `
                  )
                  .join('')}
              </article>
            `
              )
              .join('')}
          </div>
        </div>
      </section>
    `;
  }

  /**
   * Выполняет действия после рендеринга
   */
  afterRender() {
    // Получаем все статьи
    this.articlesRef = Array.from(this.container.querySelectorAll('.article'));

    // Инициализируем IntersectionObserver для анимации
    this._setupIntersectionObserver();
  }

  /**
   * Настраивает IntersectionObserver для анимации
   */
  _setupIntersectionObserver() {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            // Получаем id статьи
            const id = parseInt(entry.target.dataset.articleId);

            // Добавляем класс для анимации
            entry.target.style.opacity = 1;
            entry.target.style.transform = 'translateY(0)';

            // Добавляем id в массив анимированных статей
            this.setState(prevState => ({
              animatedArticles: [...prevState.animatedArticles, id],
            }));

            // Прекращаем наблюдение за этой статьей
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    // Инициализируем стили для анимации
    this.articlesRef.forEach(article => {
      article.style.opacity = 0;
      article.style.transform = 'translateY(20px)';
      article.style.transition = 'all 0.6s ease-out';

      // Начинаем наблюдение за статьей
      observer.observe(article);
    });

    // Сохраняем observer для последующего удаления
    this._observer = observer;
  }

  /**
   * Уничтожает компонент и очищает ресурсы
   */
  destroy() {
    // Уничтожаем observer
    if (this._observer) {
      this._observer.disconnect();
    }

    super.destroy();
  }
}
