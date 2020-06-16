import React from "react";

//Props description:
//type: text, email, password

const TextInputComponent = ({
  type = "text",
  placeholder = "",
  label,
  value = null,
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
        value={value}
        disabled={disabled}
        onChange={doOnChange}
        onKeyPress={doOnKeyPress}
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
