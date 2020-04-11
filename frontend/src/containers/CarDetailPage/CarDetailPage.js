import React, { useEffect } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import queryString from "query-string";
import { compose } from "redux";
import PageLayout from "../../layouts";

import PageTitle from "../../components/PageTitle";
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
    const queryObject = queryString.parse(search);
    const { id = 1 } = queryObject;
    getCarDetails(id);
  }, [getCarDetails]);

  return (
    <PageLayout>
      <PageTitle title="Our Gallery" />
      {carDetailsData && <Content {...carDetailsData} />}
    </PageLayout>
  );
};

export default enhance(CarDetailPage);
