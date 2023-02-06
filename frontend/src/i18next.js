import i18next from "i18next";
import { initReactI18next } from 'react-i18next';

i18next.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        come: 'Welcome to React and react-i18next',
      },
    },
    ru: {
      translation: {
        come: 'тест блю',
      },
    },
  },
  lng: 'en',
  fallbackLng: 'en',

  interpolation: {
    escapeValue: false,
  },
});
