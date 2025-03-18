/**
 * @fileoverview Hero section initialization module
 * @description Contains functions for hero section setup, image management,
 * responsiveness, and event handlers for buttons.
 */

/**
 * Initializes the Hero section on the page.
 * Sets up images, handles load events, configures responsiveness and animations.
 * @returns {void}
 */
export function initHero() {
  console.log('Hero section initialized');

  // DOM elements
  const heroSection = document.querySelector('.hero');
  const heroImage = document.querySelector('.hero__console-img');
  const heroImageSource = document.querySelector('.hero__image source');
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

  // Using verified working paths from public directory
  const heroImage1x = '/img/hero/herou1_1x_.png';
  const heroImage2x = '/img/hero/herou1_2x_.png';
  const fallbackImage = '/img/hero/fallback-image.png'; // Fallback image

  console.log('Using image paths:', { heroImage1x, heroImage2x });

  /**
   * Sets up hero section images.
   * Establishes paths and event handlers for the main image.
   * @private
   */
  function setupHeroImage() {
    if (!heroImage) {
      console.error('Hero image element not found');
      return;
    }

    console.log('Setting hero image paths');

    // Event handlers
    heroImage.onerror = () => {
      console.error('Failed to load hero image:', heroImage.src);
      // Try fallback image
      heroImage.src = fallbackImage;
      heroSection.classList.add('hero--loaded'); // Still show the section
    };

    heroImage.onload = () => {
      console.log('Hero image loaded successfully');
      heroSection.classList.add('hero--loaded');
    };

    // Set attributes
    heroImage.src = heroImage2x;
    heroImage.srcset = `${heroImage1x} 1x, ${heroImage2x} 2x`;

    // Add decoding attribute for better performance
    heroImage.decoding = 'async';

    // If the image is already loaded (from cache)
    if (heroImage.complete) {
      console.log('Hero image already loaded (from cache)');
      heroSection.classList.add('hero--loaded');
    }
  }

  /**
   * Set up source element for high-resolution image.
   * @private
   */
  function setupSourceElement() {
    if (heroImageSource) {
      heroImageSource.srcset = heroImage1x;
    } else {
      console.warn('Hero image source element not found');
    }
  }

  /**
   * Adapts content for different screen sizes.
   * Toggles between mobile and desktop versions of the description.
   * @private
   */
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

  /**
   * Sets up content appearance animation on scroll.
   * Uses IntersectionObserver to determine element visibility.
   * @private
   */
  function setupContentAnimation() {
    if (!heroContent) return;

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

  /**
   * Sets up event handlers for section buttons.
   * @private
   */
  function setupButtonHandlers() {
    // Handler for buy button
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

    // Handler for "More details" button
    if (moreDetailsButton) {
      moreDetailsButton.addEventListener('click', handleMoreDetailsClick);
    }
  }

  /**
   * Handles click on "More details" button.
   * Performs smooth scrolling to features section.
   * @param {Event} e - Click event
   * @private
   */
  function handleMoreDetailsClick(e) {
    e.preventDefault();
    const featuresSection = document.getElementById('features');
    const header = document.querySelector('.header');

    if (featuresSection && header) {
      // Account for fixed header height when scrolling
      const headerHeight = header.offsetHeight;
      const elementPosition = featuresSection.getBoundingClientRect().top;
      const currentScrollY = window.scrollY || window.pageYOffset;
      const offsetPosition = elementPosition + currentScrollY - headerHeight;

      // Smooth scroll to features section
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });

      // Update URL without page reload
      window.history.replaceState(
        null,
        '',
        `${window.location.pathname}#features`
      );
    }
  }

  // Component initialization
  setupHeroImage();
  setupSourceElement();
  adjustForViewport();
  setupContentAnimation();
  setupButtonHandlers();

  // Listen for window resize event
  window.addEventListener('resize', adjustForViewport);
}
