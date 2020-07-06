import React, { Fragment } from "react";
import { Field, reduxForm, change, untouch } from "redux-form";
import { compose } from "redux";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import TitleComponent from "../core/TitleComponent";
import FormFields from "../rent/redux-form";
import ButtonComponent from "../core/ButtonComponent";
import { toast } from "react-toastify";

const { TextInputRenderFieldComponent } = FormFields;

const AddCarPageComponent = ({ pristine, submitting, reset }) => {
  return (
    <Fragment>
      <div className="create-contract-wrp">
        <form>
          <div className="customer-info">
            <TitleComponent content={"Thông tin xe"} />
            <div className="row justify-content-between mt-3">
              <div className="col-lg-5">
                <Field
                  name="brand"
                  component={TextInputRenderFieldComponent}
                  type="text"
                  label="Hiệu xe: "
                  required
                  placeholder="Nhập hiệu xe"
                />
              </div>
              <div className="col-lg-5">
                <Field
                  name="model"
                  component={TextInputRenderFieldComponent}
                  type="text"
                  label="Dòng xe: "
                  required
                  placeholder="Nhập dòng xe"
                />
              </div>
            </div>
            <div className="row justify-content-between">
              <div className="col-lg-5">
                <Field
                  name="seat"
                  component={TextInputRenderFieldComponent}
                  type="text"
                  label="Số chỗ ngồi: "
                  required
                  placeholder="Nhập số chỗ ngồi"
                  pattern={`([0-9])`}
                />
              </div>
              <div className="col-lg-5">
                <Field
                  name="color"
                  component={TextInputRenderFieldComponent}
                  type="text"
                  label="Màu xe: "
                  required
                  placeholder="Nhập màu xe"
                />
              </div>
            </div>
            <div className="row justify-content-between">
              <div className="col-lg-5">
                <div className="form-group">
                  <label className="color-gray" htmlFor="picture-car">
                    Hình ảnh xe
                  </label>
                  <input
                    type="file"
                    className="form-control-file"
                    id="picture-car"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="customer-info">
            <div className="row justify-content-center group-button">
              <div className="col-2">
                <ButtonComponent
                  content="Thêm xe"
                  color="green"
                  icon={<img src="/static/assets/images/icons/add-icon.png" />}
                  // type="submit"
                  type="button"
                  doOnClick={() => {
                    toast.success("Thêm xe thành công!", {
                      position: "top-right",
                      autoClose: 5000,
                      hideProgressBar: false,
                      closeOnClick: true,
                      pauseOnHover: true,
                      draggable: true,
                      progress: undefined,
                    });
                  }}
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
      <style jsx>{`
        .create-contract-wrp {
          padding: 40px 150px;
          padding-top: 60px;
        }
        .create-contract-wrp .group-button {
          margin-top: 44px;
        }
      `}</style>
    </Fragment>
  );
};

export default reduxForm({
  form: "add-car-form",
})(AddCarPageComponent);
