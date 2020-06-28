import React from "react";

import MainLayoutComponent from "../../components/layouts/MainLayoutComponent";
import AuthenHOC from "../../components/HOC/AuthenHOC";
import AddCarPageComponent from "../../components/manager/AddCarPageComponent";

const ManageCar = () => {
  return (
    <MainLayoutComponent>
      <AddCarPageComponent />
    </MainLayoutComponent>
  );
};

export default AuthenHOC(ManageCar);
