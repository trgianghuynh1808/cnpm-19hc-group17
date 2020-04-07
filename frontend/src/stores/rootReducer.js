import { combineReducers } from "redux";
import { reducers as apiReducers } from "redux-api-call";
import { reducer as formReducer } from "redux-form";

import initialState from "./initState";
import toastState from "./ToastState";

export default combineReducers({
  ...initialState,
  ...apiReducers,
  ...toastState,
  form: formReducer,
});
