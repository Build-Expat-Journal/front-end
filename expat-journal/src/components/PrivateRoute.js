import React from 'react'
import { connect } from 'react-redux'
import { Route, Redirect } from 'react-router-dom'

const PrivateRoute = ({ username, component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) => {
        if (localStorage.getItem('token') && username) {
          return <Component {...props}/>
        } else {
          return <Redirect to='/login' />
        }
      }}
    />
  )
}

const mapStateToProps = state => {
  return {
    username: state.username,
  }
}

export default connect(mapStateToProps, {})(PrivateRoute)