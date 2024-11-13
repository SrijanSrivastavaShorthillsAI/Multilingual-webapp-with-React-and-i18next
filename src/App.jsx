import { Trans, useTranslation } from 'react-i18next';
import './App.css';
import LanguageSelector from './components/language-selector';
import { useEffect } from 'react';
import axios from 'axios';
import { languageMap } from '../constant';

function App() {
  const userName = "Srijan";
  const { t, i18n } = useTranslation();

  useEffect(() => {
    document.body.dir = i18n.dir();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [i18n.language]);

  useEffect(() => {
    const fetchLocationFromIP = async () => {
      // * 1. Check if there is a saved language in local storage
      const savedLanguage = localStorage.getItem('i18nextLng');
      if (savedLanguage) {
        i18n.changeLanguage(savedLanguage);
        return;
      }

      // * 2. check if the user is visiting the site for the first time, then we will check the navigator language and set the language according to user preferred language for browser
      const navLng = navigator.language.split('-')[0];
      if (navLng && i18n.hasResourceBundle(navLng)) {
        console.log("Navigator language detected:", navLng);
        i18n.changeLanguage(navLng);
        return;
      }

      try {
        const {data} = await axios.get(`https://ipinfo.io/json?token=a54baaa552e051`);
        const countryCode = data.country;
        console.log(countryCode);
        const code = languageMap[countryCode] || 'en'; 
        i18n.changeLanguage(code);
      } catch (error) {
        console.error('Error fetching location data:', error);
        // Fallback to browser language
        const browserLang = navigator.language.split('-')[0];
        const fallbackLang = languageMap[browserLang] || 'en';
        i18n.changeLanguage(fallbackLang);
      }
    };
    fetchLocationFromIP();
  }, [i18n, i18n.changeLanguage]);


  return (
    <div className='container'>
      <LanguageSelector />
      <h1>
        <Trans i18nKey="greeting" values={{ userName }} components={{ 1: <strong className="username" /> }} />
      </h1>
      <p>
        <Trans i18nKey="description.welcome" values={{ userName }} components={{ 1: <strong className="username" /> }} />
      </p>
      <p>{t("description.funFact")}</p>
    </div>
  );
}

export default App;
