import {
  SET_BUY_ITEM,
  GETSELLS_REQUEST, GETSELLS_SUCCESS,
  GET_BUYS_REQUEST, GET_BUYS_SUCCESS, GET_BUYS_FAILURE,
} from '../actions/HomeActions'

// const initialState =
// {
//   username: '',
//   nickname: '',
//   logined: false,
//   ks:'dede'
// };

  export function sells(state = {}, action) {
    switch (action.type) {
      case GETSELLS_REQUEST:
        return Object.assign({}, state, { ks: "开始了!!!" });
      case GETSELLS_SUCCESS:
        return Object.assign({}, state, {
          ks: "成功了!!!",
          lr: action.payload
        });
      default:
        return state
    }
  }

  export function buys(state = {
    loadState : {loading: false, success: false, failure: false},
  }, action) {
    switch (action.type) {
      case SET_BUY_ITEM:
        return Object.assign({}, state, {
          buyItem: action.item,
        });
      case GET_BUYS_REQUEST:
        return Object.assign({}, state, {
          loadState: {loading: true, success: false, failure: false},
        });
      case GET_BUYS_SUCCESS:
        return Object.assign({}, state, {
          loadState: {loading: false, success: true, failure: false},
          buyArray: action.payload
        });
      case GET_BUYS_FAILURE:
        return Object.assign({}, state, {
          loadState: {loading: false, success: false, failure: true},
        });
      default:
        return state
    }
  }
