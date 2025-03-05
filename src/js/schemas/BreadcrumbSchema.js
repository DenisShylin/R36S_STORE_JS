// src/js/schemas/BreadcrumbSchema.js
/**
 * Класс для генерации Schema.org разметки хлебных крошек
 */
export class BreadcrumbSchema {
  /**
   * Создает Schema.org разметку для хлебных крошек
   * @param {Array} items - Элементы хлебных крошек
   */
  constructor(items) {
    this.items = items;
    this.render();
  }

  /**
   * Генерирует и внедряет Schema.org разметку в DOM
   */
  render() {
    // Проверяем наличие данных о хлебных крошках
    if (!this.items || !Array.isArray(this.items) || this.items.length === 0) {
      console.error('Breadcrumb items are missing for schema generation');
      return;
    }

    // Проверяем, существует ли уже схема в DOM
    const existingSchema = document.querySelector(
      'script[data-schema="breadcrumb"]'
    );
    if (existingSchema) {
      existingSchema.remove();
    }

    // Создаем объект схемы
    const schemaObject = {
      '@context': 'https://schema.org/',
      '@type': 'BreadcrumbList',
      itemListElement: this.items.map((item, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: item.name,
        item: item.url,
      })),
    };

    // Создаем элемент script
    const scriptElement = document.createElement('script');
    scriptElement.type = 'application/ld+json';
    scriptElement.setAttribute('data-schema', 'breadcrumb');
    scriptElement.textContent = JSON.stringify(schemaObject, null, 2);

    // Добавляем в head
    document.head.appendChild(scriptElement);
  }
}
