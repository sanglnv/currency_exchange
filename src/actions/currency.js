export const FETCH_ERROR = 'FETCH_ERROR';
export const fetchError = (bool) => ({type: FETCH_ERROR, hasError: bool});

export const IS_FETCHING = 'IS_FETCHING';
export const isFetching = (bool) => ({type: IS_FETCHING, isFetching: bool});

export const fetchCurrencyRates = (url) => dispatch => {
  dispatch(isFetching(true));

  return fetch(url).then((response) => {
    if (!response.ok) {
      throw Error(response.statusText);
    }

    dispatch(isFetching(false));

    return response.json();
  })
    .then(rates => dispatch(fetchCurrencyRatesSuccess(rates)))
    .catch(err => dispatch(fetchError(true)))
};


export const FETCH_CURRENCY_RATES_SUCCESS = 'FETCH_CURRENCY_RATES_SUCCESS';
export const fetchCurrencyRatesSuccess = (rates) => ({
  type: FETCH_CURRENCY_RATES_SUCCESS,
  rates
});

export const CHANGE_INPUT_CURRENCY = 'CHANGE_INPUT_CURRENCY';
export const CHANGE_OUTPUT_CURRENCY = 'CHANGE_OUTPUT_CURRENCY';
export const changeCurrency = (inType, currency) => ({
  type: inType && inType === 'input' && CHANGE_INPUT_CURRENCY || CHANGE_OUTPUT_CURRENCY,
  currency
});


export const CHANGE_CURRENCY_VALUE = 'CHANGE_CURRENCY_VALUE';
export const changeCurrencyValue = (currencyValue) => ({
  type: CHANGE_CURRENCY_VALUE,
  inVal: currencyValue
});