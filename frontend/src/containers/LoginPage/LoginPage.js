import React, { useReducer, useEffect } from "react";
import PageLayout from "../../layouts";
import PageTitle from "../../components/PageTitle";
import Login from "../../components/LoginForm";
import { LOGIN_ROLE } from "../../utils/enums";
import { login } from "../../stores/UsersState";
import { connect } from "react-redux";
import md5 from "md5";

const connectToRedux = connect(
  null,
  distpatch => ({
    login: ({ username, password, role }) => {
      distpatch(login({ username, password, role }));
    }
  })
);

function reducer(state, action) {
  switch (action.type) {
    case 'username':
      return { ...state, username: action.payload };
    case 'password':
      return { ...state, password: action.payload };
    default:
      throw new Error();
  }
};

const LoginPage =  ({ login }) => {
  const [info, dispatch] = useReducer(reducer, {});
  const onChange= (id) => {
    const element = document.getElementById(id);
    if(element.value) {
      dispatch({ type: id, payload: element.value});
    }
  };

  useEffect(() => {
    const loginForm = document.getElementById("LOGIN_FORM");
    if(loginForm) {
      loginForm.onsubmit = function() {
        return false;
    }
  };
  }, [])

  const onSubmit = () => {
    const { username, password } = info;
    login({ username, password: md5(password) , role: LOGIN_ROLE });
  };

  return (
    <PageLayout>
      <PageTitle title="Login Page"/>
        <Login onSubmit={onSubmit} onChange={onChange} />
    </PageLayout>
  );
}

export default connectToRedux(LoginPage);