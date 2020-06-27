import React from "react";

import MainLayoutComponent from "../../components/layouts/MainLayoutComponent";
import AuthenHOC from "../../components/HOC/AuthenHOC";
import ManageBillPageComponent from "../../components/rent/ManageBillPageComponent";

const Home = () => {
  return (
    <MainLayoutComponent>
      <ManageBillPageComponent />
    </MainLayoutComponent>
  );
};

export default AuthenHOC(Home);
