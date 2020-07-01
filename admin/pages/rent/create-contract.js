import React from "react";

import MainLayoutComponent from "../../components/layouts/MainLayoutComponent";
import AuthenHOC from "../../components/HOC/AuthenHOC";
import CreateContractPageComponent from "../../components/rent/CreateContractPageComponent";

const Home = () => {
  return (
    <MainLayoutComponent>
      <CreateContractPageComponent />
    </MainLayoutComponent>
  );
};

export default AuthenHOC(Home);
