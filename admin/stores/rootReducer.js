import { combineReducers } from "redux";
import { reducers as apiReducers } from "redux-api-call";

// import toastState from "./ToastState";

export default combineReducers({
  ...apiReducers,
  // ...toastState,
});
