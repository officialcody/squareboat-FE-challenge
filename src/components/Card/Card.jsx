import React from 'react';
import './Card.css';

const Card = ({title, description}) => {
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title title p-2">{title}</h5>
        <p className="card-text desc p-2">{description}</p>
      </div>
    </div>
  );
}

export default Card;
