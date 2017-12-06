import React from 'react';

const HaikuDisplay = ({ haiku }) => (
  <section key={haiku.id} className="HaikuDisplay">
    <h3>{haiku.alias}</h3>
    <p>{haiku.noun_one}</p>
    <p>{haiku.noun_two}</p>
    <p>{haiku.noun_three}</p>
    <p>{haiku.noun_four}</p>
    <p>{haiku.noun_five}</p>
  </section>
  );


export default HaikuDisplay;
