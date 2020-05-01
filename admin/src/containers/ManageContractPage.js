import React from "react";
import Wrapper from "../components";
import AuthenHOC from "../components/HOC/AuthenHOC";

const ManageContractPage = () => {
  document.title = "Manage Contract";

  return (
    <Wrapper title="Manage Contract">
      <div>Test</div>
    </Wrapper>
  );
};

export default AuthenHOC(ManageContractPage);
