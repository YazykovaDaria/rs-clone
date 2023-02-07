import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';

import en from '../../shared/locales/en.json';
import ru from '../../shared/locales/ru.json';

const i18n = i18next.createInstance();

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: en,
    },
    ru: {
      translation: ru,
    },
  },
  lng: 'en',
  fallbackLng: 'en',

  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
