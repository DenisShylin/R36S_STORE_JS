// Footer.js

export function initFooter() {
  console.log('Инициализация Footer');

  // Получаем элемент footer
  const footer = document.querySelector('.footer');

  if (!footer) {
    console.error('Элемент footer не найден');
    return;
  }

  // Находим кнопку Partnership и добавляем обработчик события
  const partnershipButton = footer.querySelector('.partnership-button');

  if (partnershipButton) {
    partnershipButton.addEventListener('click', () => {
      // Находим модальное окно
      const modalOverlay = document.querySelector('.partnership-modal-overlay');

      if (modalOverlay) {
        // Добавляем класс active для отображения модального окна
        modalOverlay.classList.add('active');

        // Находим контент модального окна и делаем его активным
        const modalContent = modalOverlay.querySelector(
          '.partnership-modal-content'
        );
        if (modalContent) {
          modalContent.classList.add('active');
        }

        // Запрещаем прокрутку body
        document.body.style.overflow = 'hidden';
      }
    });
  }

  // Инициализируем обработчики для модального окна
  initPartnershipModal();
}

function initPartnershipModal() {
  // Находим модальное окно и кнопку закрытия
  const modalOverlay = document.querySelector('.partnership-modal-overlay');

  if (!modalOverlay) {
    console.warn('Модальное окно не найдено');
    return;
  }

  // Находим кнопку закрытия
  const closeButton = modalOverlay.querySelector('.partnership-modal-close');

  if (closeButton) {
    closeButton.addEventListener('click', closeModal);
  }

  // Закрытие модального окна по клику на оверлей
  modalOverlay.addEventListener('click', event => {
    // Если клик был по оверлею, а не по контенту, закрываем модальное окно
    if (event.target === modalOverlay) {
      closeModal();
    }
  });

  // Закрытие модального окна по нажатию Escape
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && modalOverlay.classList.contains('active')) {
      closeModal();
    }
  });

  function closeModal() {
    const modalContent = modalOverlay.querySelector(
      '.partnership-modal-content'
    );

    // Убираем классы active
    modalOverlay.classList.remove('active');

    if (modalContent) {
      modalContent.classList.remove('active');
    }

    // Возвращаем прокрутку body
    document.body.style.overflow = '';
  }
}
