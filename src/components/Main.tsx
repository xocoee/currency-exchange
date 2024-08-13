import React, { useState } from 'react';
import { Provider } from 'react-redux';
import Head from './Head';
import App from './App';
import { store } from '../store/store';

const Main: React.FC = () => {
  const [isDarkTheme, setIsDarkTheme] = useState<boolean>(false);

  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  return (
    <Provider store={store}>
      <header className={`header ${isDarkTheme ? 'dark-theme-head' : 'light-theme-head'}`}>
        <Head isDarkTheme={isDarkTheme} toggleTheme={toggleTheme} />
      </header>

      <div className={`app-container ${isDarkTheme ? 'dark-theme-app' : 'light-theme-app'}`}>
        <App isDarkTheme={isDarkTheme} />
      </div>
    </Provider>
  );
};

export default Main;
