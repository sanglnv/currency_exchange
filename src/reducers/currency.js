import {
  CHANGE_INPUT_CURRENCY,
  CHANGE_OUTPUT_CURRENCY,
  CHANGE_CURRENCY_VALUE
} from './../actions/currency';
import {FETCH_CURRENCY_RATES_SUCCESS} from "../actions/currency";

const inititalState = {
  input: 0,
  output: 0,
  inType: 'HKD',
  outType: 'USD'
};

const currency = (state = inititalState, payload) => {
  console.log(state, payload)
  switch (payload.type) {
    case CHANGE_INPUT_CURRENCY:
      return Object.assign(state, {output: payload.outVal});
    case CHANGE_OUTPUT_CURRENCY:
      return Object.assign(state, {output: payload.outVal});
    case CHANGE_CURRENCY_VALUE:
      return Object.assign(state, {input: payload.inVal, output: payload.outVal});
    case FETCH_CURRENCY_RATES_SUCCESS:
      return Object.assign(state, {rates: payload.rates});
    default:
      return state;
  }
};

export default currency;

currency.reducer = 'currency';