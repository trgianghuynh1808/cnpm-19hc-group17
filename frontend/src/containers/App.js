import React, { Component } from 'react';
import { withRouter, Switch, Route } from 'react-router-dom';
import HomePage from './HomePage';
import LoginPage from './LoginPage';
import CarListPage from './CarListPage';
class App extends Component {
    render() {
        return (
            <Switch>
                <Route path="/" exact>
                    <HomePage {...this.props}/>
                </Route>
                <Route path="/login" exact>
                    <LoginPage {...this.props}/>
                </Route>
                <Route path="/car-list" exact>
                    <CarListPage {...this.props}/>
                </Route>
            </Switch>
        );
    }
}

export default withRouter(App);
