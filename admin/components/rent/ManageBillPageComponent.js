import React, { Fragment, useEffect } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import TableComponent from "../core/TableComponent";
import SelectFilterComponent from "../core/inputs/SelectFilterComponent";
import SearchBarComponent from "../core/SearchBarComponent";
import { GetBrandsAPI, getBrands } from "../../stores/rent/CarState";

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
const ActionViewBillComponent = () => {
  return (
    <img
      className="cursor-pointer"
      src={"/static/assets/images/icons/bill-detail.png"}
    />
  );
};

const COLUMN_DATA = [
  {
    name: "Hiệu xe",
    key: "brand",
  },
  {
    name: "Dòng xe",
    key: "model",
  },
  {
    name: "Tên KH",
    key: "customerName",
  },
  {
    name: "Ngày Bắt Đầu Thuê",
    key: "startRentDate",
  },
  {
    name: "Ngày Kết Thúc Thuê",
    key: "endRentDate",
  },
  {
    name: "Thành Tiền (VNĐ)",
    key: "total",
  },
  {
    name: "Hành Động",
    key: "actions",
    renderComponent: (idBill) => {
      return <ActionViewBillComponent />;
    },
  },
];

const ROW_DATA = [
  {
    brand: "TOYOTA",
    model: "Vios",
    customerName: "Panda Huynh",
    startRentDate: "18/08/2020",
    endRentDate: "20/08/2020",
    total: "150000",
    actions: "",
  },
  {
    brand: "TOYOTA",
    model: "Vios",
    customerName: "Panda Huynh",
    startRentDate: "18/08/2020",
    endRentDate: "20/08/2020",
    total: "150000",
    actions: "",
  },
  {
    brand: "TOYOTA",
    model: "Vios",
    customerName: "Panda Huynh",
    startRentDate: "18/08/2020",
    endRentDate: "20/08/2020",
    total: "150000",
    actions: "",
  },
];

const pageInfo = {
  isPrev: true,
  isNext: false,
  pages: 3,
  curPage: 3,
};

const ManageBillPageComponent = ({ brandsData, getBrands }) => {
  useEffect(() => {
    getBrands();
  }, []);

  if (!brandsData) return <Fragment />;
  const brandsOption = convertDataToOptions(brandsData);

  return (
    <Fragment>
      <div className="manage-bill-wrp">
        <h4 className="title font-weight-bold">DS Đơn Hàng</h4>
        <div className="main-content">
          <div className="row justify-content-end">
            <div className="col-lg-2">
              <SelectFilterComponent
                placeholder="Brand"
                options={brandsOption}
              />
            </div>
            <div className="col-lg-2">
              <SearchBarComponent
                placeholder="Nhập tên KH"
                doOnKeyPress={(value) => {
                  console.log("test", value);
                }}
              />
            </div>
          </div>
          <div className="row mt-4">
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
      </div>
      <style jsx>{`
        .manage-bill-wrp {
          padding: 36px;
        }
        .manage-bill-wrp .title {
          color: #c0392b;
        }
        .manage-bill-wrp .main-content {
          margin-top: 8%;
        }
      `}</style>
    </Fragment>
  );
};

export default connectToRedux(ManageBillPageComponent);
