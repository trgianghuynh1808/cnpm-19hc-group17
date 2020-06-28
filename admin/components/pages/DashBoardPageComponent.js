import React, { Fragment } from "react";
import { Pie, Bar } from "react-chartjs-2";

const DATA_TARGET = {
  labels: ["Mục Tiêu", "Đã Đạt"],
  datasets: [
    {
      data: [300, 130],
      backgroundColor: ["#4A368D", "#1AC6A4"],
      hoverBackgroundColor: ["#4A368D", "#1AC6A4"],
    },
  ],
};

const DATA_CARS = {
  labels: ["Xe Đang Thuê", "Xe Rỗi"],
  datasets: [
    {
      data: [300, 80],
      backgroundColor: ["#4A368D", "#1AC6A4"],
      hoverBackgroundColor: ["#4A368D", "#1AC6A4"],
    },
  ],
};

const DATA_REVENUE = {
  labels: ["January", "February", "March", "April", "May", "June", "July"],
  datasets: [
    {
      label: "Doanh Thu",
      backgroundColor: "rgba(255,99,132,0.2)",
      borderColor: "rgba(255,99,132,1)",
      borderWidth: 1,
      hoverBackgroundColor: "rgba(255,99,132,0.4)",
      hoverBorderColor: "rgba(255,99,132,1)",
      data: [65, 59, 80, 81, 56, 55, 40],
    },
  ],
};

const DashBoardPageComponent = () => {
  return (
    <Fragment>
      <div className="dashboard-wrp">
        <div className="row text-light font-weight-bold font-20 justify-content-between statistical-section">
          <div className="col-lg-3 part target-part">
            <div className="row">
              <div className="col-lg-6 text-center border-right">
                <div>14</div>
                <div>Ngày Còn Lại</div>
              </div>
              <div className="col-lg-6 text-center">
                <div>90.000.000 VNĐ</div>
                <div>Mục Tiêu</div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 part staff-part">
            <div className="row">
              <div className="col-lg-6 text-center border-right">
                <div>20</div>
                <div>Nhân Viên</div>
              </div>
              <div className="col-lg-6 text-center">
                <div>190</div>
                <div>Khách Hàng</div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 part car-part">
            <div className="row">
              <div className="col-lg-6 text-center border-right">
                <div>80</div>
                <div>Xe Rỗi</div>
              </div>
              <div className="col-lg-6 text-center">
                <div>70</div>
                <div>Xe Đang Thuê</div>
              </div>
            </div>
          </div>
        </div>
        <div className="row chart-section font-18 justify-content-between ">
          <div className="col-lg-3 chart-part">
            <div className="title-part font-weight-bold">
              <img
                src="/static/assets/images/icons/target-icon.png"
                className="mr-2"
              ></img>
              <span>MỤC TIÊU DOANH THU</span>
            </div>
            <div className="detail-chart-part">
              <Pie data={DATA_TARGET} />
            </div>
          </div>
          <div className="col-lg-3 chart-part">
            <div className="title-part font-weight-bold">
              <img
                src="/static/assets/images/icons/money-icon.png"
                className="mr-2"
              ></img>
              <span>DOANH THU</span>
            </div>
            <div className="revenue-part">
              <Bar data={DATA_REVENUE} />
            </div>
          </div>
          <div className="col-lg-3 chart-part">
            <div className="title-part font-weight-bold">
              <img
                src="/static/assets/images/icons/car-icon.png"
                className="mr-2"
              ></img>
              <span>THỐNG KÊ XE</span>
            </div>
            <div className="detail-chart-part">
              <Pie data={DATA_CARS} />
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        .dashboard-wrp .statistical-section {
          margin-top: 50px;
        }

        .dashboard-wrp .part {
          border-radius: 30px;
          padding: 30px 10px;
        }

        .dashboard-wrp .target-part {
          background: #1ac6a4;
        }

        .dashboard-wrp .staff-part {
          background: #43a995;
        }

        .dashboard-wrp .car-part {
          background: #8e44ad;
        }

        .dashboard-wrp .border-right {
          border-right: 1px solid;
        }

        .dashboard-wrp .chart-section {
          margin-top: 40px;
        }

        .dashboard-wrp .chart-part {
          background: #ffffff;
          border: 2px solid #c4c4c4;
          box-sizing: border-box;
          border-radius: 24px;
          padding-left: 0px !important;
          padding-right: 0px !important;
        }

        .dashboard-wrp .title-part {
          border-bottom: 2px solid #c4c4c4;
          box-sizing: border-box;
          border-radius: 24px 24px 0px 0px;
          padding: 16px 20px;
          color: #9b9999;
        }

        .dashboard-wrp .revenue-part {
          padding: 20px 10px;
        }

        .dashboard-wrp .detail-chart-part {
          padding: 20px 0px;
        }
      `}</style>
    </Fragment>
  );
};

export default DashBoardPageComponent;
