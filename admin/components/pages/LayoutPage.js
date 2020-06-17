import React from 'react';
import Header from '../core/Header';
import VerticalBar from '../core/VerticalBar';
import Card from '../core/Card';

const LayoutPage = (props) => {
  const { children, verticalBarItemList = [], headerTitle = '', cardTitle = '', name } = props;
  return (
    <div className="wrapper-container">
      <Header name={name} title={headerTitle} />
      <div className="container-fluid">
        <div className="row">
          <VerticalBar itemList={verticalBarItemList}/>
          <div className="col-10">
            <Card title={cardTitle} name={name}/>
            {children}
          </div>
        </div>
      </div>
      <style jsx>{`
        .wrapper-container {
          background: #FAF7F7;
        }
      `}</style>
    </div>
  );
};

export default LayoutPage;