import {
    SIGNUP_USER_START,
    SIGNUP_USER_SUCCESS,
    SIGNUP_USER_FAILURE,
    LOGIN_USER_START,
    LOGIN_USER_SUCCESS,
    LOGIN_USER_FAILURE,
    FETCHING_STORIES_START,
    FETCHING_STORIES_SUCCESS,
    FETCHING_STORIES_FAILURE,
    POSTING_STORY_START,
    POSTING_STORY_SUCCESS,
    POSTING_STORY_FAILURE,
    DELETING_STORY_START,
    DELETING_STORY_SUCCESS,
    DELETING_STORY_FAILURE,
    UPDATING_STORY_START,
    UPDATING_STORY_SUCCESS,
    UPDATING_STORY_FAILURE
  } from "../actions";
  
  const initialState = {
    userId: null,
    stories: [],
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
        case FETCHING_STORIES_START:
            return {
                ...state,
                isFetching: true,
                error: ''
            }
        case FETCHING_STORIES_SUCCESS:
            return {
            ...state,
            error: '',
            isFetching: false,
            stories: action.payload
            };
        case FETCHING_STORIES_FAILURE:
            return {
            ...state,
            error: `Error: Unable to load stories: ${action.payload}`,
            isFetching: false
            };
        case POSTING_STORY_START:
            return {
            ...state,
            isFetching: true,
            error: ''
            };
        case POSTING_STORY_SUCCESS:
            return {
            ...state,
            stories: action.payload,
            isFetching: false,
            error: ''
            };
        case POSTING_STORY_FAILURE:
            return {
            ...state,
            isFetching: false,
            error: `Error: Unable to add story: ${action.payload}`
            };
        case DELETING_STORY_START:
            return {
            ...state,
            isFetching: true,
            error: ''
            }
        case DELETING_STORY_SUCCESS:
            return {
            ...state,
            isFetching: false,
            error: '' 
            }
        case DELETING_STORY_FAILURE:
            return {
            ...state,
            isFetching: false,
            error: `Error: Unable to delete story: ${action.payload}` 
            }
        case UPDATING_STORY_START:
            return {
                ...state,
                isFetching: true,
                error: ''
            }
        case UPDATING_STORY_SUCCESS:
            return {
                ...state,
                isFetching: false,
                stories: state.stories.map(story => {
                    if (story.storyId === action.payload.storyId) {
                        return action.payload
                    }
                    return story
                })
            }
        case UPDATING_STORY_FAILURE:
            return {
                ...state,
                isFetching: false,
                error: `Error: Unable to update story: ${action.payload}`
            }
    
        default:
            return state;
    }
  };
  
  export default reducer;