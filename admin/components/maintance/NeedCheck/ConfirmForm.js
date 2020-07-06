import React, { useState } from 'react';
import ButtonComponent from "../../core/ButtonComponent";
import CarInfo from '../CarInfo';
import RadiosButton from './RadiosButton';
import UserInfo from '../UserInfo';
import { getProcessContract } from '../../../utils/common';
import { CAR_STATUS, BILL_STATUS } from '../../../utils/enums';

export const isNumber = (number) => /^\d+$/.test(number);

function reducer(state, action) {
  switch (action.type) {
    case "price":
      return { ...state, price: action.payload };
    case "description":
      return { ...state, description: action.payload };
    default:
      throw new Error();
  }
}

const FormModal = (props) => {
  const { updateBillStatus, updateCarStatus, contracts = [], id: carID, setCarID, setIsOpenModal } = props;
  const [carStatus, setCarStatus] = useState('done');
  const processContract = getProcessContract(contracts);
  const { bill: { id : billID } = {} } = processContract;
  const handleSubmit = async () => {
    if (carStatus === 'done') {
      await updateBillStatus(billID, BILL_STATUS.DONE, () => updateCarStatus(carID, CAR_STATUS.AVAILABLE));
      setIsOpenModal(false);
      setCarID(null);
      return;
    }
    await updateCarStatus(carID, CAR_STATUS.MAINTANCING);
    setCarID(null);
    setIsOpenModal(false);
    return;
  };

  return(
    <div className="container">
      <div className="row">
        <div className="col-12 title">
          <h1>Cập nhật xe sau trả</h1>
        </div>
        <div className="col-11 offset-1">
          <h2>Thông tin khách hàng</h2>
          <UserInfo contractInfo={processContract} {...props} />
        </div>
        <div className="col-11 offset-1">
          <h2>Thông tin xe</h2>
          <CarInfo isConfirming {...props} />
        </div>
        <div className="col-10 offset-2">
          <RadiosButton
            carStatus={carStatus}
            setCarStatus={setCarStatus}
          />
        </div>
        <div className="col text-center">
          <ButtonComponent
            content="Xác nhận"
            color="blue"
            doOnClick={handleSubmit}
            />
        </div>
      </div>
      <style jsx>{`
        .container {
          height: 100%;
          padding: 20px;
          font-family: Open Sans;
          font-style: normal;
          font-weight: bold;
        }
        .title {
          text-align: center;
        }
        h1 {
          color: #C0392B;
          font-size: 25px;
          text-transform: uppercase;
        }
        .col-11.offset-1 button{
          margin-bottom: 20px;
        }
        h2 {
          color: #27AE60;
          font-size: 20px;
          text-decoration: underline;
          margin-bottom: 20px;
        }
      `}</style>
    </div>
  );
};

export default FormModal;