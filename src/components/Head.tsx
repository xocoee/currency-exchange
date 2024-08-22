import React from 'react';
import './Head.css';
import { useTranslation } from 'react-i18next';

interface HeadProps {
  isDarkTheme: boolean;
  toggleTheme: () => void;
}

const Head: React.FC<HeadProps> = ({ isDarkTheme, toggleTheme }) => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
  };

  const handleThemeChange = (theme: 'light' | 'dark') => {
    if ((isDarkTheme && theme === 'light') || (!isDarkTheme && theme === 'dark')) {
      toggleTheme();
    }
  };

  return (
    <div className="container-header">
      <div className="language-switcher">
        <button
          className={`${isDarkTheme ? 'light-theme-head' : 'dark-theme-head'} lang-button ${i18n.language === 'en' ? 'active' : ''}`}
          onClick={() => changeLanguage('en')}
        >
          EN
        </button>
        <button
          className={`${isDarkTheme ? 'light-theme-head' : 'dark-theme-head'} lang-button ${i18n.language === 'ua' ? 'active' : ''}`}
          onClick={() => changeLanguage('ua')}
        >
          UA
        </button>
      </div>
      <button
        className={`${isDarkTheme ? 'light-theme-head' : 'dark-theme-head'} lang-button ${!isDarkTheme ? 'active' : ''}`}
        onClick={() => handleThemeChange('light')}
      >
        {t('head.light')}
      </button>
      <button
        className={`${isDarkTheme ? 'light-theme-head' : 'dark-theme-head'} lang-button ${isDarkTheme ? 'active' : ''}`}
        onClick={() => handleThemeChange('dark')}
      >
        {t('head.dark')}
      </button>
    </div>
  );
};

export default Head;
