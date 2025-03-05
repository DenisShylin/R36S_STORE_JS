// src/js/services/api.js
/**
 * Класс для работы с API
 */
export class ApiService {
  /**
   * Создает экземпляр ApiService
   * @param {string} baseUrl - Базовый URL API
   */
  constructor(baseUrl) {
    this.baseUrl = baseUrl || '';
    this.headers = {
      'Content-Type': 'application/json',
    };
  }

  /**
   * Устанавливает заголовок авторизации
   * @param {string} token - Токен авторизации
   */
  setAuthToken(token) {
    if (token) {
      this.headers['Authorization'] = `Bearer ${token}`;
    } else {
      delete this.headers['Authorization'];
    }
  }

  /**
   * Выполняет GET-запрос
   * @param {string} endpoint - Конечная точка API
   * @param {Object} params - Параметры запроса
   * @returns {Promise<any>} Результат запроса
   */
  async get(endpoint, params = {}) {
    const url = this._buildUrl(endpoint, params);

    try {
      const response = await fetch(url, {
        method: 'GET',
        headers: this.headers,
      });

      return this._handleResponse(response);
    } catch (error) {
      return this._handleError(error);
    }
  }

  /**
   * Выполняет POST-запрос
   * @param {string} endpoint - Конечная точка API
   * @param {Object} data - Данные запроса
   * @returns {Promise<any>} Результат запроса
   */
  async post(endpoint, data = {}) {
    const url = this._buildUrl(endpoint);

    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: this.headers,
        body: JSON.stringify(data),
      });

      return this._handleResponse(response);
    } catch (error) {
      return this._handleError(error);
    }
  }

  /**
   * Выполняет PUT-запрос
   * @param {string} endpoint - Конечная точка API
   * @param {Object} data - Данные запроса
   * @returns {Promise<any>} Результат запроса
   */
  async put(endpoint, data = {}) {
    const url = this._buildUrl(endpoint);

    try {
      const response = await fetch(url, {
        method: 'PUT',
        headers: this.headers,
        body: JSON.stringify(data),
      });

      return this._handleResponse(response);
    } catch (error) {
      return this._handleError(error);
    }
  }

  /**
   * Выполняет DELETE-запрос
   * @param {string} endpoint - Конечная точка API
   * @returns {Promise<any>} Результат запроса
   */
  async delete(endpoint) {
    const url = this._buildUrl(endpoint);

    try {
      const response = await fetch(url, {
        method: 'DELETE',
        headers: this.headers,
      });

      return this._handleResponse(response);
    } catch (error) {
      return this._handleError(error);
    }
  }

  /**
   * Загружает файл
   * @param {string} endpoint - Конечная точка API
   * @param {FormData} formData - Данные формы с файлом
   * @returns {Promise<any>} Результат запроса
   */
  async uploadFile(endpoint, formData) {
    const url = this._buildUrl(endpoint);

    // Для загрузки файлов не устанавливаем Content-Type, чтобы браузер сам добавил boundary
    const headers = { ...this.headers };
    delete headers['Content-Type'];

    try {
      const response = await fetch(url, {
        method: 'POST',
        headers,
        body: formData,
      });

      return this._handleResponse(response);
    } catch (error) {
      return this._handleError(error);
    }
  }

  /**
   * Загружает файл с сервера
   * @param {string} endpoint - Конечная точка API
   * @param {string} fileName - Имя файла для сохранения
   * @returns {Promise<void>} Промис, который резолвится после загрузки файла
   */
  async downloadFile(endpoint, fileName) {
    const url = this._buildUrl(endpoint);

    try {
      const response = await fetch(url, {
        method: 'GET',
        headers: this.headers,
      });

      if (!response.ok) {
        throw new Error(`API error: ${response.status}`);
      }

      // Получаем blob с содержимым файла
      const blob = await response.blob();

      // Создаем ссылку на blob
      const downloadUrl = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = downloadUrl;
      link.download = fileName;

      // Добавляем ссылку в DOM и симулируем клик
      document.body.appendChild(link);
      link.click();

      // Удаляем ссылку из DOM и освобождаем URL
      document.body.removeChild(link);
      window.URL.revokeObjectURL(downloadUrl);
    } catch (error) {
      this._handleError(error);
    }
  }

  /**
   * Строит URL с параметрами
   * @param {string} endpoint - Конечная точка API
   * @param {Object} params - Параметры запроса
   * @returns {string} Полный URL
   */
  _buildUrl(endpoint, params = {}) {
    const url = new URL(this.baseUrl + endpoint);

    // Добавляем параметры в URL
    Object.entries(params).forEach(([key, value]) => {
      url.searchParams.append(key, value);
    });

    return url.toString();
  }

  /**
   * Обрабатывает ответ от сервера
   * @param {Response} response - Ответ от сервера
   * @returns {Promise<any>} Данные ответа
   */
  async _handleResponse(response) {
    if (!response.ok) {
      // Пытаемся получить текст ошибки из ответа
      const errorText = await response.text();
      throw new Error(errorText || `API error: ${response.status}`);
    }

    // Проверяем, есть ли у ответа контент
    const contentType = response.headers.get('content-type');

    if (contentType && contentType.includes('application/json')) {
      return await response.json();
    }

    return await response.text();
  }

  /**
   * Обрабатывает ошибки запроса
   * @param {Error} error - Объект ошибки
   * @returns {Promise<Object>} Объект с информацией об ошибке
   */
  _handleError(error) {
    console.error('API request failed:', error);

    // Возвращаем объект с информацией об ошибке
    return Promise.reject({
      success: false,
      error: error.message || 'Unknown error',
    });
  }
}

// src/js/services/productService.js
/**
 * Сервис для работы с продуктами
 */
export class ProductService {
  constructor(apiService) {
    this.api = apiService;
    this.endpoint = '/products';
  }

  /**
   * Получает список всех продуктов
   * @param {Object} params - Параметры запроса (фильтры, пагинация и т.д.)
   * @returns {Promise<Array>} Список продуктов
   */
  async getProducts(params = {}) {
    return this.api.get(this.endpoint, params);
  }

  /**
   * Получает информацию о конкретном продукте
   * @param {string|number} id - ID продукта
   * @returns {Promise<Object>} Данные о продукте
   */
  async getProduct(id) {
    return this.api.get(`${this.endpoint}/${id}`);
  }

  /**
   * Создает новый продукт
   * @param {Object} data - Данные продукта
   * @returns {Promise<Object>} Созданный продукт
   */
  async createProduct(data) {
    return this.api.post(this.endpoint, data);
  }

  /**
   * Обновляет информацию о продукте
   * @param {string|number} id - ID продукта
   * @param {Object} data - Данные для обновления
   * @returns {Promise<Object>} Обновленный продукт
   */
  async updateProduct(id, data) {
    return this.api.put(`${this.endpoint}/${id}`, data);
  }

  /**
   * Удаляет продукт
   * @param {string|number} id - ID продукта
   * @returns {Promise<Object>} Результат операции
   */
  async deleteProduct(id) {
    return this.api.delete(`${this.endpoint}/${id}`);
  }
}

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
