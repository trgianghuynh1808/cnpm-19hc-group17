import React, { Fragment, useState } from "react";
import { Field, reduxForm } from "redux-form";
import { compose } from "redux";

import TitleComponent from "../core/TitleComponent";
import FormFields from "../rent/redux-form";
import ButtonComponent from "../core/ButtonComponent";

const {
  SelectRenderFieldComponent,
  TextInputRenderFieldComponent,
  DatePickerRenderFieldComponent,
} = FormFields;

const enhance = compose(
  reduxForm({
    form: "create-contract-form",
  })
);

const dataTemp = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
];

const CreateContractPageComponent = ({
  pristine,
  submitting,
  reset,
  handleSubmit,
}) => {
  const onSubmit = (values) => {
    console.log(values);
  };

  return (
    <Fragment>
      <div className="create-contract-wrp">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="cus tomer-info">
            <TitleComponent content={"Khách hàng"} />
            <div className="row justify-content-between mt-3">
              <div className="col-lg-5">
                <Field
                  name="fullName"
                  component={TextInputRenderFieldComponent}
                  type="text"
                  label="Họ tên: "
                  required
                  placeholder="Nhập tên khách hàng"
                />
              </div>
              <div className="col-lg-5">
                <Field
                  name="email"
                  component={TextInputRenderFieldComponent}
                  type="email"
                  label="Email: "
                  required
                  placeholder="Nhập email khách hàng"
                />
              </div>
            </div>
            <div className="row justify-content-between">
              <div className="col-lg-5">
                <Field
                  name="phone"
                  component={TextInputRenderFieldComponent}
                  type="text"
                  label="Số điện thoại: "
                  required
                  placeholder="Nhập số điện thoại"
                  pattern={`([0-9]{9,})`}
                />
              </div>
              <div className="col-lg-5">
                <Field
                  name="address"
                  component={TextInputRenderFieldComponent}
                  type="text"
                  label="Địa chỉ: "
                  required
                  placeholder="Nhập địa chỉ khách hàng"
                />
              </div>
            </div>
          </div>
          <div className="cus tomer-info">
            <TitleComponent content={"Thông tin xe"} />
            <div className="row justify-content-between mt-3">
              <div className="col-lg-5 form-group">
                <Field
                  name="brand"
                  component={SelectRenderFieldComponent}
                  required
                  placeholder="Chọn hiệu xe"
                  options={dataTemp}
                  label="Hiệu xe: "
                />
              </div>
              <div className="col-lg-5 form-group">
                <Field
                  name="brand"
                  component={SelectRenderFieldComponent}
                  label="Dòng xe: "
                  required
                  placeholder="Chọn dòng xe"
                  options={dataTemp}
                />
              </div>
            </div>
            <div className="row justify-content-between form-group ">
              <div className="col-lg-5">
                <Field
                  name="startDate"
                  component={DatePickerRenderFieldComponent}
                  label="Ngày bắt đầu thuê: "
                  required
                  placeholderText="Chọn ngày bắt đầu thuê"
                />
              </div>
              <div className="col-lg-5">
                <Field
                  name="endDate"
                  component={DatePickerRenderFieldComponent}
                  label="Ngày kết thúc thuê: "
                  required
                  placeholderText="Chọn ngày kết thúc thuê"
                />
              </div>
            </div>
            <div className="row justify-content-center group-button">
              <div className="col-2">
                <ButtonComponent
                  content="In hợp đồng"
                  color="green"
                  icon={
                    <img src="/static/assets/images/icons/print-icon.png" />
                  }
                  type="submit"
                  disabled={pristine || submitting}
                />
              </div>
              <div className="col-2">
                <ButtonComponent
                  content="Reset"
                  color="red"
                  icon={
                    <img src="/static/assets/images/icons/reset-icon.png" />
                  }
                  disabled={pristine || submitting}
                  doOnClick={reset}
                />
              </div>
            </div>
          </div>
        </form>
      </div>
      <style jsx>
        {`
          .create-contract-wrp {
            padding: 40px 150px;
          }
          .create-contract-wrp .group-button {
            margin-top: 44px;
          }
        `}
      </style>
    </Fragment>
  );
};

export default enhance(CreateContractPageComponent);
