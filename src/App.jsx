import { Trans, useTranslation } from 'react-i18next';
import './App.css';
import LanguageSelector from './components/language-selector';
import { useEffect } from 'react';
import axios from 'axios';

function App() {
  const userName = "Srijan";
  const { t, i18n } = useTranslation();

  useEffect(() => {
    document.body.dir = i18n.dir();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [i18n.language]);

  useEffect(() => {
    const languageMap = {
      US: 'en',
      FR: 'fr',
      IN: 'hi',
      DE: 'de',
      AR: 'ar',
    };
    // Fetch location based on external IP (which will be the VPN IP)
    const fetchLocationFromIP = async () => {
      try {
        const {data} = await axios.get('https://ipinfo.io/json?token=a54baaa552e051');
        const countryCode = data.country;
        console.log(countryCode);
        const code = languageMap[countryCode] || 'en'; 
        i18n.changeLanguage(code);
      } catch (error) {
        console.error('Error fetching location data:', error);
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
