import React from "react";

const TextAreaRenderFieldComponent = ({ input, ...other }) => {
  return <textarea {...input} className="form-control" {...other} />;
};

export default TextAreaRenderFieldComponent;
