/**
 * Created by sanglnv on 5/27/17.
 */
import React from 'react';
import Helmet from 'react-helmet';
import { Grid, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default () => (
  <Grid>
    <Helmet>
      <meta charSet="utf-8" />
      <title>About</title>
    </Helmet>
    <Row>
      <Col sm={12}><h5><Link to={'/'}>Currency converter</Link></h5></Col>
      <Col sm={12}><h5>Le Nguyen Vinh Sang</h5></Col>
    </Row>
  </Grid>
)