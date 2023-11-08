import React, { useState } from "react";
import "./CurrencyConverter.css"

const CurrencyConverter = () => {
  const [amount, setAmount] = useState(1);
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("EUR");
  const [convertedAmount, setConvertedAmount] = useState(0);

  const convertCurrency = () => {
    // Aqui, você pode definir taxas de conversão fixas ou obter as taxas de uma fonte externa.
    const currencyRates = {
      USD: 1,
      EUR: 0.85,
      GBP: 0.74,
      JPY: 110.98,
    };

    const result = (amount * currencyRates[toCurrency]) / currencyRates[fromCurrency];
    setConvertedAmount(result);
  };

  return (
    <div className="Container">
      <div className="Title">
      <h1>Conversor de Moedas</h1></div>
      <div className="box">
      <div>
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <select
          value={fromCurrency}
          onChange={(e) => setFromCurrency(e.target.value)}
        >
          <option value="USD">USD</option>
          <option value="EUR">EUR</option>
          <option value="GBP">GBP</option>
          <option value="JPY">JPY</option>
        </select>
        para
        <select
          value={toCurrency}
          onChange={(e) => setToCurrency(e.target.value)}
        >
          <option value="USD">USD</option>
          <option value="EUR">EUR</option>
          <option value="GBP">GBP</option>
          <option value="JPY">JPY</option>
        </select>
        <button onClick={convertCurrency}>Converter</button>
      </div>
      <div>
        {amount} {fromCurrency} equivale a {convertedAmount.toFixed(2)} {toCurrency}
      </div></div>
    </div>
  );
};

export default CurrencyConverter;
