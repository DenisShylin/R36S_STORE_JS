// src/js/utils/lazyLoader.js

export const initLazyLoading = () => {
  const lazyImages = document.querySelectorAll('img[loading="lazy"]');

  if (!('IntersectionObserver' in window)) {
    lazyImages.forEach(img => {
      loadImage(img);
    });
    return;
  }

  const imageObserver = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          loadImage(entry.target);
          imageObserver.unobserve(entry.target);
        }
      });
    },
    {
      rootMargin: '50px 0px',
    }
  );

  lazyImages.forEach(img => imageObserver.observe(img));

  function loadImage(img) {
    const sources = img.parentElement.querySelectorAll('source');

    sources.forEach(source => {
      if (source.dataset.srcset) {
        source.srcset = source.dataset.srcset;
        source.removeAttribute('data-srcset');
      }
    });

    if (img.dataset.src) {
      img.src = img.dataset.src;
      img.removeAttribute('data-src');
    }

    if (img.dataset.srcset) {
      img.srcset = img.dataset.srcset;
      img.removeAttribute('data-srcset');
    }

    img.classList.add('loaded');
  }
};
