/**
 * Created by sanglnv on 5/27/17.
 */
import React, {Component} from 'react';
import { connect } from 'react-redux';
import {
  Grid,
  Row,
  Col,
  Panel,
  PageHeader,
  FormGroup,
  FormControl,
} from 'react-bootstrap';
import CurrencySelection from './CurrencySelection';
import {changeCurrency, changeCurrencyValue, fetchCurrencyRates} from "../actions/currency";

class Home extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const { outType, fetchData } = this.props;
    fetchData(`http://api.fixer.io/latest?base=${outType}`);
  }

  render() {
    const {
      input,
      output,
      inType,
      outType,
      changeCurrency,
      changeCurrencyValue,
      rates
    } = this.props;
    console.log(input, output, inType, outType, rates);
    return (
      <Grid>
        <Row>
          <Col sm={6}>
            <Panel>
              <PageHeader>
                <small>1 Vietnamese Dong equals</small>
                <p>0.000044 US Dollar</p>
              </PageHeader>
              <form>
                <Row>
                  <Col sm={12}>
                    <Row>
                      <Col sm={6}>
                        <FormGroup>
                          <FormControl
                            type="text"
                            value={input}
                            onChange={(e) => {
                              console.log('onChange', e.target.value)
                              changeCurrencyValue(e.target.value)
                            }}
                          />
                        </FormGroup>
                      </Col>
                      <Col sm={6}>
                        <FormGroup controlId="formControlsSelect">
                          <CurrencySelection selected={inType} onChange={currency => changeCurrency('input', currency)} />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col sm={6}>
                        <FormGroup>
                          <FormControl type="text" readOnly defaultValue={output}
                          />
                        </FormGroup>
                      </Col>
                      <Col sm={6}>
                        <FormGroup controlId="formControlsSelect">
                          <CurrencySelection selected={outType} onChange={(currency) => changeCurrency(null, currency)} />
                        </FormGroup>
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </form>
            </Panel>
          </Col>
          <Col sm={6}></Col>
        </Row>
      </Grid>
    )
  }
}

const mapStateToProps = ({currency: {input, output, inType, outType, rates}}) => ({input, output, inType, outType, rates});
const mapDispatchToProps = (dispatch) => ({
  changeCurrency: (value) => dispatch(changeCurrency(value)),
  changeCurrencyValue: (value) => dispatch(changeCurrencyValue(value)),
  fetchData: (url) => dispatch(fetchCurrencyRates(url))
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);