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
