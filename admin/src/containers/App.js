import React, { Component } from "react";
import { withRouter, Switch, Route } from "react-router-dom";
import LoginPage from "./LoginPage";
import HomePage from "./HomePage";
import ManageContractPage from "./ManageContractPage";

class App extends Component {
  render() {
    return (
      <Switch>
        <Route path="/" exact>
          <HomePage {...this.props} />
        </Route>
        <Route path="/login" exact>
          <LoginPage {...this.props} />
        </Route>
        <Route path="/manage-contract" exact>
          <ManageContractPage {...this.props} />
        </Route>
      </Switch>
    );
  }
}

export default withRouter(App);
