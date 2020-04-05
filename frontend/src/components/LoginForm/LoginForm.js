import React from 'react';

const LoginForm = (props) => {
  const { onChange, onSubmit } = props;
    return (
      <section id="lgoin-page-wrap" className="section-padding">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-8 m-auto">
            <div className="login-page-content">
              <div className="login-form">
                <h3>Welcome Back!</h3>
                <form id="LOGIN_FORM">
                <div className="form-group">
                <label>Username</label>
                  <div className="username">
                    <input id="username" onChange={()=> onChange('username')} required type="text" />
                  </div>
                </div>
                <div className="form-group">
                <label>Password</label>
                  <div className="password">
                    <input id="password" onChange={()=> onChange('password')} required type="password" />
                </div>
                  </div>
                  <div onClick={onSubmit} className="log-btn">
                    <button><i className="fa fa-sign-in" /> Log In</button>
                  </div>
                </form>
              </div>  
              <div className="create-ac">
                <p>Don't have an account? <a href="register.html">Sign Up</a></p>
              </div>
              <div className="login-menu">
                <a href="about.html">About</a>
                <span>|</span>
                <a href="contact.html">Contact</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>    
    );
};

export default LoginForm;