import React from "react";
import Router from "next/router";

const defaultStyle = {
  cursor: "pointer",
};

const BackButtonComponent = (customStyle) => {
  return (
    <img
      src="/static/assets/images/icons/back-btn.png"
      style={Object.assign({}, defaultStyle, customStyle)}
      onClick={() => Router.back()}
    />
  );
};

export default BackButtonComponent;
