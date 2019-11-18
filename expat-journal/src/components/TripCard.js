import React from 'react';

import { TripCards } from './Styled.js';


const TripCard = (props) => {
  return (
    <TripCards>
      <h1>{props.trips.city}, {props.trips.country}</h1>
      <h2>{props.trips.trip_title}</h2>
      <img src={props.trips.img_url} alt={props.trips.city} />
      <p>{props.trips.trip_desc}</p>
    </TripCards>
  )
};

export default TripCard;
