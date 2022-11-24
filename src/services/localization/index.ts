import i18next from 'i18next';
import languageDetector from 'i18next-browser-languagedetector';
import intervalPlural from 'i18next-intervalplural-postprocessor';
import { initReactI18next } from 'react-i18next';

import Backend from './backend';

i18next
  .use(initReactI18next)
  .use(languageDetector)
  .use(intervalPlural)
  .use(Backend)
  .init({
    fallbackLng: 'en',
    whitelist: ['en', 'ru'],
    interpolation: {
      escapeValue: false,
    },
  });

export default i18next;
