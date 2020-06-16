import React from "react";

import TextInputComponent from "../components/core/inputs/TextInputComponent";
import CheckBoxComponent from "../components/core/inputs/CheckBoxComponent";

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
      <b>* Check Box Component</b>
      <div>
        <div className="row">
          <div className="col-6">
            <CheckBoxComponent label="Check box1" value="zz" />
            <CheckBoxComponent
              label="Check box disabled"
              value="zz1"
              disabled
            />
          </div>
          <div className="col-6">
            <CheckBoxComponent
              label="Check box1"
              value="xx1"
              type="radio"
              name="testCheckBox"
            />
            <CheckBoxComponent
              label="Check box2"
              value="xx2"
              type="radio"
              name="testCheckBox"
            />
            <CheckBoxComponent
              label="Check box disabled"
              value="xx3"
              name="testCheckBox"
              type="radio"
              disabled
            />
          </div>
          <div className="col-6">
            <CheckBoxComponent
              label="Check box1"
              value="zz"
              inline
              className="pr-3"
            />
            <CheckBoxComponent
              label="Check box disabled"
              value="zz1"
              disabled
              inline
            />
          </div>
          <div className="col-6">
            <CheckBoxComponent
              label="Check box1"
              value="xx1"
              type="radio"
              name="testCheckBox"
              inline
              className="pr-3"
            />
            <CheckBoxComponent
              className="pr-3"
              label="Check box2"
              value="xx2"
              type="radio"
              name="testCheckBox"
              inline
            />
            <CheckBoxComponent
              label="Check box disabled"
              value="xx3"
              name="testCheckBox"
              type="radio"
              disabled
              inline
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CorePage;
