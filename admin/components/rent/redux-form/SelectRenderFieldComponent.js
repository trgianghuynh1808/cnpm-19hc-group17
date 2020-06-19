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
  const { id, customStyle, label, required } = other;

  return (
    <Fragment>
      <label className="label color-gray" htmlFor="default-id">
        {label}
        {required && <span className="text-danger"> (*)</span>}
      </label>
      <Select
        instanceId={id || "default-id"}
        styles={Object.assign({}, defaultStyle, customStyle)}
        {...other}
      />
    </Fragment>
  );
};

export default SelectRenderFieldComponent;
