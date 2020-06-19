import React from "react";

//Props description:
//type: text, email, password

const TextInputRenderFieldComponent = ({ input, ...other }) => {
  const { label, required } = other;
  return (
    <div className="form-group text-input">
      <label className="label color-gray" htmlFor="textInput">
        {label}
        {required && <span className="text-danger"> (*)</span>}
      </label>
      <input
        {...input}
        className="form-control color-gray"
        id="textInput"
        {...other}
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

export default TextInputRenderFieldComponent;
