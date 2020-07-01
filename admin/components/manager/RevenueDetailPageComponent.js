import React, { Fragment } from "react";

import TableComponent from "../core/TableComponent";
import ButtonComponent from "../core/ButtonComponent";

const COLUMN_DATA = [
  {
    name: "Mã hợp đồng",
    key: "idContract",
  },
  {
    name: "Dòng xe",
    key: "model",
  },
  {
    name: "Tên KH",
    key: "nameCustomer",
  },
  {
    name: "Ngày bắt đầu",
    key: "startDate",
  },
  {
    name: "Ngày kết thúc",
    key: "endDate",
  },
  {
    name: "Thành tiền",
    key: "total",
  },
];

const ROW_DATA = [
  {
    idContract: "HD001",
    model: "VIOS",
    nameCustomer: "Giang Huynh",
    startDate: "24/06/2020",
    endDate: "28/06/2020",
    total: "3.500.000 VNĐ",
  },
  {
    idContract: "HD001",
    model: "VIOS",
    nameCustomer: "Giang Huynh",
    startDate: "24/06/2020",
    endDate: "28/06/2020",
    total: "3.500.000 VNĐ",
  },
  {
    idContract: "HD001",
    model: "VIOS",
    nameCustomer: "Giang Huynh",
    startDate: "24/06/2020",
    endDate: "28/06/2020",
    total: "3.500.000 VNĐ",
  },
];

const RevenueDetailPageComponent = () => {
  return (
    <Fragment>
      <div className="revenue-detail-wrp">
        <h4 className="title font-weight-bold">Chi Tiết Thu Chi Trong Ngày</h4>
        <div className="main-content">
          <div className="row justify-content-end">
            <div className="col-lg-2">
              <ButtonComponent
                className="ml-2"
                icon={
                  <img
                    src="/static/assets/images/icons/print-icon.png"
                    width="16"
                    height="16"
                  />
                }
                content="Xuất hóa đơn"
                color="red"
                doOnClick={() => console.log("test click btn")}
              />
            </div>
          </div>
          <div className="row mt-4">
            <TableComponent columnData={COLUMN_DATA} rowData={ROW_DATA} />
          </div>
          <div className="row justify-content-end total-section">
            <div className="col-lg-3">
              <div className="row">
                <h5>Tổng Doanh Thu:</h5>
                <span className="text-danger font-weight-bold font-20 ml-2">
                  10.500.000 VNĐ
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        .revenue-detail-wrp {
          padding: 36px;
        }
        .revenue-detail-wrp .title {
          color: #c0392b;
        }
        .revenue-detail-wrp .main-content {
          margin-top: 8%;
        }
        .revenue-detail-wrp .total-section {
          margin-top: 30px;
        }
      `}</style>
    </Fragment>
  );
};

export default RevenueDetailPageComponent;
