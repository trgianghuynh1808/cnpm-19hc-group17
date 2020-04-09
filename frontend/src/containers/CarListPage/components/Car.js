import React from 'react';
import { Link } from 'react-router-dom';

const Car = (props) => {
  const {id, color, seat, status, image, model, brand } = props;
      return (
            <div className="single-car-wrap">
              <div className="row">
                {/* Single Car Thumbnail */}
                <div className="col-lg-5">
                <Link to={`/car-details/${id}`} className="car-hover">
                  <img src={`assets/img/car/${image || 'car-1'}.jpg `} alt="JSOFT" />
                </Link>
                </div>
                {/* Single Car Thumbnail */}
                {/* Single Car Info */}
                <div className="col-lg-7">
                  <div className="display-table">
                    <div className="display-table-cell">
                      <div className="car-list-info">
                        <h2>
                          <Link to={`/car-details/${id}`} className="car-hover">
                          {model.toUpperCase()}
                          </Link>
                        </h2>
                        <h5>{brand.toUpperCase()}</h5>
                        <p>Vivamus eget nibh. Etiam cursus leo vel metus. Nulla facilisi. Aenean inorci luctus et ultrices posuere cubilia.</p>
                        <ul className="car-info-list">
                          <li>{color.toUpperCase()}</li>
                          <li>{seat} SEAT</li>
                          <li>{status.toUpperCase()}</li>
                        </ul>
                        <p className="rating">
                          <i className="fa fa-star" />
                          <i className="fa fa-star" />
                          <i className="fa fa-star" />
                          <i className="fa fa-star" />
                          <i className="fa fa-star unmark" />
                        </p>
                        <a href="#book" className="rent-btn">Book It</a>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Single Car info */}
              </div>
            </div>
        );
}

export default Car;
