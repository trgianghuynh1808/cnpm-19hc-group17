import React, { useState, useEffect } from 'react';
import Header from '../../components/Header';
import PageTitle from '../../components/PageTitle';
import Footer from '../../components/Footer';
import Content from './components/Content';

import { getGallery } from '../../services/getListCar';

  const CarDetailPage = (props) => {
    const { car, setCar } = useState({});
    useEffect(() => {
      const 
    },[activePage]);
    return (
      <>
        <Header/>
        <PageTitle title="Our Gallery" />
        <Content tivePage={activePage} setActivePage={setActivePage} carList={carList}/>
        <Footer/>
    </>
    );
  }

export default CarDetailPage;