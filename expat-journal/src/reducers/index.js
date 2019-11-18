import {
    SIGNUP_USER_START,
    SIGNUP_USER_SUCCESS,
    SIGNUP_USER_FAILURE,
    LOGIN_USER_START,
    LOGIN_USER_SUCCESS,
    LOGIN_USER_FAILURE,
    FETCHING_TRIPS_START,
    FETCHING_TRIPS_SUCCESS,
    FETCHING_TRIPS_FAILURE,
    POSTING_TRIP_START,
    POSTING_TRIP_SUCCESS,
    POSTING_TRIP_FAILURE,
    DELETING_TRIP_START,
    DELETING_TRIP_SUCCESS,
    DELETING_TRIP_FAILURE,
    UPDATING_TRIP_START,
    UPDATING_TRIP_SUCCESS,
    UPDATING_TRIP_FAILURE
  } from '../actions';
  
  const initialState = {
    userId: null,
    trips: [],
    error: '',
    isFetching: false
  };
  
  const reducer = (state = initialState, action) => {
    switch (action.type) {
        case SIGNUP_USER_START:
            return {
                ...state,
                isFetching: true,
                error: ''
            }
        case SIGNUP_USER_SUCCESS:
            return {
                ...state,
                isFetching: false,
                userId: action.payload
            }
        case SIGNUP_USER_FAILURE:
            return {
                ...state,
                isFetching: false,
                error: `Error: Unable to create user: ${action.payload}`
            }
        case LOGIN_USER_START:
            return {
                ...state,
                isFetching: true,
                error: ''
            }
        case LOGIN_USER_SUCCESS:
            return {
                ...state,
                isFetching: true,
                userId: action.payload
            }
        case LOGIN_USER_FAILURE:
            return {
                ...state,
                isFetching: true,
                error: `Error: Unable to load user: ${action.payload}`
            }
        case FETCHING_TRIPS_START:
            return {
                ...state,
                isFetching: true,
                error: ''
            }
        case FETCHING_TRIPS_SUCCESS:
            return {
            ...state,
            error: '',
            isFetching: false,
            trips: action.payload
            };
        case FETCHING_TRIPS_FAILURE:
            return {
            ...state,
            error: `Error: Unable to load trips: ${action.payload}`,
            isFetching: false
            };
        case POSTING_TRIP_START:
            return {
            ...state,
            isFetching: true,
            error: ''
            };
        case POSTING_TRIP_SUCCESS:
            return {
            ...state,
            trips: action.payload,
            isFetching: false,
            error: ''
            };
        case POSTING_TRIP_FAILURE:
            return {
            ...state,
            isFetching: false,
            error: `Error: Unable to add trip: ${action.payload}`
            };
        case DELETING_TRIP_START:
            return {
            ...state,
            isFetching: true,
            error: ''
            }
        case DELETING_TRIP_SUCCESS:
            return {
            ...state,
            isFetching: false,
            error: '' 
            }
        case DELETING_TRIP_FAILURE:
            return {
            ...state,
            isFetching: false,
            error: `Error: Unable to delete trip: ${action.payload}` 
            }
        case UPDATING_TRIP_START:
            return {
                ...state,
                isFetching: true,
                error: ''
            }
        case UPDATING_TRIP_SUCCESS:
            return {
                ...state,
                isFetching: false,
                trips: state.trips.map(trip => {
                    if (trip.tripId === action.payload.tripId) {
                        return action.payload
                    }
                    return trip;
                })
            }
        case UPDATING_TRIP_FAILURE:
            return {
                ...state,
                isFetching: false,
                error: `Error: Unable to update trip: ${action.payload}`
            }
    
        default:
            return state;
    }
  };
  
  export default reducer;