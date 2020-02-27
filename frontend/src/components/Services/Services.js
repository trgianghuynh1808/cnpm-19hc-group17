import React, { Component } from 'react';

class Services extends Component {
  render() {
    return (
      <section id="service-area" className="section-padding">
    <div className="container">
      <div className="row">
        {/* Section Title Start */}
        <div className="col-lg-12">
          <div className="section-title  text-center">
            <h2>Our Services</h2>
            <span className="title-line"><i className="fa fa-car" /></span>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
          </div>
        </div>
        {/* Section Title End */}
      </div>
      {/* Service Content Start */}
      <div className="row">
        {/* Single Service Start */}
        <div className="col-lg-4 text-center">
          <div className="service-item">
            <i className="fa fa-taxi" />
            <h3>RENTAL CAR</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit admollitia.</p>
          </div>
        </div>
        {/* Single Service End */}
        {/* Single Service Start */}
        <div className="col-lg-4 text-center">
          <div className="service-item">
            <i className="fa fa-cog" />
            <h3>CAR REPAIR</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit admollitia.</p>
          </div>
        </div>
        {/* Single Service End */}
        {/* Single Service Start */}
        <div className="col-lg-4 text-center">
          <div className="service-item">
            <i className="fa fa-map-marker" />
            <h3>TAXI SERVICE</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit admollitia.</p>
          </div>
        </div>
        {/* Single Service End */}
        {/* Single Service Start */}
        <div className="col-lg-4 text-center">
          <div className="service-item">
            <i className="fa fa-life-ring" />
            <h3>life insurance</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit admollitia.</p>
          </div>
        </div>
        {/* Single Service End */}
        {/* Single Service Start */}
        <div className="col-lg-4 text-center">
          <div className="service-item">
            <i className="fa fa-bath" />
            <h3>car wash</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit admollitia.</p>
          </div>
        </div>
        {/* Single Service End */}
        {/* Single Service Start */}
        <div className="col-lg-4 text-center">
          <div className="service-item">
            <i className="fa fa-phone" />
            <h3>call driver</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit admollitia.</p>
          </div>
        </div>
        {/* Single Service End */}
      </div>
      {/* Service Content End */}
    </div>
  </section>
    );
  }
}

export default Services;