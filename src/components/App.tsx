import React, { useState } from 'react';
import { I18nextProvider } from 'react-i18next';
import { Provider } from 'react-redux';
import Head from './Head';
import Home from './Home';
import { store } from '../store/store';
import i18n from '../i18next/i18next.js';

const App: React.FC = () => {
  const [isDarkTheme, setIsDarkTheme] = useState<boolean>(false);

  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  return (
    <Provider store={store}>
      <I18nextProvider i18n={i18n}>
        <header className={`header ${isDarkTheme ? 'dark-theme-head' : 'light-theme-head'}`}>
          <Head isDarkTheme={isDarkTheme} toggleTheme={toggleTheme} />
        </header>

        <div className={`app-container ${isDarkTheme ? 'dark-theme-app' : 'light-theme-app'}`}>
          <Home isDarkTheme={isDarkTheme} />
        </div>
      </I18nextProvider>
    </Provider>
  );
};

export default App;
