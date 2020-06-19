import React, { Fragment } from "react";
import Select from "react-select";

const defaultStyle = {
  container: (provided) => ({
    ...provided,
    width: "100%",
    color: "#9b9999",
    border: "3px solid #e5e5e5",
    borderRadius: "10px",
  }),
};

const SelectRenderFieldComponent = ({ input, ...other }) => {
  const { customStyle, label, required, doOnChange } = other;
  const { value: inputValue } = input;

  return (
    <Fragment>
      <label className="label color-gray" htmlFor="default-id">
        {label}
        {required && <span className="text-danger"> (*)</span>}
      </label>
      <Select
        value={inputValue}
        onChange={(event) => {
          input.onChange(event);
          if (typeof doOnChange === "function") doOnChange(event.value);
        }}
        onBlur={() => input.onBlur(inputValue)}
        styles={Object.assign({}, defaultStyle, customStyle)}
        {...other}
        simpleValue
      />
    </Fragment>
  );
};

export default SelectRenderFieldComponent;
