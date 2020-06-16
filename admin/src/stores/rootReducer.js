import { combineReducers } from "redux";
import { reducers as apiReducers } from "redux-api-call";

import initialState from "./initState";
import toastState from "./ToastState";

export default combineReducers({
  ...initialState,
  ...apiReducers,
  ...toastState,
});
