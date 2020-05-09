import { makeFetchAction } from "redux-api-call";

import { respondToSuccess } from "./middlewares/api-reaction";
import nfetch from "../libs/nfetch";
import { flow, get } from "lodash/fp";
import { REVIEWING_STATUS_CONTRACT } from "../utils/enums";

const GET_FILTER_REVIEWING_CONTRACTS_API = "GET_FILTER_REVIEWING_CONTRACTS_API";
export const UPDATE_STATUS_CONTRACT_API = "UPDATE_STATUS_CONTRACT_API";
const GET_FILTER_CONTRACTS_API = "GET_FILTER_CONTRACTS_API";

const GetFilterReviewingContractsAPI = makeFetchAction(
  GET_FILTER_REVIEWING_CONTRACTS_API,
  ({ limit, offset, email }) =>
    nfetch({
      endpoint: `/contracts`,
      method: "GET",
    })({ limit, offset, email, status: REVIEWING_STATUS_CONTRACT })
);

export const getFilterReviewingContracts = ({ limit, offset, email }) => {
  return respondToSuccess(
    GetFilterReviewingContractsAPI.actionCreator({ limit, offset, email }),
    (resp) => {
      if (resp.errors) {
        console.error("Err: ", resp.errors);
        return;
      }

      return;
    }
  );
};

export const getFilterReviewingContractsDataSelector = flow(
  GetFilterReviewingContractsAPI.dataSelector,
  get("data")
);

export const getFilterReviewingContractsCountSelector = flow(
  GetFilterReviewingContractsAPI.dataSelector,
  get("count")
);

const UpdateStatusContractAPI = makeFetchAction(
  UPDATE_STATUS_CONTRACT_API,
  ({ idContract, status }) =>
    nfetch({
      endpoint: `/contracts/${idContract}`,
    })({ status })
);

export const updateStatusContract = (idContract, status, callback) => {
  return respondToSuccess(
    UpdateStatusContractAPI.actionCreator({ idContract, status }),
    (resp, header, store) => {
      if (resp.errors) {
        console.error("Err: ", resp.errors);
        return;
      }

      typeof callback === "function" && callback(store.dispatch);

      return;
    }
  );
};

const GetFilterContractsAPI = makeFetchAction(
  GET_FILTER_CONTRACTS_API,
  ({ limit, offset, email, status }) =>
    nfetch({
      endpoint: `/contracts`,
      method: "GET",
    })({ limit, offset, email, status, status_neq: REVIEWING_STATUS_CONTRACT })
);

export const getFilterContracts = ({ limit, offset, email, status }) => {
  return respondToSuccess(
    GetFilterContractsAPI.actionCreator({ limit, offset, email, status }),
    (resp, header, store) => {
      if (resp.errors) {
        console.error("Err: ", resp.errors);
        return;
      }

      return;
    }
  );
};

export const getFilterContractsDataSelector = flow(
  GetFilterContractsAPI.dataSelector,
  get("data")
);

export default {};
