import axios from 'axios'
import { axiosWithAuth } from '../utils/axiosWithAuth';

// sign up actions
export const SIGNUP_USER_START = 'SIGNUP_USER_START'
export const SIGNUP_USER_SUCCESS = 'SIGNUP_USER_SUCCESS'
export const SIGNUP_USER_FAILURE = 'SIGNUP_USER_FAILURE'
export const postUser = (credentials, history) => dispatch => {
    dispatch({ type: SIGNUP_USER_START})
    axios
        .post('PLACEHOLDER', credentials)
        .then(res => {
            console.log(res)
            dispatch({ type: SIGNUP_USER_SUCCESS, payload: res.data})
            history.push('/PLACEHOLDER')
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
    axios
        .post('PLACEHOLDER', credentials)
        .then(res => {
            console.log(res)
            dispatch({ type: LOGIN_USER_SUCCESS, payload: res.data})
            history.push('/PLACEHOLDER')
        })
        .catch(err => {
            console.log(`unable to load user data: ${err}`)
            dispatch({ type: LOGIN_USER_FAILURE, payload: err})
        })
};

// get stories actions
export const FETCHING_STORIES_START = 'FETCHING_STORIES_START'
export const FETCHING_STORIES_SUCCESS = 'FETCHING_STORIES_SUCCESS'
export const FETCHING_STORIES_FAILURE = 'FETCHING_STORIES_FAILURE'
export const fetchStories = (userId) => dispatch => {
    dispatch({ type: FETCHING_STORIES_START})
    axiosWithAuth()
        .get(`PLACEHOLDER`)
        .then(res => {
            console.log(res)
            dispatch({ type: FETCHING_STORIES_SUCCESS, payload: res.data})
        })
        .catch(err => {
            console.log(`unable to load stories data: ${err}`)
            dispatch({ type: FETCHING_STORIES_FAILURE, payload: err})
        })
};

// post story actions
export const POSTING_STORY_START = 'POSTING_STORY_START'
export const POSTING_STORY_SUCCESS = 'POSTING_STORY_SUCCESS'
export const POSTING_STORY_FAILURE = 'POSTING_STORY_FAILURE'

export const addStory = newStory => dispatch => {
    dispatch({ type: POSTING_STORY_START });
    axios
      .post('PLACEHOLDER', newStory)
      .then(res => {
        dispatch({ type:  POSTING_STORY_SUCCESS, payload: res.data });
      })
      .catch(err => {
        dispatch({ type: POSTING_STORY_FAILURE, payload: err });
      });
  };

// delete story actions
export const DELETING_STORY_START = 'DELETING_STORY_START'
export const DELETING_STORY_SUCCESS = 'DELETING_STORY_SUCCESS'
export const DELETING_STORY_FAILURE = 'DELETING_STORY_FAILURE'
export const deleteStory = (storyId) => dispatch => {
    dispatch({ type: DELETING_STORY_START})
    axiosWithAuth()
        .post(`PLACEHOLDER`)
        .then(res => {
            console.log(res)
            dispatch({ type: DELETING_STORY_SUCCESS, payload: storyId})
        })
        .catch(err => {
            console.log(`unable to delete story data: ${err}`)
            dispatch({ type: DELETING_STORY_FAILURE, payload: err})
        })
};

// update story actions
export const UPDATING_STORY_START = 'UPDATING_STORY_START'
export const UPDATING_STORY_SUCCESS = 'UPDATING_STORY_SUCCESS'
export const UPDATING_STORY_FAILURE = 'UPDATING_STORY_FAILURE'
export const updateStory = (updatedStory, storyId) => dispatch => {
    dispatch({ type: UPDATING_STORY_START})
    axiosWithAuth()
        .put(`PLACEHOLDER`, updatedStory)
        .then(res => {
            console.log(res)
            dispatch({ type: UPDATING_STORY_SUCCESS, payload: updatedStory})
        })
        .catch(err => {
            console.log(`unable to update story data: ${err}`)
            dispatch({ type: UPDATING_STORY_FAILURE, payload: err})
        })
};