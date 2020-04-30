import React from "react";
import Wrapper from "../components";
import Table from "../components/Table";
import AuthenHOC from "../components/HOC/AuthenHOC";

const HomePage = ({ login }) => {
  document.title = "Dashboard";
  return (
    <Wrapper>
      <Table />
    </Wrapper>
  );
};

export default AuthenHOC(HomePage);
