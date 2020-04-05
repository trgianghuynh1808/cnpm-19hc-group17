import React, { useEffect } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import Wrapper from '../components';
import Table from '../components/Table';
import {
  searchCar,
  searchCarDataSelector,
  searchCarCountSelector
} from "../stores/CarsState";

const connectToRedux = connect(
  createStructuredSelector({
    carListData: searchCarDataSelector,
    carListCount: searchCarCountSelector
  }),
  distpatch => ({
    searchCar: (queryObj) => {
      distpatch(searchCar({ ...queryObj }));
    }
  })
);

const ClientPage = ({ carListCount, carListData, searchCar }) => {
  useEffect(() => {
    searchCar({offset: 0, limit: 5});
    }, [searchCar]);
    return (
      <Wrapper>
        <Table carList={carListData}/>
      </Wrapper>
    );
}

export default connectToRedux(ClientPage);
