# Internacionalizando Reactjs com i18n

## Install pacotes react-i18next i18next
```shell
npm install react-i18next i18next 
 ```

## Criar pasta e arquivos relacionados
. Criar pasta ```i18n``` e arquivos ``` pt.json```  e ``` en.json``` 

### Estrutura
<pre>
├── node_modules/
├── public/
└── src
    └── i18n
        ├── i18n.jsx
        ├── pt.json
        ├── en.json
    ├── App.css
    ├── App.js
    ├── index.css
    ├── index.js
├── .gitignore
├── package.json
├── package-lock.json
├── README.md
</pre>


```jsx
// src/i18n/i18next.jsx

import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import en from './en.json'
import pt from './pt.json'

i18next
    .use(initReactI18next)
    .init({
        compatibilityJSON: "v4",
        lng: 'en', // if you're using a language detector, do not define the lang option
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
```

```json
// src/i18n/pt.json

{
    "translation": {
        "language":"Português",
        "task_create_one": "Tarefa criada",
        "task_create_other": "{{count}} tarefas criadas"
    }
}
```

```json
// src/i18n/en.json

{
    "translation": {
        "language":"English",
        "task_create_one": "Task created",
        "task_create_other": "{{count}} tasks created"
    }
}
```

## Implementando na aplicação
- Importar arquivo i18n.jsx en.json e pt.json
- Importar e chamar hook useTranslation
- Implementar usando {t('YOUR_TRANSLATION_STRING')}

```jsx
// App.jsx

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

```