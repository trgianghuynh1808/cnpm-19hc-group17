import React from 'react';
import { Notify, Setting } from './Icon';

const Statistical = (props) => {
  return (
    <>
    <div className="container top">
      <div className="row">
        <div className="col-12">
          10.0000 VND Doanh Thu Ngày
        </div>
      </div>
      </div>
      <div className="container bottom">
      <div style={{ marginLeft: '2px' }} className="row">
        <div className="col-3">
          98<br/>
          <p className="users">users</p>
        </div>
        <div className="col-3">
          89<br/>
          <p className="bills">bills</p>
        </div>
        <div className="col-3">
          58<br/>
          <p className="cars">cars</p>
        </div>
      </div>
      </div>    
      <style jsx>{`
        .container.top{
          color: #FFF;
          font-family: Open Sans;
          font-style: normal;
          font-weight: bold;
          font-size: 14px;
          line-height: 27px;
          text-transform: uppercase;
          margin: 20px 0px;
          text-align: center;
        }

        .container.bottom{
          color: #FFF;
          font-family: Open Sans;
          font-style: normal;
          font-weight: bold;
          font-size: 18px;
          text-transform: uppercase;
          margin-bottom: 20px;
          line-height: 25px;
          text-align: center;
        }
        .col-3 {
          background: #4A368D;
          border: 2px solid #E5E5E5;
          box-sizing: border-box;
          border-radius: 8px;
          height: 50px;
          margin: 5px;
        }
        .col-3 p {
          text-transform: none;
          color: #FFF;
          position: absolute;
        }
        .col-3 p.users {
          left: 3px;
        }
        .col-3 p.bills {
          left: 10px;
        }
        .col-3 p.cars {
          left: 7px;
        }
      `}</style>
      </>
  );
};

const Item = (props) => {
  const { isActive, title, onClick = () => {} } = props;
  return (
    <li onClick={onClick} className={`nav-item ${isActive ? 'active' : ''}`}>
      <a className="nav-link text-truncate" href="#">
        {/* <i className="fa fa-home" /> */}
        <span className="d-none d-sm-inline">{title}</span>
      </a>
      <style jsx>{`
        a {
          color: #FFF;
          font-family: Open Sans;
          font-style: normal;
          font-weight: bold;
          font-size: 12px;
          line-height: 33px;
          text-transform: uppercase;
          margin-left: 10px;
        }
        .nav-item.active {
          background: #7D3C98;
        };
        .nav-item.active::before {
          content: '';
          position: absolute;
          width: 8px;
          height: 49px;
          background: #AF7AC5;
      }
      `}</style>
    </li>
  );
}

const VerticalBar = (props) => {
  const { itemList = [] } = props;
  return (
    <div className="col-2 collapse show d-md-flex bg-light pl-0 min-vh-100" id="sidebar">
      <ul className="nav flex-column flex-nowrap overflow-hidden">
        <Statistical/>
        {itemList.map((item) => {
          const { title, onClick } = item;
          return <Item isActive={title === 'DS Xe Bảo Dưỡng'} title={title} onClick={onClick}/>
        })}
      </ul>
      <style jsx>{`
        #sidebar {
          height: 100vh;
          background: #39247E;
          padding: 0;
          color: #FFF;
        }
        ul.nav {
          width: 100%;
          background: #39247E;
        }
      `}</style>
</div>

  );
};

export default VerticalBar;