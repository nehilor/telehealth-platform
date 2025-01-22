import { useTranslation } from 'react-i18next'

    export default function LanguageSwitcher() {
      const { i18n } = useTranslation()

      const changeLanguage = (language) => {
        i18n.changeLanguage(language)
      }

      return (
        <div className="language-switcher">
          <button
            onClick={() => changeLanguage('en')}
            className="px-3 py-1 text-sm rounded-l border"
          >
            English
          </button>
          <button
            onClick={() => changeLanguage('es')}
            className="px-3 py-1 text-sm border-l-0 border-r-0 border"
          >
            Español
          </button>
          <button
            onClick={() => changeLanguage('fr')}
            className="px-3 py-1 text-sm rounded-r border"
          >
            Français
          </button>
        </div>
      )
    }
