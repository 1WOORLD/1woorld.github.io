import i18n from 'i18next';

i18n.init({
    resources: {
        ar: {
            translation: {
                welcome: "مرحبا بكم",
                quran: "القرآن الكريم"
            }
        },
        en: {
            translation: {
                welcome: "Welcome",
                quran: "Holy Quran"
            }
        }
    },
    lng: 'ar',
    fallbackLng: 'ar'
});

export default i18n;