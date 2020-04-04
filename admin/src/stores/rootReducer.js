import { combineReducers } from "redux";
import { reducers as apiReducers } from "redux-api-call";

import initialState from "./initState";

export default combineReducers({
  ...initialState,
  ...apiReducers
});
