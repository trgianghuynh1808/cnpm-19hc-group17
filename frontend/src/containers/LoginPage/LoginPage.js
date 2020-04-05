import React, { useReducer, useEffect } from 'react';
import Wrapper from '../../layouts';
import PageTitle from '../../components/PageTitle';
import Login from '../../components/LoginForm';
import { login } from "../../stores/UsersState";
import { connect } from "react-redux";
import md5 from 'md5';

const connectToRedux = connect(
  null,
  distpatch => ({
    login: ({ username, password }) => {
      distpatch(login({ username, password }));
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
    document.getElementById("LOGIN_FORM").onsubmit = function() {
      return false;
  };
  }, [])

  const onSubmit = () => {
    const { username, password } = info;
    login({ username, password: md5(password)});
  };

  return (
    <Wrapper>
      <PageTitle title="Login Page"/>
        <Login onSubmit={onSubmit} onChange={onChange} />
    </Wrapper>
  );
}

export default connectToRedux(LoginPage);