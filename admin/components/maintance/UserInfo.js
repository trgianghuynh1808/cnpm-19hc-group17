import React from 'react';
import { capitalize } from '../../utils/common';

const UserInfo = (props) => {
  const { contractInfo = {} } = props;
  const {
    name: userName = '',
    phone_number: userPhoneNumber = ''
  } = contractInfo;
  return (
    <form>
      <div className="row">
        <div className="col">
          <label>Họ và tên</label>
          <input disabled value={capitalize(userName)} type="text" className="form-control" />
        </div>
        <div className="col">
          <label>Số điện thoại</label>
          <input disabled value={userPhoneNumber} type="text" className="form-control" />
        </div>
      </div>
      <style jsx>{`
        .row {
          margin-bottom: 30px;
        }
      `}</style>
    </form>
  );
};

export default UserInfo;