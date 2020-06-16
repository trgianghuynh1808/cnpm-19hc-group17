import React, { Fragment } from "react";
import ModalComponent from "../../../components/commons/ModalComponent";

const ContractAgreementComponent = ({
  isOpenContractModal,
  setIsOpenContractModal,
  infoContract,
}) => {
  const { carInfo } = infoContract;
  return (
    <Fragment>
      <ModalComponent
        modalIsOpen={isOpenContractModal}
        setIsOpen={setIsOpenContractModal}
      >
        <div style={{ width: "600px" }}>
          <div className="h5 text-center">CAR RENTAL AGREEMENT</div>
          <div className="container mt-2">
            <ol>
              <li>
                This agreement is hereby made between{" "}
                <b>{infoContract.senderName}</b> (hereafter referred to as "the
                Renter") and <b>{"Rental Car Company"} </b> (hereafter referred
                to as "the Owner").
              </li>
              <li>
                The Owner hereby agrees to rent the following vehicle to the
                Renter:
                <ul>
                  <li>
                    <div className="row">
                      <div className="col-sm-6">
                        - <b>Brand:</b> {carInfo.brand}
                      </div>
                      <div className="col-sm-6">
                        - <b>Model:</b> {carInfo.model}
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="row">
                      <div className="col-sm-6">
                        - <b>Color:</b> {carInfo.color}
                      </div>
                      <div className="col-sm-6">
                        - <b>Seat:</b> {carInfo.seat}
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="row">
                      <div className="col-sm-6">
                        - <b>Rent Price:</b> ${carInfo.rentPrice}
                      </div>
                      <div className="col-sm-6">
                        - <b>Deposit Price:</b> ${carInfo.depositPrice}
                      </div>
                    </div>
                  </li>
                </ul>
              </li>
              <li>
                The Renter swears and attests that he/she has a legal, valid
                license to drive this type of vehicle in this country, and that
                there are no outstanding warrants against said license. The
                Renter further swears and attests that he/she has insurance that
                will cover the operation of this vehicle.
              </li>
              <li>
                The Renter agrees not to allow any other person to drive the
                vehicle, except for authorized drivers listed and approved here.
              </li>
              <li>
                The Renter agrees to hold harmless, indemnify, and release the
                Owner for any damages, injuries, property loss, or death caused
                while the Renter operates this vehicle. The Renter will be held
                accountable for any damages or cleaning fees incurred while
                renting the vehicle. The Renter has had the opportunity to
                inspect the vehicle before the renting term begins and confirms
                that it is in good operable condition.
              </li>
              <li>
                The Owner swears and attests that the vehicle is in good working
                order and has no liens or encumbrances.
              </li>
            </ol>
          </div>
        </div>
      </ModalComponent>
    </Fragment>
  );
};

export default ContractAgreementComponent;
