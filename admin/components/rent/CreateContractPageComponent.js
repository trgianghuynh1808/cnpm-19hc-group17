import React, { Fragment, useState, useEffect } from "react";
import { Field, reduxForm, change, untouch } from "redux-form";
import { compose } from "redux";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { get } from "lodash/fp";

import TitleComponent from "../core/TitleComponent";
import FormFields from "../rent/redux-form";
import ButtonComponent from "../core/ButtonComponent";
import ShowContractComponent from "./ShowContractComponent";
import {
  GetBrandsAPI,
  getBrands,
  GetModelsByBrandAPI,
  getModelsByBrand,
} from "../../stores/rent/CarState";
import { createContract } from "../../stores/rent/ContractState";

const {
  SelectRenderFieldComponent,
  TextInputRenderFieldComponent,
  DatePickerRenderFieldComponent,
} = FormFields;

const FORM_NAME = "create-contract-form";

const convertDataToOptions = (data) => {
  return data.map((item) => ({ label: item.name, value: item.id }));
};

const convertModelsDataToOptions = (modelsData) => {
  const cars = get("data[0].cars", modelsData);
  return cars.map((car) => {
    const { id, name } = car.modelInfo;
    const {
      brand,
      car_price: carPrice,
      color,
      model,
      seat,
      rent_price: rentPrice,
      id: carId,
    } = car;

    return {
      label: name,
      value: id,
      info: {
        brand,
        carPrice,
        color,
        model,
        seat,
        rentPrice,
        carId,
      },
    };
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
    createContract: ({
      startRentDate,
      endRentDate,
      name,
      phone,
      email,
      address,
      carId,
    }) => {
      dispatch(
        createContract({
          startRentDate,
          endRentDate,
          name,
          phone,
          email,
          address,
          carId,
        })
      );
    },
  })
);

const enhance = compose(
  reduxForm({
    form: FORM_NAME,
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
  dispatch,
  createContract,
}) => {
  const [curModelsOption, setCurModelsOption] = useState([]);
  const [showContractInfo, setShowContractInfo] = useState(null);

  useEffect(() => {
    getBrands();
  }, []);

  useEffect(() => {
    if (curModelsData) {
      const modelsOptions = convertModelsDataToOptions(curModelsData);
      setCurModelsOption(modelsOptions);
    }
  }, [curModelsData]);

  const onSubmit = (values) => {
    const {
      fullName,
      phone,
      model,
      startDate,
      endDate,
      email,
      address,
    } = values;
    setShowContractInfo({
      isShow: true,
      customerInfo: {
        fullName,
        phone,
        startDate,
        endDate,
        email,
        address,
      },
      carInfo: {
        depositPrice: get("info.rentPrice", model),
        brand: get("info.brand", model),
        model: get("info.model", model),
        color: get("info.color", model),
        seat: get("info.seat", model),
        carPrice: get("info.carPrice", model),
        carId: get("info.carId", model),
      },
    });
  };

  const resetFields = (formName, fieldsObj, dispatch) => {
    Object.keys(fieldsObj).forEach((fieldKey) => {
      dispatch(change(formName, fieldKey, fieldsObj[fieldKey]));

      dispatch(untouch(formName, fieldKey));
    });
  };

  if (!brandsData) return <Fragment />;

  const brandsOption = convertDataToOptions(brandsData);

  return (
    <Fragment>
      {showContractInfo && showContractInfo.isShow ? (
        <ShowContractComponent
          customerInfo={showContractInfo.customerInfo}
          carInfo={showContractInfo.carInfo}
          doAPI={createContract}
          doReset={reset}
          setShowContractInfo={setShowContractInfo}
        />
      ) : (
        <div className="create-contract-wrp">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="customer-info">
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
                      resetFields(
                        FORM_NAME,
                        {
                          model: "",
                        },
                        dispatch
                      );
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
      )}

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
