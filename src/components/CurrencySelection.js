import React, {Component} from 'react';
import {FormControl} from 'react-bootstrap';

const selectOptions = [
  {
    label: 'Australian Dollar',
    value: 'AUD',
  },
  {
    label: 'Brazilian Real',
    value: 'BRL',
  },
  {
    label: 'Canadian Dollar',
    value: 'CAD',
  },
  {
    label: 'Czech Koruna',
    value: 'CZK',
  },
  {
    label: 'Danish Krone',
    value: 'DKK',
  },
  {
    label: 'Euro',
    value: 'EUR',
  },
  {
    label: 'Hong Kong Dollar',
    value: 'HKD',
  },
  {
    label: 'Hungarian Forint',
    value: 'HUF',
  },
  {
    label: 'Israeli New Sheqel',
    value: 'ILS',
  },
  {
    label: 'Japanese Yen',
    value: 'JPY',
  },
  {
    label: 'Malaysian Ringgit',
    value: 'MYR',
  },
  {
    label: 'Mexican Peso',
    value: 'MXN',
  },
  {
    label: 'Norwegian Krone',
    value: 'NOK',
  },
  {
    label: 'New Zealand Dollar',
    value: 'NZD',
  },
  {
    label: 'Philippine Peso',
    value: 'PHP',
  },
  {
    label: 'Polish Zloty',
    value: 'PLN',
  },
  {
    label: 'Pound Sterling',
    value: 'GBP',
  },
  {
    label: 'Singapore Dollar',
    value: 'SGD',
  },
  {
    label: 'Swedish Krona',
    value: 'SEK',
  },
  {
    label: 'Swiss Franc',
    value: 'CHF',
  },
  {
    label: 'Taiwan New Dollar',
    value: 'TWD',
  },
  {
    label: 'Thai Baht',
    value: 'THB',
  },
  {
    label: 'Turkish Lira',
    value: 'TRY',
  },
  {
    label: 'U.S. Dollar',
    value: 'USD',
  }
];

class CurrencySelection extends Component {
  render() {
    const { onChange, selected } = this.props;
    return (
      <FormControl
        value={selected}
        onChange={(e) => onChange(e.target.value)}
        componentClass="select">
        {selectOptions.map((o, i) => <option key={i} value={o.value}>{o.label}</option>)}
      </FormControl>
    );
  }
}

export default CurrencySelection;