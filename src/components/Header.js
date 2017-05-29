import React, {Component} from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default () => (
  <Navbar>
    <Navbar.Header>
      <Navbar.Brand>
        <Link to="/">Currency Exchange</Link>
      </Navbar.Brand>
    </Navbar.Header>
    <Nav>
      <li><Link to="/">Home</Link></li>
      <li><Link to={'/about'}>About</Link></li>
    </Nav>
  </Navbar>
);