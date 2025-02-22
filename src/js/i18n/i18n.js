import i18next from 'i18next';
import { detectUserLanguage } from './languageDetector';
import enTranslations from '@locales/en.json';
import ruTranslations from '@locales/ru.json';
import trTranslations from '@locales/tr.json';

const translations = {
  en: { translation: enTranslations },
  ru: { translation: ruTranslations },
  tr: { translation: trTranslations },
};

async function loadTranslations(language) {
  return translations[language];
}

export async function setupI18n() {
  try {
    const userLanguage = detectUserLanguage(['en', 'ru', 'tr'], 'en');
    console.log('Detected user language:', userLanguage);

    await i18next.init({
      lng: userLanguage,
      fallbackLng: 'en',
      resources: translations,
      interpolation: {
        escapeValue: false,
      },
      debug: true,
    });

    window.updateContent = () => {
      document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');

        if (key.startsWith('[')) {
          const matches = key.match(/^\[(.*)\](.*)$/);
          if (matches) {
            const [, attr, translationKey] = matches;
            element.setAttribute(attr, i18next.t(translationKey));
          }
        } else {
          if (element.hasAttribute('content')) {
            element.setAttribute('content', i18next.t(key));
          } else {
            element.textContent = i18next.t(key);
          }
        }
      });

      const rtlLanguages = ['ar', 'fa', 'he'];
      document.documentElement.dir = rtlLanguages.includes(i18next.language)
        ? 'rtl'
        : 'ltr';
    };

    window.updateContent();
    return i18next;
  } catch (error) {
    console.error('Error setting up i18n:', error);
    throw error;
  }
}

export function setupLanguageSelector() {
  const selector = document.getElementById('language-selector');
  if (selector) {
    selector.value = i18next.language;

    selector.addEventListener('change', async event => {
      try {
        const newLanguage = event.target.value;
        await i18next.changeLanguage(newLanguage);
        localStorage.setItem('userLanguage', newLanguage);
        window.updateContent();
      } catch (error) {
        console.error('Error changing language:', error);
        selector.value = i18next.language;
      }
    });
  }
}
