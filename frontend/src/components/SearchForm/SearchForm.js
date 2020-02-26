import React, { Component } from 'react';

class SearchForm extends Component {
    render() {
        return (
          <section id="slider-area">
          <div className="single-slide-item overlay">
            <div className="container">
              <div className="row">
                <div className="col-lg-5">
                  <div className="book-a-car">
                    <form action="/cars/car_detail">
                      <div className="pickup-location book-item">
                        <h4>MODEL:</h4>
                        <select id="model" name="model" className="custom-select">
                          <option selected>Select car model</option>
                          <option value={1}>Sedan</option>
                          <option value={2}>SUV</option>
                          <option value={3}>Coupe</option>
                          <option value={3}>MPV</option>
                        </select>
                      </div>
                      <div className="pick-up-date book-item">
                        <h4>BRAND:</h4>
                        <select id="brand" name="brand" className="custom-select">
                          <option selected>Select car brand</option>
                          <option value={1}>BMW</option>
                          <option value={2}>Audi</option>
                          <option value={3}>Toyota</option>
                          <option value={4}>Ferrari</option>
                        </select>
                      </div>
                      <div className="choose-car-type book-item">
                        <h4>COLOR:</h4>
                        <select id="color" name="color" className="custom-select">
                          <option selected>Select car color</option>
                          <option value={1}>Black</option>
                          <option value={2}>White</option>
                          <option value={3}>Red</option>
                        </select>
                      </div>

                      <div className="choose-car-type book-item">
                        <h4>SEAT:</h4>
                        <select id="seat" name="seat" className="custom-select">
                          <option selected>Select car seat number</option>
                          <option value={1}>4</option>
                          <option value={2}>7</option>
                          <option value={3}>15</option>
                        </select>
                      </div>
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
        </section>
        );
    }
}

export default SearchForm;