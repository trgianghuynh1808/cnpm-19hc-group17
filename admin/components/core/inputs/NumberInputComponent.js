import React from "react";

const NumberInputComponent = ({
  label,
  placeholder,
  id,
  doOnChange,
  defValue,
  minValue,
  maxValue,
  stepValue,
}) => {
  return (
    <div className="form-group number-input w-100">
      <label htmlFor={id || "number-input"} className="color-gray">
        {label}
      </label>
      <input
        type="number"
        className="form-control"
        id={id || "number-input"}
        placeholder={placeholder}
        onChange={doOnChange}
        defaultValue={defValue}
        min={minValue}
        max={maxValue}
        step={stepValue}
      />
      <style jsx>{`
        .number-input input {
          border: 3px solid #e5e5e5;
          border-radius: 10px;
        }
      `}</style>
    </div>
  );
};

export default NumberInputComponent;
