import React from "react";
import { SEARCH_VALUE } from "../../../utils/enums";

const SearchForm = (props) => {
  const { setFilterObj, handleSubmit } = props;
  const selectOnChange = (id) => {
    const element = document.getElementById(id);
    if (element.value) {
      const payload = element.value === 'all' ? '' : element.value;  
      setFilterObj({ type: id, payload });
    }
  };

  const searchValue = Object.entries({ ...SEARCH_VALUE });
  return (
    <div className="book-a-car">
      <div className="choose-car-type book-item">
        <input onChange={(e) => {
          setFilterObj({type: 'model', payload: e.target.value })}} type="text" className="form-control" placeholder="NAME"/>
      </div>
      {searchValue.map((v) => {
        const [field, values] = v;
        const upperCaseField = field.toUpperCase();
        return (
          <div key={field} className="choose-car-type book-item">
            <select
              onChange={() => selectOnChange(field)}
              id={field}
              name={field}
              className="custom-select"
            >
              <option value="all">{upperCaseField}</option>
              {values.map((value) => (
                <option
                  key={value}
                  value={
                    typeof value === "number"
                      ? value
                      : value.toLowerCase()
                  }
                >
                  {typeof value === "number"
                    ? value
                    : value.toUpperCase()}
                </option>
              ))}
            </select>
          </div>
        );
      })}
      <div onClick={handleSubmit} className="book-button text-center">
        <button
          className="book-now-btn"
        >
          Search
        </button>
      </div>
    </div>
  );
};

export default SearchForm;
