import React from 'react';
import { Notify, Setting } from './Icon';

const Header = (props) => {
  const { title, name = 'Hoang Bao' } = props;
  return (
    <nav style={{ padding: '0rem 1rem', background:'#fff' }} className="navbar navbar-expand-lg navbar-light">
        <a className="navbar-brand title">{title}</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto"/>
          <div style={{ paddingTop: '10px'}} className="navbar right my-2 my-lg-0">
            <div className="icon">
              <Notify style={{ marginRight: '30px'}} />
              <Setting style={{ marginRight: '30px'}} />      
            </div>
            { name && 
              <div style={{display: 'flex'}} className="login-status">
                <img src="https://api.adorable.io/avatars/285/abott@adorable.png" alt="Avatar" className="avatar"/>
                <p>{name || ''}</p>
                <a className="nav-link dropdown-toggle dropdown" id="navbarDropdown"  role="button" data-toggle="dropdown">
                <div style={{ right: '0px', left: 'auto'}} className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <a className="dropdown-item" href="#">Profile</a>
                  <div div className="dropdown-divider"></div>
                  <a className="dropdown-item" href="#">Log out</a>
                </div>
                </a>
                
              </div>
            } 
          </div>
        </div>
        <style jsx>{`
          .title {
            font-family: Open Sans;
            font-style: normal;
            font-weight: bold;
            font-size: 20px;
            line-height: 41px;
            color: #39247E !important;
            text-transform: uppercase;
          };
          
          .login-status: {
            display: flex;
          };
          .login-status img.avatar {
            vertical-align: middle;
            width: 50px;
            height: 50px;
            border-radius: 50%;
          };
          .login-status p {
            font-family: Open Sans;
            font-style: normal;
            font-weight: bold;
            font-size: 20px;
            line-height: 50px;
            margin-left: 10px;
          };
          .login-status .nav-link.dropdown-toggle {
            line-height: 40px;
            padding: .5rem .5rem;
            font-size: 20px;
            cursor: pointer;
          }
      `}</style>
    </nav>
  );
};

export default Header;