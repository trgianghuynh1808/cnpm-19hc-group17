import { get } from "lodash/fp";
import { ACTIONS } from "redux-api-call";

import {
  getToastFunction,
  doSuccessNotify,
  doErrorNotify,
} from "../libs/notifyToast";

import { LOGIN_API } from "./UserState";
import { ADD_MAINTANCE_LIST_API } from "./maintance/billState";

const getMessage = get("json.message");

export default {
  displayNotify(state = {}, { type, payload = {} }) {
    const { message, name } = payload;

    let msgNotify = "";

    if (type === ACTIONS.COMPLETE) {
      switch (name) {
        case LOGIN_API: //using for API have message in resp
          msgNotify = getMessage(payload);
          break;
        case ADD_MAINTANCE_LIST_API: //using for API have message in resp
          msgNotify = getMessage(payload);
          break;
        default:
          break;
      }
      doSuccessNotify({ message: msgNotify });
      return payload;
    } else if (type === ACTIONS.FAILURE) {
      switch (name) {
        case LOGIN_API:
          msgNotify = getMessage(payload);
          break;
        case ADD_MAINTANCE_LIST_API: //using for API have message in resp
          msgNotify = getMessage(payload);
          break;
        default:
          break;
      }
      doErrorNotify({ message: msgNotify });
      return payload;
    } else {
      if (!message) {
        return state;
      }
      const doToast = getToastFunction(type);
      if (doToast) {
        doToast(message);
        return payload;
      }
    }
    return state;
  },
};
