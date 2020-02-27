import React, { Component } from 'react';

class HeaderTop extends Component {
    render() {
        return (
          <div id="header-top" className="d-none d-xl-block">
          <div className="container">
            <div className="row">
              {/*== Single HeaderTop Start ==*/}
              <div className="col-lg-3 text-left">
                <i className="fa fa-map-marker" /> 802/2, Mirpur, Dhaka
              </div>
              {/*== Single HeaderTop End ==*/}
              {/*== Single HeaderTop Start ==*/}
              <div className="col-lg-3 text-center">
                <i className="fa fa-mobile" /> +1 800 345 678
              </div>
              {/*== Single HeaderTop End ==*/}
              {/*== Single HeaderTop Start ==*/}
              <div className="col-lg-3 text-center">
                <i className="fa fa-clock-o" /> Mon-Fri 09.00 - 17.00
              </div>
              {/*== Single HeaderTop End ==*/}
              {/*== Social Icons Start ==*/}
              <div className="col-lg-3 text-right">
                <div className="header-social-icons">
                  <a href="#"><i className="fa fa-behance" /></a>
                  <a href="#"><i className="fa fa-pinterest" /></a>
                  <a href="#"><i className="fa fa-facebook" /></a>
                  <a href="#"><i className="fa fa-linkedin" /></a>
                </div>
              </div>
              {/*== Social Icons End ==*/}
            </div>
          </div>
        </div>
        );
    }
}

export default HeaderTop;