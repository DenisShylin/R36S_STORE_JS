// src/js/components/sections/products/Products.js
import { Component } from '../../../core/Component.js';

export class Products extends Component {
  constructor(container, props) {
    super(container, props);

    this.state = {
      activeSection: 'downloads',
      isMobile: window.innerWidth <= 1024,
    };

    // Привязываем методы к контексту
    this._handleSectionClick = this._handleSectionClick.bind(this);
    this._handleResize = this._handleResize.bind(this);
  }

  /**
   * Инициализирует данные секций
   */
  _initSections() {
    const { i18n } = this.props;
    const translate = key => i18n?.translate(key) || key;

    return [
      {
        id: 'preparation',
        title: translate('products.sections.preparation.title'),
        content: {
          text: translate('products.sections.preparation.text'),
          images: {
            jpg: '/img/products/i1.jpg',
            webp: '/img/products/i1.webp',
          },
        },
      },
      {
        id: 'backup',
        title: translate('products.sections.backup.title'),
        content: {
          text: translate('products.sections.backup.text'),
          subsections: [
            {
              id: 'win32diskimager',
              title: translate(
                'products.sections.backup.subsections.win32diskimager.title'
              ),
              content: {
                text: translate(
                  'products.sections.backup.subsections.win32diskimager.text'
                ),
                images: {
                  jpg: '/img/products/i2.jpg',
                  webp: '/img/products/i2.webp',
                },
              },
            },
          ],
        },
      },
      {
        id: 'flashing',
        title: translate('products.sections.flashing.title'),
        content: {
          text: translate('products.sections.flashing.text'),
          subsections: [
            {
              id: 'balena',
              title: translate(
                'products.sections.flashing.subsections.balena.title'
              ),
              content: {
                text: translate(
                  'products.sections.flashing.subsections.balena.text'
                ),
                images: {
                  jpg: '/img/products/i3.jpg',
                  webp: '/img/products/i3.webp',
                },
              },
            },
            {
              id: 'win32',
              title: translate(
                'products.sections.flashing.subsections.win32.title'
              ),
              content: {
                text: translate(
                  'products.sections.flashing.subsections.win32.text'
                ),
                images: {
                  jpg: '/img/products/i4.jpg',
                  webp: '/img/products/i4.webp',
                },
              },
            },
            {
              id: 'raspberry',
              title: translate(
                'products.sections.flashing.subsections.raspberry.title'
              ),
              content: {
                text: translate(
                  'products.sections.flashing.subsections.raspberry.text'
                ),
                images: {
                  jpg: '/img/products/i5.jpg',
                  webp: '/img/products/i5.webp',
                },
              },
            },
          ],
        },
      },
      {
        id: 'firmware',
        title: translate('products.sections.firmware.title'),
        content: {
          text: translate('products.sections.firmware.text'),
          subsections: [
            {
              id: 'arkos',
              title: translate(
                'products.sections.firmware.subsections.arkos.title'
              ),
              content: {
                text: translate(
                  'products.sections.firmware.subsections.arkos.text'
                ),
                images: {
                  jpg: '/img/products/i6.jpg',
                  webp: '/img/products/i6.webp',
                },
              },
            },
            {
              id: 'rocknix',
              title: translate(
                'products.sections.firmware.subsections.rocknix.title'
              ),
              content: {
                text: translate(
                  'products.sections.firmware.subsections.rocknix.text'
                ),
                images: {
                  jpg: '/img/products/i7.jpg',
                  webp: '/img/products/i7.webp',
                },
              },
            },
            {
              id: 'amberelec',
              title: translate(
                'products.sections.firmware.subsections.amberelec.title'
              ),
              content: {
                text: translate(
                  'products.sections.firmware.subsections.amberelec.text'
                ),
                images: {
                  jpg: '/img/products/i8.jpg',
                  webp: '/img/products/i8.webp',
                },
              },
            },
          ],
        },
      },
      {
        id: 'roms',
        title: translate('products.sections.roms.title'),
        content: {
          text: translate('products.sections.roms.text'),
          images: {
            jpg: '/img/products/i9.jpg',
            webp: '/img/products/i9.webp',
          },
        },
      },
      {
        id: 'tips',
        title: translate('products.sections.tips.title'),
        content: {
          text: translate('products.sections.tips.text'),
          images: {
            jpg: '/img/products/i10.jpg',
            webp: '/img/products/i10.webp',
          },
        },
      },
      {
        id: 'downloads',
        title: translate('products.sections.downloads.title'),
        content: {
          downloads: [
            {
              file: 'R36S_tg5040_20231116_1539_v1.0.2.7z',
              date: '2023.11.16',
              version: 'v1.0.2',
            },
            {
              file: 'R36S_tg5040_20231105_v1.0.0.7z',
              date: '2023.11.05',
              version: 'v1.0.0',
            },
          ],
        },
      },
    ];
  }

  /**
   * Рендерит компонент
   */
  render() {
    const { i18n } = this.props;
    const translate = key => i18n?.translate(key) || key;
    const { activeSection, isMobile } = this.state;

    const sections = this._initSections();

    return `
      <section class="guide" id="products">
        <div class="guide-background"></div>
        <div class="container">
          <div class="content">
            <nav class="${isMobile ? 'nav nav-mobile' : 'nav'}">
              <h2 class="nav-title" data-i18n="products.title">${translate(
                'products.title'
              )}</h2>
              <div class="nav-list">
                ${sections
                  .map(
                    ({ id, title }) => `
                  <button
                    class="nav-item ${
                      activeSection === id ? 'nav-item-active' : ''
                    }"
                    data-section-id="${id}"
                  >
                    <svg class="nav-icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                      <polyline points="9 18 15 12 9 6"></polyline>
                    </svg>
                    <span>${title}</span>
                  </button>
                `
                  )
                  .join('')}
              </div>
            </nav>

            <main class="main">
              <h1 class="title" data-i18n="products.title">${translate(
                'products.title'
              )}</h1>
              <div class="dynamic-sections">
                ${sections
                  .map(
                    section => `
                  <section
                    id="${section.id}"
                    class="section ${
                      activeSection === section.id ? 'section-active' : ''
                    }"
                  >
                    <h2 class="section-title">${section.title}</h2>
                    ${this._renderSectionContent(section)}
                  </section>
                `
                  )
                  .join('')}
              </div>
            </main>
          </div>
        </div>
      </section>
    `;
  }

  /**
   * Рендерит содержимое секции
   * @param {Object} section - Данные секции
   * @returns {string} HTML-разметка содержимого
   */
  _renderSectionContent(section) {
    // Если это секция загрузок
    if (section.id === 'downloads') {
      return `
        <div class="download-list">
          ${section.content.downloads
            .map(
              item => `
            <div class="download-card">
              <div class="download-info">
                <svg class="download-icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                  <polyline points="14 2 14 8 20 8"></polyline>
                  <line x1="16" y1="13" x2="8" y2="13"></line>
                  <line x1="16" y1="17" x2="8" y2="17"></line>
                  <polyline points="10 9 9 9 8 9"></polyline>
                </svg>
                <div>
                  <div class="download-filename">${item.file}</div>
                  <div class="download-meta">
                    Update: ${item.date} • ${item.version}
                  </div>
                </div>
              </div>
              <button class="download-button" data-file="${item.file}">
                <svg class="button-icon" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                  <polyline points="7 10 12 15 17 10"></polyline>
                  <line x1="12" y1="15" x2="12" y2="3"></line>
                </svg>
              </button>
            </div>
          `
            )
            .join('')}
        </div>
      `;
    }

    // Для обычных секций
    return `
      <div class="section-content">
        <div class="text-content">
          ${section.content.text
            .split('\n')
            .map(
              paragraph => `
            <p class="mb-4">${paragraph.trim()}</p>
          `
            )
            .join('')}
        </div>

        ${
          section.content.images
            ? `
          <div class="image-container">
            <picture>
              <source srcSet="${section.content.images.webp}" type="image/webp" />
              <img
                src="${section.content.images.jpg}"
                alt="${section.title}"
                class="section-image"
                loading="lazy"
              />
            </picture>
          </div>
        `
            : ''
        }

        ${
          section.content.subsections
            ? `
          <div class="subsections">
            ${section.content.subsections
              .map(
                subsection => `
              <div class="subsection">
                <h3 class="subsection-title">${subsection.title}</h3>
                <div class="subsection-content">
                  <div class="text-content">
                    ${subsection.content.text
                      .split('\n')
                      .map(
                        paragraph => `
                      <p class="mb-4">${paragraph.trim()}</p>
                    `
                      )
                      .join('')}
                  </div>
                  ${
                    subsection.content.images
                      ? `
                    <div class="image-container">
                      <picture>
                        <source srcSet="${subsection.content.images.webp}" type="image/webp" />
                        <img
                          src="${subsection.content.images.jpg}"
                          alt="${subsection.title}"
                          class="subsection-image"
                          loading="lazy"
                        />
                      </picture>
                    </div>
                  `
                      : ''
                  }
                </div>
              </div>
            `
              )
              .join('')}
          </div>
        `
            : ''
        }
      </div>
    `;
  }

  /**
   * Выполняет действия после рендеринга
   */
  afterRender() {
    // Добавляем обработчики для кнопок секций
    const sectionButtons = this.container.querySelectorAll('.nav-item');
    sectionButtons.forEach(button => {
      this.addEventListeners(button, 'click', () => {
        const sectionId = button.dataset.sectionId;
        this._handleSectionClick(sectionId);
      });
    });

    // Добавляем обработчики для кнопок загрузки
    const downloadButtons = this.container.querySelectorAll('.download-button');
    downloadButtons.forEach(button => {
      this.addEventListeners(button, 'click', () => {
        const file = button.dataset.file;
        this._handleDownload(file);
      });
    });

    // Добавляем обработчик изменения размера окна
    window.addEventListener('resize', this._handleResize);
  }

  /**
   * Обработчик клика по кнопке секции
   * @param {string} sectionId - ID секции
   */
  _handleSectionClick(sectionId) {
    // Обновляем активную секцию
    this.setState({ activeSection: sectionId });

    // Добавляем небольшую задержку для обновления DOM
    setTimeout(() => {
      const element = document.getElementById(sectionId);
      if (element) {
        const offset = this.state.isMobile ? 80 : 20; // Бóльший отступ для мобильных устройств
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.scrollY - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth',
        });
      }
    }, 100);
  }

  /**
   * Обработчик нажатия на кнопку загрузки
   * @param {string} file - Имя файла
   */
  _handleDownload(file) {
    // В реальном проекте здесь была бы логика загрузки файла
    // Для примера просто показываем сообщение
    alert(`Downloading file: ${file}`);
  }

  /**
   * Обработчик изменения размера окна
   */
  _handleResize() {
    const isMobile = window.innerWidth <= 1024;

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

    super.destroy();
  }
}
