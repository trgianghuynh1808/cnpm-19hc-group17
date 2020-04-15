import React, { useEffect, useReducer } from "react";
import { connect } from "react-redux";
import Wrapper from '../components';
import LoginForm from '../components/LoginForm';
import { LOGIN_ROLE } from "../utils/enums";
import { login } from "../stores/UsersState";
import md5 from 'md5';

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

const LoginPage = ({ login }) => {
  const [info, dispatch] = useReducer(reducer, {});

  const onChange= (id) => {
    const element = document.getElementById(id);
    if(element.value) {
      dispatch({ type: id, payload: element.value});
    }
  };
  console.log(info);
  useEffect(() => {
    document.title = 'Đăng nhập';
    document.getElementById("LOGIN_FORM").onsubmit = function() {
      return false;
  };
  }, [])

  const onSubmit = () => {
    const { username, password } = info;
    if(!username || !password) return;
    login({ username, password: md5(password), role: LOGIN_ROLE });
  };

    return (
      <Wrapper>
        <LoginForm onSubmit={onSubmit} onChange={onChange} />
      </Wrapper>
    );
}

export default connectToRedux(LoginPage);
