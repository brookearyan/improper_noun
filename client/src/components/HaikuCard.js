import React from 'react';

const HaikuCard = ({ haiku }) => (
  <div key={haiku.id} className="HaikuCard">
    <h3>{haiku.alias}</h3>
  </div>
)

export default HaikuCard;
