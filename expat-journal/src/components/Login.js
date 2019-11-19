import React, { useState } from 'react';
import { connect } from 'react-redux';
import { userLogin } from '../actions';

import { LoginBox, StyledForm, StyledInput, StyledButtonTwo, StyledH2 } from './Styled.js';

const initialCredentials = {
  username: '',
  password: ''
}

function Login({ userLogin, history }) {

    const [credentials, setCredentials] = useState(initialCredentials)

    const handleChange = e => {
        setCredentials({
                ...credentials,
                [e.target.name]: e.target.value
        })
    };

    const callLogin = e =>  {
        e.preventDefault();
        userLogin(credentials, history);
    };

  return (
    <LoginBox>
      <StyledH2>Log In</StyledH2>
      <StyledForm onSubmit={callLogin}>
        <StyledInput
          type="text"
          name="username"
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
        <StyledButtonTwo>Log in</StyledButtonTwo>
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