import React, { Fragment } from "react";

import { doFunctionWithEnter } from "../../utils";

const SearchBarComponent = ({ placeholder, doKeyPress }) => {
  return (
    <Fragment>
      <div className="form-group has-search">
        <span className="fa fa-search form-control-feedback" />
        <input
          type="text"
          className="form-control"
          placeholder={placeholder}
          onKeyPress={(event) => {
            doFunctionWithEnter(event, () => {
              doKeyPress(event.target.value);
            });
          }}
        />
      </div>
      <style jsx>{`
        .has-search .form-control {
          padding-left: 2.375rem;
        }

        .has-search .form-control-feedback {
          position: absolute;
          z-index: 2;
          display: block;
          width: 2.375rem;
          height: 2.375rem;
          line-height: 2.375rem;
          text-align: center;
          pointer-events: none;
          color: black;
        }

        .has-search input {
          border: none;
          border-bottom: 1px solid black;
          border-radius: 0px;
        }
        .has-search .textarea:focus,
        input:focus {
          border-bottom: 1px solid black;
          border-color: black !important;
        }

        .has-search .form-control:focus {
          box-shadow: none;
        }
      `}</style>
    </Fragment>
  );
};

export default SearchBarComponent;
