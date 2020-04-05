import React from "react";
import Datetime from "react-datetime";

import { DATE_FORMAT } from "../../../utils/enums";

const DateTimeRenderFieldComponent = ({ input, ...other }) => {
  return (
    <Datetime
      {...input}
      timeFormat={false}
      dateFormat={DATE_FORMAT}
      inputProps={{
        placeholder: DATE_FORMAT,
        readOnly: true,
      }}
      {...other}
    />
  );
};

export default DateTimeRenderFieldComponent;
