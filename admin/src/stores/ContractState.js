import { makeFetchAction } from "redux-api-call";

import { respondToSuccess } from "./middlewares/api-reaction";
import nfetch from "../libs/nfetch";
import { flow, get } from "lodash/fp";
import { REVIEWING_STATUS_CONTRACT } from "../utils/enums";

const GET_FILTER_CONTRACTS_API = "GET_FILTER_CONTRACTS_API";

const GetFilterReviewingContractsAPI = makeFetchAction(
  GET_FILTER_CONTRACTS_API,
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

export default {};
