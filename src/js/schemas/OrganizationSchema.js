// src/js/schemas/OrganizationSchema.js
/**
 * Класс для генерации Schema.org разметки организации
 */
export class OrganizationSchema {
  /**
   * Создает Schema.org разметку для организации
   * @param {Object} organization - Данные об организации
   */
  constructor(organization) {
    this.organization = organization;
    this.render();
  }

  /**
   * Генерирует и внедряет Schema.org разметку в DOM
   */
  render() {
    // Проверяем наличие данных об организации
    if (!this.organization) {
      console.error('Organization data is missing for schema generation');
      return;
    }

    // Проверяем, существует ли уже схема в DOM
    const existingSchema = document.querySelector(
      'script[data-schema="organization"]'
    );
    if (existingSchema) {
      existingSchema.remove();
    }

    // Создаем объект схемы
    const schemaObject = {
      '@context': 'https://schema.org/',
      '@type': 'Organization',
      name: this.organization.name || 'R36S',
      url: this.organization.url || 'https://r36s.com/',
    };

    // Добавляем логотип
    if (this.organization.logo) {
      schemaObject.logo = this.organization.logo;
    }

    // Добавляем контактную информацию
    if (this.organization.contactPoint) {
      schemaObject.contactPoint = this.organization.contactPoint.map(
        contact => ({
          '@type': 'ContactPoint',
          telephone: contact.telephone,
          contactType: contact.contactType,
          email: contact.email,
          availableLanguage: contact.availableLanguage,
        })
      );
    }

    // Добавляем социальные профили
    if (this.organization.sameAs && Array.isArray(this.organization.sameAs)) {
      schemaObject.sameAs = this.organization.sameAs;
    }

    // Создаем элемент script
    const scriptElement = document.createElement('script');
    scriptElement.type = 'application/ld+json';
    scriptElement.setAttribute('data-schema', 'organization');
    scriptElement.textContent = JSON.stringify(schemaObject, null, 2);

    // Добавляем в head
    document.head.appendChild(scriptElement);
  }
}
