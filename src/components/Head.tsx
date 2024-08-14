import React from 'react';
import './Head.css';
import { useTranslation } from 'react-i18next';

interface HeadProps {
  isDarkTheme: boolean;
  toggleTheme: () => void;
  toggleLanguage: () => void;
}

const Head: React.FC<HeadProps> = ({ isDarkTheme, toggleTheme, toggleLanguage }) => {
  const { t } = useTranslation();

  return (
    <div className="container-header">
      <div onClick={toggleLanguage} style={{ cursor: 'pointer' }}>
        <h2>{t('head.language')}</h2>
      </div>
      <div onClick={toggleTheme} style={{ cursor: 'pointer' }}>
        <h2>{isDarkTheme ? t('head.light') : t('head.dark')}</h2>
      </div>
    </div>
  );
};

export default Head;
