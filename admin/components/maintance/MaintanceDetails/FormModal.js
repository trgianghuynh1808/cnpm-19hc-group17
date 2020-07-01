import React, { useReducer } from 'react';
import ButtonComponent from "../../core/ButtonComponent";

export const isNumber = (number) => /^\d+$/.test(number);

function reducer(state, action) {
  switch (action.type) {
    case "price":
      return { ...state, price: action.payload };
    case "description":
      return { ...state, description: action.payload };
    default:
      throw new Error();
  }
}

const FormModal = (props) => {
  const { onSubmit, curID } = props;
  const [maintance, dispatch] = useReducer(reducer, {
    description: '',
    price: '',
  });
  const handleOnChange = (event, type) => {
    const { target: { value } } = event;
    if(type === 'price' && !isNumber(value)) return;
    if(type === 'price') {
      dispatch({ type, payload: Number(value) });
      return;
    }
    dispatch({ type, payload: value });
  }
  console.log(maintance);
  return(
    <form>
      <div className="row">
        <div className="col title">
          <h2>Thêm chi tiết sửa chữa</h2>
        </div>
      </div>
      <div className="row">
        <div className="col">
        <label>Số thứ tự</label>
          <input disabled value={curID} type="text" className="form-control" />
        </div>
        <div className="col">
          <label>Chi phí</label>
          <input
            onChange={(event) => handleOnChange(event, 'price')}
            type="text"
            value={maintance.price}
            className="form-control" 
          />
        </div>
      </div>
      <div className="row">
        <div className="col">
          <label>Mô tả</label>
          <input
            onChange={(event) => handleOnChange(event, 'description')}
            type="text"
            value={maintance.description}
            className="form-control"
          />
        </div>
      </div>
      <div className="col">
          <ButtonComponent 
            className="float-right"
            icon={
              <img
                src="/static/assets/images/icons/add-icon.png"
                width="16"
                height="16"
              />
            }
            content="Thêm"
            color="green"
            doOnClick={() => onSubmit(maintance)}
          />
        </div>
      <style jsx>{`
        .row {
          margin-bottom: 30px;
        }
        .title {
          text-align: center;
          
        }
        .title h2 {
          font-size: 20px;
          color: #C0392B;
          text-transform: uppercase;
        }
      `}</style>
    </form>
  );
};

export default FormModal;