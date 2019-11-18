import React, { useState } from 'react';
import { connect } from 'react-redux';

import { postUser } from '../actions';

const initialCredentials = {
    username: '',
    password: '',
    first_name: '',
    last_name: '',
};

function SignUp({ postUser, history }) {

    const [credentials, setCredentials] = useState(initialCredentials);

    const handleChange = e => {
        setCredentials({
            ...credentials, 
            [e.target.name]: e.target.value
        });
    };

    const callSignUp = e => {
        e.preventDefault();
        postUser(credentials, history);
    };

    return (
        <div>
            <h2>Create an Account</h2>
            <form onSubmit={callSignUp} onChange={handleChange}>
                <input
                    type="text"
                    name="first_name"
                    value={credentials.first_name}
                    placeholder="first name"
                />
                <input
                    type="text"
                    name="last_name"
                    value={credentials.last_name}
                    placeholder="last name"
                />
                <input
                    type="text"
                    name="username"
                    value={credentials.username}
                    placeholder="username"
                />
                <input
                    type="password"
                    name="password"
                    value={credentials.password}
                    placeholder="password"
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
  
  export default connect(mapStateToProps, { postUser })(SignUp);