import React, { Fragment, useState } from "react";

import TextInputComponent from "../components/core/inputs/TextInputComponent";
import CheckBoxComponent from "../components/core/inputs/CheckBoxComponent";
import SelectComponent from "../components/core/inputs/SelectComponent";
import NumberInputComponent from "../components/core/inputs/NumberInputComponent";
import DatePickerComponent from "../components/core/inputs/DatePickerComponent";

const GroupTextInputComponent = () => {
  return (
    <Fragment>
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
    </Fragment>
  );
};

const GroupCheckBoxComponent = () => {
  return (
    <Fragment>
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
    </Fragment>
  );
};

const GroupSelectComponent = () => {
  const dataTemp = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
  ];

  return (
    <Fragment>
      <b>* Select Core Component</b>
      <div>
        <div className="row">
          <SelectComponent
            placeholder="Select Core Component"
            options={dataTemp}
          />
        </div>
      </div>
    </Fragment>
  );
};

const GroupNumberInputComponent = () => {
  return (
    <Fragment>
      <b>* Select Number Input Component</b>
      <div>
        <div className="row">
          <NumberInputComponent label="Number input" defValue="0" />
        </div>
      </div>
    </Fragment>
  );
};

const GroupDatePickerComponent = () => {
  const [startDate, setStartDate] = useState(null);

  return (
    <Fragment>
      <b>* DatePicker Input Component</b>
      <div>
        <div className="row">
          <DatePickerComponent
            curDate={startDate}
            setCurDate={setStartDate}
            placeholder="Date Picker Component"
          />
        </div>
      </div>
    </Fragment>
  );
};

const CorePage = () => {
  return (
    <div className="container">
      <div className="row mt-2 justify-content-center">
        <h3>This is core component page</h3>
      </div>
      <GroupTextInputComponent />
      <GroupCheckBoxComponent />
      <GroupSelectComponent />
      <GroupNumberInputComponent />
      <GroupDatePickerComponent />
    </div>
  );
};

export default CorePage;
