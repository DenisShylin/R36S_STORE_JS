/**
 * Определяет язык пользователя на основе предпочтений и доступных языков
 * @param {string[]} supportedLanguages - Массив поддерживаемых языковых кодов
 * @param {string} defaultLanguage - Язык по умолчанию
 * @returns {string} Выбранный языковой код
 */
export function detectUserLanguage(supportedLanguages, defaultLanguage) {
  try {
    // Проверяем входные параметры
    if (!Array.isArray(supportedLanguages) || supportedLanguages.length === 0) {
      console.warn('Invalid supportedLanguages array');
      return defaultLanguage;
    }

    if (!defaultLanguage || typeof defaultLanguage !== 'string') {
      console.warn('Invalid defaultLanguage');
      return supportedLanguages[0];
    }

    // Проверяем сохраненный выбор пользователя
    const savedLanguage = localStorage.getItem('userLanguage');
    if (savedLanguage && supportedLanguages.includes(savedLanguage)) {
      console.log('Using saved language preference:', savedLanguage);
      return savedLanguage;
    }

    // Получаем список предпочитаемых языков браузера
    const browserLanguages = navigator.languages || [navigator.language];

    // Ищем первый поддерживаемый язык из списка предпочтений
    for (const language of browserLanguages) {
      const languageCode = language.split('-')[0].toLowerCase();
      if (supportedLanguages.includes(languageCode)) {
        console.log('Using browser language:', languageCode);
        return languageCode;
      }
    }

    // Возвращаем язык по умолчанию, если ничего не найдено
    console.log('Using default language:', defaultLanguage);
    return defaultLanguage;
  } catch (error) {
    console.error('Error in detectUserLanguage:', error);
    return defaultLanguage;
  }
}
