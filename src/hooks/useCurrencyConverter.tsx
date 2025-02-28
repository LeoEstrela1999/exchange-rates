import { useCallback, useEffect, useMemo, useState } from "react";
import SDK from '@uphold/uphold-sdk-javascript';
import Currency from "../model/Currency";
import Ticker from "../model/Ticker";
import { getSupportedCurrencyExchanges } from "../utils/CurrencyConverterHelpers";
import CurrencyExchange from "../model/CurrencyExchange";
import { useQuery } from "@tanstack/react-query";

const useCurrencyConverter = () => {
    const sdk = useMemo(() => new SDK({
        baseUrl: 'http://api-sandbox.uphold.com',
        clientId: 'd639a6f795694ee0ccf5e16294c70f9deaff95b5',
        clientSecret: '43f898705843b2249231fb4c624914e7bd3f3de3'
      }), []);


    const [selectedCurrency, setSelectedCurrency] = useState<string>('USD');
    const [value, setValue] = useState<number>(10000.00);
    const [actualValue, setActualValue] = useState<number>(value);
    const [currencyExchanges, setCurrencyExchanges] = useState<CurrencyExchange[]>([]);

    const { isLoading, isError, data: currencyRates } = useQuery({
        queryKey: ['currency', selectedCurrency],
        queryFn: () => getTickers(),
        refetchOnWindowFocus: false,
      })

    useEffect(() => {
        setTimeout(
            () => setActualValue(value), 
            500
          );
    }, [value]);

    useEffect(() => {
        debugger;
        const exchanges = getSupportedCurrencyExchanges(currencyRates ?? [], selectedCurrency, actualValue);
        setCurrencyExchanges(exchanges);
    }, [actualValue, currencyRates]);

    const getTickers = useCallback(async () => {
        debugger;
        const rates: Ticker[] = await sdk.getTicker(selectedCurrency);
        return rates;
    }, [sdk, selectedCurrency]);

    const handleSelectCurrency = useCallback((newCurrency: string) => {
        debugger;
        console.log(newCurrency)
        setSelectedCurrency(newCurrency);
    }, []);

    const handleChangeValue = useCallback((newValue: number) => {
        setValue(newValue);
    }, []);

    return {
        handleSelectCurrency,
        handleChangeValue,
        currencyExchanges,
        value
    }

}

export default useCurrencyConverter;