import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { deleteTrip, fetchTrips } from '../actions';
import { TripCards, ImageBox, ImageStyle, CardLocation, CardSubtitle, CardText, StyledBtn, StyledBtn2 } from './Styled.js';
import UpdateTripForm from './UpdateTripForm';

const TripCard = (props) => {
  const [selectTrip, setSelectTrip] = useState([]);

  const handleClick = e => {
    e.preventDefault();
    props.deleteTrip(props.trips.id)
  };

  const clickHandler = e => {
    props.fetchTrips(props.trips.id)
    localStorage.setItem('tridId', props.trips.id);
    props.history.push('/update')
  };

  return (
    <TripCards>
      <ImageBox><ImageStyle src="https://source.unsplash.com/random" alt={props.trips.city} /></ImageBox>
      <CardLocation>{props.trips.city}, {props.trips.country}</CardLocation>
      <CardSubtitle>{props.trips.trip_title}</CardSubtitle>
      <CardText>{props.trips.trip_desc}</CardText>
      <StyledBtn onClick={handleClick}>x</StyledBtn>
      <StyledBtn2 onClick={clickHandler}>Update Trip</StyledBtn2>
    </TripCards>
  )
};


export default connect(null, { deleteTrip, fetchTrips })(TripCard);
