import React, { Fragment } from "react";
import DatePicker from "react-datepicker";

const DatePickerComponent = ({
  curDate,
  setCurDate,
  placeholder,
  minDate,
  maxDate,
}) => {
  return (
    <Fragment>
      <DatePicker
        todayButton="Today"
        selected={curDate}
        onChange={(date) => setCurDate(date)}
        placeholderText={placeholder}
        minDate={minDate}
        maxDate={maxDate}
      />
      <style jsx global>{`
        .react-datepicker-wrapper {
          width: 100%;
        }

        .react-datepicker__input-container input {
          border: 3px solid #e5e5e5;
          border-radius: 10px;
          padding: 6px 12px;
          color: #9b9999;
          width: 100%;
        }

        .react-datepicker__input-container input:focus {
          border-color: #e5e5e5 !important;
          color: #9b9999;
        }
      `}</style>
    </Fragment>
  );
};

export default DatePickerComponent;
