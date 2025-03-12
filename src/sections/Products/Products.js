// Инициализатор секции Products
export function initProducts() {
  console.log('Products секция инициализирована');

  // Определяем базовый путь с учетом режима разработки/продакшн
  const isDevelopment = import.meta.env
    ? import.meta.env.MODE === 'development'
    : true;
  const basename = isDevelopment ? '/' : '/R36S_STORE_JS/';

  // Данные из constants/productData.js с исправленными путями
  const productImages = {
    i1: {
      jpg: `${basename}img/products/i_1_1x.jpg`,
      webp: `${basename}img/products/i_1_1x.webp`,
    },
    i2: {
      jpg: `${basename}img/products/i_2_1x.jpg`,
      webp: `${basename}img/products/i_2_1x.webp`,
    },
    i3: {
      jpg: `${basename}img/products/i_3_1x.jpg`,
      webp: `${basename}img/products/i_3_1x.webp`,
    },
    i4: {
      jpg: `${basename}img/products/i_4_1x.jpg`,
      webp: `${basename}img/products/i_4_1x.webp`,
    },
    i5: {
      jpg: `${basename}img/products/i_5_1x.jpg`,
      webp: `${basename}img/products/i_5_1x.webp`,
    },
    i6: {
      jpg: `${basename}img/products/i_6_1x.jpg`,
      webp: `${basename}img/products/i_6_1x.webp`,
    },
    i7: {
      jpg: `${basename}img/products/i_7_1x.jpg`,
      webp: `${basename}img/products/i_7_1x.webp`,
    },
    i8: {
      jpg: `${basename}img/products/i_8_1x.jpg`,
      webp: `${basename}img/products/i_8_1x.webp`,
    },
    i9: {
      jpg: `${basename}img/products/i_9_1x.jpg`,
      webp: `${basename}img/products/i_9_1x.webp`,
    },
    i10: {
      jpg: `${basename}img/products/i_10_1x.jpg`,
      webp: `${basename}img/products/i_10_1x.webp`,
    },
  };

  // Структура данных секций (остальной код без изменений)
  const sections = [
    {
      id: 'preparation',
      title: 'Preparation',
      content: {
        text: `Essential Guide: R36S Setup Instructions
        Note: These instructions are specifically for authentic R36S devices...`,
        images: {
          jpg: productImages.i1.jpg,
          webp: productImages.i1.webp,
        },
      },
    },
    {
      id: 'backup',
      title: 'Backing Up Original Firmware',
      content: {
        text: `Creating a Safety Backup...`,
        subsections: [
          {
            id: 'win32diskimager',
            title: 'Backup Process Using Win32DiskImager',
            content: {
              text: `Step 1: Configure Output Location...`,
              images: {
                jpg: productImages.i2.jpg,
                webp: productImages.i2.webp,
              },
            },
          },
        ],
      },
    },
    {
      id: 'flashing',
      title: 'Flashing Custom Firmware',
      content: {
        text: `SD Card Setup Guide...`,
        subsections: [
          {
            id: 'balena',
            title: 'Method 1: Using Balena Etcher',
            content: {
              text: `1. Start Balena Etcher...`,
              images: {
                jpg: productImages.i3.jpg,
                webp: productImages.i3.webp,
              },
            },
          },
          {
            id: 'win32',
            title: 'Method 2: Win32DiskImager Installation',
            content: {
              text: `1. Launch Win32DiskImager...`,
              images: {
                jpg: productImages.i4.jpg,
                webp: productImages.i4.webp,
              },
            },
          },
          {
            id: 'raspberry',
            title: 'Method 3: Raspberry Pi Imager Process',
            content: {
              text: `1. Open Raspberry Pi Imager...`,
              images: {
                jpg: productImages.i5.jpg,
                webp: productImages.i5.webp,
              },
            },
          },
        ],
      },
    },
    {
      id: 'firmware',
      title: 'Custom Firmware for R36S',
      content: {
        text: `Available Firmware Options for Your R36S...`,
        subsections: [
          {
            id: 'arkos',
            title: 'ArkOS - Community Enhanced Edition',
            content: {
              text: `Source: Find it on the ArkOS GitHub Project Page...`,
              images: {
                jpg: productImages.i6.jpg,
                webp: productImages.i6.webp,
              },
            },
          },
          {
            id: 'rocknix',
            title: 'ROCKNIX Operating System',
            content: {
              text: `Source: Official ROCKNIX GitHub...`,
              images: {
                jpg: productImages.i7.jpg,
                webp: productImages.i7.webp,
              },
            },
          },
          {
            id: 'amberelec',
            title: 'AmberELEC System',
            content: {
              text: `Source: AmberELEC GitHub Project...`,
              images: {
                jpg: productImages.i8.jpg,
                webp: productImages.i8.webp,
              },
            },
          },
        ],
      },
    },
    {
      id: 'roms',
      title: 'Setting Up ROMs and BIOS',
      content: {
        text: `Game Installation Guide...`,
        images: {
          jpg: productImages.i9.jpg,
          webp: productImages.i9.webp,
        },
      },
    },
    {
      id: 'tips',
      title: 'General Tips',
      content: {
        text: `Important System Operation Guidelines...`,
        images: {
          jpg: productImages.i10.jpg,
          webp: productImages.i10.webp,
        },
      },
    },
    {
      id: 'downloads',
      title: 'Available Downloads',
      content: {
        downloads: [
          {
            file: 'R36S_tg5040_20240413_v1.0.4_hotfix6.7z',
            date: '2024.04.13',
            version: 'v1.0.4',
          },
          {
            file: 'R36S_tg5040_20231222_v1.0.3.7z',
            date: '2023.12.22',
            version: 'v1.0.3',
          },
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

  let activeSection = 'downloads';
  let isMobile = false;

  // Получение DOM элементов
  const productsNavList = document.getElementById('products-nav-list');
  const productsSections = document.getElementById('products-sections');
  const nav = document.getElementById('products-nav');

  // Проверка на мобильное устройство
  function checkMobile() {
    isMobile = window.innerWidth <= 1024;
    if (nav) {
      if (isMobile) {
        nav.classList.add('nav-mobile');
      } else {
        nav.classList.remove('nav-mobile');
      }
    }
  }

  // Обработчик переключения между секциями
  function handleSectionClick(sectionId) {
    activeSection = sectionId;

    // Обновление активных классов в навигации
    const navItems = document.querySelectorAll('.nav-item');
    navItems.forEach(item => {
      if (item.dataset.sectionId === sectionId) {
        item.classList.add('nav-item-active');
      } else {
        item.classList.remove('nav-item-active');
      }
    });

    // Обновление видимости секций
    const sectionElements = document.querySelectorAll('.section');
    sectionElements.forEach(section => {
      if (section.id === sectionId) {
        section.classList.add('section-active');
      } else {
        section.classList.remove('section-active');
      }
    });

    // Прокрутка к активной секции с учетом мобильного устройства
    setTimeout(() => {
      const element = document.getElementById(sectionId);
      if (element) {
        const offset = isMobile ? 80 : 20; // Больший отступ для мобильных
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth',
        });
      }
    }, 100);
  }

  // Формирование HTML для меню навигации
  function renderNavigation() {
    productsNavList.innerHTML = '';

    sections.forEach(section => {
      const navItem = document.createElement('button');
      navItem.className = `nav-item ${
        activeSection === section.id ? 'nav-item-active' : ''
      }`;
      navItem.dataset.sectionId = section.id;
      navItem.innerHTML = `
        <svg class="nav-icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <polyline points="9 18 15 12 9 6"></polyline>
        </svg>
        <span>${section.title}</span>
      `;
      navItem.addEventListener('click', () => handleSectionClick(section.id));
      productsNavList.appendChild(navItem);
    });
  }

  // Формирование HTML для содержимого секции
  function renderSectionContent(section) {
    if (section.id === 'downloads') {
      let html = '<div class="download-list">';

      section.content.downloads.forEach(item => {
        html += `
          <div class="download-card">
            <div class="download-info">
              <svg class="download-icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                <polyline points="14 2 14 8 20 8"></polyline>
                <path d="M9 13h6"></path>
                <path d="M9 17h3"></path>
              </svg>
              <div>
                <div class="download-filename">${item.file}</div>
                <div class="download-meta">Update: ${item.date} • ${item.version}</div>
              </div>
            </div>
            <button class="download-button">
              <svg class="button-icon" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                <polyline points="7 10 12 15 17 10"></polyline>
                <line x1="12" y1="15" x2="12" y2="3"></line>
              </svg>
            </button>
          </div>
        `;
      });

      html += '</div>';
      return html;
    }

    let html = '<div class="section-content"><div class="text-content">';

    // Добавление текста с разбивкой на параграфы
    const paragraphs = section.content.text.split('\n');
    paragraphs.forEach(paragraph => {
      html += `<p>${paragraph.trim()}</p>`;
    });

    html += '</div>';

    // Добавление изображений если они есть
    if (section.content.images) {
      html += `
        <div class="image-container">
          <picture>
            <source srcset="${section.content.images.webp}" type="image/webp">
            <img src="${section.content.images.jpg}" alt="${section.title}" class="section-image" loading="lazy">
          </picture>
        </div>
      `;
    }

    // Добавление подразделов если они есть
    if (section.content.subsections) {
      html += '<div class="subsections">';

      section.content.subsections.forEach(subsection => {
        html += `
          <div class="subsection">
            <h3 class="subsection-title">${subsection.title}</h3>
            <div class="subsection-content">
              <div class="text-content">
        `;

        // Добавление текста подраздела
        const subParagraphs = subsection.content.text.split('\n');
        subParagraphs.forEach(paragraph => {
          html += `<p>${paragraph.trim()}</p>`;
        });

        html += '</div>';

        // Добавление изображений подраздела
        if (subsection.content.images) {
          html += `
            <div class="image-container">
              <picture>
                <source srcset="${subsection.content.images.webp}" type="image/webp">
                <img src="${subsection.content.images.jpg}" alt="${subsection.title}" class="subsection-image" loading="lazy">
              </picture>
            </div>
          `;
        }

        html += '</div></div>';
      });

      html += '</div>';
    }

    html += '</div>';
    return html;
  }

  // Формирование HTML для всех секций
  function renderSections() {
    productsSections.innerHTML = '';

    sections.forEach(section => {
      const sectionElement = document.createElement('section');
      sectionElement.id = section.id;
      sectionElement.className = `section ${
        activeSection === section.id ? 'section-active' : ''
      }`;

      sectionElement.innerHTML = `
        <h2 class="section-title">${section.title}</h2>
        ${renderSectionContent(section)}
      `;

      productsSections.appendChild(sectionElement);
    });
  }

  // Инициализация компонента
  function initialize() {
    checkMobile();
    renderNavigation();
    renderSections();

    // Добавление слушателя для изменения размера окна
    window.addEventListener('resize', checkMobile);

    console.log(
      'Products: Инициализация завершена. Используются пути к изображениям без /public/'
    );
  }

  // Запуск инициализации, если DOM элементы найдены
  if (productsNavList && productsSections && nav) {
    initialize();
  } else {
    console.error('Не найдены необходимые DOM элементы для секции Products');
  }

  // Возвращаем методы, которые могут быть полезны для внешнего использования
  return {
    handleSectionClick,
    checkMobile,
  };
}
