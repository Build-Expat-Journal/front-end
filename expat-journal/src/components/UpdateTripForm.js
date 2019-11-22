import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { editTrip } from '../actions';
import { TripButton, StoryInput, StyledH2, Div1, TripFormBox, TripStyledForm, StyledInputTwo } from './Styled.js';
import { axiosWithAuth } from '../utils/axiosWithAuth';

const initialTrip = {
  trip_title: '',
  country: '',
  city: '',
  trip_desc: '',
  user_id: 1
};

const UpdateTripForm = (props) => {
  const [updatedTrip, setUpdatedTrip] = useState(initialTrip);
  console.log('props', props)


  const submitHandler = event => {
    axiosWithAuth().put(`/trips/${props.trips.id}`, updatedTrip)
      .then(res => {
        console.log('put res', res)
        props.history.push('/trips')
      })
      .catch(err => console.log(err))
  };
  
  const handleChange = e => {
    e.persist();
    setUpdatedTrip({
      ...updatedTrip,
      [e.target.name]: e.target.value
    })
  };

  return (
    <Div1>
      <TripFormBox>
        <StyledH2>Edit Trip</StyledH2>
        <TripStyledForm onSubmit={submitHandler}>
          <StyledInputTwo
            onChange={handleChange}
            type='text'
            name='trip_title'
            value={updatedTrip.title}
            placeholder='Trip Title'
          />
          <StyledInputTwo
            onChange={handleChange}
            type='text'
            name='country'
            value={updatedTrip.country}
            placeholder='Country'
            required
          />
          <StyledInputTwo
            onChange={handleChange}
            type='text'
            name='city'
            value={updatedTrip.city}
            placeholder='City'
          />
          <StoryInput
            onChange={handleChange}
            type='textarea'
            name='trip_desc'
            value={updatedTrip.trip_desc}
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
export default connect(mapStateToProps, { editTrip })(UpdateTripForm);