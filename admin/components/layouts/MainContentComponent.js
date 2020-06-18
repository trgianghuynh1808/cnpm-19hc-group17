import React, { Fragment } from "react";
import { useRouter } from "next/router";

const MainContentComponent = ({ children }) => {
  const router = useRouter();
  return (
    <Fragment>
      <div className="main-content-part full-height">
        <h4 className="font-weight-bold title ">Dashboard</h4>
        <div className="font-weight-bold color-gray">Welcome Giang Huynh</div>
        <div
          className={`card-part ${
            router.pathname === "/" ? "" : "card-content"
          }`}
        >
          {children}
        </div>
      </div>
      <style jsx>
        {`
          .main-content-part {
            background-color: #e5e5e5;
            padding: 40px 72px;
          }

          .main-content-part .title {
            color: #39247e;
          }

          .main-content-part .card-part {
            margin-top: 20px;
            height: 80%;
          }
          .main-content-part .card-content {
            background: #ffffff;
            box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
          }
        `}
      </style>
    </Fragment>
  );
};

export default MainContentComponent;
