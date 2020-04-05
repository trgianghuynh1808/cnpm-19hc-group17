import { makeFetchAction } from "redux-api-call";

import { respondToSuccess } from "./middlewares/api-reaction";
import nfetch from "../libs/nfetch";

const CREATE_CONTRACT_USER_API = "CREATE_CONTRACT_USER_API";

const CreateContractUserAPI = makeFetchAction(
  CREATE_CONTRACT_USER_API,
  (objBody) =>
    nfetch({
      endpoint: `/contracts`,
    })(objBody)
);

export const createContractUser = (objBody, callback) => {
  return respondToSuccess(
    CreateContractUserAPI.actionCreator(objBody),
    (resp, _, store) => {
      if (resp.errors) {
        console.error("Err: ", resp.errors);
        return;
      }
      typeof callback === "function" && callback(store.dispatch);

      return;
    }
  );
};
