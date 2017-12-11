import * as ActionTypes from '../actions/ActionTypes'

export default function TagReducer(state = [], action) {
  switch (action.type) {
    case ActionTypes.CREATE_TAG_SUCCESS:
      return [
        ...state,
        Object.assign({}, action.tag),
      ];
    default:
      return state
  }
}
