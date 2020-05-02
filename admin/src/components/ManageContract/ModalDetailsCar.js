import React, { Fragment } from "react";
import Popup from "reactjs-popup";

const ModalDetailsCarComponent = ({ buttonTrigger, carInfo }) => {
  const {
    image,
    brand,
    model,
    color,
    seat,
    car_price: carPrice,
    status,
  } = carInfo;

  if (!carInfo) return <Fragment />;

  return (
    <Popup
      trigger={buttonTrigger}
      modal
      contentStyle={{
        width: "34%",
        borderRadius: "2%",
        backgroundColor: "f8f9f9",
        border: "2px solid rgb(187, 187, 187)",
      }}
    >
      {() => (
        <Fragment>
          <div className="main-modal">
            <h3 className="title"> Details Car</h3>
            <div className="content">
              <img src={image} alt="Car Avatar" className="avatar-car mb-2" />
              <div className="body mt-4 ">
                <div className="row justify-content-around">
                  <div className="col-sm-4">
                    <b>Brand: </b>
                    <span className="text-uppercase">{brand}</span>
                  </div>
                  <div className="col-sm-4">
                    <b>Model: </b>
                    <span className="text-uppercase">{model}</span>
                  </div>
                </div>
                <div className="row justify-content-around">
                  <div className="col-sm-4">
                    <b>Color: </b>
                    <span
                      className="dot"
                      style={{ backgroundColor: color }}
                    ></span>
                  </div>
                  <div className="col-sm-4">
                    <b>Seat: </b>
                    <span>{seat}</span>
                  </div>
                </div>
                <div className="row justify-content-around">
                  <div className="col-sm-4">
                    <b>Status: </b>
                    <span>{status}</span>
                  </div>
                  <div className="col-sm-4">
                    <b>CarPrice: </b>
                    <span>${carPrice}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <style jsx="true">{`
            .main-modal .content {
              font-size: 16px;
              padding-bottom: 20px;
            }
            .avatar-car {
              height: 30%;
              width: 50%;
            }
            .dot {
              margin-top: 4px;
              height: 18px;
              width: 18px;
              display: inline-block;
            }
          `}</style>
        </Fragment>
      )}
    </Popup>
  );
};

export default ModalDetailsCarComponent;
