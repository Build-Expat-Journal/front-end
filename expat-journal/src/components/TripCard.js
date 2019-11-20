import React from 'react';
import { connect } from 'react-redux';
import { deleteTrip } from '../actions';
import { TripCards, ImageBox, ImageStyle, CardLocation, CardSubtitle, CardText, StyledBtn, StyledBtn2 } from './Styled.js';
import NewUpdateTripForm from './UpdateTripForm';

const TripCard = (props) => {

  const handleClick = e => {
    e.preventDefault();
    props.deleteTrip(props.trips.id)
  };

  return (
    <TripCards>
      <ImageBox><ImageStyle src="https://source.unsplash.com/random" alt={props.trips.city} /></ImageBox>
      <CardLocation>{props.trips.city}, {props.trips.country}</CardLocation>
      <CardSubtitle>{props.trips.trip_title}</CardSubtitle>
      <CardText>{props.trips.trip_desc}</CardText>
      <StyledBtn onClick={handleClick}>x</StyledBtn>
      <StyledBtn2>Update Trip</StyledBtn2>
    </TripCards>
  )
};


export default connect(null, { deleteTrip })(TripCard);
