import React, { Fragment } from "react";

import HeaderComponent from "./HeaderComponent";
import VerticalComponent from "./VerticalComponent";
import MainContentComponent from "./MainContentComponent";

const LayoutComponent = () => {
  return (
    <Fragment>
      <HeaderComponent />
      <div className="row">
        <div className="col-lg-2 pr-0 pl-0">
          <VerticalComponent />
        </div>
        <div className="col-lg-10 pl-0 pr-0">
          <MainContentComponent />
        </div>
      </div>
    </Fragment>
  );
};

export default LayoutComponent;
