import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import en from './en.json'
import pt from './pt.json'

i18next
    .use(initReactI18next)
    .init({
        compatibilityJSON: "v4",
        lng: 'pt', // if you're using a language detector, do not define the lang option
        fallbackLng: 'en',
        resources: {
            en,
            pt
        },
        react: {
            useSuspense: false
        },
        interpolation: {
            escapeValue: false
        }
    })
export default i18next