import './i18n/i18n.jsx'
import { useTranslation } from 'react-i18next';
import './App.css';
import { useState } from 'react';

function App() {
  const { t, i18n } = useTranslation()
  const [currentLang, setCurrentLang] = useState('pt')

  const changeLang = (value) => {
    i18n
      .changeLanguage(value)
      .then(() => {
        setCurrentLang(value)
      })
      .catch((err) => {
        console.log(err)
      })

  }
  return (
    <div>
      <button className={currentLang === 'pt' ? 'button-active' : 'button'} onClick={() => changeLang('pt')}>pt</button>
      <button className={currentLang === 'en' ? 'button-active' : 'button'} onClick={() => changeLang('en')}>en</button>

      <h1>{t('language')}</h1>
    </div >
  );
}

export default App;
