import i18n from 'i18next';
import HttpApi from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';
i18n
  .use(HttpApi)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    supportedLngs: ['en', 'bd'],
    fallbackLng: 'en',
    ns: ['common', 'home'],
    interpolation: {
      escapeValue: false,
      formatSeparator: '.',
    },
    debug: false,
    detection: {
      order: ['path', 'cookie', 'htmlTag'],
      caches: ['cookie'],
    },
    backend: {
      loadPath: '/locals/{{ns}}/{{lng}}.json',
    },
  });

export default i18n;
