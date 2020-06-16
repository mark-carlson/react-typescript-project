import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import translationEnglish from './locales/en/translation.json';
import translationSpanish from './locales/es/translation.json';

i18n.use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources: {
            en: {
                translation: translationEnglish,
            },
            es: {
                translation: translationSpanish,
            },
        },
        fallbackLng: 'en',
        debug: false,
        ns: ['translation'],
        defaultNS: 'translation',
        interpolation: {
            escapeValue: false,
        },
        detection: {
            // order and from where user language should be detected
            order: ['querystring', 'cookie', 'localStorage', 'navigator', 'htmlTag', 'path', 'subdomain'],

            // keys or params to lookup language from
            lookupQuerystring: 'lng',
            lookupCookie: 'i18next',
            lookupLocalStorage: 'i18nextLng',
            lookupFromPathIndex: 0,
            lookupFromSubdomainIndex: 0,

            // cache user language on
            caches: ['localStorage', 'cookie'],
            excludeCacheFor: ['cimode'], // languages to not persist (cookie, localStorage)

            // optional htmlTag with lang attribute, the default is:
            htmlTag: document.documentElement,
        },
    });

export default i18n;
