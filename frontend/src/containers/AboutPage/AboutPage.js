import React, { useEffect } from "react";
import PageLayout from "../../layouts";
import PageTitle from "../../components/PageTitle";
import AboutComponent from "../../components/About/About";

const AboutPage = (props) => {
  useEffect(() => {
    document.title = "About";
  }, []);

  return (
    <PageLayout {...props}>
      <PageTitle title="About Us" />
      <AboutComponent />
    </PageLayout>
  );
};

export default AboutPage;
