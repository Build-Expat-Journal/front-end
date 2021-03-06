import axios from 'axios'
import { axiosWithAuth } from '../utils/axiosWithAuth';

// sign up actions
export const SIGNUP_USER_START = 'SIGNUP_USER_START'
export const SIGNUP_USER_SUCCESS = 'SIGNUP_USER_SUCCESS'
export const SIGNUP_USER_FAILURE = 'SIGNUP_USER_FAILURE'
export const postUser = (credentials, history) => dispatch => {
    dispatch({ type: SIGNUP_USER_START})
    axios
        .post('https://bw-expat-journal-ls.herokuapp.com/api/users/register', credentials)
        .then(res => {
            console.log(res)
            dispatch({ type: SIGNUP_USER_SUCCESS, payload: res.data})
        })
        .catch(err => {
            console.log(`unable to register user data: ${err.message}`)
            dispatch({ type: SIGNUP_USER_FAILURE, payload: err.message})
        })
};


// login actions
export const LOGIN_USER_START = 'LOGIN_USER_START'
export const LOGIN_USER_SUCCESS = 'LOGIN_USER_SUCCESS'
export const LOGIN_USER_FAILURE = 'LOGIN_USER_FAILURE'
export const userLogin = (credentials, history) => dispatch => {
    dispatch({ type: LOGIN_USER_START})
    axiosWithAuth()
        .post('/users/login', credentials)
        .then(res => {
            console.log(res)
            localStorage.setItem('token', res.data.token)
            dispatch({ type: LOGIN_USER_SUCCESS, payload: res.data})
        })
        .catch(err => {
            console.log(`unable to load user data: ${err}`)
            dispatch({ type: LOGIN_USER_FAILURE, payload: err})
        })
};

// get trips actions
export const FETCHING_TRIPS_START = 'FETCHING_TRIPS_START'
export const FETCHING_TRIPS_SUCCESS = 'FETCHING_TRIPS_SUCCESS'
export const FETCHING_TRIPS_FAILURE = 'FETCHING_TRIPS_FAILURE'
export const fetchTrips = (tripId) => dispatch => {
    dispatch({ type: FETCHING_TRIPS_START})
    axiosWithAuth()
        .get(`/trips/${tripId}`)
        .then(res => {
            console.log(res)
            dispatch({ type: FETCHING_TRIPS_SUCCESS, payload: res.data})
        })
        .catch(err => {
            console.log(`unable to load trips data: ${err}`)
            dispatch({ type: FETCHING_TRIPS_FAILURE, payload: err})
        })
};

// post trip actions
export const POSTING_TRIP_START = 'POSTING_TRIP_START'
export const POSTING_TRIP_SUCCESS = 'POSTING_TRIP_SUCCESS'
export const POSTING_TRIP_FAILURE = 'POSTING_TRIP_FAILURE'

export const addTrip = newTrip => dispatch => {
    dispatch({ type: POSTING_TRIP_START });
    axiosWithAuth()
      .post('/trips', newTrip)
      .then(res => {
          console.log('new trip res', res)
        dispatch({ type:  POSTING_TRIP_SUCCESS, payload: res.data });
      })
      .catch(err => {
        dispatch({ type: POSTING_TRIP_FAILURE, payload: err });
      });
  };


//post photo actions 
export const POSTING_PHOTO_START = 'POSTING_PHOTO_START'
export const POSTING_PHOTO_SUCCESS = 'POSTING_PHOTO_SUCCESS'
export const POSTING_PHOTO_FAILURE = 'POSTING_PHOTO_FAILURE'

export const addPhoto = newPhoto => dispatch => {
    dispatch({ type: POSTING_TRIP_START });
    axiosWithAuth()
      .post('/photos', newPhoto)
      .then(res => {
          console.log('new photo res', res)
        dispatch({ type:  POSTING_PHOTO_SUCCESS, payload: res.data });
      })
      .catch(err => {
        dispatch({ type: POSTING_PHOTO_FAILURE, payload: err });
      });
  };

// delete trip actions
export const DELETING_TRIP_START = 'DELETING_TRIP_START'
export const DELETING_TRIP_SUCCESS = 'DELETING_TRIP_SUCCESS'
export const DELETING_TRIP_FAILURE = 'DELETING_TRIP_FAILURE'
export const deleteTrip = (tripId) => dispatch => {
    dispatch({ type: DELETING_TRIP_START})
    axiosWithAuth()
        .delete(`/trips/${tripId}`)
        .then(res => {
            console.log(res)
            dispatch({ type: DELETING_TRIP_SUCCESS, payload: res.data})
        })
        .catch(err => {
            console.log(`unable to delete trip data: ${err}`)
            dispatch({ type: DELETING_TRIP_FAILURE, payload: err})
        })
};

// update trip actions
export const UPDATING_TRIP_START = 'UPDATING_TRIP_START'
export const UPDATING_TRIP_SUCCESS = 'UPDATING_TRIP_SUCCESS'
export const UPDATING_TRIP_FAILURE = 'UPDATING_TRIP_FAILURE'
export const editTrip = (updatedTrip, tripId) => dispatch => {
    dispatch({ type: UPDATING_TRIP_START})
    axiosWithAuth()
        .put(`/trips/${tripId}`, updatedTrip)
        .then(res => {
            console.log(res)
            dispatch({ type: UPDATING_TRIP_SUCCESS, payload: updatedTrip})
        })
        .catch(err => {
            console.log(`unable to update trip data: ${err}`)
            dispatch({ type: UPDATING_TRIP_FAILURE, payload: err})
        })
};