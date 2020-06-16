import React, { Fragment } from "react";
import Select from "react-select";

const defaultStyle = {
  container: (provided) => ({
    ...provided,
    width: "100%",
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
