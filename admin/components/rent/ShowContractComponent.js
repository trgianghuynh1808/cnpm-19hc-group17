import React, { Fragment } from "react";
import ButtonComponent from "../core/ButtonComponent";

const ShowContractComponent = ({ customerInfo, carInfo }) => {
  const { fullName, phone } = customerInfo;
  const { depositPrice, carPrice, brand, model, color, seat } = carInfo;

  return (
    <Fragment>
      <div className="show-contract-wrp">
        <div className="row">
          <div className="col-lg-5">
            <div className="row">
              <h4 className="text-center w-100 font-weight-bold text-uppercase">
                Xem trước hợp đồng
              </h4>
            </div>
            <div className="row view-contract">
              <div>
                <div className="h5 text-center text-uppercase font-weight-bold">
                  hợp đồng thuê xe
                </div>
                <div className="container mt-2">
                  <ol>
                    <li>
                      Thỏa thuận này được thực hiện giữa <b>{fullName}</b> (sau
                      đây gọi là "Người Thuê Nhà") và{" "}
                      <b>{"Rental Car Company"} </b> (Sau đây gọi là "Chủ Sở
                      Hửu").
                    </li>
                    <li>
                      Chủ sở hữu đồng ý cho thuê xe có thông tin sau đây cho
                      người thuê:
                      <ul>
                        <li>
                          <div className="row">
                            <div className="col-sm-6">
                              - <b>Hiệu xe:</b> {brand}
                            </div>
                            <div className="col-sm-6">
                              - <b>Dòng xe:</b> {model}
                            </div>
                          </div>
                        </li>
                        <li>
                          <div className="row">
                            <div className="col-sm-6">
                              - <b>Màu xe:</b> {color}
                            </div>
                            <div className="col-sm-6">
                              - <b>Chỗ ngồi:</b> {seat}
                            </div>
                          </div>
                        </li>
                        <li>
                          <div className="row">
                            <div className="col-sm-6">
                              - <b>Tiền Thuê:</b> {carPrice}VNĐ
                            </div>
                            <div className="col-sm-6">
                              - <b>Tiền Cọc:</b> {depositPrice}VNĐ
                            </div>
                          </div>
                        </li>
                      </ul>
                    </li>
                    <li>
                      Người thuê nhà đồng ý và chứng thực rằng anh ấy / cô ấy có
                      giấy phép hợp pháp, hợp lệ để lái loại phương tiện này ở
                      đất nước này, và không có lệnh bảo đảm nào chống lại giấy
                      phép nói trên. Người thuê nhà tiếp tục đồng ý và chứng
                      thực rằng anh ấy / cô ấy có bảo hiểm sẽ chi trả cho hoạt
                      động của phương tiện này.
                    </li>
                    <li>
                      Người thuê nhà đồng ý không cho phép bất kỳ người nào khác
                      lái xe, ngoại trừ các tài xế được ủy quyền được liệt kê và
                      phê duyệt ở đây.
                    </li>
                    <li>
                      Người thuê nhà đồng ý giữ vô hại, bồi thường và giải phóng
                      Chủ sở hữu cho bất kỳ thiệt hại, thương tích, mất mát tài
                      sản hoặc tử vong trong khi Người thuê vận hành phương tiện
                      này. Người thuê nhà sẽ chịu trách nhiệm cho bất kỳ thiệt
                      hại hoặc phí vệ sinh phát sinh trong khi thuê xe. Người
                      thuê nhà đã có cơ hội kiểm tra chiếc xe trước khi thời hạn
                      thuê bắt đầu và xác nhận rằng nó đang trong tình trạng
                      hoạt động tốt.
                    </li>
                    <li>
                      Chủ sở hữu đồng ý và chứng thực rằng chiếc xe đang hoạt
                      động tốt và không có tài sản thế chấp hay vướng mắc.
                    </li>
                    <li>
                      <div className="row signature justify-content-center">
                        <div className="col-lg-6 font-weight-bold text-capitalize">
                          Người thuê xe ký tên
                        </div>
                        <div className="col-lg-6 font-weight-bold text-capitalize">
                          Chủ sở hữu ký tên
                        </div>
                      </div>
                    </li>
                  </ol>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-7">
            <div className="view-contract-info">
              <div className="row">
                <h4 className="text-center w-100 font-weight-bold text-uppercase">
                  Thông tin cơ bản
                </h4>
              </div>
              <div className="content">
                <div className="row justify-content-center form-group">
                  <div className="font-weight-bold mr-2">Họ tên KH: </div>
                  <div> {fullName}</div>
                </div>
                <div className="row justify-content-center form-group">
                  <div className="font-weight-bold mr-2">Số điện thoại: </div>
                  <div> {phone}</div>
                </div>
                <div className="row justify-content-center form-group">
                  <div className="font-weight-bold mr-2">Ngày giao dịch: </div>
                  <div> 15/06/2020</div>
                </div>
                <div className="row justify-content-center form-group">
                  <div className="font-weight-bold mr-2">Tiền đặt cọc: </div>
                  <div> {depositPrice} VNĐ</div>
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
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        .show-contract-wrp {
          padding: 50px 100px;
          padding-right: 0px;
        }
        .show-contract-wrp .view-contract {
          border: 3px solid #c4c4c4;
          box-sizing: border-box;
          border-radius: 17px;
          height: 520px;
          margin-top: 20px;
          overflow-y: auto;
          padding-top: 10px;
        }
        .show-contract-wrp .view-contract-info {
          padding: 24% 18%;
        }

        .view-contract-info .content {
          margin-top: 20px;
          font-size: 20px;
        }

        .view-contract .signature {
          margin-top: 20px;
          margin-bottom: 100px;
        }
      `}</style>
    </Fragment>
  );
};

export default ShowContractComponent;
