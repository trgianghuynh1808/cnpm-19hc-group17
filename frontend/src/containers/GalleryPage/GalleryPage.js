import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import Header from "../../components/Header";
import PageTitle from "../../components/PageTitle";
import Footer from "../../components/Footer";
import Content from "./components/Content";

import {
  getFilterGallery,
  getFilterGallerySelector
} from "../../stores/CarsState";

const connectToRedux = connect(
  createStructuredSelector({
    carListData: getFilterGallerySelector
  }),
  distpatch => ({
    getFilterGallery: (offset, limit) => {
      distpatch(getFilterGallery({ offset, limit }));
    }
  })
);

const GalleryPage = ({ carListData, getFilterGallery }) => {
  const [activePage, setActivePage] = useState(0);
  const [pageCount, setPageCount] = useState(0);

  useEffect(() => {
    const offset = activePage === 0 ? 0 : activePage * 5 + activePage;
    const limit = offset + 5;
    getFilterGallery(offset, limit);

    if (carListData) setPageCount(Math.ceil(carListData.count / 6));
  }, [activePage]);

  if (!carListData) return <> </>;

  return (
    <>
      <Header />
      <PageTitle title="Our Gallery" />
      <Content
        pageCount={pageCount}
        activePage={activePage}
        setActivePage={setActivePage}
        carList={carListData}
      />
      <Footer />
    </>
  );
};

export default connectToRedux(GalleryPage);
