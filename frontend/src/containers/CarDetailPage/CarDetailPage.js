import React, { useState, useEffect } from 'react';
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import Header from '../../components/Header';
import PageTitle from '../../components/PageTitle';
import Footer from '../../components/Footer';
import Content from './components/Content';
import queryString from 'query-string';
import { getCarDetails, getCarDetailsAPI } from "../../stores/CarsState";


const connectToRedux = connect(
  createStructuredSelector({
    carDetailsData: getCarDetailsAPI.dataSelector
  }),
  distpatch => ({
    getCarDetails: carID => {
      distpatch(getCarDetails(carID));
    }
  })
);

  const CarDetailPage = ({getCarDetails, carDetailsData}) => {
    useEffect(() => {
      const { location: { search } } = window;
      const queryObject = queryString.parse(search);
      const { id = 1 } = queryObject;
      getCarDetails(id);
    },[]);
    return (
      <>
        <Header/>
        <PageTitle title="Our Gallery" />
        {carDetailsData && <Content {...carDetailsData} />}
        <Footer/>
    </>
    );
  }
export default connectToRedux(CarDetailPage);