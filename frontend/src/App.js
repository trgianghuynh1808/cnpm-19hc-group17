import React, { Component } from 'react';
import { Router } from 'react-router-dom';
import App from './containers/App';
import { history } from './utils/route';
export default class extends Component {
  render() {
    return (
    <Router history={history}>
      <App/>
    </Router>
    );
  }
}