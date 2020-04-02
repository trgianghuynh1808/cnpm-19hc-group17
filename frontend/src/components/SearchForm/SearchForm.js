import React, { useReducer } from 'react';
import { Link } from 'react-router-dom';


function reducer(state, action) {
  switch (action.type) {
    case 'model':
      return { ...state, model: action.payload };
    case 'brand':
      return { ...state, brand: action.payload };
    case 'color':
      return { ...state, color: action.payload };
    case 'seat':
      return {...state, seat: action.payload };
    default:
      throw new Error();
  }
}
const SearchForm = (props) => {
    const [ queryObj, dispatch ] = useReducer(reducer, {});
    const selectOnChange = (id) => {
      const element = document.getElementById(id);
      if(element.value) {
        dispatch({ type: id, payload: element.value});
      }
    }
        return (
          <section id="slider-area">
          <div className="single-slide-item overlay">
            <div className="container">
              <div className="row">
                <div className="col-lg-5">
                  <div className="book-a-car">
                      <div className="pickup-location book-item">
                        <h4>MODEL:</h4>
                        <select onChange={() => selectOnChange('model')} id="model" name="model" className="custom-select">
                          <option value="">Select car model</option>
                          <option value="sedan">Sedan</option>
                          <option value="suv">SUV</option>
                          <option value="coupe">Coupe</option>
                          <option value="mpv">MPV</option>
                        </select>
                      </div>
                      <div className="pick-up-date book-item">
                        <h4>BRAND:</h4>
                        <select onChange={() => selectOnChange('brand')} id="brand" name="brand" className="custom-select">
                          <option value="" >Select car brand</option>
                          <option value="bmw">BMW</option>
                          <option value="audi">Audi</option>
                          <option value="toyota">Toyota</option>
                          <option value="ferrari">Ferrari</option>
                        </select>
                      </div>
                      <div className="choose-car-type book-item">
                        <h4>COLOR:</h4>
                        <select onChange={() => selectOnChange('color')} id="color" name="color" className="custom-select">
                          <option value="">Select car color</option>
                          <option value="black">Black</option>
                          <option value="white">White</option>
                          <option value="red">Red</option>
                        </select>
                      </div>

                      <div className="choose-car-type book-item">
                        <h4>SEAT:</h4>
                        <select onChange={() => selectOnChange('seat')} id="seat" name="seat" className="custom-select">
                          <option value="" >Select car seat number</option>
                          <option value={5}>5</option>
                          <option value={7}>7</option>
                          <option value={15}>15</option>
                        </select>
                      </div>
                      <div className="book-button text-center">
                        <Link
                          to={{pathname:'/car-list', state: queryObj}}
                          className="book-now-btn"
                        >
                          Book Now
                        </Link>
                      </div>
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

export default SearchForm;