import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import React from "react";

import { isServer } from "../../libs";

import {
  GetCurrentUserAPI,
  getCurrentUserWithFailure,
  verifyLogin,
} from "../../stores/UserState";

const connectWithRedux = connect(
  createStructuredSelector({
    currentUser: GetCurrentUserAPI.dataSelector,
  })
);

export default function withAuth(AuthComponent) {
  class AuthenHOC extends React.Component {
    componentDidMount() {
      if (!isServer) {
        this.props.dispatch(getCurrentUserWithFailure());
      }
    }

    render() {
      const { currentUser } = this.props;

      return (
        <div>
          <AuthComponent
            {...this.props}
            isHOC={true}
            isLoggedIn={verifyLogin(currentUser)}
          />
        </div>
      );
    }
  }

  return connectWithRedux(AuthenHOC);
}
