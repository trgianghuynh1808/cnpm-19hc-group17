import React, { Fragment } from "react";

const SearchBarComponent = ({
  placeholder,
  doOnChange,
  doOnKeyPress,
  doOnBlur,
  curValue,
}) => {
  return (
    <Fragment>
      <div className="basic-search">
        <div className="input-field">
          <input
            id="search"
            type="text"
            placeholder={placeholder}
            onChange={(event) => {
              doOnChange && doOnChange(event);
            }}
            onKeyPress={(event) => {
              doOnKeyPress && doOnKeyPress(event);
            }}
            onBlur={(event) => {
              doOnBlur && doOnBlur(event);
            }}
            value={curValue}
          />
          <div className="icon-wrap">
            <svg
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              width={20}
              height={20}
              viewBox="0 0 20 20"
            >
              <path d="M18.869 19.162l-5.943-6.484c1.339-1.401 2.075-3.233 2.075-5.178 0-2.003-0.78-3.887-2.197-5.303s-3.3-2.197-5.303-2.197-3.887 0.78-5.303 2.197-2.197 3.3-2.197 5.303 0.78 3.887 2.197 5.303 3.3 2.197 5.303 2.197c1.726 0 3.362-0.579 4.688-1.645l5.943 6.483c0.099 0.108 0.233 0.162 0.369 0.162 0.121 0 0.242-0.043 0.338-0.131 0.204-0.187 0.217-0.503 0.031-0.706zM1 7.5c0-3.584 2.916-6.5 6.5-6.5s6.5 2.916 6.5 6.5-2.916 6.5-6.5 6.5-6.5-2.916-6.5-6.5z" />
            </svg>
          </div>
        </div>
      </div>
      <style jsx>{`
        .basic-search .input-field {
          width: 100%;
          position: relative;
        }

        .basic-search .input-field input {
          width: 100%;
          padding: 10px 80px 10px 20px;
          border: 1px solid rgba(0, 9, 93, 0.1);
          border-radius: 6px;
          font-size: 16px;
          background: #fafafa;
          height: 40px;
        }

        .basic-search .input-field .icon-wrap {
          position: absolute;
          top: 0;
          right: 0;
          display: -ms-flexbox;
          display: flex;
          -ms-flex-align: center;
          align-items: center;
          width: 60px;
          height: 100%;
          padding-left: 20px;
        }

        .basic-search .input-field .icon-wrap svg {
          width: 20px;
          height: 20px;
          fill: #000000;
          cursor: pointer;
        }
      `}</style>
    </Fragment>
  );
};

export default SearchBarComponent;
