import React, { useState, useEffect, useReducer } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { CAR_PER_HORI_PAGE } from "../../utils/enums";

import PageTitle from "../../components/PageTitle";
import Content from "./components/Content";
import PageLayout from "../../layouts";

import {
  getFilterGallery,
  getFilterGallerySelector,
  getFilterGalleryCountSelector,
  getBrands,
  getBrandsDataSelector,
} from "../../stores/CarsState";

function reducer(state, action) {
  switch (action.type) {
    case "model":
      return { ...state, model: action.payload };
    case "brand":
      return { ...state, brand: action.payload };
    case "color":
      return { ...state, color: action.payload };
    case "seat":
      return { ...state, seat: action.payload };
    case "offset":
      return { ...state, offset: action.payload };
    default:
      throw new Error();
  }
} 

const connectToRedux = connect(
  createStructuredSelector({
    carListData: getFilterGallerySelector,
    carListCount: getFilterGalleryCountSelector,
    brandsData: getBrandsDataSelector,
  }),
  (distpatch) => ({
    getFilterGallery: (filterObject) => {
      distpatch(getFilterGallery(filterObject));
    },
    getBrands: brand => {
      distpatch(getBrands(brand));
    },
  })
);

const GalleryPage = ({getBrands, brandsData, carListData, carListCount, getFilterGallery }) => {
  const [activePage, setActivePage] = useState(0);
  const [filterObj, dispatch] = useReducer(reducer, { offset: 0, limit: CAR_PER_HORI_PAGE - 1, brand: '', model: '' });

  useEffect(() => {
    document.title = 'Car Gallery';
    getBrands();
    getFilterGallery(filterObj);
  }, [getFilterGallery, getBrands]);
  if (!carListData) return <> </>; 

  const handleSubmit = () => {
    getFilterGallery(filterObj);
  };

  const immediatedSubmit = ({type, value}) => {
    getFilterGallery({...filterObj, [type]: value});
  }

  return (
    <PageLayout>
      <PageTitle title="Our Gallery" />
      <Content
        filterObj={filterObj}
        handleSubmit={handleSubmit}
        immediatedSubmit={immediatedSubmit}
        brands={brandsData}
        setFilterObj={dispatch}
        carPerPage={CAR_PER_HORI_PAGE - 1}
        pageCount={Math.ceil(carListCount / CAR_PER_HORI_PAGE)}
        activePage={activePage}
        setActivePage={setActivePage}
        carList={carListData}
      />
    </PageLayout>
  );
};

export default connectToRedux(GalleryPage);
