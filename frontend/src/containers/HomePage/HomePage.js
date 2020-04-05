import React, { useEffect } from "react";
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

import { getBrands, getBrandsDataSelector, getCarsByBrand, getCarsByBrandSelector } from "../../stores/CarsState";

const connectToRedux = connect(
  createStructuredSelector({
    carByBrandsData: getCarsByBrandSelector,
    brandsData: getBrandsDataSelector,
  }),
  distpatch => ({
    getCarsByBrand: brand => {
      distpatch(getCarsByBrand(brand));
    },
    getBrands: brand => {
      distpatch(getBrands(brand));
    },
  })
);

const HomePage = ({ getBrands,brandsData , getCarsByBrand, carByBrandsData }) => {
  useEffect(() => {
    getCarsByBrand();
    getBrands();
  }, [getCarsByBrand, getBrands]);
  return (
    <>
      <Header />
      <SearchForm brands={brandsData}/>
      <About />
      <Partners />
      <Services />
      <FunFact />
      <CarList carListGroupByBrand={carByBrandsData} />
      <Testimonials />
      <Articles />
      <Footer />
    </>
  );
};

export default connectToRedux(HomePage);
