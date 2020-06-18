import React from "react";

import MainLayoutComponent from "../components/layouts/MainLayoutComponent";
import AuthenHOC from "../components/HOC/AuthenHOC";
import DashBoardPageComponent from "../components/pages/DashBoardPageComponent";

const Home = () => {
  return (
    <MainLayoutComponent>
      <DashBoardPageComponent />
    </MainLayoutComponent>
  );
};

export default AuthenHOC(Home);
