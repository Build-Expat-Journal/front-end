import React from 'react';


const TripCard = () => {
  return (
    <>
      <h1>{props.user.city}, {props.user.country}</h1>
      <h2>{props.user.trip_title}</h2>
      <img src={props.character.image} />
      <p>{props.user.trip_desc}</p>
    </>
  )
};

export default TripCard;
