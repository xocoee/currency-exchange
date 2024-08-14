import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import exchangeLogo from '/app-logo.png';
import './Home.css';
import { fetchRates, AppDispatch, RootState } from '../store/store';
import { useTranslation } from 'react-i18next';
import resultDate from '../utils/utilsTime';

interface AppProps {
  isDarkTheme: boolean;
}

const App: React.FC<AppProps> = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch<AppDispatch>();
  const { rateUSD, rateEUR, time } = useSelector((state: RootState) => state.rates);

  const [inputUSD, setInputUSD] = useState<number | string>(1);
  const [resultEUR, setResultEUR] = useState<number | undefined>();
  const [inputEUR, setInputEUR] = useState<number | string>(1);
  const [resultUSD, setResultUSD] = useState<number | undefined>();

  const timeResult = resultDate(time);

  useEffect(() => {
    dispatch(fetchRates());
    handleInputChangeEUR({
      target: { value: inputUSD.toString() },
    } as React.ChangeEvent<HTMLInputElement>);
    handleInputChangeUSD({
      target: { value: inputEUR.toString() },
    } as React.ChangeEvent<HTMLInputElement>);
  }, [dispatch, rateUSD, rateEUR, time]);

  const handleInputChangeEUR = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setInputUSD(value);

    const numericValue = parseFloat(value);
    if (Number.isNaN(numericValue)) {
      setResultEUR(undefined);
    } else {
      setResultEUR(parseFloat((numericValue * rateEUR).toFixed(2)));
    }
  };

  const handleInputChangeUSD = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setInputEUR(value);

    const numericValue = parseFloat(value);
    if (Number.isNaN(numericValue)) {
      setResultUSD(undefined);
    } else {
      setResultUSD(parseFloat((numericValue / rateEUR).toFixed(2)));
    }
  };

  return (
    <>
      <div className="app-content">
        <div>
          <img src={exchangeLogo} className="logo" alt="Home logo" />
        </div>
        <div className="text">
          <h1>{t('homePage.h1')}</h1>
          <h4>
            {rateUSD} {t('homePage.h4')}
          </h4>
          <h2>
            {rateEUR} {t('homePage.h2')}
          </h2>
          <h4>
            {t('homePage.timeResult')} {timeResult}
          </h4>
        </div>
        <div className="container">
          <h2>{t('homePage.USD')}</h2>
          <input
            type="text"
            className="input"
            value={inputUSD}
            onChange={handleInputChangeEUR}
            placeholder="Enter amount in EUR"
          />
          <h2 className="result">
            = {resultEUR} {t('homePage.EUR')}
          </h2>
        </div>
        <div className="container">
          <h2>{t('homePage.EUR')}</h2>
          <input
            type="text"
            className="input"
            value={inputEUR}
            onChange={handleInputChangeUSD}
            placeholder="Enter amount in USD"
          />
          <h2 className="result">
            = {resultUSD} {t('homePage.USD')}
          </h2>
        </div>
      </div>
    </>
  );
};

export default App;
