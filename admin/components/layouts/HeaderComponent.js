import React from "react";
import Router from "next/router";

import { removeToken } from "../../libs/token-libs";

const HeaderComponent = ({ roleName, username }) => {
  const logOut = () => {
    removeToken();
    Router.replace({
      pathname: "/login",
    });
  };

  return (
    <header>
      <div className="pl-3 pr-3 header-part">
        <div className="row justify-content-between">
          <div className="col-lg-3">
            <h3 className="text-uppercase font-weight-bold title">
              {roleName}
            </h3>
          </div>
          <div className="col-lg-3">
            <div className="row align-items-center justify-content-end">
              <div className="col-lg-2">
                <img
                  src="/static/assets/images/icons/notify-icon.png"
                  height="30"
                  width="30"
                ></img>
              </div>
              <div className="col-lg-2">
                <img
                  src="/static/assets/images/icons/setting-icon.png"
                  height="30"
                  width="30"
                ></img>
              </div>
              <div className="col-lg-6">
                <img
                  src="/static/assets/images/human.png"
                  height="44"
                  width="44"
                ></img>
                <span className="color-gray ml-2">{username}</span>
              </div>
              <div className="col-lg-2">
                <img
                  src="/static/assets/images/icons/quit-icon.png"
                  height="32"
                  width="32"
                  className="cursor-pointer"
                  onClick={logOut}
                ></img>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .header-part {
          padding: 28px 20px;
          background-color: white;
        }

        .header-part .title {
          color: #39247e;
        }
      `}</style>
    </header>
  );
};

export default HeaderComponent;
