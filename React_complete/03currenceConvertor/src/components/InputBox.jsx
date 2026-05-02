import React, { useId } from 'react';

function InputBox({
    label,
    amount,
    onAmountChange,
    onCurrencyChange,
    currencyOptions = [],
    selectCurrency = "usd",
    amountDisable = false,
    currencyDisable = false,
}) {
    const amountInputId = useId();

    return (
        <div className="bg-white/40 backdrop-blur-md p-4 rounded-xl flex items-center border border-white/30 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-1/2">
                <label htmlFor={amountInputId} className="text-gray-700 font-medium mb-1 block">
                    {label}
                </label>
                <input
                    id={amountInputId}
                    className="outline-none w-full bg-transparent py-1 text-lg font-semibold text-gray-800 placeholder-gray-500"
                    type="number"
                    placeholder="0.00"
                    disabled={amountDisable}
                    value={amount === 0 ? "" : amount}
                    onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))}
                />
            </div>
            <div className="w-1/2 flex flex-col items-end">
                <p className="text-gray-600 text-xs mb-1 uppercase tracking-wider font-bold">Currency</p>
                <select
                    className="rounded-lg px-2 py-1 bg-white/60 border border-white/50 cursor-pointer outline-none font-medium text-gray-800 focus:bg-white transition-all"
                    value={selectCurrency}
                    onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
                    disabled={currencyDisable}
                >
                    {currencyOptions.map((currency) => (
                        <option key={currency} value={currency}>
                            {currency.toUpperCase()}
                        </option>
                    ))}
                </select>
            </div>
        </div>
    );
}

export default InputBox;