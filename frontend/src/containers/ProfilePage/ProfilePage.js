import React from "react";
import PageLayout from "../../layouts";
import PageTitle from "../../components/PageTitle";
import SideBar from './components/SideBar';
import Profile from './components/Profile';

import HOC from "../../components/HOC/AuthenHOC";

const ProfilePage =  (props) => {

  return (
    <PageLayout {...props}>
      <PageTitle title="Profile Page"/>
        <section id="car-list-area" className="section-padding">
            <div className="container-fluid">
              <div className="row">
                <SideBar/>
                <Profile/>
              </div>
            </div>
        </section>
    </PageLayout>
  );
}

export default HOC(ProfilePage);