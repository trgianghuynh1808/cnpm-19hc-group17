import React, { Component } from 'react';

class About extends Component {
  render() {
    return (
      <section id="about-area" className="section-padding">
    <div className="container">
      <div className="row">
        {/* Section Title Start */}
        <div className="col-lg-12">
          <div className="section-title  text-center">
            <h2>About us</h2>
            <span className="title-line"><i className="fa fa-car" /></span>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
          </div>
        </div>
        {/* Section Title End */}
      </div>
      <div className="row">
        {/* About Content Start */}
        <div className="col-lg-6">
          <div className="display-table">
            <div className="display-table-cell">
              <div className="about-content">
                <p>Lorem simply dummy is a texted of the printing costed and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi aliquid debitis optio praesentium, voluptate repellat accusantium deserunt eius.</p>
                <div className="about-btn">
                  <a href="#">Book a Car</a>
                  <a href="#">Contact Us</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* About Content End */}
        {/* About Video Start */}
        <div className="col-lg-6">
          <div className="about-video">
            <img src="assets/img/car/car-2.jpg" alt="JSOFT" />
          </div>
        </div>
        {/* About Video End */}
      </div>
    </div>
  </section>
    );
  }
}

export default About;