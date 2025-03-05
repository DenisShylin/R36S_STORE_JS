// src/js/schemas/SchemaManager.js
/**
 * Менеджер для управления всеми Schema.org разметками
 */
export class SchemaManager {
  constructor() {
    this.schemas = {};
  }

  /**
   * Добавляет схему продукта
   * @param {Object} product - Данные о продукте
   */
  addProductSchema(product) {
    this.schemas.product = new ProductSchema(product);
    return this;
  }

  /**
   * Добавляет схему хлебных крошек
   * @param {Array} items - Элементы хлебных крошек
   */
  addBreadcrumbSchema(items) {
    this.schemas.breadcrumb = new BreadcrumbSchema(items);
    return this;
  }

  /**
   * Добавляет схему организации
   * @param {Object} organization - Данные об организации
   */
  addOrganizationSchema(organization) {
    this.schemas.organization = new OrganizationSchema(organization);
    return this;
  }

  /**
   * Обновляет схему
   * @param {string} type - Тип схемы ('product', 'breadcrumb', 'organization')
   * @param {Object} data - Новые данные для схемы
   */
  updateSchema(type, data) {
    switch (type) {
      case 'product':
        this.schemas.product = new ProductSchema(data);
        break;
      case 'breadcrumb':
        this.schemas.breadcrumb = new BreadcrumbSchema(data);
        break;
      case 'organization':
        this.schemas.organization = new OrganizationSchema(data);
        break;
      default:
        console.error(`Unknown schema type: ${type}`);
    }

    return this;
  }

  /**
   * Удаляет схему указанного типа
   * @param {string} type - Тип схемы ('product', 'breadcrumb', 'organization')
   */
  removeSchema(type) {
    if (this.schemas[type]) {
      delete this.schemas[type];

      // Удаляем из DOM
      const schemaElement = document.querySelector(
        `script[data-schema="${type}"]`
      );
      if (schemaElement) {
        schemaElement.remove();
      }
    }

    return this;
  }

  /**
   * Удаляет все схемы
   */
  clearAllSchemas() {
    Object.keys(this.schemas).forEach(type => {
      this.removeSchema(type);
    });

    return this;
  }
}
