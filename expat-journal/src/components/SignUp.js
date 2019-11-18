import React, { useState } from 'react';
import { connect } from 'react-redux';

import { postUser } from '../actions';

const initialCredentials = {
    username: '',
    password: '',
    confirmPassword: '',
    first_name: '',
    last_name: '',
    email: ''
}

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
        <div>
            <h2>Create an Account</h2>
            <form onSubmit={callSignUp}>
                <input
                    type="text"
                    name="firstName"
                    value={credentials.first_name}
                    placeholder="first name"
                    onChange={handleChange}
                />
                <input
                    type="text"
                    name="lastName"
                    value={credentials.last_name}
                    placeholder="last name"
                    onChange={handleChange}
                />
                <input
                    type="email"
                    name="email"
                    value={credentials.email}
                    placeholder="email"
                    onChange={handleChange}
                />
                <input
                    type="text"
                    name="username"
                    value={credentials.username}
                    placeholder="login name"
                    onChange={handleChange}
                />
                <input
                    type="password"
                    name="password"
                    value={credentials.password}
                    placeholder="password"
                    onChange={handleChange}
                />
                <input
                    type="password"
                    name="confirmPassword"
                    value={credentials.confirmPassword}
                    placeholder='confirm password'
                    onChange={handleChange}
                />
                <button>Sign Up</button>
            </form>
        </div>
    )
}

const mapStateToProps = state => {
    return {
      isFetching: state.isFetching,
      error: state.error
    }
  }
  
  export default connect(mapStateToProps, { postUser })(SignUp)