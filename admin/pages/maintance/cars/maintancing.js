import React, { useEffect, useState, useMemo } from 'react';
import MainLayoutComponent from '../../../components/layouts/MainLayoutComponent';
import { Table } from "../../../components/maintance";
import Details from "../../../components/maintance/MaintanceDetails";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import AuthenHOC from "../../../components/HOC/AuthenHOC";
import { CAR_PER_PAGE } from '../../../utils/enums';
import { CAR_STATUS } from '../../../utils/enums';

import {
  getCars,
  getCarsSelector,
  getCarsCountSelector,
  getCarDetails,
  getCarDetailsAPI,
  updateCarStatus,
} from "../../../stores/maintance/carState";

import { addMaintanceList, updateBillStatus } from "../../../stores/maintance/billState";

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
    addMaintanceList: (objBody, callback) => {
      distpatch(addMaintanceList(objBody, callback));
    },
    updateCarStatus: (carID, status, callback) => {
      distpatch(updateCarStatus(carID, status, callback));
    },
    updateBillStatus: (billID, status) => {
      distpatch(updateBillStatus(billID, status));
    },
  })
);

const MaintancingCars = ({ updateBillStatus, updateCarStatus, addMaintanceList, getCarDetails, carDetailsData, carListData, carListCount, getCars }) => {
  const [curPage, setCurPage] = useState(1);
  const [carID, setCarID] = useState(null);
  useEffect(() => {
    const carPerPage = CAR_PER_PAGE - 1;
    const queryCurPage = curPage - 1;
    const offset = queryCurPage === 0 ? 0 : queryCurPage * carPerPage + queryCurPage;
    const limit = offset + carPerPage;
    getCars({ offset, limit, status: CAR_STATUS.MAINTANCING });
  }, [getCars, curPage, carID]);

  const editOnClick= (id) => {
    setCarID(id);
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
      {carID ? <Details updateBillStatus={updateBillStatus} updateCarStatus={updateCarStatus} addMaintanceList={addMaintanceList} setCarID={setCarID} {...carDetailsData}/> :
      <Table
        pageInfo={pageInfo}
        carList={carListData}
        editOnClick={editOnClick}
        pagingOnClick={(clickedPage) => setCurPage(clickedPage)}
      />
      }
    </MainLayoutComponent>
  );
};

export default AuthenHOC(connectToRedux(MaintancingCars));
