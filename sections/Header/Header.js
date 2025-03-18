// Инициализация событий для хедера
export function initHeader() {
  let isMenuOpen = false;
  let isScrolled = false;
  let isVisible = true;
  let prevScrollPos = window.scrollY;
  let scrollTimeout = null;

  const header = document.querySelector('.header');
  const burgerBtn = document.querySelector('.burger-btn');
  const burgerLine = document.querySelector('.burger-line');
  const mobileMenu = document.querySelector('.mobile-menu');
  const menuLinks = document.querySelectorAll(
    '.our-menu-link, .mobile-menu__link'
  );

  // Обработчик прокрутки страницы
  function handleScroll() {
    const currentScrollPos = window.scrollY;
    const isScrolledDown = prevScrollPos < currentScrollPos;

    if (scrollTimeout) {
      clearTimeout(scrollTimeout);
    }

    if (currentScrollPos > 100) {
      setHeaderVisibility(!isScrolledDown);
    } else {
      setHeaderVisibility(true);
    }

    prevScrollPos = currentScrollPos;
    setHeaderScrolled(currentScrollPos > 0);

    scrollTimeout = setTimeout(() => {
      // Дополнительная логика при остановке прокрутки
    }, 150);
  }

  // Открытие/закрытие мобильного меню
  function toggleMenu() {
    isMenuOpen = !isMenuOpen;
    updateMenuState();
  }

  // Обновление состояния меню
  function updateMenuState() {
    if (isMenuOpen) {
      header.classList.add('menu-open');
      burgerBtn.setAttribute('aria-expanded', 'true');
      burgerLine.classList.add('open');
      mobileMenu.classList.add('open');
      document.body.style.overflow = 'hidden';
    } else {
      header.classList.remove('menu-open');
      burgerBtn.setAttribute('aria-expanded', 'false');
      burgerLine.classList.remove('open');
      mobileMenu.classList.remove('open');
      document.body.style.overflow = 'unset';
    }
  }

  // Установка состояния прокрутки хедера
  function setHeaderScrolled(scrolled) {
    isScrolled = scrolled;
    if (scrolled) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  }

  // Установка видимости хедера
  function setHeaderVisibility(visible) {
    isVisible = visible;
    if (visible) {
      header.classList.add('visible');
      header.classList.remove('hidden');
    } else {
      header.classList.add('hidden');
      header.classList.remove('visible');
    }
  }

  // Плавная прокрутка к секции
  function smoothScrollToSection(e) {
    e.preventDefault();
    const href = e.currentTarget.getAttribute('href');
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);

    if (element) {
      setHeaderVisibility(true);

      setTimeout(() => {
        const headerHeight = header.offsetHeight;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.scrollY - headerHeight;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth',
        });

        if (isMenuOpen) {
          isMenuOpen = false;
          updateMenuState();
        }

        window.history.replaceState(
          null,
          '',
          `${window.location.pathname}${href}`
        );

        setTimeout(() => {
          prevScrollPos = window.scrollY;
        }, 100);
      }, 50);
    }
  }

  // Обработка хэша в URL при загрузке
  function handleInitialHash() {
    if (window.location.hash) {
      const targetId = window.location.hash.replace('#', '');
      const element = document.getElementById(targetId);

      if (element) {
        setTimeout(() => {
          const headerHeight = header.offsetHeight;
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition =
            elementPosition + window.scrollY - headerHeight;

          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth',
          });
        }, 100);
      }
    }
  }

  // Установка обработчиков событий
  window.addEventListener('scroll', handleScroll);
  window.addEventListener('resize', () => {
    const isMobile = window.innerWidth <= 768;
    if (!isMobile && isMenuOpen) {
      isMenuOpen = false;
      updateMenuState();
    }
  });

  // Обработчики для кнопки бургера
  if (burgerBtn) {
    burgerBtn.addEventListener('click', toggleMenu);
  }

  // Не добавляем обработчик для кнопки закрытия здесь,
  // так как он добавляется в initMobileMenu

  // Обработчики для ссылок в меню
  menuLinks.forEach(link => {
    link.addEventListener('click', smoothScrollToSection);
  });

  // Обработка хэша при загрузке
  handleInitialHash();
}
