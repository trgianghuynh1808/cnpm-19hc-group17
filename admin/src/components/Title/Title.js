import React from "react";

export default (props) => {
  // const href = "#title";
  const { title } = props;

  return (
    <div className="app-page-title">
      <div className="page-title-wrapper">
        <div className="page-title-heading">
          <div className="page-title-icon">
            <i className="pe-7s-car icon-gradient bg-mean-fruit"></i>
          </div>
          <div>
            {title}
            <div className="page-title-subheading">
              This is using manage contract.
            </div>
          </div>
        </div>
        {/* <div className="page-title-actions">
          <button
            type="button"
            data-toggle="tooltip"
            title="Example Tooltip"
            data-placement="bottom"
            className="btn-shadow mr-3 btn btn-dark"
          >
            <i className="fa fa-star" />
          </button>
          <div className="d-inline-block dropdown">
            <button
              type="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
              className="btn-shadow dropdown-toggle btn btn-info"
            >
              <span className="btn-icon-wrapper pr-2 opacity-7">
                <i className="fa fa-business-time fa-w-20" />
              </span>
              Buttons
            </button>
            <div
              tabIndex={-1}
              role="menu"
              aria-hidden="true"
              className="dropdown-menu dropdown-menu-right"
            >
              <ul className="nav flex-column">
                <li className="nav-item">
                  <a href={href} className="nav-link">
                    <i className="nav-link-icon lnr-inbox" />
                    <span>Inbox</span>
                    <div className="ml-auto badge badge-pill badge-secondary">
                      86
                    </div>
                  </a>
                </li>
                <li className="nav-item">
                  <a href={href} className="nav-link">
                    <i className="nav-link-icon lnr-book" />
                    <span>Book</span>
                    <div className="ml-auto badge badge-pill badge-danger">
                      5
                    </div>
                  </a>
                </li>
                <li className="nav-item">
                  <a href={href} className="nav-link">
                    <i className="nav-link-icon lnr-picture" />
                    <span>Picture</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a disabled href={href} className="nav-link disabled">
                    <i className="nav-link-icon lnr-file-empty" />
                    <span>File Disabled</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
};
