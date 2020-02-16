import React, { Component } from 'react';
import { withRouter, Switch, Route } from 'react-router-dom';
import HomePage from './HomePage';
import LoginPage from './LoginPage';

class App extends Component {
    render() {
        return (
            <Switch>
                <Route path="/" exact>
                    <HomePage/>
                </Route>
                <Route path="/login" exact>
                    <LoginPage/>
                </Route>
            </Switch>
        );
    }
}

export default withRouter(App);
