import i18n from 'i18next'
    import { initReactI18next } from 'react-i18next'

    const resources = {
      en: {
        translation: {
          welcome: 'Welcome to Telehealth Platform',
          notifications: 'Notifications',
          noNotifications: 'No new notifications',
          language: 'Language',
          // Add more translations
        }
      },
      es: {
        translation: {
          welcome: 'Bienvenido a la Plataforma de Telemedicina',
          notifications: 'Notificaciones',
          noNotifications: 'No hay notificaciones nuevas',
          language: 'Idioma',
          // Add more translations
        }
      },
      fr: {
        translation: {
          welcome: 'Bienvenue sur la plateforme de télésoins',
          notifications: 'Notifications',
          noNotifications: 'Pas de nouvelles notifications',
          language: 'Langue',
          // Add more translations
        }
      }
    }

    i18n
      .use(initReactI18next)
      .init({
        resources,
        lng: 'en',
        fallbackLng: 'en',
        interpolation: {
          escapeValue: false
        }
      })

    export default i18n
