import React, { Component } from 'react';
import { Router } from 'react-router-dom';
import App from './containers/App';
import { createBrowserHistory } from 'history';

const history = createBrowserHistory();
export default class extends Component {
  render() {
    return (
      <Router history={history}>
      <App/>
    </Router>
    );
  }
}