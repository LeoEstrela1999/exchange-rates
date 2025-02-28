import Currency from "../model/Currency";
import CurrencyExchange from "../model/CurrencyExchange";
import Ticker from "../model/Ticker";

export const allowedCurrencies: Currency[] = [
  {
    id: "BAT",
    icon: "/images/BAT.png",
  },
  {
    id: "BCH",
    icon: "/images/BCH.png",
  },
  {
    id: "BTC",
    icon: "/images/BTC.png",
  },
  {
    id: "BTG",
    icon: "/images/BTG.png",
  },
  {
    id: "CAD",
    icon: "/images/CAD.png",
  },
  {
    id: "CNY",
    icon: "/images/CNY.png",
  },
  {
    id: "ETH",
    icon: "/images/ETH.png",
  },
  {
    id: "EUR",
    icon: "/images/EUR.png",
  },
  {
    id: "GBP",
    icon: "/images/GBP.png",
  },
  {
    id: "ILS",
    icon: "/images/ILS.png",
  },
  {
    id: "USD",
    icon: "/images/USD.png",
  },
];

export const getValuesForExchanges = (
  tickerList: Ticker[],
  currency: string,
  value: number,
) => {
  return tickerList.map((ticker) =>
    convertTickerToCurrencyExchange(ticker, currency, value),
  );
};

export const getCurrencyIdFromPair = (otherCurrency: string, pair: string) => {
  return pair.replace(otherCurrency, "").replace("-", "");
};

const convertTickerToCurrencyExchange = (
  ticker: Ticker,
  currency: string,
  value: number,
) => {
  const id = getCurrencyIdFromPair(currency, ticker.pair);
  const askNumber = Number(ticker.ask);
  const finalValue = Math.round(askNumber * value * 1000) / 1000;
  const toReturn: CurrencyExchange = {
    value: finalValue,
    convertingTo: id,
    icon: "/images/" + id + ".png",
  };
  return toReturn;
};
