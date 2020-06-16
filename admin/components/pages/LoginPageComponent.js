import React, { useState, Fragment } from "react";
import { connect } from "react-redux";
import Head from "next/head";

import { login } from "../../stores/UserState";

const connectToRedux = connect(null, (dispatch) => ({
  login: ({ username, password }) => {
    dispatch(login({ username, password }));
  },
}));

const LoginPageComponent = ({ login }) => {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();

  const onSubmit = () => {
    if (username && password) login({ username, password });
  };

  return (
    <Fragment>
      <Head>
        <title>Login</title>
      </Head>
      <div className="limiter">
        <div className="container-login100">
          <div className="wrap-login100">
            <div className="login100-pic js-tilt" data-tilt>
              <img src="/static/assets/images/img-01.png" alt="IMG" />
            </div>
            <form className="login100-form validate-form">
              <span className="login100-form-title">Member Login</span>
              <div
                className="wrap-input100 validate-input"
                data-validate="Valid email is required: ex@abc.xyz"
              >
                <input
                  className="input100"
                  type="text"
                  name="username"
                  placeholder="UserName"
                  autoComplete="new"
                  required
                  onChange={(event) => setUsername(event.target.value)}
                />
                <span className="focus-input100" />
                <span className="symbol-input100">
                  <i className="fa fa-user" aria-hidden="true" />
                </span>
              </div>
              <div
                className="wrap-input100 validate-input"
                data-validate="Password is required"
              >
                <input
                  className="input100"
                  type="password"
                  name="pass"
                  placeholder="Password"
                  autoComplete="new-password"
                  required
                  onChange={(event) => {
                    setPassword(event.target.value);
                  }}
                />
                <span className="focus-input100" />
                <span className="symbol-input100">
                  <i className="fa fa-lock" aria-hidden="true" />
                </span>
              </div>
              <div className="container-login100-form-btn">
                <button
                  type="submit"
                  className="login100-form-btn"
                  onClick={(event) => {
                    event.preventDefault();
                    onSubmit();
                  }}
                >
                  Login
                </button>
              </div>
              <div className="text-center p-t-12">
                <span className="txt1">Forgot</span>
                <a className="txt2" href="#">
                  Username / Password?
                </a>
              </div>
              <div className="text-center p-t-136">
                <a className="txt2" href="#">
                  Create your Account
                  <i
                    className="fa fa-long-arrow-right m-l-5"
                    aria-hidden="true"
                  />
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default connectToRedux(LoginPageComponent);
