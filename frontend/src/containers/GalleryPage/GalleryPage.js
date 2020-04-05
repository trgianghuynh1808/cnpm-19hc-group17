import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { CAR_PER_HORI_PAGE } from '../../utils/enum';

import Header from "../../components/Header";
import PageTitle from "../../components/PageTitle";
import Footer from "../../components/Footer";
import Content from "./components/Content";

import {
  getFilterGallery,
  getFilterGallerySelector,
  getFilterGalleryCountSelector
} from "../../stores/CarsState";

const connectToRedux = connect(
  createStructuredSelector({
    carListData: getFilterGallerySelector,
    carListCount: getFilterGalleryCountSelector,
  }),
  distpatch => ({
    getFilterGallery: (offset, limit) => {
      distpatch(getFilterGallery({ offset, limit }));
    }
  })
);

const GalleryPage = ({ carListData, carListCount, getFilterGallery }) => {
  const [activePage, setActivePage] = useState(0);
  const [pageCount, setPageCount] = useState(0);
  useEffect(() => {
    const carPerPage = CAR_PER_HORI_PAGE - 1 ;
    const offset = activePage === 0 ? 0 : activePage * carPerPage + activePage;
    const limit = offset + carPerPage;
    getFilterGallery(offset, limit);
  }, [activePage]);
  if (!carListData) return <> </>;

  return (
    <>
      <Header />
      <PageTitle title="Our Gallery" />
      <Content
        pageCount={Math.ceil(carListCount / CAR_PER_HORI_PAGE)}
        activePage={activePage}
        setActivePage={setActivePage}
        carList={carListData}
      />
      <Footer />
    </>
  );
};

export default connectToRedux(GalleryPage);
