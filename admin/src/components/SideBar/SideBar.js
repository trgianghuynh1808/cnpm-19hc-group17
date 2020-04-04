import React from 'react';

export default (props) => {

    return (
      <div className="app-sidebar sidebar-shadow">
      <div className="app-header__logo">
        <div className="logo-src" />
        <div className="header__pane ml-auto">
          <div>
            <button type="button" className="hamburger close-sidebar-btn hamburger--elastic" data-class="closed-sidebar">
              <span className="hamburger-box">
                <span className="hamburger-inner" />
              </span>
            </button>
          </div>
        </div>
      </div>
      <div className="app-header__mobile-menu">
        <div>
          <button type="button" className="hamburger hamburger--elastic mobile-toggle-nav">
            <span className="hamburger-box">
              <span className="hamburger-inner" />
            </span>
          </button>
        </div>
      </div>
      <div className="app-header__menu">
        <span>
          <button type="button" className="btn-icon btn-icon-only btn btn-primary btn-sm mobile-toggle-header-nav">
            <span className="btn-icon-wrapper">
              <i className="fa fa-ellipsis-v fa-w-6" />
            </span>
          </button>
        </span>
      </div>    <div className="scrollbar-sidebar">
        <div className="app-sidebar__inner">
          <ul className="vertical-nav-menu">
            <li className="app-sidebar__heading">Dashboards</li>
            <li>
              <a href="index.html" className="mm-active">
                <i className="metismenu-icon pe-7s-rocket" />
                Dashboard Example 1
              </a>
            </li>
            <li className="app-sidebar__heading">UI Components</li>
            <li>
              <a href="#">
                <i className="metismenu-icon pe-7s-diamond" />
                Elements
                <i className="metismenu-state-icon pe-7s-angle-down caret-left" />
              </a>
              <ul>
                <li>
                  <a href="elements-buttons-standard.html">
                    <i className="metismenu-icon" />
                    Buttons
                  </a>
                </li>
                <li>
                  <a href="elements-dropdowns.html">
                    <i className="metismenu-icon">
                    </i>Dropdowns
                  </a>
                </li>
                <li>
                  <a href="elements-icons.html">
                    <i className="metismenu-icon">
                    </i>Icons
                  </a>
                </li>
                <li>
                  <a href="elements-badges-labels.html">
                    <i className="metismenu-icon">
                    </i>Badges
                  </a>
                </li>
                <li>
                  <a href="elements-cards.html">
                    <i className="metismenu-icon">
                    </i>Cards
                  </a>
                </li>
                <li>
                  <a href="elements-list-group.html">
                    <i className="metismenu-icon">
                    </i>List Groups
                  </a>
                </li>
                <li>
                  <a href="elements-navigation.html">
                    <i className="metismenu-icon">
                    </i>Navigation Menus
                  </a>
                </li>
                <li>
                  <a href="elements-utilities.html">
                    <i className="metismenu-icon">
                    </i>Utilities
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>
    );
}