import React, { useState, useEffect } from "react";
import SearchForm from "../../components/SearchForm";
import About from "../../components/About";
import Partners from "../../components/Partners";
import Services from "../../components/Services";
import FunFact from "../../components/FunFact";
import CarList from "../../components/CarList";
import Testimonials from "../../components/Testimonials";
import Articles from "../../components/Articles";
import PageLayout from "../../layouts";

import { getCarByBrands } from "../../services/getListCar";

const HomePage = props => {
  const [brandList, setBrandList] = useState([]);

  useEffect(() => {
    getCarByBrands().then(res => {
      const { data = [] } = res;
      console.log(data);
      setBrandList(data);
    });
  }, []);
  return (
    <>
      <PageLayout>
        <SearchForm />
        <About />
        <Partners />
        <Services />
        <FunFact />
        <CarList brandList={brandList} />
        <Testimonials />
        <Articles />
      </PageLayout>
    </>
  );
};

export default HomePage;
