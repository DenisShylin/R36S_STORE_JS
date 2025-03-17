// Фабричная функция для создания модального окна
export function createModalAbout(parentElement) {
  let modalElement = null;
  let feature = null;
  let isOpen = false;
  let currentImageIndex = 0;
  let colorImagesInterval = null;

  // Добавляем базовые стили для модального окна
  const addStyles = () => {
    const styleId = 'modal-about-styles';
    if (document.getElementById(styleId)) return;

    // Указываем ссылку на внешний CSS файл или используем встроенные стили
    // В реальном проекте лучше подключить внешний CSS
    const style = document.createElement('style');
    style.id = styleId;
    style.textContent = `
      .modal-about-overlay {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(15, 23, 42, 0.9);
        backdrop-filter: blur(8px);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 1000;
        padding: 30px;
        animation: modalAboutOverlayShow 0.3s ease;
      }

      .modal-about-content {
        background: linear-gradient(135deg,
                rgba(255, 255, 255, 0.05) 0%,
                rgba(255, 255, 255, 0.02) 100%);
        border: 1px solid rgba(255, 255, 255, 0.1);
        border-radius: 20px;
        width: 100%;
        max-width: 980px;
        max-height: 85vh;
        position: relative;
        animation: modalAboutShow 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        backdrop-filter: blur(12px);
        overflow: hidden;
        display: flex;
        flex-direction: column;
      }

      .modal-about-close {
        cursor: pointer;
        padding: 17px;
        display: flex;
        align-items: center;
        justify-content: center;
        position: absolute;
        top: 13px;
        right: 13px;
        background: transparent;
        border: none;
        border-radius: 50%;
        z-index: 1000;
        width: 41px;
        height: 41px;
        transition: all 0.3s ease;
        color: white;
      }

      .modal-about-header {
        padding: 26px;
        display: flex;
        align-items: center;
        gap: 17px;
        border-bottom: 1px solid rgba(255, 255, 255, 0.1);
      }

      .modal-about-icon-wrapper {
        width: 51px;
        height: 51px;
        background: rgba(37, 99, 235, 0.1);
        border-radius: 14px;
        display: flex;
        align-items: center;
        justify-content: center;
      }

      .modal-about-title {
        font-size: 20px;
        font-weight: 600;
        color: #fff;
        margin: 0;
      }

      .modal-about-body {
        padding: 26px;
        display: flex;
        flex-direction: row;
        gap: 30px;
        flex: 1;
      }

      .modal-about-media-container {
        width: 50%;
        flex-shrink: 0;
      }

      .modal-about-content-container {
        width: 50%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        overflow-y: auto;
        max-height: calc(85vh - 82px);
        padding-right: 10px;
      }

      .modal-about-stats {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 20px;
        padding: 17px;
        background: rgba(37, 99, 235, 0.1);
        border-radius: 14px;
        border: 1px solid rgba(96, 165, 250, 0.2);
        gap: 17px;
        flex-wrap: wrap;
      }

      .modal-about-description {
        color: #94A3B8;
        line-height: 1.8;
        font-size: 14px;
        white-space: pre-line;
      }

      @media (max-width: 768px) {
        .modal-about-content {
          max-width: 680px;
          max-height: 76.5vh;
          overflow-y: auto;
        }

        .modal-about-body {
          flex-direction: column;
          padding: 17px;
        }

        .modal-about-media-container,
        .modal-about-content-container {
          width: 100%;
        }

        .modal-about-content-container {
          overflow-y: visible;
          max-height: none;
          padding-right: 0;
        }
      }
    `;
    document.head.appendChild(style);
  };

  // Добавляем стили
  addStyles();

  // Обработчик клавиши Escape
  function handleEscPress(e) {
    if (e.key === 'Escape' && isOpen) {
      close();
    }
  }

  // Создание DOM элемента модального окна
  function createModalElement() {
    const modalDiv = document.createElement('div');
    modalDiv.className = 'modal-about-overlay';
    modalDiv.style.display = 'none';

    modalDiv.addEventListener('click', close);

    parentElement.appendChild(modalDiv);
    return modalDiv;
  }

  // Рендер медиа-контента (изображение, видео или карусель)
  function renderMedia() {
    if (!feature) return '';

    // Обработка карусели цветов
    if (feature.title === 'Extensive color selection' && feature.colorImages) {
      return `
        <img
          src="${feature.colorImages[currentImageIndex]}"
          alt="R36S Color Variant ${currentImageIndex + 1}"
          class="modal-about-image"
          onerror="this.onerror=null; this.src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgZmlsbD0iIzMzMyIvPjx0ZXh0IHg9IjUwJSIgeT0iNTAlIiBmb250LXNpemU9IjI0IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBhbGlnbm1lbnQtYmFzZWxpbmU9Im1pZGRsZSIgZmlsbD0iI2ZmZiI+Q29sb3IgVmFyaWFudCBJbWFnZTwvdGV4dD48L3N2Zz4=';"
        />
      `;
    }

    // Обработка видео
    if (feature.videoUrl) {
      return `
        <video
          class="modal-about-video"
          autoplay
          muted
          loop
          playsInline
          preload="auto"
          poster="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgZmlsbD0iIzMzMyIvPjx0ZXh0IHg9IjUwJSIgeT0iNTAlIiBmb250LXNpemU9IjI0IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBhbGlnbm1lbnQtYmFzZWxpbmU9Im1pZGRsZSIgZmlsbD0iI2ZmZiI+VmlkZW8gLSAke2ZlYXR1cmUuaW1hZ2VBbHR9PC90ZXh0Pjwvc3ZnPg=="
        >
          <source src="${feature.videoUrl}" type="video/mp4" />
          <p>Your browser does not support HTML5 video.</p>
        </video>
      `;
    }

    // Обработка статичного изображения
    return feature.imageUrl
      ? `
      <img
        src="${feature.imageUrl}"
        alt="${feature.imageAlt || 'Feature image'}"
        class="modal-about-image"
        onerror="this.onerror=null; this.src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgZmlsbD0iIzMzMyIvPjx0ZXh0IHg9IjUwJSIgeT0iNTAlIiBmb250LXNpemU9IjI0IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBhbGlnbm1lbnQtYmFzZWxpbmU9Im1pZGRsZSIgZmlsbD0iI2ZmZiI+SW1hZ2UgLSAke2ZlYXR1cmUuaW1hZ2VBbHR9PC90ZXh0Pjwvc3ZnPg==';"
      />
    `
      : `
      <div class="modal-about-image" style="background-color: #333; display: flex; align-items: center; justify-content: center; color: white; font-size: 18px;">
        ${feature.imageAlt || 'Feature Image'}
      </div>
    `;
  }

  // Настройка автоматической смены изображений цветов
  function setupColorImagesRotation() {
    if (feature?.title === 'Extensive color selection' && feature.colorImages) {
      // Очистка существующего интервала
      if (colorImagesInterval) {
        clearInterval(colorImagesInterval);
      }

      // Настройка нового интервала для смены изображений
      colorImagesInterval = setInterval(() => {
        currentImageIndex =
          currentImageIndex === feature.colorImages.length - 1
            ? 0
            : currentImageIndex + 1;

        // Обновление источника изображения
        const imageElement = modalElement.querySelector('.modal-about-image');
        if (imageElement) {
          imageElement.src = feature.colorImages[currentImageIndex];
          imageElement.alt = `R36S Color Variant ${currentImageIndex + 1}`;
        }
      }, 1000);
    }
  }

  // Обновление содержимого модального окна
  function updateModalContent() {
    if (!modalElement || !feature) return;

    modalElement.innerHTML = `
  <div class="modal-about-content">
    <button class="modal-about-close" aria-label="Close modal">
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <line x1="18" y1="6" x2="6" y2="18"></line>
        <line x1="6" y1="6" x2="18" y2="18"></line>
      </svg>
    </button>
    
    <div class="modal-about-header">
      <div class="modal-about-icon-wrapper">${feature.icon}</div>
      <h3 class="modal-about-title">${feature.title}</h3>
    </div>

        <div class="modal-about-body">
          <div class="modal-about-media-container">
            ${renderMedia()}
          </div>
          
          <div class="modal-about-content-container">
            <div class="modal-about-stats">
              <div class="modal-about-price-wrapper">
                <span class="modal-about-original-price">US $108.06</span>
                <span class="modal-about-current-price">
                  $35.48
                  <span style="font-size: 24px">US</span>
                </span>
              </div>

              <a
                href="https://www.aliexpress.com/item/1005007171465465.html"
                class="modal-about-button modal-about-button--primary"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span class="modal-about-button-pulse"></span>
                <span class="modal-about-button-text">BUY NOW -68%</span>
                <span class="modal-about-button-shine"></span>
              </a>
            </div>

            <div class="modal-about-description">
              ${feature.fullDescription}
            </div>
          </div>
        </div>
      </div>
    `;

    // Настройка кнопки закрытия
    const closeButton = modalElement.querySelector('.modal-about-close');
    if (closeButton) {
      closeButton.addEventListener('click', close);
    }

    // Обработка всплытия событий для контента модального окна
    const modalContent = modalElement.querySelector('.modal-about-content');
    if (modalContent) {
      modalContent.addEventListener('click', e => e.stopPropagation());
    }
  }

  // Открытие модального окна
  function open(featureData) {
    feature = featureData;

    if (!modalElement) {
      modalElement = createModalElement();
    }

    // Обновление содержимого модального окна
    updateModalContent();

    // Отображение модального окна
    modalElement.style.display = 'flex';
    isOpen = true;

    // Добавление обработчиков событий
    window.addEventListener('keydown', handleEscPress);
    document.body.style.overflow = 'hidden';

    // Настройка смены изображений цветов при необходимости
    setupColorImagesRotation();

    return { close };
  }

  // Закрытие модального окна
  function close() {
    if (!isOpen || !modalElement) return;

    isOpen = false;
    modalElement.style.display = 'none';

    // Удаление обработчиков событий
    window.removeEventListener('keydown', handleEscPress);
    document.body.style.overflow = 'visible';

    // Очистка интервала смены изображений
    if (colorImagesInterval) {
      clearInterval(colorImagesInterval);
      colorImagesInterval = null;
    }
  }

  // Уничтожение и очистка модального окна
  function destroy() {
    close();

    if (modalElement && parentElement.contains(modalElement)) {
      parentElement.removeChild(modalElement);
    }

    modalElement = null;
    feature = null;
  }

  // Возвращаем публичные методы
  return {
    open,
    close,
    destroy,
  };
}

// Экспорт по умолчанию для поддержки импорта
export default { createModalAbout };
