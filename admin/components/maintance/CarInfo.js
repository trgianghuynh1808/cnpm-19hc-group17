import React from 'react';
import { capitalize } from '../../utils/common';

const CarInfo = (props) => {
  const { isConfirming, id, brand, model, color } = props;
  return (
    <form>
      <div className="row">
        <div className="col">
          <label>Mã xe</label>
          <input disabled value={capitalize(id).split('-')[0]} type="text" className="form-control" />
        </div>
        <div className="col">
          <label>Hiệu xe</label>
          <input disabled value={capitalize(brand)} type="text" className="form-control" />
        </div>
      </div>
      {!isConfirming && <div className="row">
        <div className="col">
          <label>Tên xe</label>
          <input disabled value={capitalize(model)} type="text" className="form-control" />
        </div>
        <div className="col">
          <label>Màu xe</label>
          <input disabled value={capitalize(color)} type="text" className="form-control" />
        </div>
      </div>
      }
      <style jsx>{`
        .row {
          margin-bottom: 30px;
        }
      `}</style>
    </form>
  );
};

export default CarInfo;