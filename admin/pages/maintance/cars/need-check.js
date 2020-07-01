import React, { useEffect, useState, useMemo } from 'react';
import MainLayoutComponent from '../../../components/layouts/MainLayoutComponent';
import { Table } from "../../../components/maintance";
import ConfirmForm from "../../../components/maintance/NeedCheck";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import AuthenHOC from "../../../components/HOC/AuthenHOC";
import { CAR_PER_PAGE } from '../../../utils/enums';
import { CAR_STATUS } from '../../../utils/enums';
import ModalComponent from '../../../components/core/ModalComponent';

import {
  getCars,
  getCarsSelector,
  getCarsCountSelector,
  getCarDetails,
  getCarDetailsAPI,
  updateCarStatus,
} from "../../../stores/maintance/carState";

import { updateBillStatus } from "../../../stores/maintance/billState";

const connectToRedux = connect(
  createStructuredSelector({
    carListData: getCarsSelector,
    carListCount: getCarsCountSelector,
    carDetailsData: getCarDetailsAPI.dataSelector, 
  }),
  (distpatch) => ({
    getCars: (filterObject) => {
      distpatch(getCars(filterObject));
    },
    getCarDetails: (carID) => {
      distpatch(getCarDetails(carID));
    },
    updateCarStatus: (carID, status, callback) => {
      distpatch(updateCarStatus(carID, status, callback));
    },
    updateBillStatus: (billID, status, callback) => {
      distpatch(updateBillStatus(billID, status, callback));
    },
  })
);

const NeedCheckCars = ({ updateBillStatus, updateCarStatus, getCarDetails, carDetailsData, carListData, carListCount, getCars }) => {
  const [curPage, setCurPage] = useState(1);
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [carID, setCarID] = useState(null);
  useEffect(() => {
    if(isOpenModal) return;
    const carPerPage = CAR_PER_PAGE - 1;
    const queryCurPage = curPage - 1;
    const offset = queryCurPage === 0 ? 0 : queryCurPage * carPerPage + queryCurPage;
    const limit = offset + carPerPage;
    getCars({ offset, limit, status: CAR_STATUS.NEED_CHECK });
  }, [getCars, curPage, isOpenModal]);

  const editOnClick= (id) => {
    setCarID(id);
    setIsOpenModal(true);
  };

  useEffect(() => {
    if(carID) {
      getCarDetails(carID);
    }
  },[getCarDetails, carID]);
  const pageInfo = useMemo(() => {
    const pages = Math.ceil(carListCount / CAR_PER_PAGE);
    const isPrev = curPage > 1;
    const isNext = curPage < pages;
    return {
      isPrev,
      isNext,
      pages,
      curPage
    };
  }, [curPage, carListCount]);

  return (
    <MainLayoutComponent>
      {/*<Details updateBillStatus={updateBillStatus} updateCarStatus={updateCarStatus} {...carDetailsData}/> : */}
      <Table
        pageInfo={pageInfo}
        carList={carListData}
        editOnClick={editOnClick}
        pagingOnClick={(clickedPage) => setCurPage(clickedPage)}
      />
      <ModalComponent modalIsOpen={isOpenModal} setIsOpen={setIsOpenModal}>
        <ConfirmForm
          updateBillStatus={updateBillStatus} updateCarStatus={updateCarStatus}
          setCarID={setCarID}
          setIsOpenModal={setIsOpenModal}
          {...carDetailsData}
        />
      </ModalComponent>
    </MainLayoutComponent>
  );
};

export default AuthenHOC(connectToRedux(NeedCheckCars));
