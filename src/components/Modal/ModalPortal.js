// ModalPortal.js - Модуль для работы с модальными окнами

// Создание корневого элемента для модальных окон
let modalRoot = document.getElementById('modal-root');
if (!modalRoot) {
  modalRoot = document.createElement('div');
  modalRoot.id = 'modal-root';
  document.body.appendChild(modalRoot);
}

// Состояние модальных окон
const modalState = {
  isOpen: false,
  activeModal: null,
  modalContent: null,
};

// Создание оверлея для модального окна
function createModalOverlay() {
  const overlay = document.createElement('div');
  overlay.className = 'modal-overlay';
  overlay.addEventListener('click', e => {
    if (e.target === overlay) {
      closeModal();
    }
  });
  return overlay;
}

// Создание контейнера модального окна
function createModalContainer() {
  const container = document.createElement('div');
  container.className = 'modal-container';
  return container;
}

// Открытие модального окна
export function openModal(content, options = {}) {
  if (modalState.isOpen) {
    closeModal();
  }

  // Создаем элементы модального окна
  const overlay = createModalOverlay();
  const container = createModalContainer();

  // Добавляем контент в контейнер
  if (typeof content === 'string') {
    container.innerHTML = content;
  } else if (content instanceof HTMLElement) {
    container.appendChild(content);
  } else {
    console.error('Неподдерживаемый тип контента для модального окна');
    return;
  }

  // Добавляем кнопку закрытия, если она нужна
  if (options.showCloseButton !== false) {
    const closeButton = document.createElement('button');
    closeButton.className = 'modal-close-button';
    closeButton.innerHTML = '&times;';
    closeButton.addEventListener('click', closeModal);
    container.appendChild(closeButton);
  }

  // Добавляем классы из опций
  if (options.className) {
    container.classList.add(options.className);
  }

  // Добавляем в DOM
  overlay.appendChild(container);
  modalRoot.appendChild(overlay);

  // Блокируем прокрутку страницы
  document.body.style.overflow = 'hidden';

  // Обновляем состояние
  modalState.isOpen = true;
  modalState.activeModal = overlay;
  modalState.modalContent = content;

  // Добавляем обработчик клавиши Escape
  document.addEventListener('keydown', handleEscapeKey);

  // Инициируем анимацию появления
  setTimeout(() => {
    overlay.classList.add('modal-overlay--visible');
    container.classList.add('modal-container--visible');
  }, 10);

  return {
    close: closeModal,
    updateContent: newContent => updateModalContent(container, newContent),
  };
}

// Закрытие модального окна
export function closeModal() {
  if (!modalState.isOpen || !modalState.activeModal) {
    return;
  }

  // Получаем элементы
  const overlay = modalState.activeModal;
  const container = overlay.querySelector('.modal-container');

  // Запускаем анимацию исчезновения
  overlay.classList.remove('modal-overlay--visible');
  container.classList.remove('modal-container--visible');

  // Удаляем обработчик клавиши Escape
  document.removeEventListener('keydown', handleEscapeKey);

  // Удаляем элементы из DOM после анимации
  setTimeout(() => {
    if (overlay.parentNode) {
      overlay.parentNode.removeChild(overlay);
    }

    // Восстанавливаем прокрутку страницы
    document.body.style.overflow = '';

    // Сбрасываем состояние
    modalState.isOpen = false;
    modalState.activeModal = null;
    modalState.modalContent = null;
  }, 300); // Длительность анимации
}

// Обновление контента модального окна
function updateModalContent(container, newContent) {
  // Очищаем контент
  const contentContainer =
    container.querySelector('.modal-content') || container;

  while (contentContainer.firstChild) {
    contentContainer.removeChild(contentContainer.firstChild);
  }

  // Добавляем новый контент
  if (typeof newContent === 'string') {
    contentContainer.innerHTML = newContent;
  } else if (newContent instanceof HTMLElement) {
    contentContainer.appendChild(newContent);
  }

  modalState.modalContent = newContent;
}

// Обработчик клавиши Escape
function handleEscapeKey(e) {
  if (e.key === 'Escape' && modalState.isOpen) {
    closeModal();
  }
}

// Инициализация модуля при загрузке страницы
export function initModal() {
  console.log('Модуль модальных окон инициализирован');

  // Добавление базовых стилей, если они не были добавлены через CSS-файл
  if (!document.querySelector('style[data-modal-styles]')) {
    const styleEl = document.createElement('style');
    styleEl.setAttribute('data-modal-styles', 'true');
    styleEl.textContent = `
      .modal-overlay {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: rgba(0, 0, 0, 0.5);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 1000;
        opacity: 0;
        transition: opacity 0.3s ease;
      }
      
      .modal-overlay--visible {
        opacity: 1;
      }
      
      .modal-container {
        background-color: #fff;
        border-radius: 8px;
        padding: 20px;
        max-width: 90%;
        max-height: 90vh;
        overflow-y: auto;
        transform: scale(0.8);
        transition: transform 0.3s ease;
        position: relative;
        box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
      }
      
      .modal-container--visible {
        transform: scale(1);
      }
      
      .modal-close-button {
        position: absolute;
        top: 10px;
        right: 10px;
        background: none;
        border: none;
        font-size: 24px;
        cursor: pointer;
        color: #999;
        transition: color 0.2s;
      }
      
      .modal-close-button:hover {
        color: #333;
      }
    `;
    document.head.appendChild(styleEl);
  }

  // Добавляем метод для глобального доступа (если необходимо)
  window.openModal = openModal;
  window.closeModal = closeModal;
}

// Добавляем обработчик загрузки DOM
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    if (!document.getElementById('modal-root')) {
      const modalRootEl = document.createElement('div');
      modalRootEl.id = 'modal-root';
      document.body.appendChild(modalRootEl);
    }
  });
} else if (!document.getElementById('modal-root')) {
  const modalRootEl = document.createElement('div');
  modalRootEl.id = 'modal-root';
  document.body.appendChild(modalRootEl);
}

// Экспортируем функции для использования в других модулях
export default { openModal, closeModal, initModal };
