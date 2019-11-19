import React from 'react';

import { TripCards, ImageBox, ImageStyle, CardLocation, CardSubtitle } from './Styled.js';


const TripCard = (props) => {
  return (
    <TripCards>
      <ImageBox><ImageStyle src="https://source.unsplash.com/random" alt={props.trips.city} /></ImageBox>
      <CardLocation>{props.trips.city}, {props.trips.country}</CardLocation>
      <CardSubtitle>{props.trips.trip_title}</CardSubtitle>
      <p>{props.trips.trip_desc}</p>
    </TripCards>
  )
};

export default TripCard;
