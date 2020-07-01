
import { makeFetchAction } from "redux-api-call";

import { respondToSuccess } from "../middlewares/api-reaction";
import nfetch from "../../libs/nfetch";

export const ADD_MAINTANCE_LIST_API = "ADD_MAINTANCE_LIST_API";
export const UPDATE_BILL_STATUS_API = "UPDATE_BILL_STATUS_API";

const addMaintanceListAPI = makeFetchAction(
  ADD_MAINTANCE_LIST_API,
  (objBody) =>
    nfetch({
      endpoint: `/maintance`,
    })(objBody)
);

export const addMaintanceList = (objBody, callback) => {
  return respondToSuccess(
    addMaintanceListAPI.actionCreator(objBody),
    resp => {
      if (resp.errors) {
        console.error("Err: ", resp.errors);
        return;
      }

      typeof callback === "function" && callback();

      return;
    }
  );
};

const updateBillStatusAPI = makeFetchAction(
  UPDATE_BILL_STATUS_API,
  ({ billID, status }) =>
    nfetch({
      endpoint: `/bills/${billID}`,
      method: "PUT"
    })({ status })
);

export const updateBillStatus = (billID, status, callback) => {
  return respondToSuccess(
    updateBillStatusAPI.actionCreator({ billID, status }),
    resp => {
      if (resp.errors) {
        console.error("Err: ", resp.errors);
        return;
      }

      typeof callback === "function" && callback();

      return;
    }
  );
};
