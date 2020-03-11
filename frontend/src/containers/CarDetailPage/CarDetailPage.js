import React, { useState, useEffect } from 'react';
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import Header from '../../components/Header';
import PageTitle from '../../components/PageTitle';
import Footer from '../../components/Footer';
import Content from './components/Content';
import queryString from 'query-string';
import { getCarDetails, getCarDetailsSelector } from "../../stores/CarsState";


const connectToRedux = connect(
  createStructuredSelector({
    carDetailsData: getCarDetailsSelector
  }),
  distpatch => ({
    getCarDetails: carID => {
      distpatch(getCarDetails(carID));
    }
  })
);

  const CarDetailPage = ({ getCarDetails, carDetailsData }) => {
    const [ isLoading, setIsLoading ] = useState(true);
    useEffect(() => {
      const { location: { search } } = window;
      const queryObject = queryString.parse(search);
      const { id = 1 } = queryObject;
      getCarDetails(id);
      setIsLoading(false);
    },[]);
    console.log(carDetailsData);
    return (
      <>
        <Header/>
        <PageTitle title="Our Gallery" />
        {!isLoading && <Content {...carDetailsData} />}
        <Footer/>
    </>
    );
  }
export default connectToRedux(CarDetailPage);