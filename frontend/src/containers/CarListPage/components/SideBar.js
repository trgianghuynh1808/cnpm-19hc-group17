import React, { Component } from 'react';

class SideBar extends Component {
    render() {
        return (
            <div className="col-lg-4">
          <div className="sidebar-content-wrap">
            {/* Single Sidebar Start */}
            <div className="single-sidebar">
              <h3>For More Informations</h3>
              <div className="sidebar-body">
                <p><i className="fa fa-mobile" /> +8801816 277 243</p>
                <p><i className="fa fa-clock-o" /> Mon - Sat 8.00 - 18.00</p>
              </div>
            </div>
            {/* Single Sidebar End */}
            {/* Single Sidebar Start */}
            <div className="single-sidebar">
              <h3>Rental Tips</h3>
              <div className="sidebar-body">
                <ul className="recent-tips">
                  <li className="single-recent-tips">
                    <div className="recent-tip-thum">
                      <a href="#"><img src="assets/img/we-do/service1-img.png" alt="JSOFT" /></a>
                    </div>
                    <div className="recent-tip-body">
                      <h4><a href="#">How to Enjoy Losses Angeles Car Rentals</a></h4>
                      <span className="date">February 5, 2018</span>
                    </div>
                  </li>
                  <li className="single-recent-tips">
                    <div className="recent-tip-thum">
                      <a href="#"><img src="assets/img/we-do/service3-img.png" alt="JSOFT" /></a>
                    </div>
                    <div className="recent-tip-body">
                      <h4><a href="#">How to Enjoy Losses Angeles Car Rentals</a></h4>
                      <span className="date">February 5, 2018</span>
                    </div>
                  </li>
                  <li className="single-recent-tips">
                    <div className="recent-tip-thum">
                      <a href="#"><img src="assets/img/we-do/service2-img.png" alt="JSOFT" /></a>
                    </div>
                    <div className="recent-tip-body">
                      <h4><a href="#">How to Enjoy Losses Angeles Car Rentals</a></h4>
                      <span className="date">February 5, 2018</span>
                    </div>
                  </li>
                  <li className="single-recent-tips">
                    <div className="recent-tip-thum">
                      <a href="#"><img src="assets/img/we-do/service3-img.png" alt="JSOFT" /></a>
                    </div>
                    <div className="recent-tip-body">
                      <h4><a href="#">How to Enjoy Losses Angeles Car Rentals</a></h4>
                      <span className="date">February 5, 2018</span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            {/* Single Sidebar End */}
            {/* Single Sidebar Start */}
            <div className="single-sidebar">
              <h3>Connect with Us</h3>
              <div className="sidebar-body">
                <div className="social-icons text-center">
                  <a href="#" target="_blank"><i className="fa fa-facebook" /></a>
                  <a href="#" target="_blank"><i className="fa fa-twitter" /></a>
                  <a href="#" target="_blank"><i className="fa fa-behance" /></a>
                  <a href="#" target="_blank"><i className="fa fa-linkedin" /></a>
                  <a href="#" target="_blank"><i className="fa fa-dribbble" /></a>
                </div>
              </div>
            </div>
            {/* Single Sidebar End */}
          </div>
        </div>
        );
    }
}

export default SideBar;