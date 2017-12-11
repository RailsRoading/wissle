import UserApi from 'api/UserApi'
import TagApi from 'api/TagApi'

import * as ActionTypes from 'actions/ActionTypes'
import { beginAjaxCall, ajaxCallError } from 'actions/ajaxStatusActions'

/**
 * ActionCreators to handle state mutation
 */
export function createUserSuccess(user) { return { type: ActionTypes.CREATE_USER_SUCCESS, user } }
export function getTagsSuccess(tags) { return { type: ActionTypes.GET_TAGS_SUCCESS, tags } }

/**
 * ActionCreators to handle API interaction
 */
export function saveUser(user) {
  return function(dispatch, getState) {
    dispatch(beginAjaxCall())
    return UserApi.saveUser(user).then((user) => {
      dispatch(createUserSuccess(user))
    }).catch((error) => {
      dispatch(ajaxCallError(error))
      throw(error)
    })
  }
}

export function getTags() {
  return function(dispatch, getState) {
    dispatch(beginAjaxCall())
    return TagApi.getTags(getState).then((tags) => {
      dispatch(getTagsSuccess(tags))
    }).catch((error) => {
      dispatch(ajaxCallError(error))
      throw(error)
    })
  }
}
