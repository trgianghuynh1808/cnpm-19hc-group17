import React, { Fragment, useState } from "react";

import TextInputComponent from "../components/core/inputs/TextInputComponent";
import CheckBoxComponent from "../components/core/inputs/CheckBoxComponent";
import SelectComponent from "../components/core/inputs/SelectComponent";
import NumberInputComponent from "../components/core/inputs/NumberInputComponent";
import DatePickerComponent from "../components/core/inputs/DatePickerComponent";
import BackButtonComponent from "../components/core/BackButtonComponent";
import TitleComponent from "../components/core/TitleComponent";
import SelectFilterComponent from "../components/core/inputs/SelectFilterComponent";
import ButtonComponent from "../components/core/ButtonComponent";
import SearchBarComponent from "../components/core/SearchBarComponent";
import TextAreaInputComponent from "../components/core/inputs/TextAreaInputComponent";
import TableComponent from "../components/core/TableComponent";

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
        <div className="col-6">
          <TextAreaInputComponent
            label="Text Area Input "
            placeholder="Enter Text Area"
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

const GroupExtraComponent = () => {
  const dataTemp = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
  ];

  return (
    <Fragment>
      <b>* Extra Component</b>
      <div>
        <div className="row">
          <div className="col-3">
            <span className="mr-2">Back Button:</span>
            <BackButtonComponent />
          </div>
          <div className="col-3">
            <span className="mr-2">Title:</span>
            <TitleComponent content={"test title"} />
          </div>
          <div className="col-4">
            <span className="mr-2">Select Filter:</span>
            <SelectFilterComponent
              placeholder="Select Filter Component"
              options={dataTemp}
            />
          </div>
        </div>
        <div className="row mt-3">
          <div className="col-4">
            <span className="mr-2">Search bar:</span>
            <SearchBarComponent
              placeholder="Search bar..."
              doOnKeyPress={(value) => {
                console.log("test", value);
              }}
            />
          </div>
          <div className="col-6">
            <span className="mr-2">Button:</span>
            <ButtonComponent
              icon={
                <img
                  src="/static/assets/images/icons/add-icon.png"
                  width="16"
                  height="16"
                />
              }
              content="Test Button"
              color="green"
              doOnClick={() => console.log("test click btn")}
            />
            <ButtonComponent
              className="ml-2"
              icon={
                <img
                  src="/static/assets/images/icons/reset-icon.png"
                  width="16"
                  height="16"
                />
              }
              content="Test Button"
              color="red"
              doOnClick={() => console.log("test click btn")}
            />
          </div>
        </div>
      </div>
    </Fragment>
  );
};

const BadgeComponent = ({ content, status }) => {
  return <span className={`badge badge-${status} p-2`}>{content}</span>;
};

const ActionsComponent = () => {
  return (
    <div className="row justify-content-center">
      <div className="col-3">
        <img
          src="/static/assets/images/icons/edit-icon.png"
          height="25"
          width="25"
          className="action-icon"
        ></img>
      </div>
      <div className="col-3">
        <img
          src="/static/assets/images/icons/trash-icon.png"
          height="25"
          width="25"
          className="action-icon"
        ></img>
      </div>
      <style jsx>
        {`
          .action-icon {
            cursor: pointer;
          }
        `}
      </style>
    </div>
  );
};

const GroupTableComponent = () => {
  const COLUMN_DATA = [
    {
      name: "Vai trò",
      key: "role",
    },
    {
      name: "Số người",
      key: "amount",
    },
    {
      name: "Tình trạng",
      key: "status",
      renderComponent: (curData) => {
        let curStatus = "";

        switch (curData) {
          case "Đủ người":
            curStatus = "success";
            break;
          case "Thiếu người":
            curStatus = "danger";
            break;
          default:
            curStatus = "primary";
            break;
        }

        return <BadgeComponent content={curData} status={curStatus} />;
      },
    },
    {
      name: "Hành động",
      key: "actions",
      renderComponent: (curData) => {
        return <ActionsComponent />;
      },
    },
  ];

  const ROW_DATA = [
    {
      role: "Quản Lý",
      amount: "1/1",
      status: "Đủ người",
      actions: "Sua Xoa",
    },
    {
      role: "Bảo Dưỡng",
      amount: "2/3",
      status: "Thiếu người",
      actions: "Sua Xoa Thêm",
    },
    {
      role: "Thuê Xe",
      amount: "3/3",
      status: "Đủ người",
      actions: "Sua Xoa",
    },
  ];

  const pageInfo = {
    isPrev: true,
    isNext: false,
    pages: 3,
    curPage: 3,
  };

  return (
    <Fragment>
      <b>* Table Core Component</b>
      <div className="mb-3">
        <div className="row">
          <TableComponent
            columnData={COLUMN_DATA}
            rowData={ROW_DATA}
            pageInfo={pageInfo}
            doAPI={(curPage) => {
              console.log("test curPage", curPage);
            }}
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
      <GroupDatePickerComponent />
      <GroupSelectComponent />
      <GroupNumberInputComponent />
      <GroupExtraComponent />
      <GroupTableComponent />
    </div>
  );
};

export default CorePage;
