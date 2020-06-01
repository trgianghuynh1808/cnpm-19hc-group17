import { makeFetchAction } from "redux-api-call";
import { flow, get } from "lodash/fp";

import { respondToSuccess } from "./middlewares/api-reaction";
import nfetch from "../libs/nfetch";

const GET_CARS_BY_BRAND_API = "GET_CARS_BY_BRAND_API";
const GET_FILTER_GALLERY_API = "GET_FILTER_GALLERY_API";
const GET_CAR_DETAILS_API = "GET_CAR_DETAILS_API";
const SEARCH_CARS_API = "SEARCH_CARS_API";
const GET_BRANDS_API = "GET_BRANDS_API";


const getCarsByBrandAPI = makeFetchAction(GET_CARS_BY_BRAND_API, ({ brand }) =>
  nfetch({
    endpoint: `/brands/carsGroupByBrands`,
    method: "GET"
  })({ brand })
);

export const getCarsByBrand = brand => {
  return respondToSuccess(getCarsByBrandAPI.actionCreator({ brand }), resp => {
    if (resp.errors) {
      console.error("Err: ", resp.errors);
      return;
    }

    return;
  });
};

export const getCarsByBrandSelector = flow(
  getCarsByBrandAPI.dataSelector,
  get("data")
);

const getFilterGalleryAPI = makeFetchAction(
  GET_FILTER_GALLERY_API,
  (filterObj) =>
    nfetch({
      endpoint: `/cars`,
      method: "GET"
    })(filterObj)
);

export const getFilterGallery = (filterObj) => {
  return respondToSuccess(
    getFilterGalleryAPI.actionCreator(filterObj),
    resp => {
      if (resp.errors) {
        console.error("Err: ", resp.errors);
        return;
      }

      return;
    }
  );
};

export const getFilterGallerySelector = flow(
  getFilterGalleryAPI.dataSelector,
  get("data")
);

export const getFilterGalleryCountSelector = flow(
  getFilterGalleryAPI.dataSelector,
  get("count")
);


export const getCarDetailsAPI = makeFetchAction(GET_CAR_DETAILS_API, ({ carID }) =>
  nfetch({
    endpoint: `/cars/${carID}`,
    method: "GET"
  })()
);

export const getCarDetails = carID => {
  return respondToSuccess(getCarDetailsAPI.actionCreator({ carID }), resp => {
    if (resp.errors) {
      console.error("Err: ", resp.errors);
      return;
    }

    return;
  });
};

export const searchCarAPI = makeFetchAction(SEARCH_CARS_API, (queryObj) =>
  nfetch({
    endpoint: `/cars`,
    method: "GET"
  })(queryObj)
);

export const searchCar = queryObj => {
  return respondToSuccess(searchCarAPI.actionCreator({ ...queryObj }), resp => {
    if (resp.errors) {
      console.error("Err: ", resp.errors);
      return;
    }

    return;
  });
};

export const searchCarDataSelector = flow(
  searchCarAPI.dataSelector,
  get("data")
);

export const searchCarCountSelector = flow(
  searchCarAPI.dataSelector,
  get("count")
);

const getBrandsAPI = makeFetchAction(GET_BRANDS_API, () =>
  nfetch({
    endpoint: `/brands`,
    method: "GET"
  })()
);

export const getBrands = () => {
  return respondToSuccess(getBrandsAPI.actionCreator(), resp => {
    if (resp.errors) {
      console.error("Err: ", resp.errors);
      return;
    }
    return;
  });
};

export const getBrandsDataSelector = flow(
  getBrandsAPI.dataSelector
);