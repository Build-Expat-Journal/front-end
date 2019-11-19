import React from 'react';

import { StoryInput, StyledH2, Div1, TripFormBox, TripStyledForm, StyledInputTwo } from './Styled.js';

const NewTripForm = () => {
  return (
    <Div1>
      <TripFormBox>
        <StyledH2>New Trip</StyledH2>
        <TripStyledForm>
          <StyledInputTwo
            type='text'
            name='title'
            value=''
            placeholder='Trip Title'
          />
          <StyledInputTwo
            type='text'
            name='country'
            value=''
            placeholder='Country'
          />
          <StyledInputTwo
            type='text'
            name='city'
            value=''
            placeholder='City'
          />
          <StoryInput
            type='textarea'
            name='trip_desc'
            value=''
            placeholder='Trip Story'
          />
          <button>Submit</button>
        </TripStyledForm>
      </TripFormBox>
    </Div1>
  )
}

export default NewTripForm;