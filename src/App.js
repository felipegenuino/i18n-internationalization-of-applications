import './i18n/i18n.jsx'
import { useTranslation } from 'react-i18next';
import './App.css';

function App() {
  const { t, i18n } = useTranslation()
  return (
    <div>
      <h1>{t('language')}</h1>
    </div>
  );
}

export default App;
