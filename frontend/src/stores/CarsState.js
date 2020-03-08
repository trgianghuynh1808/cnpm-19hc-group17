import { makeFetchAction } from "redux-api-call";
import { flow, get } from "lodash/fp";

import { respondToSuccess } from "./middlewares/api-reaction";
import nfetch from "../libs/nfetch";

const GET_CARS_BY_BRAND_API = "GET_CARS_BY_BRAND_API";

const getCarsByBrandAPI = makeFetchAction(GET_CARS_BY_BRAND_API, ({ brand }) =>
  nfetch({
    endpoint: `/brands`,
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
