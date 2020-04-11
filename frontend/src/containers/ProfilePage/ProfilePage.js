import React from "react";
import PageLayout from "../../layouts";
import PageTitle from "../../components/PageTitle";
import HOC from "../../components/HOC/AuthenHOC";

const ProfilePage =  (props) => {

  return (
    <PageLayout {...props}>
      <PageTitle title="Profile Page"/>
    </PageLayout>
  );
}

export default HOC(ProfilePage);