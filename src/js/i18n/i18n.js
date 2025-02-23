// i18n.js
import i18next from 'i18next';
import { detectUserLanguage } from './languageDetector';

let i18nInstance = null;

// Создаем CustomEvent для обновления языка
const LANGUAGE_CHANGE_EVENT = 'languageChanged';

const getTranslationPath = language => {
  return import.meta.env.DEV
    ? `./locales/${language}.json`
    : `/R36S_STORE_JS/locales/${language}.json`;
};

const loadTranslations = async language => {
  try {
    const path = getTranslationPath(language);
    const response = await fetch(path);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(`Failed to load ${language} translations:`, error);
    return {};
  }
};

// Функция обновления всего контента
const updateAllContent = async () => {
  try {
    // Обновляем мета-теги
    document.querySelectorAll('[data-i18n]').forEach(element => {
      const key = element.getAttribute('data-i18n');
      if (!key) return;

      if (key.startsWith('[')) {
        const matches = key.match(/^\[(.*)\](.*)$/);
        if (matches) {
          const [, attr, translationKey] = matches;
          const translation = i18next.t(translationKey);
          if (translation) {
            element.setAttribute(attr, translation);
          }
        }
      } else {
        const translation = i18next.t(key);
        if (translation) {
          if (element.hasAttribute('content')) {
            element.setAttribute('content', translation);
          } else {
            element.textContent = translation;
          }
        }
      }
    });

    // Обновляем RTL
    const rtlLanguages = ['ar', 'fa', 'he'];
    document.documentElement.dir = rtlLanguages.includes(i18next.language)
      ? 'rtl'
      : 'ltr';

    // Вызываем пользовательское событие для компонентов
    window.dispatchEvent(
      new CustomEvent(LANGUAGE_CHANGE_EVENT, {
        detail: { language: i18next.language },
      })
    );
  } catch (error) {
    console.error('Error in updateAllContent:', error);
  }
};

export async function setupI18n() {
  if (i18nInstance) return i18nInstance;

  const userLanguage = detectUserLanguage(['en', 'ru', 'tr'], 'en');

  // Загружаем переводы
  const [currentLang, fallbackLang] = await Promise.all([
    loadTranslations(userLanguage),
    userLanguage !== 'en' ? loadTranslations('en') : null,
  ]);

  const resources = {
    [userLanguage]: { translation: currentLang },
  };

  if (fallbackLang) {
    resources.en = { translation: fallbackLang };
  }

  i18nInstance = await i18next.init({
    lng: userLanguage,
    fallbackLng: 'en',
    resources,
    interpolation: { escapeValue: false },
    debug: import.meta.env.DEV,
    load: 'languageOnly',
    returnNull: false,
    returnEmptyString: false,
  });

  // Привязываем обновление контента к смене языка
  i18next.on('languageChanged', updateAllContent);

  // Экспортируем функцию обновления в window
  window.updateContent = updateAllContent;

  return i18nInstance;
}

export function setupLanguageSelector() {
  const selector = document.getElementById('language-selector');
  if (!selector) return;

  try {
    selector.value = i18next.language;

    selector.addEventListener('change', async event => {
      try {
        const newLanguage = event.target.value;

        // Загружаем переводы перед сменой языка
        if (!i18next.hasResourceBundle(newLanguage, 'translation')) {
          const translations = await loadTranslations(newLanguage);
          i18next.addResourceBundle(
            newLanguage,
            'translation',
            translations,
            true,
            true
          );
        }

        // Меняем язык
        await i18next.changeLanguage(newLanguage);
        localStorage.setItem('userLanguage', newLanguage);

        // Обновление произойдет автоматически через событие languageChanged
      } catch (error) {
        console.error('Error changing language:', error);
        selector.value = i18next.language;
      }
    });
  } catch (error) {
    console.error('Error setting up language selector:', error);
  }
}
