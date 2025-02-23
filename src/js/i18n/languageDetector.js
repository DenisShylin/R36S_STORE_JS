/**
 * Определяет язык пользователя на основе предпочтений и доступных языков
 * @param {string[]} supportedLanguages - Массив поддерживаемых языковых кодов
 * @param {string} defaultLanguage - Язык по умолчанию
 * @returns {string} Выбранный языковой код
 */
export function detectUserLanguage(supportedLanguages, defaultLanguage) {
  try {
    // Логируем входные параметры
    console.log('Detecting user language with:', {
      supportedLanguages,
      defaultLanguage,
    });

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
    console.log('Saved language in localStorage:', savedLanguage);

    if (savedLanguage && supportedLanguages.includes(savedLanguage)) {
      console.log('Using saved language preference:', savedLanguage);
      return savedLanguage;
    }

    // Получаем список предпочитаемых языков браузера
    const browserLanguages = navigator.languages || [navigator.language];
    console.log('Browser language preferences:', browserLanguages);

    // Ищем первый поддерживаемый язык из списка предпочтений
    for (const language of browserLanguages) {
      const languageCode = language.split('-')[0].toLowerCase();
      console.log('Checking language code:', languageCode);

      if (supportedLanguages.includes(languageCode)) {
        console.log('Found supported language:', languageCode);
        return languageCode;
      }
    }

    // Возвращаем язык по умолчанию, если ничего не найдено
    console.log('No matching language found, using default:', defaultLanguage);
    return defaultLanguage;
  } catch (error) {
    console.error('Error in detectUserLanguage:', error);
    console.error('Stack trace:', error.stack);
    return defaultLanguage;
  }
}
