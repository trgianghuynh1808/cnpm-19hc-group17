import { combineReducers } from "redux";
import { reducers as apiReducers } from "redux-api-call";

import initialState from "./initState";
import toastState from "./ToastState";
import contractState from "./ContractState";

export default combineReducers({
  ...initialState,
  ...apiReducers,
  ...toastState,
  ...contractState,
});
