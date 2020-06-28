import React, { Fragment } from "react";

import ButtonComponent from "../core/ButtonComponent";

const DetailsBillComponent = ({ idBill, setDetailBillInfo }) => {
  return (
    <Fragment>
      <div className="detail-bill-wrp">
        <div className="row ">
          <div className="col-lg-5">
            <div className="row">
              <h4 className="text-center w-100 font-weight-bold text-uppercase">
                Xem trước hóa đơn
              </h4>
            </div>
            <div className="row justify-content-center">
              <div className="view-bill">
                <div className="font-12 font-weight-bold w-100 text-center">
                  Rent Car Company
                </div>

                <h4 className="font-weight-bold w-100 text-center mt-3 text-uppercase">
                  hóa đơn
                </h4>
                <div className="container info-bill">
                  <div className="">Ngày thanh toán: 27/6</div>
                  <div className="mt-2">Khách hàng: Giang</div>
                  <div className="mt-2">Nhân viên: Giang staff</div>

                  <table className="table mt-3">
                    <thead>
                      <tr>
                        <th className="text-center" scope="col">
                          Tên sản phẩm
                        </th>
                        <th className="text-center" scope="col">
                          Thành tiên
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th scope="row">1</th>
                        <td>Mark</td>
                      </tr>
                      <tr>
                        <th scope="row">2</th>
                        <td>Jacob</td>
                      </tr>
                      <tr>
                        <th scope="row">3</th>
                        <td>Larry</td>
                      </tr>
                      <tr>
                        <th scope="row" colSpan="2" className="text-right">
                          50000 VNĐ
                        </th>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-7">
            <div className="view-bill-info">
              <div className="row">
                <h4 className="text-center w-100 font-weight-bold text-uppercase">
                  Thông tin cơ bản
                </h4>
              </div>
              <div className="content">
                <div className="row justify-content-center form-group">
                  <div className="font-weight-bold mr-2">Họ tên KH: </div>
                  <div> {"Name"}</div>
                </div>
                <div className="row justify-content-center form-group">
                  <div className="font-weight-bold mr-2">Số điện thoại: </div>
                  <div> {"123"}</div>
                </div>
                <div className="row justify-content-center form-group">
                  <div className="font-weight-bold mr-2">Email: </div>
                  <div> {"email"}</div>
                </div>
                <div className="row justify-content-center form-group">
                  <div className="font-weight-bold mr-2">Tiền thanh toán: </div>
                  <div> {"15000"} VNĐ</div>
                </div>
                <div className="row justify-content-center  form-group">
                  <div className="col-lg-4">
                    <ButtonComponent
                      content="Xác nhận"
                      color="green"
                      icon={
                        <img src="/static/assets/images/icons/print-icon.png" />
                      }
                      type="button"
                      doOnClick={() => {
                        // doAPI({
                        //   startRentDate: startDate,
                        //   endRentDate: endDate,
                        //   name: fullName,
                        //   phone,
                        //   email,
                        //   address,
                        //   carId,
                        // });
                      }}
                    />
                  </div>
                  <div className="col-lg-4">
                    <ButtonComponent
                      content="Trở về"
                      color="red"
                      icon={
                        <img src="/static/assets/images/icons/reset-icon.png" />
                      }
                      type="button"
                      doOnClick={() => {
                        setDetailBillInfo(null);
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        .detail-bill-wrp {
          padding: 50px 100px;
          padding-right: 0px;
        }

        .detail-bill-wrp .view-bill {
          border: 3px solid #c4c4c4;
          box-sizing: border-box;
          border-radius: 17px;
          height: 520px;
          margin-top: 20px;
          overflow-y: auto;
          padding-top: 10px;
          width: 50%;
        }
        .detail-bill-wrp .view-bill-info {
          padding: 24% 18%;
        }

        .view-bill-info .content {
          margin-top: 20px;
          font-size: 20px;
        }

        .view-bill .signature {
          margin-top: 20px;
          margin-bottom: 100px;
        }

        .view-bill .info-bill {
          margin-top: 20px;
        }
      `}</style>
    </Fragment>
  );
};

export default DetailsBillComponent;
