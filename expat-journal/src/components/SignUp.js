import React, { useState } from 'react';
import { connect } from 'react-redux';

import { postUser } from '../actions';
import { SignUpBox, StyledForm, StyledInput, StyledButton } from './Styled.js';

const initialCredentials = {
  username: '',
  password: '',
  confirmPassword: '',
  first_name: '',
  last_name: '',
};

function SignUp({ postUser, history }) {

  const [credentials, setCredentials] = useState(initialCredentials);

  const handleChange = e => {
    setCredentials(
      {
        ...credentials,
        [e.target.name]: e.target.value
      }
    );
  };

  const callSignUp = e => {
    e.preventDefault();
    postUser(credentials, history);
  };

  return (
    <SignUpBox>
      <h2>Create an Account</h2>
      <StyledForm onSubmit={callSignUp}>
        <StyledInput
          type="text"
          name="firstName"
          value={credentials.first_name}
          placeholder="first name"
          onChange={handleChange}
        />
        <StyledInput
          type="text"
          name="lastName"
          value={credentials.last_name}
          placeholder="last name"
          onChange={handleChange}
        />
        <StyledInput
          type="text"
          name="username"
          value={credentials.username}
          placeholder="login name"
          onChange={handleChange}
        />
        <StyledInput
          type="password"
          name="password"
          value={credentials.password}
          placeholder="password"
          onChange={handleChange}
        />
        <StyledInput
          type="password"
          name="confirmPassword"
          value={credentials.confirmPassword}
          placeholder='confirm password'
          onChange={handleChange}
        />
        <StyledButton>Sign Up</StyledButton>
      </StyledForm>
    </SignUpBox>
  )
}

const mapStateToProps = state => {
  return {
    isFetching: state.isFetching,
    error: state.error
  }
}

export default connect(mapStateToProps, { postUser })(SignUp)