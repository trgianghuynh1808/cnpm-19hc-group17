import React, { Fragment } from "react";

import HeaderComponent from "./HeaderComponent";
import VerticalComponent from "./VerticalComponent";

const LayoutComponent = () => {
  return (
    <Fragment>
      <HeaderComponent />
      <div className="row">
        <div className="col-lg-2">
          <VerticalComponent />
        </div>
        <div className="col-lg-10">x</div>
      </div>
    </Fragment>
  );
};

export default LayoutComponent;
