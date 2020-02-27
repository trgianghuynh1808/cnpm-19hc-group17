import React, { Component } from 'react';

class HeaderBottom extends Component {
    render() {
        return (
        <div id="header-bottom">
          <div className="container">
            <div className="row">
              {/*== Logo Start ==*/}
              <div className="col-lg-4">
                <a href="index.html" className="logo">
                  <img src="assets/img/logo.png" alt="JSOFT" />
                </a>
              </div>
              {/*== Logo End ==*/}
              {/*== Main Menu Start ==*/}
              <div className="col-lg-8 d-none d-xl-block">
                <nav className="mainmenu alignright">
                  <ul>
                    <li className="active"><a href="#">Home</a>
                      <ul>
                        <li><a href="index.html">Home 1</a></li>
                        <li><a href="index2.html">Home 2</a></li>
                        <li><a href="index3.html">Home 3</a></li>
                      </ul>
                    </li>
                    <li><a href="about.html">About</a></li>
                    <li><a href="services.html">services</a></li>
                    <li><a href="#">Cars</a>
                      <ul>
                        <li><a href="car-left-sidebar.html">Car Left Sidebar</a></li>
                        <li><a href="car-right-sidebar.html">Car Right Sidebar</a></li>
                        <li><a href="car-without-sidebar.html">Car Without Sidebar</a></li>
                        <li><a href="car-details.html">Car Details</a></li>
                      </ul>
                    </li>
                    <li><a href="index.html">Pages</a>
                      <ul>
                        <li><a href="package.html">Pricing</a></li>
                        <li><a href="driver.html">Driver</a></li>
                        <li><a href="faq.html">FAQ</a></li>
                        <li><a href="gallery.html">Gallery</a></li>
                        <li><a href="help-desk.html">Help Desk</a></li>
                        <li><a href="login.html">Log In</a></li>
                        <li><a href="register.html">Register</a></li>
                        <li><a href="404.html">404</a></li>
                      </ul>
                    </li>
                    <li><a href="#">Blog</a>
                      <ul>
                        <li><a href="article.html">Blog Page</a></li>
                        <li><a href="article-details.html">Blog Details</a></li>
                      </ul>
                    </li>
                    <li><a href="contact.html">Contact</a></li>
                  </ul>
                </nav>
              </div>
              {/*== Main Menu End ==*/}
            </div>
          </div>
        </div>
        );
    }
}

export default HeaderBottom;