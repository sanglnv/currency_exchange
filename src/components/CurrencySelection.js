import React, {Component} from 'react';
import {FormControl} from 'react-bootstrap';
import { selectOptions } from './../utils';

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