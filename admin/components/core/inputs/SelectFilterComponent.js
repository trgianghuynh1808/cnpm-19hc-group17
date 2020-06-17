import React from "react";
import Select from "react-select";

const defaultStyle = {
  container: (provided) => ({
    ...provided,
    width: "100%",
  }),
  control: (provided) => ({
    ...provided,
    border: "none",
    borderBottom: "1px solid black",
    borderRadius: "0px",
  }),
  indicatorSeparator: (provided) => ({
    ...provided,
    display: "none",
  }),
  singleValue: (provided) => ({
    ...provided,
    width: "100%",
    textAlign: "center",
  }),
  placeholder: (provided) => ({
    ...provided,
    width: "100%",
    textAlign: "center",
  }),
};

const SelectFilterComponent = ({
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

export default SelectFilterComponent;
