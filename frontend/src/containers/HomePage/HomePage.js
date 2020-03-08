import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import Header from "../../components/Header";
import SearchForm from "../../components/SearchForm";
import About from "../../components/About";
import Partners from "../../components/Partners";
import Services from "../../components/Services";
import FunFact from "../../components/FunFact";
import CarList from "../../components/CarList";
import Testimonials from "../../components/Testimonials";
import Articles from "../../components/Articles";
import Footer from "../../components/Footer";

import {
  getCarsByBrandAPI,
  getCarsByBrand,
  getCarsByBrandSelector
} from "../../stores/CarsState";

const connectToRedux = connect(
  createStructuredSelector({
    carByBrandsData: getCarsByBrandSelector
  }),
  distpatch => ({
    getCarsByBrand: brand => {
      distpatch(getCarsByBrand(brand));
    }
  })
);

const HomePage = ({ getCarsByBrand, carByBrandsData }) => {
  useEffect(() => {
    getCarsByBrand();
  }, []);

  if (!carByBrandsData) return <> </>;

  return (
    <>
      <Header />
      <SearchForm />
      <About />
      <Partners />
      <Services />
      <FunFact />
      <CarList brandList={carByBrandsData} />
      <Testimonials />
      <Articles />
      <Footer />
    </>
  );
};

export default connectToRedux(HomePage);
