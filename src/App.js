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
    <article>
      <header>
        <nav>
          <button className={currentLang === 'pt' ? 'button-active' : 'button'} onClick={() => changeLang('pt')}>🇧🇷 </button>
          <button className={currentLang === 'en' ? 'button-active' : 'button'} onClick={() => changeLang('en')}>🇬🇧</button>
        </nav>
        <strong>{t('language')}</strong>
      </header>

      <main>
        <section>
          <h1>{t('post_title')}</h1>
          <p>{t('post_description')}</p>
          <h2>{t('keys_title')}</h2>
          <p>{t('keys_names')}</p>
        </section>
      </main>
    </article >
  );
}

export default App;
