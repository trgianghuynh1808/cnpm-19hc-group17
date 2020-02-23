import React, { Component } from 'react';

class Testimonials extends Component {
  render() {
    return (
      <section id="testimonial-area" className="section-padding">
      <div className="container">
        <div className="row">
          {/* Section Title Start */}
          <div className="col-lg-12">
            <div className="section-title  text-center">
              <h2>Testimonials</h2>
              <span className="title-line"><i className="fa fa-car" /></span>
              <p>Lorem ipsum dolor sit amet elit.</p>
            </div>
          </div>
          {/* Section Title End */}
        </div>
        <div className="row">
          <div className="col-lg-8 col-md-12 m-auto">
            <div className="testimonial-content">
              {/*== Single Testimoial Start ==*/}
              <div className="single-testimonial">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis totam obcaecati impedit, at autem repellat vel magni architecto veritatis sed.</p>
                <h3>Vongchong Smith</h3>
                <div className="client-logo">
                  <img src="assets/img/client/client-pic-1.jpg" alt="JSOFT" />
                </div>
              </div>
              {/*== Single Testimoial End ==*/}
              {/*== Single Testimoial Start ==*/}
              <div className="single-testimonial">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis totam obcaecati impedit, at autem repellat vel magni architecto veritatis sed.</p>
                <h3>Amader Tuni</h3>
                <div className="client-logo">
                  <img src="assets/img/client/client-pic-3.jpg" alt="JSOFT" />
                </div>
              </div>
              {/*== Single Testimoial End ==*/}
              {/*== Single Testimoial Start ==*/}
              <div className="single-testimonial">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis totam obcaecati impedit, at autem repellat vel magni architecto veritatis sed.</p>
                <h3>Atex Tuntuni Smith</h3>
                <div className="client-logo">
                  <img src="assets/img/client/client-pic-2.jpg" alt="JSOFT" />
                </div>
              </div>
              {/*== Single Testimoial End ==*/}
            </div>
          </div>
        </div>
      </div>
    </section>
    );
  }
}

export default Testimonials;