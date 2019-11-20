import React, { useState, useEffect } from "react";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { StyledH2, UpdateForm, UpdateField } from './Styled.js';

const UpdateTripForm = ({ values, errors, touched, status }) => {
  const [updateTrip, setUpdateTrip] = useState([]);
  useEffect(() => {
    status && setUpdateTrip(updateTrip => [...updateTrip, status]);
  }, [status]);

  return (
    <div>
      <StyledH2>New Trip</StyledH2>
      <UpdateForm>
        <UpdateField type='text' name='trip_title' placeholder='Trip Title' />
        {touched.trip_title && errors.trip_title && (
          <p>{errors.trip_title}</p>
        )}

        <UpdateField type='text' name='country' placeholder='Country' />
        {touched.country && errors.country && (
          <p>{errors.country}</p>
        )}

        <UpdateField type='text' name='city' placeholder='City' />
        {touched.city && errors.city && (
          <p>{errors.city}</p>
        )}

        <UpdateField as='textarea' type='text' name='trip_desc' placeholder='Trip Story' />
        {touched.trip_desc && errors.trip_desc && (
          <p>{errors.trip_desc}</p>
        )}

        <button type='submit'>Submit</button>
      </UpdateForm>
    </div>
  )
}
const NewUpdateTripForm = withFormik({
  mapPropsToValues({ trip_title, country, city, trip_desc }) {
    return {
      trip_title: trip_title || '',
      country: country || '',
      city: city || '',
      trip_desc: trip_desc || ''
    }
  },
  validationSchema: Yup.object().shape({
    trip_title: Yup.string().required('Trip title is a required field!'),
    country: Yup.string().required('Country is a required field!'),
    city: Yup.string().required('City is a required field!'),
    trip_desc: Yup.string().required('Trip story is a required field!')
  }),
  handleSubmit(values, { setStatus }) {
    axios
      .post('', values)
      .then(response => {
        setStatus(response.data);
      })
      .catch(error => console.log(error.response));
  }
})(UpdateTripForm);

export default NewUpdateTripForm;