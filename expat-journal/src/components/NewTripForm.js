import React, { useState } from 'react';

import { TripButton, StoryInput, StyledH2, Div1, TripFormBox, TripStyledForm, StyledInputTwo } from './Styled.js';

const NewTripForm = () => {
  const [newTrip, setNewTrip] = useState({
    title: '',
    country: '',
    city: '',
    trip_desc: ''
  })

  const handleChanges = event => {
    setNewTrip({ ...newTrip, [event.target.name]: event.target.value })
  }

  const submitHandler = event => {
    event.preventDefault()
    const newT = {
      ...newTrip,
    }
  }


  return (
    <Div1>
      <TripFormBox>
        <StyledH2>New Trip</StyledH2>
        <TripStyledForm>
          <StyledInputTwo
            onChange={handleChanges}
            type='text'
            name='title'
            value={newTrip.title}
            placeholder='Trip Title'
          />
          <StyledInputTwo
            onChange={handleChanges}
            type='text'
            name='country'
            value={newTrip.country}
            placeholder='Country'
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
          <TripButton>Submit</TripButton>
        </TripStyledForm>
      </TripFormBox>
    </Div1>
  )
}

export default NewTripForm;