import { makeFetchAction } from "redux-api-call";
import { flow, get } from "lodash/fp";

import { respondToSuccess } from "../middlewares/api-reaction";
import nfetch from "../../libs/nfetch";

const GET_CARS_API = "GET_CARS_API";
const GET_CAR_DETAILS_API = "GET_CAR_DETAILS_API";
export const UPDATE_CAR_STATUS_API = "UPDATE_CAR_STATUS_API";

const getCarsAPI = makeFetchAction(
  GET_CARS_API,
  (filterObj) =>
    nfetch({
      endpoint: `/cars`,
      method: "GET"
    })(filterObj)
);

export const getCars = (filterObj) => {
  return respondToSuccess(
    getCarsAPI.actionCreator(filterObj),
    resp => {
      if (resp.errors) {
        console.error("Err: ", resp.errors);
        return;
      }

      return;
    }
  );
};

export const getCarsSelector = flow(
  getCarsAPI.dataSelector,
  get("data")
);

export const getCarsCountSelector = flow(
  getCarsAPI.dataSelector,
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

export const updateCarStatusAPI = makeFetchAction(UPDATE_CAR_STATUS_API, ({ carID, status }) =>
  nfetch({
    endpoint: `/cars/${carID}`,
    method: "PUT"
  })({ status })
);

export const updateCarStatus = (carID, status, callback)=> {
  return respondToSuccess(updateCarStatusAPI.actionCreator({ carID, status }), resp => {
    if (resp.errors) {
      console.error("Err: ", resp.errors);
      return;
    }
    typeof callback === "function" && callback();

    return;
  });
};

