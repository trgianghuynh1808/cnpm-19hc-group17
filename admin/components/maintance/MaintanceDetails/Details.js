import React, { useState, useMemo } from 'react';
import CarInfo from '../CarInfo';
import FormModal from './FormModal';
import Table from '../../core/TableComponent';
import { getProcessBill } from '../../../utils/common';
import ModalComponent from '../../core/ModalComponent';
import ButtonComponent from "../../core/ButtonComponent";
import { MAINTANCE_PER_PAGE, CAR_STATUS, BILL_STATUS } from '../../../utils/enums';

const COLUMN_DATA = [
  {
    name: "Mã",
    key: "id",
  },
  {
    name: "Mô tả",
    key: "description",
  },
  {
    name: "Chi phí",
    key: "price",
  },
];

const Details = (props) => {
  const { setCarID, updateBillStatus, updateCarStatus, addMaintanceList, contracts = [], id: carID } = props;
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [maintanceList, setMaintanceList] = useState([]);
  const [curPage, setCurPage] = useState(1);
  const pageInfo = useMemo(() => {
    const pages = Math.ceil(maintanceList.length / MAINTANCE_PER_PAGE);
    const isPrev = curPage > 1;
    const isNext = curPage < pages;
    return {
      isPrev,
      isNext,
      pages,
      curPage
    };
  }, [maintanceList, curPage]);

  const formModalOnSubmit = (maintance) => {
    setMaintanceList([...maintanceList, maintance]);
    setIsOpenModal(false);
  };

  const processBill = getProcessBill(contracts);

  const handleSubmit = async () => {
    const { id: billID = '' } = processBill;
    if(!billID || maintanceList.length === 0) return;
    const callback = () => {
      updateCarStatus(carID, CAR_STATUS.AVAILABLE, () => updateBillStatus(billID, BILL_STATUS.DONE));
    };
    await addMaintanceList({ billID, maintainceList: maintanceList }, callback);
    setTimeout(() => setCarID(null), 1000);
  };

  const rowData = useMemo(() =>
  {
    const queryCurPage = curPage - 1;
    const offset = queryCurPage === 0 ? 0 : queryCurPage * MAINTANCE_PER_PAGE;
    const limit = offset + MAINTANCE_PER_PAGE;
    return maintanceList.slice(offset, limit).map((maintance,index) => { return {...maintance, id: index + 1}});
  }
  ,[maintanceList, curPage]);
  return(
    <div className="container">
      <div className="row">
        <div className="col-12 title">
          <h1>Chi tiết bảo dưỡng</h1>
        </div>
        <div className="col-11 offset-1">
          <h2>Thông tin xe</h2>
          <CarInfo {...props} />
        </div>
        <div className="col-11 offset-1">
          <h2 className="float-left">Danh sách sửa chữa</h2>
          <ButtonComponent
              className="float-right"
              icon={
                <img
                  src="/static/assets/images/icons/add-icon.png"
                  width="16"
                  height="16"
                />
              }
              content="Thêm chi tiết"
              color="green"
              doOnClick={() => setIsOpenModal(true)}
            />
          <Table
            columnData={COLUMN_DATA}
            pageInfo={pageInfo}
            rowData={rowData}
            doAPI={(clickedPage) => setCurPage(clickedPage)}
          />
        </div>
        <div className="col text-center">
          <ButtonComponent
            className={`${maintanceList.length === 0 ? 'disabled' : ''}`}
            content="Xác nhận"
            color="blue"
            doOnClick={handleSubmit}
            />
        </div>
      </div>
      
      <ModalComponent modalIsOpen={isOpenModal} setIsOpen={setIsOpenModal}>
            <FormModal
              curID={maintanceList.length + 1}
              onSubmit={formModalOnSubmit} 
            />
      </ModalComponent>
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

export default Details;