import {
  convertTickerToCurrencyExchange,
  getCurrencyIdFromPair,
} from "./CurrencyConverterHelpers";
import Ticker from "../model/Ticker";
import CurrencyExchange from "../model/CurrencyExchange";

test("getCurrencyIdFromPair should return currency when separated by -", () => {
  const id = getCurrencyIdFromPair("EUR", "EUR-USD");
  expect(id).toEqual("USD");
});

test("getCurrencyIdFromPair should return currency when two currencies are together", () => {
  const id = getCurrencyIdFromPair("EUR", "USDEUR");
  expect(id).toEqual("USD");
});

test("convertTickerToCurrencyExchange should return valid CurrencyExchange", () => {
  const value = 2;
  const currency = "USD";
  const ticker: Ticker = {
    ask: "5",
    bid: "6",
    currency: "USD",
    pair: "USDEUR",
  };

  const expected: CurrencyExchange = {
    icon: "/images/EUR.png",
    convertingTo: "EUR",
    value: 10,
  };

  const result = convertTickerToCurrencyExchange(ticker, currency, value);
  expect(result).toEqual(expected);
});
