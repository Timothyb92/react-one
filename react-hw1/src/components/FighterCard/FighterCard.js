import React from 'react';
import './FighterCard.css';

const FighterCard = props => (
  <div className="card">
    <div className="img-container">
      <img src={props.image} />
    </div>
  </div>
);

export default FighterCard;