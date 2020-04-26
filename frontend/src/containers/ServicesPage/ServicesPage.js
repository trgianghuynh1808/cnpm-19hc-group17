import React, { useEffect } from "react";
import PageLayout from "../../layouts";
import PageTitle from "../../components/PageTitle";
import ServicesComponent from "../../components/Services/Services";
import HOC from "../../components/HOC/AuthenHOC";

const ServicesPage = (props) => {
  useEffect(() => {
    document.title = "Services";
  }, []);

  return (
    <PageLayout {...props}>
      <PageTitle title="Services Page" />
      <ServicesComponent />
    </PageLayout>
  );
};

export default HOC(ServicesPage);
