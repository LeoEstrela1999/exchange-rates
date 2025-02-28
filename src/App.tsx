import React from 'react';
import './App.css';
import useCurrencyConverter from './hooks/useCurrencyConverter';
import Input from './components/Input';
import Select from './components/Select';
import { allowedCurrencies } from './utils/CurrencyConverterHelpers';
import ListElement from './components/ListElement';

function App() {
  const {currencyExchanges, value, handleChangeValue, handleSelectCurrency, selectedCurrency} = useCurrencyConverter();

  return (
    <div className="app">
      <div className='app__input-container'>
        <Input value={value} onChange={handleChangeValue}/>
        <Select selectedCurrency={selectedCurrency} currencyList={allowedCurrencies} onSelect={handleSelectCurrency}/>
      </div>
      <div className='app__list'>
        {currencyExchanges.map((curr) => 
          <ListElement value={curr.value} name={curr.convertingTo} icon={curr.icon}/>
        )}
      </div>
    </div>
  );
}

export default App;
