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

const SelectComponent = ({
  options,
  doOnChange,
  placeholder,
  id,
  customStyle,
}) => (
  <Select
    options={options}
    styles={Object.assign({}, defaultStyle, customStyle)}
    onChange={doOnChange}
    instanceId={id || "default-id"}
    placeholder={placeholder}
  />
);

export default SelectComponent;
