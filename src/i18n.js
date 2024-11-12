import i18n from "i18next";
import LanguageDetector from 'i18next-browser-languagedetector';
import I18NextHttpBackend from "i18next-http-backend";
import { initReactI18next } from "react-i18next";


i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .use(I18NextHttpBackend)
    .init({
        debug: true,
        returnObjects: true,
        lng: "en",
        // resources can be removed after adding local/hi/translation.json
        // resources: {
        //     en: {
        //         translation: {
        //             greeting: "Hello <1>{{userName}}</1>, Welcome!",
        //             description: {
        //                 welcome: "Welcome back, <1>{{userName}}</1>! Remember, you can change the language, but the fun stays the same.",
        //                 funFact: "Did you know? Learning a new language can improve your memory and even delay cognitive decline!"
        //             }
        //         },
        //     },
        //     fr: {
        //         translation: {
        //             greeting: "Bonjour <1>{{userName}}</1> Bienvenue!",
        //             description: {
        //                 welcome: "Bienvenue de retour, <1>{{userName}}</1>! Vous pouvez changer la langue, mais le plaisir reste le même.",
        //                 funFact: "Le saviez-vous ? Apprendre une nouvelle langue peut améliorer votre mémoire et même retarder le déclin cognitif !"
        //             }
        //         },
        //     },
        //     hi: {
        //         translation: {
        //             greeting: "नमस्ते <1>{{userName}}</1> स्वागत है!",
        //             description: {
        //                 welcome: "वापसी पर स्वागत है, <1>{{userName}}</1>! आप भाषा बदल सकते हैं, लेकिन मजा वही रहेगा।",
        //                 funFact: "क्या आप जानते हैं? एक नई भाषा सीखने से आपकी स्मरणशक्ति में सुधार हो सकता है और मानसिक गिरावट में देरी हो सकती है!"
        //             }
        //         },
        //     },
        //     de: {
        //         translation: {
        //             greeting: "Hallo <1>{{userName}}</1> Willkommen!",
        //             description: {
        //                 welcome: "Willkommen zurück, <1>{{userName}}</1>! Sie können die Sprache ändern, aber der Spaß bleibt derselbe.",
        //                 funFact: "Wussten Sie? Das Lernen einer neuen Sprache kann Ihr Gedächtnis verbessern und sogar den kognitiven Verfall verzögern!"
        //             }
        //         },
        //     },
        //     ar: {
        //         translation: {
        //             greeting: "مرحباً <1>{{userName}}</1>، أهلاً وسهلاً!",
        //             description: {
        //                 welcome: "مرحباً بعودتك <1>{{userName}}</1>! تذكر، يمكنك تغيير اللغة، ولكن المتعة تبقى كما هي.",
        //                 funFact: "هل تعلم؟ تعلم لغة جديدة يمكن أن يحسن ذاكرتك ويؤخر التدهور المعرفي!"
        //             }
        //         },
        //     },
        // },
        fallbackLng: "en", // Sets a fallback if no language is found
    });

export default i18n;
