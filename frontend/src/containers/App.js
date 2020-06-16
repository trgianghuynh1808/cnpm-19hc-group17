import React, { Component } from "react";
import { withRouter, Switch, Route } from "react-router-dom";
import HomePage from "./HomePage";
import LoginPage from "./LoginPage";
import CarListPage from "./CarListPage";
import GalleryPage from "./GalleryPage";
import CarDetailPage from "./CarDetailPage";
import ProfilePage from "./ProfilePage";
import AboutPage from "./AboutPage";
import ServicesPage from "./ServicesPage";
import ContactPage from "./ContactPage";
import DriverPage from "./DriverPage";

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
        <Route path="/car-list" exact>
          <CarListPage {...this.props} />
        </Route>
        <Route path="/gallery" exact>
          <GalleryPage {...this.props} />
        </Route>
        <Route path="/car-details/:id" component={CarDetailPage} />
        <Route path="/profile" exact>
          <ProfilePage {...this.props} />
        </Route>
        <Route path="/about" exact>
          <AboutPage {...this.props} />
        </Route>
        <Route path="/services" exact>
          <ServicesPage {...this.props} />
        </Route>
        <Route path="/contact" exact>
          <ContactPage {...this.props} />
        </Route>
        <Route path="/driver" exact>
          <DriverPage {...this.props} />
        </Route>
      </Switch>
    );
  }
}

export default withRouter(App);
