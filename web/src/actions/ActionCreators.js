import * as ActionTypes from './ActionTypes'

export function createUser(user) {
    return {type: ActionTypes.CREATE_USER_SUCCESS, user};
}
