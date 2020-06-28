import React, { Fragment, useEffect } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import SelectFilterComponent from "../core/inputs/SelectFilterComponent";
import { GetBrandsAPI, getBrands } from "../../stores/rent/CarState";
import TableComponent from "../core/TableComponent";
import ButtonComponent from "../core/ButtonComponent";
import data from "../../db.json";

const convertDataToOptions = (data) => {
  return data.map((item) => ({ label: item.name, value: item.id }));
};

const connectToRedux = connect(
  createStructuredSelector({
    brandsData: GetBrandsAPI.dataSelector,
  }),
  (dispatch) => ({
    getBrands: () => {
      dispatch(getBrands());
    },
  })
);

const ActionsComponent = () => {
  return (
    <div className="row justify-content-center">
      <div className="col-lg-3">
        <img
          src="/static/assets/images/icons/edit-icon.png"
          height="25"
          width="25"
          className="action-icon"
        ></img>
      </div>
      <div className="col-lg-3">
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

const COLUMN_DATA = [
  { name: "Hiệu Xe", key: "brand" },
  { name: "Dòng Xe", key: "model" },
  { name: "Giá thuê", key: "rentPrice" },
  { name: "Màu xe", key: "color" },
  { name: "Trạng thái", key: "status" },
  {
    name: "Hành động",
    actions: "",
    renderComponent: () => {
      return <ActionsComponent />;
    },
  },
];

const ROW_DATA = [
  {
    brand: "TOYOTA",
    model: "Vios",
    rentPrice: "100000",
    color: "red",
    status: "Đang rỗi",
    actions: "",
  },
  {
    brand: "TOYOTA",
    model: "Vios",
    rentPrice: "100000",
    color: "red",
    status: "Đang rỗi",
    actions: "",
  },
  {
    brand: "TOYOTA",
    model: "Vios",
    rentPrice: "100000",
    color: "red",
    status: "Đang rỗi",
    actions: "",
  },
];

const ManageCarPageComponent = ({ brandsData, getBrands }) => {
  useEffect(() => {
    getBrands();
  }, []);

  if (!brandsData) return <Fragment />;
  const brandsOption = convertDataToOptions(brandsData);
  const statusCarOption = data.statusCarOptions;

  return (
    <Fragment>
      <div className="manage-car-wrp">
        <h4 className="title font-weight-bold">DS Đơn Hàng</h4>
        <div className="main-content">
          <div className="row justify-content-between">
            <div className="col-lg-1">
              <ButtonComponent
                icon={
                  <img
                    src="/static/assets/images/icons/add-icon.png"
                    width="16"
                    height="16"
                  />
                }
                content="Thêm xe"
                color="green"
                doOnClick={() => console.log("test click btn")}
              />
            </div>

            <div className="col-lg-4">
              <div className="row">
                <div className="col-lg-6">
                  <SelectFilterComponent
                    placeholder="Brand"
                    options={brandsOption}
                  />
                </div>
                <div className="col-lg-6">
                  <SelectFilterComponent
                    placeholder="Trạng thái xe"
                    options={statusCarOption}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="row mt-4">
            <TableComponent columnData={COLUMN_DATA} rowData={ROW_DATA} />
          </div>
        </div>
      </div>
      <style jsx>{`
        .manage-car-wrp {
          padding: 36px;
        }
        .manage-car-wrp .title {
          color: #c0392b;
        }
        .manage-car-wrp .main-content {
          margin-top: 8%;
        }
      `}</style>
    </Fragment>
  );
};

export default connectToRedux(ManageCarPageComponent);
