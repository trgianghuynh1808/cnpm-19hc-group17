import { makeFetchAction } from "redux-api-call";
import Router from "next/router";

import { saveToken } from "../libs/token-libs";
import { respondToSuccess, respondToFailure } from "./middlewares/api-reaction";
import nfetch from "../libs/nfetch";

export const LOGIN_API = "LOGIN_API";
const GET_CURRENT_USER_API = "GET_CURRENT_USER_API";

const loginAPI = makeFetchAction(LOGIN_API, ({ username, password, role }) => {
  return nfetch({
    endpoint: `/accounts/login`,
  })({ username, password, role });
});

export const login = ({ username, password, role }) => {
  return respondToSuccess(
    loginAPI.actionCreator({ username, password, role }),
    (resp) => {
      if (resp.errors) {
        console.error("Err: ", resp.errors);
        return;
      }
      if (resp.token) {
        saveToken(resp.token);
        Router.push("/");
      }
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

    if (!verifyLogin(resp.email)) {
      return Router.push("/login");
    }

    return;
  });
};

export default {};
