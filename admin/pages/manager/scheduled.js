import React from "react";

import MainLayoutComponent from "../../components/layouts/MainLayoutComponent";
import AuthenHOC from "../../components/HOC/AuthenHOC";
import ScheduledPageComponent from "../../components/manager/ScheduledPageComponent";

const Scheduled = () => {
  return (
    <MainLayoutComponent>
      <ScheduledPageComponent />
    </MainLayoutComponent>
  );
};

export default AuthenHOC(Scheduled);
