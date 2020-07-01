import React from "react";

import MainLayoutComponent from "../../components/layouts/MainLayoutComponent";
import AuthenHOC from "../../components/HOC/AuthenHOC";
import ManageCarPageComponent from "../../components/manager/ManageCarPageComponent";

const ManageCar = () => {
  return (
    <MainLayoutComponent>
      <ManageCarPageComponent />
    </MainLayoutComponent>
  );
};

export default AuthenHOC(ManageCar);
