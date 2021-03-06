import React from "react";

import { doFunctionWithEnter } from "../../../utils";

//Props description:
//type: text, email, password

const TextInputComponent = ({
  type = "text",
  placeholder = "",
  label,
  value = "",
  disabled,
  doOnChange,
  doOnKeyPress,
}) => {
  return (
    <div className="form-group text-input">
      <label className="label color-gray" htmlFor="textInput">
        {label}
      </label>
      <input
        type={type}
        className="form-control color-gray"
        id="textInput"
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
        .text-input input {
          border: 3px solid #e5e5e5;
          border-radius: 10px;
        }
      `}</style>
    </div>
  );
};

export default TextInputComponent;
