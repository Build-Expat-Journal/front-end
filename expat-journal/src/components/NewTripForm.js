import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addTrip } from '../actions';
import { TripButton, StoryInput, StyledH2, Div1, TripFormBox, TripStyledForm, StyledInputTwo } from './Styled.js';

const initialTrip = {
  trip_title: '',
  country: '',
  city: '',
  trip_desc: '',
  user_id: 1
};

const NewTripForm = (props) => {
  const [newTrip, setNewTrip] = useState(initialTrip);
  
  const handleChanges = event => {
    setNewTrip({ ...newTrip, [event.target.name]: event.target.value })
  };

  const submitHandler = event => {
    props.addTrip(newTrip);
    props.history.push('/trips');
  };

  return (
    <Div1>
      <TripFormBox>
        <StyledH2>New Trip</StyledH2>
        <TripStyledForm onSubmit={submitHandler}>
          <StyledInputTwo
            onChange={handleChanges}
            type='text'
            name='trip_title'
            value={newTrip.title}
            placeholder='Trip Title'
          />
          <StyledInputTwo
            onChange={handleChanges}
            type='text'
            name='country'
            value={newTrip.country}
            placeholder='Country'
            required
          />
          <StyledInputTwo
            onChange={handleChanges}
            type='text'
            name='city'
            value={newTrip.city}
            placeholder='City'
          />
          <StoryInput
            onChange={handleChanges}
            type='textarea'
            name='trip_desc'
            value={newTrip.trip_desc}
            placeholder='Trip Story'
          />
          <TripButton type='submit'>Submit</TripButton>
        </TripStyledForm>
      </TripFormBox>
    </Div1>
  )
};

const mapStateToProps = state => {
  return {
    trips: state.trips,
    isFetching: state.isFetching,
    error: state.error
  }
};
export default connect(mapStateToProps, { addTrip })(NewTripForm);