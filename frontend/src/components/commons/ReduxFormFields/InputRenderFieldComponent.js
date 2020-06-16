import React from "react";

const InputRenderFieldComponent = ({ input, ...other }) => {
  return (
    <input
      {...input}
      type="text"
      className="form-control"
      id="InputText"
      {...other}
    />
  );
};

export default InputRenderFieldComponent;
