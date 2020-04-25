import React, { useEffect } from "react";
import PageLayout from "../../layouts";
import PageTitle from "../../components/PageTitle";
import ContactComponent from "../../components/Contact/Contact";

const ContactPage = (props) => {
  useEffect(() => {
    document.title = "Contact";
  }, []);

  return (
    <PageLayout {...props}>
      <PageTitle title="Contact Us" />
      <ContactComponent />
    </PageLayout>
  );
};

export default ContactPage;
