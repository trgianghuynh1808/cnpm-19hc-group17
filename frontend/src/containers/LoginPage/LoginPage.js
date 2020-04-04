import React, { Component, useReducer, useEffect } from 'react';
import Wrapper from '../../layouts';
import PageTitle from '../../components/PageTitle';
import Login from '../../components/Login';

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

const LoginPage =  (props) => {
  const [info, dispatch] = useReducer(reducer, {});
  console.log(info);
  return (
    <Wrapper>
      <PageTitle title="Login Page"/>
        <Login onChange={(type, value) => dispatch({ type, payload: value})}/>
    </Wrapper>
  );
}

export default LoginPage;