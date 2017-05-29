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
  FormControl
} from 'react-bootstrap';
import CurrencySelection from './CurrencySelection';
import {changeCurrency, changeCurrencyValue, fetchCurrencyRates} from "../actions/currency";
import { selectOptions } from './../utils';
import loading from './../loading.svg'

class Home extends Component {
  shouldComponentUpdate(nextProps) {
    const {input, output, inType, outType, isFetching} = this.props;
    return nextProps.input != input || nextProps.output != output || nextProps.inType != inType || nextProps.outType != outType || nextProps.isFetching != isFetching;
  }

  componentDidMount() {
    this.fetchRates();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.inType != this.props.inType || prevProps.outType != this.props.outType)
      this.fetchRates();
  }

  fetchRates = () => {
    const { inType, fetchData } = this.props;
    fetchData(`http://api.fixer.io/latest?base=${inType}`)
  };

  renderLoading = () => (
    <div className="App-loading">
      <img src={loading} className="image" alt="loading" />
    </div>
  )

  render() {
    const {
      input, output, inType, outType, changeCurrency, changeCurrencyValue, rates, isFetching
    } = this.props;
    console.log('isFetching', isFetching)
    return (
      <Grid>
        <Row>
          <Col sm={6} className="App-home">
            <Panel style={{position: 'relative'}}>
              {isFetching ? this.renderLoading() : null}
              <PageHeader>
                <small>{input} {selectOptions[selectOptions.findIndex(o => o.value == inType)].label} equals</small>
                <p>{output.toFixed(4)} {selectOptions[selectOptions.findIndex(o => o.value == outType)].label}</p>
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
                            onChange={(e) => changeCurrencyValue(e.target.value)}
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
                          <FormControl type="text" readOnly value={Number(output.toFixed(1))}
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

const mapStateToProps = ({currency: {input, output, inType, outType, rates, isFetching}}) => ({input, output, inType, outType, rates, isFetching});
const mapDispatchToProps = (dispatch) => ({
  changeCurrency: (inType, currencyType) => dispatch(changeCurrency(inType, currencyType)),
  changeCurrencyValue: (value) => dispatch(changeCurrencyValue(value)),
  fetchData: (url) => dispatch(fetchCurrencyRates(url))
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);