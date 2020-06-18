import React from "react";

import MainLayoutComponent from "../../components/layouts/MainLayoutComponent";
import AuthenHOC from "../../components/HOC/AuthenHOC";

const LayoutPage = () => {
  return (
    <MainLayoutComponent>
      <h3 className="m-3">Đây là trang layout mẫu</h3>
    </MainLayoutComponent>
  );
};

export default AuthenHOC(LayoutPage);
