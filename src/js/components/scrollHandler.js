class ScrollHandler {
  constructor() {
    this.progressBar = null;
    this.backToTopBtn = null;
    this.isAnimating = false;
    this.init();
  }

  createProgressBar() {
    const progressBar = document.createElement('div');
    progressBar.className = 'scroll-progress';
    document.body.appendChild(progressBar);
    return progressBar;
  }

  createBackToTopButton() {
    const button = document.createElement('button');
    button.className = 'back-to-top';
    button.setAttribute('aria-label', 'Вернуться к началу страницы');
    button.innerHTML = `
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <path d="M12 19V5M5 12l7-7 7 7"/>
      </svg>
    `;
    document.body.appendChild(button);
    return button;
  }

  updateProgressBar() {
    if (!this.progressBar) return;

    const scrolled = window.scrollY;
    const maxHeight =
      document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercent = (scrolled / maxHeight) * 100;

    requestAnimationFrame(() => {
      this.progressBar.style.width = `${scrollPercent}%`;
      if (this.backToTopBtn) {
        this.backToTopBtn.classList.toggle(
          'visible',
          scrolled > window.innerHeight / 2
        );
      }
    });
  }

  scrollToTop() {
    if (this.isAnimating) return;

    this.isAnimating = true;
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });

    setTimeout(() => {
      this.isAnimating = false;
    }, 1000);
  }

  addScrollListeners() {
    window.addEventListener('scroll', this.updateProgressBar.bind(this), {
      passive: true,
    });
    if (this.backToTopBtn) {
      this.backToTopBtn.addEventListener('click', this.scrollToTop.bind(this));
    }
  }

  init() {
    this.progressBar = this.createProgressBar();
    this.backToTopBtn = this.createBackToTopButton();
    this.addScrollListeners();
    this.updateProgressBar();
  }
}

export const initScrollHandler = () => new ScrollHandler();
