import React from 'react';

const Card = (props) => {
  const { title, name } = props;
  return (
    <div className="card-body">
      <h5 className="card-title">{title}</h5>
      <p className="card-text">Welcome, {name}</p>
      <style jsx>{`
        .card-title {
          font-family: Open Sans;
          font-style: normal;
          font-weight: bold;
          font-size: 20px;
          line-height: 20px;
          color: #39247E;
        }
      `}</style>
    </div>
  );
};

export default Card;