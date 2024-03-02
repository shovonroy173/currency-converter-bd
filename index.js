import Freecurrencyapi from '@everapi/freecurrencyapi-js';
const freecurrencyapi = new Freecurrencyapi('fca_live_ouxtQDOeyfA9eCLhjwXKSZnWUA2YV8TgfxQgzVJr');

const convertCurrency = async(fromCurrency , toCurrency , unit)=>{
    const res = await freecurrencyapi.latest({
        base_currency: fromCurrency,
        currencies: toCurrency
    });
    const multiplier = res.data[toCurrency];
    return multiplier*unit;
};

export default convertCurrency;
