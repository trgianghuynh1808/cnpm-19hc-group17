import React from "react";
import { Link } from "react-router-dom";

const SideBar = () => {
  const {
    location: { pathname },
  } = window;
  const activePage = pathname.split("/")[2] || "profile";
  console.log(activePage);
    return (
      <div className="col-lg-3 col-lg-offset-1">
        <div className="sidebar-content-wrap profile-page">
          <div className="single-sidebar">
            <h3>Menu</h3>
            <div className="sidebar-body">
              <ul className="recent-tips">
              <Link to="/profile">
                <li className={`single-recent-tips ${activePage === "profile" ? "active" : ""}`}>
                    <i>Your Profile</i>
                </li>
              </Link>
              <Link to="/profile/change-password">
                <li className={`single-recent-tips ${activePage === "change-password" ? "active" : ""}`}>
                  <i>Change Password</i>
                </li>
              </Link>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
}

export default SideBar;
