import React, { Component } from 'react';

class BookForm extends Component {
    render() {
        return (
          <section id="slider-area">
          {/*== slide Item One ==*/}
          <div className="single-slide-item overlay">
            <div className="container">
              <div className="row">
                <div className="col-lg-5">
                  <div className="book-a-car">
                    <form action="index.html">
                      {/*== Pick Up Location ==*/}
                      <div className="pickup-location book-item">
                        <h4>PICK-UP LOCATION:</h4>
                        <select className="custom-select">
                          <option selected>Select</option>
                          <option value={1}>Dhaka</option>
                          <option value={2}>Comilla</option>
                          <option value={3}>Barishal</option>
                          <option value={3}>Rangpur</option>
                        </select>
                      </div>
                      {/*== Pick Up Location ==*/}
                      {/*== Pick Up Date ==*/}
                      <div className="pick-up-date book-item">
                        <h4>PICK-UP DATE:</h4>
                        <input id="startDate" placeholder="Pick Up Date" />
                        <div className="return-car">
                          <h4>Return DATE:</h4>
                          <input id="endDate" placeholder="Return Date" />
                        </div>
                      </div>
                      {/*== Pick Up Location ==*/}
                      {/*== Car Choose ==*/}
                      <div className="choose-car-type book-item">
                        <h4>CHOOSE CAR TYPE:</h4>
                        <select className="custom-select">
                          <option selected>Select</option>
                          <option value={1}>BMW</option>
                          <option value={2}>Audi</option>
                          <option value={3}>Lexus</option>
                        </select>
                      </div>
                      {/*== Car Choose ==*/}
                      <div className="book-button text-center">
                        <button className="book-now-btn">Book Now</button>
                      </div>
                    </form>
                  </div>
                </div>
                <div className="col-lg-7 text-right">
                  <div className="display-table">
                    <div className="display-table-cell">
                      <div className="slider-right-text">
                        <h1>BOOK A CAR TODAY!</h1>
                        <p>FOR AS LOW AS $10 A DAY PLUS 15% DISCOUNT <br /> FOR OUR RETURNING CUSTOMERS</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/*== slide Item One ==*/}
        </section>
        );
    }
}

export default BookForm;