import React, { Component } from 'react';

class FunFact extends Component {
  render() {
    return (
      <section id="funfact-area" className="overlay section-padding">
    <div className="container">
      <div className="row">
        <div className="col-lg-11 col-md-12 m-auto">
          <div className="funfact-content-wrap">
            <div className="row">
              {/* Single FunFact Start */}
              <div className="col-lg-4 col-md-6">
                <div className="single-funfact">
                  <div className="funfact-icon">
                    <i className="fa fa-smile-o" />
                  </div>
                  <div className="funfact-content">
                    <p><span className="counter">550</span>+</p>
                    <h4>HAPPY CLIENTS</h4>
                  </div>
                </div>
              </div>
              {/* Single FunFact End */}
              {/* Single FunFact Start */}
              <div className="col-lg-4 col-md-6">
                <div className="single-funfact">
                  <div className="funfact-icon">
                    <i className="fa fa-car" />
                  </div>
                  <div className="funfact-content">
                    <p><span className="counter">250</span>+</p>
                    <h4>CARS IN STOCK</h4>
                  </div>
                </div>
              </div>
              {/* Single FunFact End */}
              {/* Single FunFact Start */}
              <div className="col-lg-4 col-md-6">
                <div className="single-funfact">
                  <div className="funfact-icon">
                    <i className="fa fa-bank" />
                  </div>
                  <div className="funfact-content">
                    <p><span className="counter">50</span>+</p>
                    <h4>office in cities</h4>
                  </div>
                </div>
              </div>
              {/* Single FunFact End */}
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
    );
  }
}

export default FunFact;