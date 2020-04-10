import { makeFetchAction } from "redux-api-call";

import { saveToken } from "../libs/token-libs";
import { navigateWithClear } from "../utils/route";
import { respondToSuccess, respondToFailure } from "./middlewares/api-reaction";
import nfetch from "../libs/nfetch";

export const LOGIN_API = "LOGIN_API";
export const CREATE_CONTRACT_USER_API = "CREATE_CONTRACT_USER_API";
const GET_CURRENT_USER_API = "GET_CURRENT_USER_API";

const loginAPI = makeFetchAction(LOGIN_API, ({ username, password }) => {
  return nfetch({
    endpoint: `/accounts/login`,
  })({ username, password });
});

export const login = ({ username, password }) => {
  return respondToSuccess(
    loginAPI.actionCreator({ username, password }),
    (resp) => {
      if (resp.errors) {
        console.error("Err: ", resp.errors);
        return;
      }
      if (resp.token) {
        saveToken(resp.token);
        navigateWithClear("/");
      }
      return;
    }
  );
};

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

export const verifyLogin = (user) => (user ? true : false);

export const GetCurrentUserAPI = makeFetchAction(
  GET_CURRENT_USER_API,
  nfetch({
    endpoint: `/accounts/getCurrentUser`,
    method: "GET",
  })
);

export const getCurrentUserWithFailure = () => {
  return respondToFailure(GetCurrentUserAPI.actionCreator(), (resp) => {
    if (resp.errors) {
      console.error("Err: ", resp.errors);
      return;
    }

    return;
  });
};

export const getCurrentUserWithSucces = () => {
  return respondToSuccess(GetCurrentUserAPI.actionCreator(), (resp) => {
    if (resp.errors) {
      console.error("Err: ", resp.errors);
      return;
    }

    if (!verifyLogin(resp.email)) {
      return navigateWithClear("/login");
    }

    return;
  });
};
