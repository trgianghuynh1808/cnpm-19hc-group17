import React, { Component } from 'react';

class Car extends Component {
    render() {
        return (
            <div className="single-car-wrap">
              <div className="row">
                {/* Single Car Thumbnail */}
                <div className="col-lg-5">
                  <div className="car-list-thumb car-thumb-1" />
                </div>
                {/* Single Car Thumbnail */}
                {/* Single Car Info */}
                <div className="col-lg-7">
                  <div className="display-table">
                    <div className="display-table-cell">
                      <div className="car-list-info">
                        <h2><a href="#">Aston Martin One-77</a></h2>
                        <h5>39$ Rent /per a day</h5>
                        <p>Vivamus eget nibh. Etiam cursus leo vel metus. Nulla facilisi. Aenean inorci luctus et ultrices posuere cubilia.</p>
                        <ul className="car-info-list">
                          <li>Air Condition</li>
                          <li>Diesel</li>
                          <li>Auto</li>
                        </ul>
                        <p className="rating">
                          <i className="fa fa-star" />
                          <i className="fa fa-star" />
                          <i className="fa fa-star" />
                          <i className="fa fa-star" />
                          <i className="fa fa-star unmark" />
                        </p>
                        <a href="#" className="rent-btn">Book It</a>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Single Car info */}
              </div>
            </div>
        );
    }
}

export default Car;