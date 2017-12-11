import * as ActionTypes from '../actions/ActionTypes'

function TagReducer(state = {}, action) {
  switch (action.type) {
    case ActionTypes.GET_TAGS_SUCCESS:
      console.log(action)
      return {
        ...state,
        ...action.tags,
      }
  default:
    return state
  }
}

export default TagReducer
