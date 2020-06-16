import React, { Component } from 'react';
import OwlCarousel from 'react-owl-carousel2';

const options = {
  items: 6,
  autoplay: true,
  nav: true,
  loop: true,
  navText : ['', ''],
  autoWidth: true,
  autoHeight: true,
  center: true
};

const events = {
  onDragged: () => {},
  onChanged: () => {}
};

class Partners extends Component {
  render() {
    return (
      <div id="partner-area">
    <div className="container-fluid">
      <div className="row">
        <div className="col-lg-12 text-center">
          <div className="partner-content-wrap">
          <OwlCarousel options={options} events={events}>
            {/* Single Partner Start */}
              <div className="single-partner">
                <div className="display-table">
                  <div className="display-table-cell">
                    <img src="assets/img/partner/partner-logo-1.png" alt="JSOFT" />
                  </div>
                </div>
              </div>
              {/* Single Partner End */}
              {/* Single Partner Start */}
              <div className="single-partner">
                <div className="display-table">
                  <div className="display-table-cell">
                    <img src="assets/img/partner/partner-logo-2.png" alt="JSOFT" />
                  </div>
                </div>
              </div>
              {/* Single Partner End */}
              {/* Single Partner Start */}
              <div className="single-partner">
                <div className="display-table">
                  <div className="display-table-cell">
                    <img src="assets/img/partner/partner-logo-3.png" alt="JSOFT" />
                  </div>
                </div>
              </div>
              {/* Single Partner End */}
              {/* Single Partner Start */}
              <div className="single-partner">
                <div className="display-table">
                  <div className="display-table-cell">
                    <img src="assets/img/partner/partner-logo-4.png" alt="JSOFT" />
                  </div>
                </div>
              </div>
              {/* Single Partner End */}
              {/* Single Partner Start */}
              <div className="single-partner">
                <div className="display-table">
                  <div className="display-table-cell">
                    <img src="assets/img/partner/partner-logo-5.png" alt="JSOFT" />
                  </div>
                </div>
              </div>
              {/* Single Partner End */}
              {/* Single Partner Start */}
              <div className="single-partner">
                <div className="display-table">
                  <div className="display-table-cell">
                    <img src="assets/img/partner/partner-logo-1.png" alt="JSOFT" />
                  </div>
                </div>
              </div>
              {/* Single Partner End */}
              {/* Single Partner Start */}
              <div className="single-partner">
                <div className="display-table">
                  <div className="display-table-cell">
                    <img src="assets/img/partner/partner-logo-2.png" alt="JSOFT" />
                  </div>
                </div>
              </div>
              <div className="single-partner">
                <div className="display-table">
                  <div className="display-table-cell">
                    <img src="assets/img/partner/partner-logo-3.png" alt="JSOFT" />
                  </div>
                </div>
              </div>
              {/* Single Partner End */}
              {/* Single Partner Start */}
              <div className="single-partner">
                <div className="display-table">
                  <div className="display-table-cell">
                    <img src="assets/img/partner/partner-logo-4.png" alt="JSOFT" />
                  </div>
                </div>
              </div>
              {/* Single Partner End */}
              {/* Single Partner Start */}
              <div className="single-partner">
                <div className="display-table">
                  <div className="display-table-cell">
                    <img src="assets/img/partner/partner-logo-5.png" alt="JSOFT" />
                  </div>
                </div>
              </div>
              {/* Single Partner End */}
              {/* Single Partner Start */}
            {/* Single Partner End */}
            </OwlCarousel>
          </div>
        </div>
      </div>
    </div>
  </div>
    );
  }
}

export default Partners;