import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      welcome: 'Welcome to EHR Chatbot',
      upload: 'Upload Prescription',
    },
  },
  hi: {
    translation: {
      welcome: 'ईएचआर चैटबॉट में आपका स्वागत है',
      upload: 'प्रिस्क्रिप्शन अपलोड करें',
    },
  },
  fr: {
    translation: {
      welcome: 'Bienvenue dans le chatbot EHR',
      upload: 'Télécharger la prescription',
    },
  },
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en', // default language
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
