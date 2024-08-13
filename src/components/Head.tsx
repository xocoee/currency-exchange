import React from 'react';
import './Head.css';

interface HeadProps {
  isDarkTheme: boolean;
  toggleTheme: () => void;
}

const Head: React.FC<HeadProps> = ({ isDarkTheme, toggleTheme }) => {
  return (
    <div className="container-header">
      <div onClick={toggleTheme} style={{ cursor: 'pointer' }}>
        <h2>{isDarkTheme ? 'light' : 'dark'}</h2>
      </div>
    </div>
  );
};

export default Head;
