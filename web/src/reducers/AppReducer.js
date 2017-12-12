import * as ActionTypes from 'actions/ActionTypes'
import * as Constants from 'actions/Constants'

const initialState = {
  location: {
    enabled: false,
    latitude: 0,
    longitude: 0,
  },
  api: {
    error: null,
  }
}

/**
 * Set location
 */
function setLocation(state, action) {
  return {
    ...state,
    location: {
      enabled: true,
      latitude: action.data.latitude,
      longitude: action.data.longitude,
    },
  }
}

/**
 * Clear location
 */
function clearLocation(state, action) {
  return {
    ...state,
    location: {
      enabled: false,
    }
  }
}

/**
 * Set API error
 */
function setApiError(state, action) {
  console.log(action)
  return {
    ...state,
    api: {
      error: action.error,
    }
  }
}

/**
 * Clear API error
 */
function clearApiError(state, action) {
  return {
    ...state,
    api: {
      error: null,
    }
  }
}

/**
 * App reducer
 * @param state
 * @param action
 * @returns {{type, id}|*}
 */
function AppReducer(state = initialState, action) {
  switch (action.type) {
    case ActionTypes.SET_LOCATION:
      return setLocation(state, action)
    case ActionTypes.BEGIN_AJAX_CALL:
      return clearApiError(state, action)
    case ActionTypes.AJAX_CALL_ERROR:
      return setApiError(state, action)
    default:
      return state
  }
}

export default AppReducer
