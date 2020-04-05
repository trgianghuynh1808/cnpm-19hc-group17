import { makeFetchAction } from "redux-api-call";
import { flow, get } from "lodash/fp";
import { saveToken } from '../libs/token-libs';
import { navigateWithClear } from '../utils/route';

import { respondToSuccess } from "./middlewares/api-reaction";
import nfetch from "../libs/nfetch";

const LOGIN_API = "LOGIN_API";

const loginAPI = makeFetchAction(LOGIN_API, ({ username, password }) =>{
  return nfetch({
    endpoint: `/accounts/login`,
  })({ username, password  })
}

);

export const login = ({username, password}) => {
  return respondToSuccess(loginAPI.actionCreator({ username, password }), resp => {
    if (resp.errors) {
      console.error("Err: ", resp.errors);
      return;
    }
    if(resp.token) {
      saveToken(resp.token);
      navigateWithClear('/');
    }
    return;
  });
};
