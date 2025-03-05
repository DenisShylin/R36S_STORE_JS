// src/js/schemas/ProductSchema.js
/**
 * Класс для генерации Schema.org разметки продукта
 */
export class ProductSchema {
  /**
   * Создает Schema.org разметку для продукта
   * @param {Object} product - Данные о продукте
   */
  constructor(product) {
    this.product = product;
    this.render();
  }

  /**
   * Генерирует и внедряет Schema.org разметку в DOM
   */
  render() {
    // Проверяем наличие данных о продукте
    if (!this.product) {
      console.error('Product data is missing for schema generation');
      return;
    }

    // Проверяем, существует ли уже схема в DOM
    const existingSchema = document.querySelector(
      'script[data-schema="product"]'
    );
    if (existingSchema) {
      existingSchema.remove();
    }

    // Создаем объект схемы
    const schemaObject = this._createSchemaObject();

    // Создаем элемент script
    const scriptElement = document.createElement('script');
    scriptElement.type = 'application/ld+json';
    scriptElement.setAttribute('data-schema', 'product');
    scriptElement.textContent = JSON.stringify(schemaObject, null, 2);

    // Добавляем в head
    document.head.appendChild(scriptElement);
  }

  /**
   * Создает объект схемы для Product
   * @returns {Object} Объект схемы Schema.org
   */
  _createSchemaObject() {
    const {
      name,
      description,
      image,
      offers,
      brand,
      sku,
      mpn,
      gtin,
      category,
      reviews,
      aggregateRating,
      weight,
      height,
      width,
      depth,
    } = this.product;

    // Базовый объект схемы
    const schema = {
      '@context': 'https://schema.org/',
      '@type': 'Product',
      name: name || 'R36S Retro Game Console',
      description:
        description ||
        'Portable retro gaming console with 15,000+ classic games, 3.5-inch IPS display and long battery life',
    };

    // Добавляем изображение
    if (image) {
      schema.image = Array.isArray(image) ? image : [image];
    }

    // Добавляем бренд
    if (brand) {
      schema.brand = {
        '@type': 'Brand',
        name: brand.name || 'R36S',
      };
    }

    // Добавляем идентификаторы товара
    if (sku) schema.sku = sku;
    if (mpn) schema.mpn = mpn;
    if (gtin) schema.gtin = gtin;
    if (category) schema.category = category;

    // Добавляем предложение
    if (offers) {
      if (Array.isArray(offers)) {
        schema.offers = offers.map(offer => this._formatOffer(offer));
      } else {
        schema.offers = this._formatOffer(offers);
      }
    }

    // Добавляем отзывы
    if (reviews && Array.isArray(reviews) && reviews.length > 0) {
      schema.review = reviews.map(review => ({
        '@type': 'Review',
        reviewRating: {
          '@type': 'Rating',
          ratingValue: review.rating,
          bestRating: '5',
          worstRating: '1',
        },
        author: {
          '@type': 'Person',
          name: review.author,
        },
        datePublished: review.date,
        reviewBody: review.text,
      }));
    }

    // Добавляем агрегированный рейтинг
    if (aggregateRating) {
      schema.aggregateRating = {
        '@type': 'AggregateRating',
        ratingValue: aggregateRating.ratingValue,
        reviewCount: aggregateRating.reviewCount,
        bestRating: aggregateRating.bestRating || '5',
        worstRating: aggregateRating.worstRating || '1',
      };
    }

    // Добавляем физические характеристики
    if (weight || height || width || depth) {
      const size = {};

      if (height) size.height = this._formatDimension(height);
      if (width) size.width = this._formatDimension(width);
      if (depth) size.depth = this._formatDimension(depth);
      if (weight) size.weight = this._formatDimension(weight);

      if (Object.keys(size).length > 0) {
        schema.size = size;
      }
    }

    return schema;
  }

  /**
   * Форматирует данные о предложении
   * @param {Object} offer - Данные о предложении
   * @returns {Object} Отформатированное предложение
   */
  _formatOffer(offer) {
    const formattedOffer = {
      '@type': 'Offer',
      priceCurrency: offer.priceCurrency || 'USD',
      price: offer.price,
      url: offer.url,
    };

    // Добавляем статус наличия
    if (offer.availability) {
      formattedOffer.availability = offer.availability.startsWith('http')
        ? offer.availability
        : `https://schema.org/${offer.availability}`;
    } else {
      formattedOffer.availability = 'https://schema.org/InStock';
    }

    // Добавляем информацию о доставке
    if (offer.shippingDetails) {
      formattedOffer.shippingDetails = {
        '@type': 'OfferShippingDetails',
        ...offer.shippingDetails,
      };
    }

    // Добавляем дату окончания
    if (offer.priceValidUntil) {
      formattedOffer.priceValidUntil = offer.priceValidUntil;
    }

    return formattedOffer;
  }

  /**
   * Форматирует размерные характеристики
   * @param {Object} dimension - Данные о размере
   * @returns {Object} Отформатированный размер
   */
  _formatDimension(dimension) {
    if (typeof dimension === 'object') {
      return {
        '@type': 'QuantitativeValue',
        value: dimension.value,
        unitCode: dimension.unitCode || dimension.unit,
      };
    }

    return dimension;
  }
}
