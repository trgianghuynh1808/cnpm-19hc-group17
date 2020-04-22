import React, { useEffect } from "react";
import PageLayout from "../../layouts";
import PageTitle from "../../components/PageTitle";
import DriverComponent from "../../components/Driver/Driver";

const DriverPage = (props) => {
  useEffect(() => {
    document.title = "Driver";
  }, []);

  return (
    <PageLayout {...props}>
      <PageTitle title="Our Drivers" />
      <DriverComponent />
    </PageLayout>
  );
};

export default DriverPage;
