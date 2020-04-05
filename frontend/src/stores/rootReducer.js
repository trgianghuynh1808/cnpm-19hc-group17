import { combineReducers } from "redux";
import { reducers as apiReducers } from "redux-api-call";
import { reducer as formReducer } from "redux-form";

import initialState from "./initState";

export default combineReducers({
  ...initialState,
  ...apiReducers,
  form: formReducer
});
