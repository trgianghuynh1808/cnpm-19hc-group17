import React, { useState, useEffect } from 'react';
import Header from '../../components/Header';
import SearchForm from '../../components/SearchForm';
import About from '../../components/About';
import Partners from '../../components/Partners';
import Services from '../../components/Services';
import FunFact from '../../components/FunFact';
import CarList from '../../components/CarList';
import Testimonials from '../../components/Testimonials';
import Articles from '../../components/Articles';
import Footer from '../../components/Footer';

import getListCar from '../../services/getListCar';

  const HomePage = (props) => {
    const [brandList, setBrandList] = useState([]);

    useEffect(() => {
      getListCar().then((res)=> setBrandList(res));
    },[]);
    return (
      <>
        <Header/>
        <SearchForm />
        <About/>
        <Partners/>
        <Services/>
        <FunFact/>
        <CarList brandList={brandList} />
        <Testimonials/>
        <Articles/>
        <Footer/>
    </>
    );
  }

export default HomePage;