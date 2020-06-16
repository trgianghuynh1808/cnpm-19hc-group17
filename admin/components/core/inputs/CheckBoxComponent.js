import React from "react";

//Props description:
//type: checkbox, radio

const CheckBoxComponent = ({
  type = "checkbox",
  label,
  customLabel,
  defaultValue,
  value,
  disabled,
  inline,
  id,
  name,
  className,
}) => {
  return (
    <div
      className={`form-check ${inline ? "form-check-inline" : ""} ${className}`}
    >
      <input
        className={`form-check-input ${disabled ? "disabled" : ""}`}
        type={type}
        defaultValue={defaultValue}
        value={value}
        id={id}
        name={name}
        disabled={disabled}
      />
      <label
        className="form-check-label color-gray"
        htmlFor={id}
        style={customLabel}
      >
        {label}
      </label>
    </div>
  );
};

export default CheckBoxComponent;
