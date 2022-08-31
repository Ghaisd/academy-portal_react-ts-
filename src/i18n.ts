import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import languageNO from './i18n/nb-no-translations.json';
import languageEN from './i18n/en-us-translations.json';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: true,
    lng: 'no',
    fallbackLng: 'no',
    resources: {
      no: {
        translation: languageNO,
      },
      en: {
        translation: languageEN,
      },
    },
  });

export default i18n;
