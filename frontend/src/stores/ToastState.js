import { get } from "lodash/fp";
import { ACTIONS } from "redux-api-call";

import {
  getToastFunction,
  doSuccessNotify,
  doErrorNotify,
} from "../libs/notifyToast";

import { LOGIN_API, CREATE_CONTRACT_USER_API, UPDATE_PROFILE_USER_API } from "./UsersState";

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
        case CREATE_CONTRACT_USER_API:
          msgNotify = "Booking Success! We will send you an email to complete the procedure.";
            break;
        case UPDATE_PROFILE_USER_API:
          msgNotify = "Your profile updated success!";
            break;
        default:
          break;
      }
      doSuccessNotify({ message: msgNotify });
      return payload;
    } else if (type === ACTIONS.FAILURE) {
      switch (name) {
        case LOGIN_API:
        case CREATE_CONTRACT_USER_API:
          msgNotify = getMessage(payload);
          break;
        case UPDATE_PROFILE_USER_API:
          msgNotify = "Your profile updated failed!";
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
