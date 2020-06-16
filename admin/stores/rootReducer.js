import { combineReducers } from "redux";
import { reducers as apiReducers } from "redux-api-call";

// import toastState from "./ToastState";
import userState from "./UserState";

export default combineReducers({
  ...apiReducers,
  ...userState,
  // ...toastState,
});
