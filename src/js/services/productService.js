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
