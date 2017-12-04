import * as ActionTypes from 'actions/ActionTypes'
import * as Constants from 'actions/Constants'

const initialState = {
  location: {
    enabled: false,
    latitude: 0,
    longitude: 0,
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
 * App reducer
 * @param state
 * @param action
 * @returns {{type, id}|*}
 */
function AppReducer(state = initialState, action) {
  switch (action.type) {
    case ActionTypes.SET_LOCATION:
      return setLocation(state, action)
    default:
      return state
  }
}

export default AppReducer
