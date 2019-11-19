import React, { useState } from 'react';
import { connect } from 'react-redux';
import { userLogin } from '../actions';

import { LoginBox, StyledForm, StyledInput, StyledButton } from './Styled.js';

const initialCredentials = {
  username: '',
  password: ''
}

function Login({ userLogin, history }) {
  const [credentials, setCredentials] = useState(initialCredentials)

  const handleChange = e => {
    setCredentials(
      {
        ...credentials,
        [e.target.name]: e.target.value
      }
    )
  };

  const callLogin = e => {
    e.preventDefault();
    userLogin(credentials, history);
  };

  return (
    <LoginBox>
      <h2>Log In</h2>
      <StyledForm onSubmit={callLogin}>
        <StyledInput
          type="text"
          name="userId"
          value={credentials.username}
          placeholder="username"
          onChange={handleChange}
        />
        <StyledInput
          type="password"
          name="password"
          value={credentials.password}
          placeholder="password"
          onChange={handleChange}
        />
        <StyledButton>Log in</StyledButton>
      </StyledForm>
    </LoginBox>

  )
};

const mapStateToProps = state => {
  return {
    isFetching: state.isFetching,
    error: state.error
  }
};

export default connect(mapStateToProps, { userLogin })(Login);