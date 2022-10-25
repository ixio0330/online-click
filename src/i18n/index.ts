import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './locales/en.json';
import ko from './locales/ko.json';

const resources = {
  en: {
    translations: en,
  },
  ko: {
    translations: ko,
  }
}

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'ko',
    fallbackLng: 'ko',
    debug: true,
    defaultNS: "translations",
    ns: "translations",
    keySeparator: false,
    interpolation: {
        escapeValue: false
    }
  });

export default i18n;