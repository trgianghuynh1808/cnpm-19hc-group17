import React, { Fragment, useEffect, useRef, useState } from "react";

const pickBackGround = (color) => {
  switch (color) {
    case "green":
      return "#27ae60";
    case "red":
      return "#C0392B";
    default:
      return "blue";
  }
};

//Props description
// color: red, green

const ButtonComponent = ({ icon, content, doOnClick, color, className }) => {
  const curColor = pickBackGround(color);

  return (
    <Fragment>
      <button
        type="button"
        className={`btn btn-primary button-style ${className || ""}`}
        onClick={doOnClick}
      >
        <div className="d-flex">
          <div className="mr-2">{icon}</div>
          <span>{content}</span>
        </div>
      </button>
      <style jsx>
        {`
          .button-style {
            background: ${curColor};
            border-radius: 10px;
            border-color: ${curColor};
          }

          .button-style:hover {
            background: ${curColor};
            border-color: ${curColor};
          }
        `}
      </style>
    </Fragment>
  );
};

export default ButtonComponent;
