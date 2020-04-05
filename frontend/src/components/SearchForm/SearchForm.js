import React, { useReducer } from 'react';
import { Link } from 'react-router-dom';
import { SEARCH_VALUE } from '../../utils/enum';

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
    const { brands } = props;
    const [ queryObj, dispatch ] = useReducer(reducer, {});
    const selectOnChange = (id) => {
      const element = document.getElementById(id);
      if(element.value) {
        dispatch({ type: id, payload: element.value});
      }
    }
    let brandList = [];
    if(brands) {
      brandList = brands.map((v) => v.id);
    }
    const searchValue = Object.entries({brand: brandList, ...SEARCH_VALUE});
        return (
          <section id="slider-area">
          <div className="single-slide-item overlay">
            <div className="container">
              <div className="row">
                <div className="col-lg-5">
                  <div className="book-a-car">
                      {searchValue.map((v) => {
                        const [ field, values ] = v;
                        const upperCaseField = field.toUpperCase();
                        return (
                          <div key={field} className="choose-car-type book-item">
                            <h4>{upperCaseField}:</h4>
                            <select onChange={() => selectOnChange(field)} id={field} name={field} className="custom-select">
                              <option value="">SELECT CAR {upperCaseField}</option>
                              {values.map((value)=>
                              <option key={value} value={typeof value === 'number' ? value : value.toLowerCase()}>
                                {typeof value === 'number' ? value : value.toUpperCase()}
                              </option>
                              )}
                            </select>
                          </div>
                        )
                      })}
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