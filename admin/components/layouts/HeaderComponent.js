import React from "react";

const HeaderComponent = () => {
  return (
    <header>
      <div
        className="pl-3 pr-3 header-part"
        style={{ backgroundColor: "whitesmoke" }}
      >
        <div className="row justify-content-between">
          <div className="col-3">
            <h3 className="text-uppercase font-weight-bold title">
              bộ phận quản lý
            </h3>
          </div>
          <div className="col-3">
            <div className="row align-items-center">
              <div className="col-2">
                <img
                  src="/static/assets/images/icons/notify-icon.png"
                  height="30"
                  width="30"
                ></img>
              </div>
              <div className="col-2">
                <img
                  src="/static/assets/images/icons/setting-icon.png"
                  height="30"
                  width="30"
                ></img>
              </div>
              <div className="col-5">
                <img
                  src="/static/assets/images/human.png"
                  height="44"
                  width="44"
                ></img>
                <span className="color-gray ml-2">Giang Huynh</span>
              </div>
              <div className="col-2">
                <img
                  src="/static/assets/images/icons/quit-icon.png"
                  height="32"
                  width="32"
                  className="cursor-pointer"
                ></img>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .header-part {
          padding: 28px 20px;
        }

        .header-part .title {
          color: #39247e;
        }
      `}</style>
    </header>
  );
};

export default HeaderComponent;
