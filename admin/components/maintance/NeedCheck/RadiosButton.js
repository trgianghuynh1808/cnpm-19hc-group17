import React from 'react';

const RadiosButton = (props) => {
  const { carStatus, setCarStatus } = props;
  const handleOnChange = (status) => {
    setCarStatus(status);
  };
  return (
    <div>
      <div className="form-check">
        <input onChange={() => handleOnChange('done')} value={carStatus} className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1"  defaultChecked />
        <label className="form-check-label" htmlFor="exampleRadios1">
          Xe không hư hại
        </label>
      </div>
      <div className="form-check">
        <input onChange={() => handleOnChange('maintance')} value={carStatus} className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" />
        <label className="form-check-label" htmlFor="exampleRadios2">
          Xe cần bảo dưỡng
        </label>
      </div>
    </div>
  );
};

export default RadiosButton;