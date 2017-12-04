import UserApi from '../api/UserApi';
import * as ActionTypes from './ActionTypes';
import {beginAjaxCall, ajaxCallError} from './ajaxStatusActions';


export function createUserSuccess(user) {
    return {type: ActionTypes.CREATE_USER_SUCCESS, user};
}

export function saveUser(user) {
    return function (dispatch, getState) {
        dispatch(beginAjaxCall());
        return UserApi.saveUser(user).then(user => {
            dispatch(createUserSuccess(user));
        }).catch(error => {
            dispatch(ajaxCallError(error));
            throw(error);
        });
    };
}
