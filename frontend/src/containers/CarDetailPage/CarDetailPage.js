import React, { useEffect } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
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

const CarDetailPage = (props) => {
  const { getCarDetails, carDetailsData, match: { params } } = props;
  const { id } = params;
  useEffect(() => {
    getCarDetails(id);
  }, [getCarDetails, id]);

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
