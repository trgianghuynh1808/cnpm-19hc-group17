import React from "react";

import TextInputComponent from "../components/core/inputs/TextInputComponent";

const CorePage = () => {
  return (
    <div className="container">
      <div className="row mt-2 justify-content-center">
        <h3>This is core component page</h3>
      </div>
      <b>* Text Input Component</b>
      <div className="row">
        <div className="col-3">
          <TextInputComponent
            label="Text Input"
            placeholder="Enter text input"
          />
        </div>
        <div className="col-3">
          <TextInputComponent
            label="Text Input disabled"
            value="zzz"
            disabled
          />
        </div>
        <div className="col-3">
          <TextInputComponent
            label="Email Input"
            type="email"
            placeholder="Enter Email"
          />
        </div>
        <div className="col-3">
          <TextInputComponent
            label="Password Input "
            type="password"
            placeholder="Enter Password"
          />
        </div>
      </div>
    </div>
  );
};

export default CorePage;
