import React from 'react';

const Car = (props) => {
  const {color, seat, status, image, rentPrice, model, brand } = props;
  return <div className="col-lg-4 col-md-6 hat sedan">
  <div className="single-popular-car">
    <div className="p-car-thumbnails">
      <a className="car-hover" href="assets/img/car/car-2.jpg">
        <img src={`assets/img/car/${image || 'car-1'}.jpg `} alt="JSOFT" />
      </a>
    </div>
    <div className="p-car-content">
      <h3>
          <a href="#">{model}</a>
          <span className="price"><i className="fa fa-tag" /> ${rentPrice}/day</span>
      </h3>
      <h5>{brand}</h5>
      <div className="p-car-feature">
        <a href="#">{color}</a>
        <a href="#">{seat} seat</a>
        <a href="#">{status}</a>
      </div>
    </div>
  </div>
</div>
}

export default Car;