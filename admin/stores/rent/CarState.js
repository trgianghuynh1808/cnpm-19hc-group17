import { makeFetchAction } from "redux-api-call";

import {
  respondToSuccess,
  respondToFailure,
} from "../middlewares/api-reaction";
import nfetch from "../../libs/nfetch";

const GET_BRANDS_API = "GET_BRANDS_API";
const GET_MODELS_BY_BRAND_API = "GET_MODALS_BY_BRAND_API";

export const GetBrandsAPI = makeFetchAction(
  GET_BRANDS_API,
  nfetch({
    endpoint: `/brands`,
    method: "GET",
  })
);

export const getBrands = () => {
  return respondToSuccess(GetBrandsAPI.actionCreator(), (resp) => {
    if (resp.errors) {
      console.error("Err: ", resp.errors);
      return;
    }

    return;
  });
};

export const GetModelsByBrandAPI = makeFetchAction(
  GET_MODELS_BY_BRAND_API,
  ({ brand }) => {
    return nfetch({
      endpoint: `/brands/carsGroupByBrands`,
      method: "GET",
    })({ brand });
  }
);

export const getModelsByBrand = (brand) => {
  return respondToSuccess(
    GetModelsByBrandAPI.actionCreator({ brand }),
    (resp) => {
      if (resp.errors) {
        console.error("Err: ", resp.errors);
        return;
      }

      return;
    }
  );
};

export default {};
