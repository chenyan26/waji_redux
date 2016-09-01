import {
  GET_SELLS_REQUEST, GET_SELLS_SUCCESS,
  GET_BUYS_REQUEST, GET_BUYS_SUCCESS,
} from '../actions/HomeActions'

  export function sells(state = {}, action) {
    switch (action.type) {
      case GET_SELLS_REQUEST:
        return Object.assign({}, state, { ks: "开始了!!!" });
      case GET_SELLS_SUCCESS:
        return Object.assign({}, state, {
          ks: "成功了!!!",
          lr: action.payload
        });
      default:
        return state
    }
  }

  export function buys(state = {loadState : {loading: false, success: false, failure: false}}, action) {
    switch (action.type) {
      case GET_BUYS_REQUEST:
        return Object.assign({}, state, {
          loadState: {loading: true, success: false, failure: false},
        });
      case GET_BUYS_SUCCESS:
        return Object.assign({}, state, {
          loadState: {loading: false, success: true, failure: false},
          buyArray: action.payload
        });
      default:
        return state
    }
  }
