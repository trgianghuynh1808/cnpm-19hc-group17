import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import React from "react";

import { isServer } from "../../utils";

import {
  GetCurrentUserAPI,
  getCurrentUserWithFailure,
  verifyLogin,
} from "../../stores/UsersState";

const connectWithRedux = connect(
  createStructuredSelector({
    currentUser: GetCurrentUserAPI.dataSelector,
  })
);

export default function withAuth(AuthComponent) {
  class AuthenHOC extends React.Component {
    static getInitialProps = async (ctx) => {
      return AuthComponent.getInitialProps
        ? AuthComponent.getInitialProps(ctx)
        : {};
    };

    componentDidMount() {
      if (!isServer) {
        this.props.dispatch(getCurrentUserWithFailure());
      }
    }

    render() {
      const { currentUser } = this.props;

      return (
        <div>
          {!verifyLogin(currentUser) ? (
            <></>
          ) : (
            <AuthComponent {...this.props} isLoggedIn={true} />
          )}
        </div>
      );
    }
  }

  return connectWithRedux(AuthenHOC);
}
