import { toast } from "react-toastify";

import {
  TOAST_DEFAULT,
  TOAST_ERROR,
  TOAST_INFO,
  TOAST_SUCCESS,
  TOAST_WARN,
  TOAST_DEFAULT_OPTIONS,
} from "../utils/enums";

export const getToastFunction = (type, options = {}) => {
  const optsMerge = Object.assign({}, TOAST_DEFAULT_OPTIONS, options);
  let doToast = null;
  switch (type) {
    case TOAST_SUCCESS:
      doToast = toast.success;
      break;
    case TOAST_ERROR:
      doToast = toast.error;
      break;
    case TOAST_WARN:
      doToast = toast.warn;
      break;
    case TOAST_INFO:
      doToast = toast.info;
      break;
    case TOAST_DEFAULT:
      doToast = toast;
      break;
    default:
      return doToast;
  }
  return (message) => doToast(message, optsMerge);
};

export const doSuccessNotify = ({ message, options = {} }) =>
  message &&
  toast.success(message, Object.assign({}, TOAST_DEFAULT_OPTIONS, options));

export const doErrorNotify = ({ message, options = {} }) =>
  message &&
  toast.error(message, Object.assign({}, TOAST_DEFAULT_OPTIONS, options));
