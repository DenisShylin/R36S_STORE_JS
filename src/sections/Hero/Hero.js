// Initialization function for Hero section
export function initHero() {
  // DOM elements
  const heroSection = document.querySelector('.hero');
  const heroImage = document.querySelector('.hero__console-img');
  const heroContent = document.querySelector('.hero__content');
  const desktopDescription = document.querySelector(
    '.hero__description--desktop'
  );
  const mobileDescription = document.querySelector(
    '.hero__description--mobile'
  );
  const heroPricing = document.querySelector('.hero__pricing');
  const buyButton = document.getElementById('buy-button');
  const moreDetailsButton = document.getElementById('more-details-button');

  // Handle image loading
  if (heroImage) {
    heroImage.onload = () => {
      heroSection.classList.add('hero--loaded');
    };

    // If image is already loaded (from cache)
    if (heroImage.complete) {
      heroSection.classList.add('hero--loaded');
    }
  }

  // Check viewport size and adjust content display
  function adjustForViewport() {
    const isDesktop = window.innerWidth > 992;

    if (desktopDescription && mobileDescription && heroPricing) {
      if (isDesktop) {
        desktopDescription.style.display = 'block';
        mobileDescription.style.display = 'none';
      } else {
        desktopDescription.style.display = 'none';
        mobileDescription.style.display = 'block';
      }
    }
  }

  // Run on initialization
  adjustForViewport();

  // Listen for window resize events
  window.addEventListener('resize', adjustForViewport);

  // Add animation class when content is in viewport
  if (heroContent) {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    observer.observe(heroContent);
  }

  // Button event handlers
  if (buyButton) {
    buyButton.addEventListener('click', () => {
      // Open product link in new tab
      window.open(
        'https://www.aliexpress.com/item/1005007171465465.html',
        '_blank',
        'noopener,noreferrer'
      );
    });
  }

  if (moreDetailsButton) {
    moreDetailsButton.addEventListener('click', e => {
      e.preventDefault();
      const featuresSection = document.getElementById('features');
      const header = document.querySelector('.header');

      if (featuresSection && header) {
        // Calculate scroll position accounting for fixed header
        const headerHeight = header.offsetHeight;
        const elementPosition = featuresSection.getBoundingClientRect().top;
        const currentScrollY = window.scrollY || window.pageYOffset;
        const offsetPosition = elementPosition + currentScrollY - headerHeight;

        // Smooth scroll to features section
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth',
        });

        // Update URL without reloading page
        window.history.replaceState(
          null,
          '',
          `${window.location.pathname}#features`
        );
      }
    });
  }
}
