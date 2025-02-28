import Currency from "../model/Currency";
import CurrencyExchange from "../model/CurrencyExchange";
import Ticker from "../model/Ticker";

export const allowedCurrencies: Currency[] = [
    {
      id: 'AED',
      icon: '/images/AED.png',
    },
    {
        id: 'BCH',
        icon: '/images/BCH.png',
      },
      {
        id: 'BRL',
        icon: '/images/BRL.png',
      },
      {
        id: 'BTC',
        icon: '/images/BTC.png',
      },
      {
        id: 'BTG',
        icon: '/images/BTG.png',
      },
      {
        id: 'CAD',
        icon: '/images/CAD.png',
      },
    {
        id: 'CNY',
        icon: '/images/CNY.png',
      },
      {
        id: 'Crypto',
        icon: '/images/Crypto.png',
      },
      {
        id: 'ETH',
        icon: '/images/ETH.png',
      },
      {
        id: 'EUR',
        icon: '/images/EUR.png',
      },
      {
        id: 'GBP',
        icon: '/images/GBP.png',
      },
      {
        id: 'ILS',
        icon: '/images/ILS.png',
      },
      {
        id: 'UAE',
        icon: '/images/UAE.png',
      },
      {
        id: 'USD',
        icon: '/images/USD.png',
      },
      {
        id: 'VOX',
        icon: '/images/VOX.png',
      }
  ]

  export const getSupportedCurrencyExchanges = (tickerList: Ticker[], currency: string, value: number) => {
    const tickers = tickerList.filter((ticker) => ticker.currency === currency && allowedCurrencies.some((curr) => curr.id !== currency && ticker.pair.includes(curr.id)));
    const finalList = tickers.map((ticker) => (convertTickerToCurrencyExchange(ticker, value)));

    return finalList  
  }

  const convertTickerToCurrencyExchange = (ticker: Ticker, value: number) => {
    const id = ticker.pair.split('-')[0];
    const toReturn: CurrencyExchange = {
        value: Number(ticker.ask) * value,
        convertingTo:  id,
        icon: '/image/' + id + '.png'
    }
    return toReturn;
  }