import React, { Fragment, useState, useEffect } from "react";
import { Field, reduxForm } from "redux-form";
import { compose } from "redux";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { get } from "lodash/fp";

import TitleComponent from "../core/TitleComponent";
import FormFields from "../rent/redux-form";
import ButtonComponent from "../core/ButtonComponent";
import {
  GetBrandsAPI,
  getBrands,
  GetModelsByBrandAPI,
  getModelsByBrand,
} from "../../stores/rent/CarState";

const {
  SelectRenderFieldComponent,
  TextInputRenderFieldComponent,
  DatePickerRenderFieldComponent,
} = FormFields;

const convertDataToOptions = (data) => {
  return data.map((item) => ({ label: item.name, value: item.id }));
};

const convertModelsDataToOptions = (modelsData) => {
  const cars = get("data[0].cars", modelsData);
  return cars.map((car) => {
    const { id, name } = car.modelInfo;

    return { label: name, value: id };
  });
};

const connectToRedux = connect(
  createStructuredSelector({
    brandsData: GetBrandsAPI.dataSelector,
    curModelsData: GetModelsByBrandAPI.dataSelector,
  }),
  (dispatch) => ({
    getBrands: () => {
      dispatch(getBrands());
    },
    getCurModelsByBrand: (brand) => {
      dispatch(getModelsByBrand(brand));
    },
  })
);

const enhance = compose(
  reduxForm({
    form: "create-contract-form",
  }),
  connectToRedux
);

const CreateContractPageComponent = ({
  pristine,
  submitting,
  reset,
  handleSubmit,
  brandsData,
  getBrands,
  getCurModelsByBrand,
  curModelsData,
}) => {
  const onSubmit = (values) => {
    console.log(values);
  };
  const [curModelsOption, setCurModelsOption] = useState([]);

  useEffect(() => {
    getBrands();
  }, []);

  useEffect(() => {
    if (curModelsData) {
      const modelsOptions = convertModelsDataToOptions(curModelsData);
      setCurModelsOption(modelsOptions);
    }
  }, [curModelsData]);

  if (!brandsData) return <Fragment />;

  const brandsOption = convertDataToOptions(brandsData);

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
          <div className="customer-info">
            <TitleComponent content={"Thông tin xe"} />
            <div className="row justify-content-between mt-3">
              <div className="col-lg-5 form-group">
                <Field
                  name="brand"
                  component={SelectRenderFieldComponent}
                  required
                  placeholder="Chọn hiệu xe"
                  options={brandsOption}
                  label="Hiệu xe: "
                  clearable={false}
                  doOnChange={(idBrand) => {
                    getCurModelsByBrand(idBrand);
                  }}
                />
              </div>
              <div className="col-lg-5 form-group">
                <Field
                  name="model"
                  component={SelectRenderFieldComponent}
                  label="Dòng xe: "
                  required
                  placeholder="Chọn dòng xe"
                  options={curModelsOption}
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
