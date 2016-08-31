import { CALL_API } from 'redux-api-middleware';
// import { Schema, arrayOf, normalize } from 'normalizr';

/*
 * 普通
 */
export const SET_USERNAME = 'SET_USERNAME';
export const SET_NUMBER = 'SET_NUMBER';

export function setUsername(username) {
  return { type: SET_USERNAME, username}
}

export function setNumber(text) {
  return { type: SET_NUMBER, text}
}

/*
 * 根据 username 获取 account
 */

const Base_API = 'http://localhost:8080/account/';

export const GETACCOUNT_REQUEST = 'GETACCOUNT_REQUEST';
export const GETACCOUNT_SUCCESS = 'GETACCOUNT_SUCCESS';
export const GETACCOUNT_FAILURE = 'GETACCOUNT_FAILURE';

export function getAccount(username) {
  return {
    [CALL_API]: {
      endpoint: `${Base_API}${username}`,
      method:'POST',
      types: ['GETACCOUNT_REQUEST', 'GETACCOUNT_SUCCESS', 'GETACCOUNT_FAILURE'],
    }
  }
}

function getAccountRequest() {
  return {
    type: 'GETACCOUNT_REQUEST',
  }
}

function getAccountSuccess() {
  return {
    type: 'GETACCOUNT_SUCCESS',
    payload: (action, state, res) => getJSON(res)
  }
}



