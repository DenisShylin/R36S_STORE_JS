// src/js/services/analyticsService.js
/**
 * Сервис для отслеживания аналитики
 */
export class AnalyticsService {
  constructor() {
    this.enabled = false;
    this.initialized = false;
    this.queue = [];

    // Инициализируем сервис
    this._init();
  }

  /**
   * Инициализирует сервис
   */
  _init() {
    // Проверяем, есть ли в localStorage настройка отключения аналитики
    const analyticsDisabled =
      localStorage.getItem('analyticsDisabled') === 'true';

    if (!analyticsDisabled) {
      this.enabled = true;
      this._initGoogleAnalytics();
    }

    this.initialized = true;

    // Обрабатываем очередь событий, которые были отправлены до инициализации
    if (this.enabled && this.queue.length > 0) {
      this.queue.forEach(([eventName, eventParams]) => {
        this.trackEvent(eventName, eventParams);
      });
      this.queue = [];
    }
  }

  /**
   * Инициализирует Google Analytics
   */
  _initGoogleAnalytics() {
    // Код инициализации Google Analytics (GA4)
    // В реальном проекте здесь был бы код инициализации Google Analytics
    // Пример кода инициализации GA4
    /*
    const script = document.createElement('script');
    script.src = 'https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX';
    script.async = true;
    document.head.appendChild(script);
    
    window.dataLayer = window.dataLayer || [];
    function gtag() {
      dataLayer.push(arguments);
    }
    gtag('js', new Date());
    gtag('config', 'G-XXXXXXXXXX');
    */
  }

  /**
   * Отслеживает просмотр страницы
   * @param {string} pageName - Название страницы
   * @param {string} pageUrl - URL страницы
   */
  trackPageView(pageName, pageUrl = window.location.pathname) {
    if (!this.initialized) {
      this.queue.push([
        'page_view',
        { page_title: pageName, page_location: pageUrl },
      ]);
      return;
    }

    if (!this.enabled) return;

    // Пример отправки события просмотра страницы в GA4
    if (window.gtag) {
      window.gtag('event', 'page_view', {
        page_title: pageName,
        page_location: pageUrl,
      });
    }

    console.log('Analytics page view:', { pageName, pageUrl });
  }

  /**
   * Отслеживает произвольное событие
   * @param {string} eventName - Название события
   * @param {Object} eventParams - Параметры события
   */
  trackEvent(eventName, eventParams = {}) {
    if (!this.initialized) {
      this.queue.push([eventName, eventParams]);
      return;
    }

    if (!this.enabled) return;

    // Пример отправки события в GA4
    if (window.gtag) {
      window.gtag('event', eventName, eventParams);
    }

    console.log('Analytics event:', { eventName, eventParams });
  }

  /**
   * Включает или отключает аналитику
   * @param {boolean} enabled - Флаг включения/отключения
   */
  setEnabled(enabled) {
    this.enabled = enabled;
    localStorage.setItem('analyticsDisabled', (!enabled).toString());

    console.log('Analytics enabled:', enabled);
  }
}

// Создаем экземпляры сервисов и экспортируем их
const apiService = new ApiService('/api');
export const productService = new ProductService(apiService);
export const analyticsService = new AnalyticsService();
