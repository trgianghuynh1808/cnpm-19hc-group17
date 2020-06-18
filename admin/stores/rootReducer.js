import { combineReducers } from "redux";
import { reducers as apiReducers } from "redux-api-call";
import { reducer as formReducer } from "redux-form";

import toastState from "./ToastState";
import userState from "./UserState";

export default combineReducers({
  ...apiReducers,
  ...userState,
  ...toastState,
  form: formReducer,
});
