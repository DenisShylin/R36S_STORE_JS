// Импорт модального окна
import { createModalAbout } from './ModalAbout/ModalAbout.js';

// Прямые импорты медиафайлов
import displayControls from '/public/video/about/video_1_.gif';
import videoGif from '/public/video/about/video_2_.gif';
import untitled1 from '/public/img/about/Untitled_1_1x.jpg';
import untitled2 from '/public/img/about/Untitled_2_1x.jpg';
import untitled3 from '/public/img/about/Untitled_3_1x.jpg';
import untitled4 from '/public/img/about/Untitled_4_1x.jpg';

// Import videos
import videoBattery from '/public/video/about/video_3_batrey_.MP4';
import videoModa6 from '/public/video/about/video_6_.MP4';
import videoOption2 from '/public/video/about/video_5_option_.MP4';

// Функция инициализации секции About
export function initAbout() {
  console.log('Инициализация секции About');

  // Получаем контейнер для карточек
  const cardsContainer = document.querySelector('.about__cards');
  if (!cardsContainer) {
    console.error('Контейнер для карточек не найден');
    return;
  }

  let activeCard = null;
  let mousePosition = { x: 0, y: 0 };
  let selectedFeature = null;
  let modalInstance = null;

  // Данные функций - с URL к медиафайлам
  const features = [
    {
      id: 1,
      icon: `
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="about-card__icon"
          width="44"
          height="44"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
        >
          <line x1="6" y1="12" x2="10" y2="12"></line>
          <line x1="8" y1="10" x2="8" y2="14"></line>
          <line x1="15" y1="13" x2="15.01" y2="13"></line>
          <line x1="18" y1="11" x2="18.01" y2="11"></line>
          <rect x="2" y="6" width="20" height="12" rx="2"></rect>
        </svg>
      `,
      title: 'Retro Game Collection',
      description: 'Get into the game with the r36s portable gaming console.',
      number: '15K+',
      detail: 'classic games',
      fullDescription: `Discover a rich collection of classic games, including over 15,000 titles from different eras. From iconic arcade games to beloved console games, our library spans every significant platform of the past.

The collection includes:
• Classic arcade games from the 80s and 90s
• Complete libraries of NES, SNES, Sega and other consoles
• Exclusive ports and rare releases
• Optimized versions for modern hardware`,
      imageUrl: displayControls,
      imageAlt: 'Коллекция ретро-игр',
    },
    {
      id: 2,
      icon: `
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="about-card__icon"
          width="44"
          height="44"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
        >
          <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
          <line x1="8" y1="21" x2="16" y2="21"></line>
          <line x1="12" y1="17" x2="12" y2="21"></line>
        </svg>
      `,
      title: 'Vibrant Display Technologies',
      description:
        'Enjoy vivid games on the 3.5* LCD display with crisp 640x480 resolution.',
      number: '3.5"',
      detail: 'IPS display',
      fullDescription: `R36S Console Display Specifications:
• 3.5-inch IPS display
• 640x480 resolution
• High brightness and contrast
• Wide viewing angles
• Anti-glare coating
• Energy-efficient backlight
• Scratch-resistant surface`,
      imageUrl: videoGif,
      imageAlt: 'Display Technologies',
    },
    {
      id: 3,
      icon: `
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="about-card__icon"
          width="44"
          height="44"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
        >
          <rect x="2" y="7" width="16" height="10" rx="2" ry="2"></rect>
          <line x1="22" y1="11" x2="22" y2="13"></line>
        </svg>
      `,
      title: 'Powerful battery',
      description: 'Enjoy up to 7-8 hours of continuous gaming with the R36S.',
      number: '7-8',
      detail: 'hours of play',
      fullDescription: `**Powerful 3200 mAh Battery**

Experience up to 7-8 hours of extended gaming with the R36S. The high-capacity 3200 mAh battery powers its crisp 3.5-inch IPS display (640x480 resolution), delivering an immersive gaming experience without frequent charging.

Key features:
- Long-lasting gameplay 
- Full-screen IPS display
- Portable design
- Uninterrupted entertainment

Take your gaming anywhere – play more, charge less.`,
      videoUrl: videoBattery,
      imageAlt: 'Battery Life',
    },
    {
      id: 4,
      icon: `
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="about-card__icon"
          width="44"
          height="44"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
        >
          <circle cx="12" cy="12" r="10"></circle>
          <circle cx="12" cy="12" r="6"></circle>
          <circle cx="12" cy="12" r="2"></circle>
        </svg>
      `,
      title: 'Extensive color selection',
      description: 'Experience our wide selection of stunning console colors.',
      number: '10+',
      detail: 'COLORS',
      fullDescription: `Experience the R36S Collection:

The R36S console delivers 12+ captivating color variations in 2024, including our signature Midnight Black and eye-catching Galactic Purple. Each R36S model features recycled plastic finish and scratch-resistant coating.

Available Colors:
- Classic Black
- Vibrant Orange
- Mesmerizing Purple
- Dynamic Red
- Pure White
- Radiant Yellow ...`,
      colorImages: [untitled1, untitled2, untitled3, untitled4],
      imageAlt: 'R36S Color Variants',
    },
    {
      id: 5,
      icon: `
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="about-card__icon"
          width="44"
          height="44"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
        >
          <circle cx="12" cy="12" r="3"></circle>
          <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
        </svg>
      `,
      title: 'Extensive settings',
      description:
        'Customize controls, brightness, sound and settings for maximum comfort',
      number: '30+',
      detail: 'settings',
      fullDescription: `Features & Connectivity:

- Connect to external displays via OTG for large-screen gaming
- Compatible with modern gaming controllers and gamepads
- Multi-language interface support
- Customizable control schemes and button mapping
- Advanced display settings with adjustable brightness and contrast
- Audio optimization with multiple sound profiles
- Screen mirroring capability
- Low latency connection for seamless gameplay
- Expandable storage support
- Quick system updates
- User-friendly interface`,
      videoUrl: videoOption2,
      imageAlt: 'R36S Settings',
    },
    {
      id: 6,
      icon: `
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="about-card__icon"
          width="44"
          height="44"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
        >
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
          <circle cx="9" cy="7" r="4"></circle>
          <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
          <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
        </svg>
      `,
      title: 'Maximum portability',
      description:
        'Portable console with removable battery for gaming on the go.',
      number: 'Ultra',
      detail: 'Portable',
      fullDescription: `Whether commuting, traveling, or taking a quick break, the R36S is ready for instant entertainment. Its durable design and protected screen ensure worry-free portability, while the long-lasting battery keeps you gaming on the go.

Features:
• Pocket-sized dimensions for ultimate portability
• Rugged construction for daily carry
• Ergonomic grip for extended gaming sessions
• Quick startup for instant gaming access

Never compromise between portability and performance - the R36S delivers both in a perfectly portable package.`,
      videoUrl: videoModa6,
      imageAlt: 'R36S Portability',
    },
  ];

  // Рендерим карточки
  function renderCards() {
    cardsContainer.innerHTML = features
      .map(
        feature => `
      <div class="about-card" data-id="${feature.id}">
        <div class="card-blur"></div>
        <div class="card-glow"></div>
        <div class="about-card__content">
          <div class="about-card__icon-wrapper">${feature.icon}</div>
          <h3 class="about-card__title">${feature.title}</h3>
          <p class="about-card__description">${feature.description}</p>
          <div class="about-card__stats">
            <span class="about-card__number">${feature.number}</span>
            <span class="about-card__detail">${feature.detail}</span>
          </div>
          <button class="about-card__button" data-feature-id="${feature.id}">
            <span class="button-text">More details</span>
            <span class="button-icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </span>
          </button>
        </div>
        <div class="card-indicator"></div>
      </div>
    `
      )
      .join('');
  }

  // Обработчик движения мыши
  function handleMouseMove(e) {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();

    mousePosition = {
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    };

    card.style.setProperty('--mouse-x', `${mousePosition.x}px`);
    card.style.setProperty('--mouse-y', `${mousePosition.y}px`);
  }

  // Обработчик клика на кнопку "More details"
  function handleButtonClick(e) {
    const featureId = parseInt(e.currentTarget.dataset.featureId);
    console.log('Клик по кнопке карточки ID:', featureId);

    const feature = features.find(f => f.id === featureId);
    if (!feature) {
      console.error('Данные для карточки не найдены');
      return;
    }

    // Создаем модальное окно если оно еще не создано
    if (!modalInstance) {
      modalInstance = createModalAbout(document.body);
    }

    // Открываем модальное окно
    modalInstance.open(feature);
  }

  // Установка обработчиков событий для карточек
  function setupCardEvents() {
    const cards = document.querySelectorAll('.about-card');

    cards.forEach(card => {
      // Обработчики для эффекта свечения
      card.addEventListener('mouseenter', () => {
        activeCard = parseInt(card.dataset.id);
        card.classList.add('active');
      });

      card.addEventListener('mouseleave', () => {
        activeCard = null;
        card.classList.remove('active');
      });

      card.addEventListener('mousemove', handleMouseMove);
    });

    // Прямой обработчик для кнопок
    document.querySelectorAll('.about-card__button').forEach(button => {
      button.addEventListener('click', handleButtonClick);
    });
  }

  // Очистка обработчиков событий
  function cleanupEvents() {
    const cards = document.querySelectorAll('.about-card');

    cards.forEach(card => {
      card.removeEventListener('mouseenter', () => {});
      card.removeEventListener('mouseleave', () => {});
      card.removeEventListener('mousemove', handleMouseMove);
    });

    document.querySelectorAll('.about-card__button').forEach(button => {
      button.removeEventListener('click', handleButtonClick);
    });

    if (modalInstance) {
      modalInstance.destroy();
      modalInstance = null;
    }
  }

  // Инициализация секции
  try {
    console.log('Рендерим карточки...');
    renderCards();
    console.log('Устанавливаем обработчики событий...');
    setupCardEvents();
    console.log('Инициализация About завершена успешно');
  } catch (error) {
    console.error('Ошибка при инициализации About:', error);
  }

  // Возвращаем функцию очистки
  return {
    cleanup: cleanupEvents,
  };
}

// Экспортируем инициализатор по умолчанию для поддержки импорта
export default { initAbout };
