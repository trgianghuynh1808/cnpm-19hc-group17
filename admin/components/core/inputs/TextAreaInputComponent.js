import React from "react";

import { doFunctionWithEnter } from "../../../utils";

const TextAreaInputComponent = ({
  placeholder = "",
  label,
  value = "",
  disabled,
  doOnChange,
  doOnKeyPress,
  row = "3",
}) => {
  return (
    <div className="form-group text-input-area">
      <label className="label color-gray" htmlFor="textAreaInput">
        {label}
      </label>
      <textarea
        row={row}
        className="form-control color-gray"
        id="textAreaInput"
        placeholder={placeholder}
        defaultValue={value}
        disabled={disabled}
        onChange={doOnChange}
        readOnly={typeof doOnChange === "function" ? true : false}
        onKeyPress={
          typeof doOnKeyPress === "function"
            ? (event) => {
                doFunctionWithEnter(event, () => {
                  doOnKeyPress(event.target.value);
                });
              }
            : () => {}
        }
      />

      <style jsx>{`
        .text-input-area input {
          border: 3px solid #e5e5e5;
          border-radius: 10px;
        }
      `}</style>
    </div>
  );
};

export default TextAreaInputComponent;
