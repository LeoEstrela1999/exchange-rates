import React from 'react';
import './App.css';
import useCurrencyConverter from './hooks/useCurrencyConverter';
import Input from './components/Input';
import Select from './components/Select';
import { allowedCurrencies } from './utils/CurrencyConverterHelpers';

function App() {
  const {currencyExchanges, value, handleChangeValue, handleSelectCurrency} = useCurrencyConverter();

  return (
    <div className="app">
      <div className='app__input-container'>
        <Input value={value} onChange={handleChangeValue}/>
        <Select currencyList={allowedCurrencies} onSelect={handleSelectCurrency}/>
      </div>
      <div className='app__list'>
        {currencyExchanges.map((curr) => 
          <div>
            {curr.value} - {curr.icon} - {curr.convertingTo}
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
