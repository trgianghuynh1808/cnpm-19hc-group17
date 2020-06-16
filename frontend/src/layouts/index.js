import React, { Fragment } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const PageLayout = (props) => {
  const { children } = props;
  return (
    <Fragment>
      <Header {...props}/>
      {children}
      <Footer />
    </Fragment>
  );
};

export default PageLayout;
