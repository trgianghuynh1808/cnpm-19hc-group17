import React, { useState, useEffect } from 'react';
import Header from '../../components/Header';
import PageTitle from '../../components/PageTitle';
import Footer from '../../components/Footer';
import Content from './components/Content';

import { getGallery } from '../../services/getListCar';

  const GalleryPage = (props) => {
    const [activePage, setActivePage] = useState(0);
    const [pageCount, setPageCount] = useState(0);
    const [carList, setCarList] = useState([]);
    useEffect(() => {
      const offset = activePage === 0 ? 0 : (activePage * 5 + activePage)  ;
      const limit = offset + 5;
      console.log(offset, limit)
      getGallery(offset, limit).then((res)=> {
        const { data = [], count = 0 } = res;
        setPageCount(Math.ceil(count/6));
        setCarList(data);
      });
    },[activePage]);
    return (
      <>
        <Header/>
        <PageTitle title="Our Gallery" />
        <Content pageCount={pageCount} activePage={activePage} setActivePage={setActivePage} carList={carList}/>
        <Footer/>
    </>
    );
  }

export default GalleryPage;