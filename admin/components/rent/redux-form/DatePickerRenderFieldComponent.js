import React, { Fragment } from "react";
import DatePicker from "react-datepicker";

const DatePickerRenderFieldComponent = ({ input, ...other }) => {
  const { label, required } = other;
  const { value, onChange } = input;

  return (
    <Fragment>
      <label className="label color-gray" htmlFor="default-id">
        {label}
        {required && <span className="text-danger"> (*)</span>}
      </label>
      <DatePicker
        selected={value}
        onChange={onChange}
        todayButton="Today"
        {...other}
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

export default DatePickerRenderFieldComponent;
