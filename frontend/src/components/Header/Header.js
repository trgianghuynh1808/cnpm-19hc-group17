import React, { useEffect } from 'react';
import { HeaderTop, HeaderBottom } from './components';
import { compose } from "redux";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import {
    GetCurrentUserAPI,
    getCurrentUserWithSucces,
} from "../../stores/UsersState"

const connectToRedux = connect(
  createStructuredSelector({
    currentUser: GetCurrentUserAPI.dataSelector,
  }),
  (distpatch) => ({
    getCurrentUserWithSucces: () => {
      distpatch(getCurrentUserWithSucces());
    },
  })
);

const enhance = compose(connectToRedux);

const Header = (props) => {
  const {getCurrentUserWithSucces, currentUser} = props;
  useEffect(() => {
    getCurrentUserWithSucces();
  }, [getCurrentUserWithSucces]);
  return (
    <header id="header-area" className="fixed-top">
        <HeaderTop />
        <HeaderBottom {...props} currentUser={currentUser}/>
    </header>

  );
}

export default enhance(Header);