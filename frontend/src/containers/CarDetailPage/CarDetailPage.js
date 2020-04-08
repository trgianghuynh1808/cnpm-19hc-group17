import React, { useEffect } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import queryString from "query-string";
import { compose } from "redux";

import Header from "../../components/Header";
import PageTitle from "../../components/PageTitle";
import Footer from "../../components/Footer";
import Content from "./components/Content";
import { getCarDetails, getCarDetailsAPI } from "../../stores/CarsState";

const connectToRedux = connect(
  createStructuredSelector({
    carDetailsData: getCarDetailsAPI.dataSelector,
  }),
  (distpatch) => ({
    getCarDetails: (carID) => {
      distpatch(getCarDetails(carID));
    },
  })
);

const enhance = compose(connectToRedux);

const CarDetailPage = ({ getCarDetails, carDetailsData }) => {
  useEffect(() => {
    const {
      location: { search },
    } = window;
    document.title = 'Chi tiết sản phẩm';
    const queryObject = queryString.parse(search);
    const { id = 1 } = queryObject;
    getCarDetails(id);
  }, [getCarDetails]);

  return (
    <>
      <Header />
      <PageTitle title="Our Gallery" />
      {carDetailsData && <Content {...carDetailsData} />}
      <Footer />
    </>
  );
};

export default enhance(CarDetailPage);
