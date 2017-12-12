import * as ActionTypes from './ActionTypes'

export function beginAjaxCall() {
  return {
    type: ActionTypes.BEGIN_AJAX_CALL,
  }
}

export function ajaxCallError(error) {
  return {
    type: ActionTypes.AJAX_CALL_ERROR,
    error,
  }
}
