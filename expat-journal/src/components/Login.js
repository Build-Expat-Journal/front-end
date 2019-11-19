import React, { useState } from 'react';
import { connect } from 'react-redux';
import { userLogin } from '../actions';

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
        history.push('/trips')
    };

    return (
      <div>
        <form onSubmit={callLogin}>
            <input
                type="text"
                name="username"
                value={credentials.username}
                placeholder="username"
                onChange={handleChange}
            />
            <input
                type="password"
                name="password"
                value={credentials.password}
                placeholder="password"
                onChange={handleChange}
            />
            <button>Log in</button>
        </form>
      </div>

    )
};

const mapStateToProps = state => {
    return {
      isFetching: state.isFetching,
      error: state.error
    }
  };
  
export default connect(mapStateToProps, { userLogin })(Login);