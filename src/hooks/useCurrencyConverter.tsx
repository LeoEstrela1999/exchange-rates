import { useCallback, useEffect, useMemo, useState } from "react";
import SDK from "@uphold/uphold-sdk-javascript";
import Currency from "../model/Currency";
import Ticker from "../model/Ticker";
import {
  allowedCurrencies,
  getCurrencyIdFromPair,
  getValuesForExchanges,
} from "../utils/CurrencyConverterHelpers";
import CurrencyExchange from "../model/CurrencyExchange";
import { useQuery } from "@tanstack/react-query";

const useCurrencyConverter = () => {
  const [selectedCurrency, setSelectedCurrency] = useState<string>("USD");
  const [value, setValue] = useState<number>(10000.0);
  const [actualValue, setActualValue] = useState<number>(value);
  const [currencyExchanges, setCurrencyExchanges] = useState<
    CurrencyExchange[]
  >([]);

  const { isLoading, data: currencyRates } = useQuery({
    queryKey: ["currency", selectedCurrency],
    queryFn: () => getTickers(),
    refetchOnWindowFocus: false,
    staleTime: 1000 * 60 * 1,
  });

  const sdk = useMemo(
    () =>
      new SDK({
        baseUrl: "http://api-sandbox.uphold.com",
        clientId: "foo",
        clientSecret: "bar",
      }),
    [],
  );

  useEffect(() => {
    const timeout = setTimeout(() => setActualValue(value), 500);

    return () => clearTimeout(timeout);
  }, [value]);

  useEffect(() => {
    const exchangesWithValues = getValuesForExchanges(
      currencyRates ?? [],
      selectedCurrency,
      actualValue,
    );
    setCurrencyExchanges(exchangesWithValues);
  }, [actualValue, currencyRates]);

  const getTickers = async (): Promise<Ticker[]> => {
    const rates: Ticker[] = await sdk.getTicker(selectedCurrency);
    const supportedTickers = getSupportedTickers(rates);

    return supportedTickers ?? [];
  };

  const getSupportedTickers = useCallback(
    (rates: Ticker[]) => {
      if (!rates) return;

      const tickers = rates?.filter(
        (ticker) => ticker.currency === selectedCurrency,
      );
      const filteredTickers = tickers.filter((ticker) =>
        allowedCurrencies.some(
          (curr) =>
            curr.id !== selectedCurrency &&
            getCurrencyIdFromPair(selectedCurrency, ticker.pair) === curr.id,
        ),
      );

      return filteredTickers;
    },
    [selectedCurrency],
  );

  const handleSelectCurrency = useCallback((newCurrency: string) => {
    setSelectedCurrency(newCurrency);
  }, []);

  const handleChangeValue = useCallback((newValue: number) => {
    setValue(newValue);
  }, []);

  return {
    handleSelectCurrency,
    handleChangeValue,
    currencyExchanges,
    value,
    selectedCurrency,
    isLoading,
  };
};

export default useCurrencyConverter;
