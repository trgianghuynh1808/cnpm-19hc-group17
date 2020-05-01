import React from "react";
import Header from "./Header";
import SideBar from "./SideBar";
import Footer from "./Footer";
import Title from "./Title";

export default (props) => {
  const { children, title } = props;
  return (
    <div className="app-container app-theme-white body-tabs-shadow fixed-sidebar fixed-header">
      <Header />
      <div className="app-main">
        <SideBar />
        <div className="app-main__outer">
          <div className="app-main__inner">
            <Title title={title} />
            {children}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
