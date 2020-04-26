import React from "react";
import { Link } from "react-router-dom";
import { removeToken } from "../../../libs/token-libs";
import logo from './logo.png';

const HeaderBottom = props => {
  const { currentUser, isHOC } = props;
  const logOut = () => {
    removeToken();
    if(isHOC) return window.location.replace('/');
    return window.location.reload();
  }
  const {
    location: { pathname }
  } = window;
  const activePage = pathname.split("/")[1] || "home";
  return (
    <div id="header-bottom">
      <div className="container">
        <div className="row">
          {/*== Logo Start ==*/}
          <div className="col-lg-4">
            <Link to="/" className="logo">
              <img src={logo} alt="JSOFT" />
            </Link>
          </div>
          {/*== Logo End ==*/}
          {/*== Main Menu Start ==*/}
          <div className="col-lg-8 d-none d-xl-block">
            <nav className="mainmenu alignright">
              <ul>
                <li
                  className={activePage === 'home' ? 'active' : ''}
                >
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <a href="about.html">About</a>
                </li>
                <li>
                  <a href="services.html">services</a>
                </li>
                <li>
                  <a href="/#">Cars</a>
                  <ul>
                    <li>
                      <a href="car-left-sidebar.html">Car Left Sidebar</a>
                    </li>
                    <li>
                      <a href="car-right-sidebar.html">Car Right Sidebar</a>
                    </li>
                    <li>
                      <a href="car-without-sidebar.html">Car Without Sidebar</a>
                    </li>
                    <li>
                      <a href="car-details.html">Car Details</a>
                    </li>
                  </ul>
                </li>
                <li
                  className={activePage === 'gallery' ? 'active' : ''}
                >
                  <Link to="/gallery">Gallery</Link>
                </li>
                <li>
                  <a href="contact.html">Contact</a>
                </li>
                {
                  currentUser ? 
                    (
                      <li>
                        <a href="#username ">{currentUser.username}</a>
                        <ul>
                          <li>
                            <Link to="/profile">Profile</Link>
                          </li>
                          <li>
                            <a href="#logout " onClick={logOut}>
                              Logout
                            </a>
                          </li> 
                        </ul>
                      </li>                        
                    )
                  :
                    (
                      <li className={activePage === 'login' ? 'active' : ''}>
                      <Link to="/login">Login</Link>
                      </li>
                    )
                }
              </ul>
            </nav>
          </div>
          {/*== Main Menu End ==*/}
        </div>
      </div>
    </div>
  );
};

export default HeaderBottom;
