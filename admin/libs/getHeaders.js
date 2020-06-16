import { identity, pickBy } from "lodash/fp";
import { getToken } from "./token-libs";

export const formatObj = pickBy(identity);

export default (options = {}) => {
  let headers = Object.assign(
    {},
    {
      "Content-Type": "application/json",
    },
    formatObj(options)
  );

  if (getToken()) {
    headers = { ...headers, "x-access-token": getToken() };
  }
  return headers;
};
