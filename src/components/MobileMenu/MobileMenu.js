import './MobileMenu.css';

export function initMobileMenu() {
  // Находим существующее мобильное меню
  const mobileMenu = document.querySelector('.mobile-menu');
  if (!mobileMenu) {
    console.error('Мобильное меню не найдено в DOM');
    return;
  }

  // Находим кнопку закрытия в меню
  const closeButton = mobileMenu.querySelector('.close-button');
  if (!closeButton) {
    console.error('Кнопка закрытия не найдена в мобильном меню');
    return;
  }

  // Добавляем обработчик события для кнопки закрытия
  closeButton.addEventListener('click', () => {
    closeMobileMenu();
  });

  // Функция закрытия мобильного меню
  function closeMobileMenu() {
    mobileMenu.classList.remove('open');
    // Сбрасываем состояние кнопки бургера
    const burgerLine = document.querySelector('.burger-line');
    if (burgerLine) burgerLine.classList.remove('open');
    // Восстанавливаем прокрутку
    document.body.style.overflow = 'unset';
    // Обновляем состояние хедера
    const header = document.querySelector('.header');
    if (header) header.classList.remove('menu-open');
    // Установим атрибут aria-expanded в false для кнопки бургера
    const burgerBtn = document.querySelector('.burger-btn');
    if (burgerBtn) burgerBtn.setAttribute('aria-expanded', 'false');
  }

  // Добавляем обработчики для всех ссылок меню для закрытия меню при клике
  const menuLinks = mobileMenu.querySelectorAll('.mobile-menu__link');
  menuLinks.forEach(link => {
    link.addEventListener('click', () => {
      // Небольшая задержка перед закрытием, чтобы пользователь видел эффект нажатия
      setTimeout(() => {
        closeMobileMenu();
      }, 150);
    });
  });

  // Добавляем обработчик клика на фон меню для закрытия
  const menuBackground = mobileMenu.querySelector('.mobile-menu__background');
  if (menuBackground) {
    menuBackground.addEventListener('click', () => {
      closeMobileMenu();
    });
  }

  // Добавляем анимацию появления иконок при открытии меню
  function setupIconAnimations() {
    const icons = mobileMenu.querySelectorAll('.mobile-menu__icon');
    icons.forEach((icon, index) => {
      // Устанавливаем начальную прозрачность и смещение
      icon.style.opacity = '0';
      icon.style.transform = 'translateX(-20px)';

      // Добавляем обработчик для анимации при открытии меню
      const observer = new MutationObserver(mutations => {
        mutations.forEach(mutation => {
          if (mutation.attributeName === 'class') {
            const isOpen = mobileMenu.classList.contains('open');
            if (isOpen) {
              // Анимируем появление иконок с задержкой для каждой следующей
              setTimeout(() => {
                icon.style.transition = 'all 0.4s ease';
                icon.style.opacity = '1';
                icon.style.transform = 'translateX(0)';
              }, 100 + index * 70);
            } else {
              // Сбрасываем стили при закрытии
              icon.style.opacity = '0';
              icon.style.transform = 'translateX(-20px)';
            }
          }
        });
      });

      observer.observe(mobileMenu, { attributes: true });
    });
  }

  // Запускаем настройку анимации
  setupIconAnimations();

  console.log('Мобильное меню с иконками инициализировано');
}
