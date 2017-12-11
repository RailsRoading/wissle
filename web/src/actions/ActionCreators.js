import UserApi from 'api/UserApi'
import WissleApi from 'api/WissleApi'
import * as ActionTypes from 'actions/ActionTypes'
import { beginAjaxCall, ajaxCallError } from 'actions/ajaxStatusActions'


export function createUserSuccess(user) {
    return { type: ActionTypes.CREATE_USER_SUCCESS, user }
}

export function createWissleSuccess(wissle) {
    return { type: ActionTypes.CREATE_WISSLE_SUCCESS, wissle }
}

export function saveUser(user) {
  return function (dispatch, getState) {
    dispatch(beginAjaxCall())
    return UserApi.saveUser(user).then(user => {
      dispatch(createUserSuccess(user))
    }).catch(error => {
      dispatch(ajaxCallError(error))
      throw(error)
    })
  }
}

export function saveWissle(wissle) {
  return function (dispatch, getState) {
    dispatch(beginAjaxCall())
    return WissleApi.saveWissle(wissle).then(wissle => {
      dispatch(createWissleSuccess(wissle))
    }).catch(error => {
      dispatch(ajaxCallError(error))
      throw(error)
    })
  }
}
