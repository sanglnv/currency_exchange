import {
  CHANGE_INPUT_CURRENCY,
  CHANGE_OUTPUT_CURRENCY,
  CHANGE_CURRENCY_VALUE,
  IS_FETCHING
} from './../actions/currency';
import {FETCH_CURRENCY_RATES_SUCCESS} from "../actions/currency";

const inititalState = {
  input: 1,
  output: 0,
  inType: 'USD',
  outType: 'EUR'
};

const currency = (state = inititalState, payload) => {
  let output = 0;
  const {input, inType, outType} = state;
  const {inVal} = payload;

  if (state && state.rates || payload && payload.rates) {
    let rates;
    if (state.rates) rates = state.rates;
    if (payload.rates) rates = payload.rates;
    if (inVal && inVal != input) {
      output = parseInt(inVal) * rates.rates[outType];
    } else {
      output = input * rates.rates[outType];
    }
  }

  switch (payload.type) {
    case CHANGE_INPUT_CURRENCY:
      return {...state, inType: payload.inType, output};
    case CHANGE_OUTPUT_CURRENCY:
      return {...state, outType: payload.outType, output};
    case CHANGE_CURRENCY_VALUE:
      return {...state, input: payload.inVal, output};
    case FETCH_CURRENCY_RATES_SUCCESS:
      return {...state, rates: payload.rates, output};
    case IS_FETCHING:
      return {...state, isFetching: payload.isFetching}
    default:
      return state;
  }
};

export default currency;

currency.reducer = 'currency';