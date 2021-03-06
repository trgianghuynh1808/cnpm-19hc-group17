import React, { useEffect } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
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

const CarDetailPage = (props) => {
  const { getCarDetails, carDetailsData, match: { params } } = props;
  const { id } = params;
  useEffect(() => {
    getCarDetails(id);
  }, [getCarDetails, id]);

  return (
    <PageLayout>
      <PageTitle title="Our Car" />
      {carDetailsData && <Content {...carDetailsData} />}
    </PageLayout>
  );
};

export default enhance(CarDetailPage);
