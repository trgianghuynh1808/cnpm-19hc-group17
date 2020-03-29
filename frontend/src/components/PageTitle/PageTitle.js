import React from "react";

const PageTitle = props => {
  const { title } = props;
  return (
    <section id="page-title-area" className="section-padding overlay">
      <div className="container">
        <div className="row">
          {/* Page Title Start */}
          <div className="col-lg-12">
            <div className="section-title  text-center">
              <h2>{title}</h2>
              <span className="title-line">
                <i className="fa fa-car" />
              </span>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            </div>
          </div>
          {/* Page Title End */}
        </div>
      </div>
    </section>
  );
};

export default PageTitle;
