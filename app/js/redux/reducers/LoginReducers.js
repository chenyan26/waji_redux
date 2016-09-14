import {
  LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE
} from '../actions/LoginActions'

  export function login(state = {loadState : {loading: false, success: false, failure: false}}, action) {
    switch (action.type) {
      case LOGIN_REQUEST:
        return Object.assign({}, state, {
          loadState: {loading: true, success: false, failure: false},
        });
      case LOGIN_SUCCESS:
        if (action.payload.state == '1'){
          return Object.assign({}, state, {
            loadState: {loading: false, success: true, failure: false},
            username: action.payload.data.username,
            nickname: action.payload.data.nickname,
          });
        } else {
          return Object.assign({}, state, {
            loadState: {loading: false, success: false, failure: false},
          });
        }
      case LOGIN_FAILURE:
        return Object.assign({}, state, {
          loadState: {loading: false, success: false, failure: true},
        });
      default:
        return state
    }
  }
