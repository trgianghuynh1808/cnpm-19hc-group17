import React from "react";

import MainLayoutComponent from "../../components/layouts/MainLayoutComponent";
import AuthenHOC from "../../components/HOC/AuthenHOC";
import RevenueDetailPageComponent from "../../components/manager/RevenueDetailPageComponent";

const RevenueDetail = () => {
  return (
    <MainLayoutComponent>
      <RevenueDetailPageComponent />
    </MainLayoutComponent>
  );
};

export default AuthenHOC(RevenueDetail);
