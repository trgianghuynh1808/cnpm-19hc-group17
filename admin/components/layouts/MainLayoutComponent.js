import React, { Fragment } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { useRouter } from "next/router";

import HeaderComponent from "./HeaderComponent";
import VerticalComponent from "./VerticalComponent";
import MainContentComponent from "./MainContentComponent";
import data from "../../db.json";
import { GetCurrentUserAPI } from "../../stores/UserState";

const connectWithRedux = connect(
  createStructuredSelector({
    currentUser: GetCurrentUserAPI.dataSelector,
  })
);

const LayoutComponent = ({ children, currentUser }) => {
  // const curRole = "rent"; //temp
  const curRole = "manager"; //temp

  const { menuInfos } = data;
  const router = useRouter();

  const curMenuInfo = menuInfos.find((menuInfo) => menuInfo.role === curRole);
  let curMenuItem = curMenuInfo.menuItems.find(
    (menuItem) => menuItem.slug === router.pathname
  );

  if (!curMenuItem) curMenuItem = { name: "Example" }; //demo

  if (!currentUser) return <Fragment />;

  return (
    <Fragment>
      <HeaderComponent
        roleName={curMenuInfo.name}
        username={currentUser.username}
      />
      <div className="row">
        <div className="col-lg-2 pr-0 pl-0">
          <VerticalComponent menuItemsData={curMenuInfo.menuItems} />
        </div>
        <div className="col-lg-10 pl-0 pr-0">
          <MainContentComponent
            username={currentUser.username}
            title={curMenuItem.name}
          >
            {children}
          </MainContentComponent>
        </div>
      </div>
    </Fragment>
  );
};

export default connectWithRedux(LayoutComponent);
