import UserApi from 'api/UserApi'
import TagApi from 'api/TagApi'
import WissleApi from 'api/WissleApi'

import * as ActionTypes from 'actions/ActionTypes'
import { beginAjaxCall, ajaxCallError } from 'actions/ajaxStatusActions'

/**
 * ActionCreators to handle state mutation
 */
export function createUserSuccess(user) { return { type: ActionTypes.CREATE_USER_SUCCESS, user } }

export function createWissleSuccess(wissle) { return { type: ActionTypes.CREATE_WISSLE_SUCCESS, wissle } }

export function createTagSuccess(tag) { return { type: ActionTypes.CREATE_TAG_SUCCESS, tag } }
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
      dispatch(ajaxCallError(error.message))
    })
  }
}

export function getTags() {
  return function(dispatch, getState) {
    dispatch(beginAjaxCall())
    return TagApi.getTags(getState).then((tags) => {
      dispatch(getTagsSuccess(tags))
    }).catch((error) => {
      dispatch(ajaxCallError(error.message))
    })
  }
}

/**
 * Location actions
 *
 */
export function setLocation(data) {
  return {
    type: ActionTypes.SET_LOCATION,
    data,
  }
}

export function clearLocation() {
  return {
    type: ActionTypes.CLEAR_LOCATION,
  }
}

export function acquireLocation() {
  return function (dispatch) {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(function (position) {
        dispatch(setLocation({latitude: position.coords.latitude, longitude: position.coords.longitude}))
      })
    } else {
      dispatch(clearLocation())
    }
  }

  return {
    type: ActionTypes.ACQUIRE_LOCATION,
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

export function saveTag(tag) {
    return function (dispatch, getState) {
        dispatch(beginAjaxCall())
        return TagApi.saveTag(tag).then(tag => {
            dispatch(createTagSuccess(tag))
        }).catch(error => {
            dispatch(ajaxCallError(error))
            throw(error)
        })
    }
}
