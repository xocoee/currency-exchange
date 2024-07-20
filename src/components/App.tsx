import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import exchangeLogo from '/app-logo.png';
import './App.css';

import { fetchRates, AppDispatch, RootState } from '../store/store';

const App = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { rateUSD, rateEUR, time } = useSelector((state: RootState) => state.rates);
  const [inputUSD, setInputUSD] = useState<number>(rateUSD);
  const [resultEUR, setResultEUR] = useState<number>(rateEUR);
  const [inputEUR, setInputEUR] = useState<number>(rateEUR);
  const [resultUSD, setResultUSD] = useState<number>(rateUSD);
  const timeResult = `data on ${time.split('2024')[0] + '2024'}`;
  useEffect(() => {
    dispatch(fetchRates());
    setInputUSD(rateUSD);
    setResultEUR(rateEUR);
    setInputEUR(rateEUR);
    setResultUSD(rateUSD);
  }, [dispatch, rateUSD, rateEUR, time]);

  const handleInputChangeEUR = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseFloat(event.target.value);
    setInputUSD(value);
    if (Number.isNaN(value)) {
      setInputUSD(rateUSD);
      setResultEUR(parseFloat(rateEUR.toFixed(2)));
    } else {
      setResultEUR(parseFloat((value * rateEUR).toFixed(2)));
    }
  };

  const handleInputChangeUSD = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseFloat(event.target.value);
    setInputEUR(value);
    if (Number.isNaN(value)) {
      setInputEUR(rateEUR);
      setResultUSD(parseFloat(rateUSD.toFixed(2)));
    } else {
      setResultUSD(parseFloat((value / rateEUR).toFixed(2)));
    }
  };

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={exchangeLogo} className="logo" alt="Vite logo" />
        </a>
      </div>
      <h1>Сurrency-Exchange</h1>
      <h4>{rateUSD} United States Dollar equals</h4>
      <h2>{rateEUR} Euro</h2>
      <h4>{timeResult}</h4>
      <div className="container">
        <h2>USD</h2>
        <input
          type="number"
          className="input"
          value={inputUSD}
          onChange={handleInputChangeEUR}
          placeholder="Enter amount in EUR"
        />
        <h2 className="result">= {resultEUR} EUR</h2>
      </div>
      <div className="container">
        <h2>EUR</h2>
        <input
          type="number"
          className="input"
          value={inputEUR}
          onChange={handleInputChangeUSD}
          placeholder="Enter amount in USD"
        />
        <h2 className="result">= {resultUSD} USD</h2>
      </div>
    </>
  );
};

export default App;
