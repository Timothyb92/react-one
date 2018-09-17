import React from 'react';
import './FighterCard.css';

const FighterCard = props => (
  <div className="fighterCards col-3">
    <div className="card">
      <div className="img-container card-body">
        <img src={props.image} alt={props.name} width="170px" height="170px" />
      </div>
    </div>
  </div>
);

export default FighterCard;