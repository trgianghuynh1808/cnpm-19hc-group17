import React, { Component } from 'react';
import { withRouter, Switch, Route } from 'react-router-dom';
import ClientPage from './ClientPage';

class App extends Component {
    render() {
        return (
            <Switch>
                <Route path="/" exact>
                    <ClientPage {...this.props}/>
                </Route>
            </Switch>
        );
    }
}

export default withRouter(App);
