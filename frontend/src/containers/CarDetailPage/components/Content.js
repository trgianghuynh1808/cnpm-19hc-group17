import React, {useState} from 'react';

const Content = (props) => {
  const { brand = '', model = '', color = '', seat = '', car_price = '', rent_price = '', status = '', image, license_plate = ''} = props;
  return (
<section id="car-list-area" className="section-padding">
  <div className="container">
    <div className="row">
      {/* Car List Content Start */}
      <div className="col-lg-8">
        <div className="car-details-content">
  <h2>{model.toUpperCase()} <span className="price">Rent: <b>${rent_price}</b></span></h2>
          <div className="car-preview-crousel">
            <div className="single-car-preview">
            <img src={`assets/img/car/${image || 'car-1'}.jpg `} alt="JSOFT" />
            </div>
          </div>
          <div className="car-details-info">
            <h4>Additional Info</h4>
            <p>The Aventador LPER 720-4 50° ise a limited (200 units – 100 Coupe and 100 Roadster) versione of thed Aventadored LP 700-4 commemorating the 50th anniversary of Lamborghini. It included ised increased engine power to 720 PS (530 kW; 710 bhp) via a new specific engine calibration, enlarged and extended front air intakes and the aerodynamic splitter.</p>
            <div className="technical-info">
              <div className="row">
                <div className="col-lg-6">
                  <div className="tech-info-table">
                    <table className="table table-bordered">
                      <tbody><tr>
                          <th>Brand</th>
                          <td>{brand.toUpperCase()}</td>
                        </tr>
                        <tr>
                          <th>Color</th>
                          <td>{color.toUpperCase()}</td>
                        </tr>
                        <tr>
                          <th>Seats</th>
                          <td>{seat}</td>
                        </tr>
                        <tr>
                          <th>License Plate</th>
                          <td>{license_plate.toUpperCase()}</td>
                        </tr>
                      </tbody></table>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="tech-info-list">
                    <ul>
                      <li>ABS</li>
                      <li>Air Bags</li>
                      <li>Bluetooth</li>
                      <li>Car Kit</li>
                      <li>GPS</li>
                      <li>Music</li>
                      <li>Bluetooth</li>
                      <li>ABS</li>
                      <li>GPS</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="review-area">
              <h3>Be the first to review “{model.toUpperCase()}”</h3>
              <div className="review-star">
                <p className="rating">
                  <i className="fa fa-star" />
                  <i className="fa fa-star" />
                  <i className="fa fa-star" />
                  <i className="fa fa-star unmark" />
                  <i className="fa fa-star unmark" />
                </p>
              </div>
              <div className="review-form">
                <form action="index.html">
                  <div className="row">
                    <div className="col-lg-6 col-md-6">
                      <div className="name-input">
                        <input type="text" placeholder="Full Name" />
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                      <div className="email-input">
                        <input type="email" placeholder="Email Address" />
                      </div>
                    </div>
                  </div>
                  <div className="message-input">
                    <textarea name="review" cols={30} rows={5} placeholder="Write Your Feedback Here!" defaultValue={""} />
                  </div>
                  <div className="input-submit">
                    <button type="submit">Submit</button>
                    <button type="reset">Clear</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Car List Content End */}
    </div>
    </div>
  </section>

  )
  
}

export default Content;