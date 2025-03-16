// Функция для инициализации элегантного аккордеона FAQ
function initFaqAccordion() {
  // Находим все элементы аккордеона
  const accordionItems = document.querySelectorAll('.accordion__item');

  if (accordionItems.length === 0) {
    console.warn('FAQ аккордеон: элементы не найдены');
    return;
  }

  console.log(`FAQ аккордеон: найдено ${accordionItems.length} вопросов`);

  // Функция для плавного закрытия всех элементов аккордеона
  const closeAllItems = (exceptItem = null) => {
    accordionItems.forEach(item => {
      if (item !== exceptItem && item.classList.contains('active')) {
        item.classList.remove('active');
      }
    });
  };

  // Добавляем обработчики событий для каждого заголовка аккордеона
  accordionItems.forEach(item => {
    const header = item.querySelector('.accordion__header');
    const toggleBtn = item.querySelector('.accordion__toggle');
    const content = item.querySelector('.accordion__content');

    if (!header || !toggleBtn || !content) {
      console.warn('FAQ аккордеон: структура элемента неполная', item);
      return;
    }

    // Добавляем эффект пульсации к первому элементу для привлечения внимания
    if (item === accordionItems[0]) {
      setTimeout(() => {
        toggleBtn.classList.add('pulse');
        setTimeout(() => {
          toggleBtn.classList.remove('pulse');
        }, 1500);
      }, 1000);
    }

    // Обработчик клика по заголовку или кнопке
    const handleClick = e => {
      e.preventDefault();
      e.stopPropagation();

      // Анимируем кнопку
      toggleBtn.classList.add('clicked');
      setTimeout(() => toggleBtn.classList.remove('clicked'), 300);

      // Если элемент уже активен, просто закрываем его с анимацией
      if (item.classList.contains('active')) {
        item.classList.remove('active');
        return;
      }

      // Закрываем все элементы перед открытием нового
      closeAllItems(item);

      // Открываем текущий элемент
      item.classList.add('active');

      // Плавно прокручиваем к открытому элементу, если он не полностью видим
      const headerRect = header.getBoundingClientRect();
      const isHeaderVisible =
        headerRect.top >= 10 && headerRect.bottom <= window.innerHeight - 10;

      if (!isHeaderVisible) {
        setTimeout(() => {
          window.scrollTo({
            top: window.scrollY + headerRect.top - 100,
            behavior: 'smooth',
          });
        }, 100); // небольшая задержка для анимации
      }
    };

    // Устанавливаем обработчики для заголовка и кнопки
    header.addEventListener('click', handleClick);
    toggleBtn.addEventListener('click', e => {
      e.stopPropagation(); // Предотвращаем всплытие, чтобы не вызвать обработчик header
      handleClick(e);
    });

    // Для доступности добавляем атрибуты ARIA
    const questionId = `faq-question-${Math.random()
      .toString(36)
      .substring(2, 9)}`;
    const answerId = `faq-answer-${Math.random().toString(36).substring(2, 9)}`;

    header.setAttribute('id', questionId);
    header.setAttribute('aria-expanded', 'false');
    header.setAttribute('aria-controls', answerId);

    content.setAttribute('id', answerId);
    content.setAttribute('aria-labelledby', questionId);
    content.setAttribute('role', 'region');
    content.setAttribute('hidden', 'true');

    // Обновляем ARIA-атрибуты при изменении состояния
    const observer = new MutationObserver(mutations => {
      mutations.forEach(mutation => {
        if (
          mutation.type === 'attributes' &&
          mutation.attributeName === 'class'
        ) {
          const isActive = item.classList.contains('active');
          header.setAttribute('aria-expanded', isActive ? 'true' : 'false');

          if (isActive) {
            content.removeAttribute('hidden');
          } else {
            // Используем setTimeout, чтобы добавить hidden после завершения анимации
            setTimeout(() => {
              if (!item.classList.contains('active')) {
                content.setAttribute('hidden', 'true');
              }
            }, 500);
          }
        }
      });
    });

    observer.observe(item, { attributes: true });
  });

  // Улучшенная отзывчивость на клавиатуру для доступности
  const handleKeyboardNavigation = e => {
    if (e.key === 'Escape') {
      // Закрыть все элементы при нажатии Escape
      closeAllItems();
      return;
    }

    // Получаем активный элемент
    const activeItem = document.activeElement.closest('.accordion__item');
    if (!activeItem) return;

    const items = Array.from(accordionItems);
    const currentIndex = items.indexOf(activeItem);

    if (currentIndex === -1) return;

    let targetIndex;

    switch (e.key) {
      case 'ArrowDown':
        targetIndex = (currentIndex + 1) % items.length;
        break;
      case 'ArrowUp':
        targetIndex = (currentIndex - 1 + items.length) % items.length;
        break;
      case 'Home':
        targetIndex = 0;
        break;
      case 'End':
        targetIndex = items.length - 1;
        break;
      default:
        return;
    }

    const targetHeader = items[targetIndex].querySelector('.accordion__header');
    if (targetHeader) {
      targetHeader.focus();
      e.preventDefault();
    }
  };

  // Добавляем обработчик для навигации с клавиатуры
  document.addEventListener('keydown', handleKeyboardNavigation);

  console.log('FAQ аккордеон успешно инициализирован');

  return {
    openItem: index => {
      if (index >= 0 && index < accordionItems.length) {
        closeAllItems(accordionItems[index]);
        accordionItems[index].classList.add('active');
      }
    },
    closeAll: () => closeAllItems(),
  };
}

// Экспортируем функцию инициализации
export { initFaqAccordion };

// Если скрипт подключается напрямую без модульной системы
if (typeof window !== 'undefined') {
  // Инициализируем аккордеон при загрузке DOM
  document.addEventListener('DOMContentLoaded', () => {
    window.faqAccordeon = initFaqAccordion();
  });

  // Для совместимости с существующей структурой проекта
  window.initFaqAccordion = initFaqAccordion;
}
