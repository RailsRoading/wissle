import * as ActionTypes from '../actions/ActionTypes'

function WissleReducer(state = [], action) {
    switch (action.type) {
        case ActionTypes.CREATE_WISSLE_SUCCESS:
            return [
                ...state,
                Object.assign({}, action.wissle),
            ];
        default:
            return state
    }
}

export default WissleReducer
