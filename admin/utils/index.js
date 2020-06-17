export const doFunctionWithEnter = (event, func) =>
  typeof event === "object" &&
  event.key === "Enter" &&
  typeof func === "function" &&
  func();
