import React, { Fragment } from "react";

const TitleComponent = ({ content, customStyle }) => {
  return (
    <Fragment>
      <h4
        className="title text-capitalize font-weight-bold"
        style={customStyle}
      >
        {content}
      </h4>
      <style jsx>
        {`
          .title {
            color: #27ae60;
            text-decoration: underline;
          }
        `}
      </style>
    </Fragment>
  );
};

export default TitleComponent;
