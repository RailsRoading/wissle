import * as ActionTypes from '../actions/ActionTypes'

function UserReducer(state = {}, action) {
  switch (action.type) {
    case ActionTypes.CREATE_USER_SUCCESS:
      return {
        ...state,
        ...action.user,
      }
  default:
    return state
  }
}

export default UserReducer
