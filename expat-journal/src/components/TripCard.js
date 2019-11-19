import React from 'react';
import { connect } from 'react-redux';
import { deleteTrip } from '../actions'; 
import { TripCards, ImageBox, ImageStyle, CardLocation, CardSubtitle, CardText, StyledBtn } from './Styled.js';


const TripCard = ({ trips }) => {
  console.log('card props', trips.id)
  const handleClick = e => {
    e.preventdefault();
  }
  return (
    <TripCards>
      <ImageBox><ImageStyle src="https://source.unsplash.com/random" alt={trips.city} /></ImageBox>
      <CardLocation>{trips.city}, {trips.country}</CardLocation>
      <CardSubtitle>{trips.trip_title}</CardSubtitle>
      <CardText>{trips.trip_desc}</CardText>
      <StyledBtn onClick={handleClick}>x</StyledBtn>
    </TripCards>
  )
};


export default connect(null, { deleteTrip })(TripCard);
