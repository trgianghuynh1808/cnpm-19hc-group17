export const LOGIN_ROLE = "admin";

export const DATE_FORMAT = "YYYY-MM-DD";
export const PERCENT_DEPOSIT_FEE = 30;

export const CAR_PER_HORI_PAGE = 6;
export const CAR_PER_VERTI_PAGE = 4;

export const SEARCH_VALUE = {
  color: ["Red", "White", "Blue", "Black"],
  seat: [5, 7, 16],
  model: ["SUV", "Coupe", "MPV"],
};

//Toast Actions
export const TOAST_INFO = "TOAST_INFO";
export const TOAST_WARN = "TOAST_WARN";
export const TOAST_ERROR = "TOAST_ERROR";
export const TOAST_SUCCESS = "TOAST_SUCCESS";
export const TOAST_DEFAULT = "TOAST_DEFAULT";

//Toast Position
export const TOP_LEFT = "top-left";
export const TOP_RIGHT = "top-right";
export const TOP_CENTER = "top-center";
export const BOTTOM_LEFT = "bottom-left";
export const BOTTOM_RIGHT = "bottom-right";
export const BOTTOM_CENTER = "bottom-center";

//Toast Default Options
export const TOAST_DEFAULT_OPTIONS = {
  position: TOP_RIGHT,
  autoClose: 5000,
  pauseOnHover: true,
  closeOnClick: true,
  hideProgressBar: false,
};

//Badge Info using render status with badge
export const STATUS_BADGE_INFO = [
  {
    name: "reviewing",
    badge: "warning",
  },
  {
    name: "done",
    badge: "success",
  },
  {
    name: "reject",
    badge: "danger",
  },
];

//Pagination
export const DEFAULT_LIMIT = 5;
export const DEFAULT_OFFSET = 0;

//Status Contract
export const REVIEWING_STATUS_CONTRACT = "reviewing";
export const DONE_STATUS_CONTRACT = "done";
export const REJECT_STATUS_CONTRACT = "reject";
export const RENTING_STATUS_CONTRACT = "renting";
