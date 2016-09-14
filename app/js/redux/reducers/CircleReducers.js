import {
  GET_FRIENDS_REQUEST, GET_FRIENDS_SUCCESS, GET_FRIENDS_FAILURE,
  GET_WORLDS_REQUEST, GET_WORLDS_SUCCESS, GET_WORLDS_FAILURE
} from '../actions/CircleActions'

  export function friends(state = {
    loadState : {loading: false, success: false, failure: false},
  }, action) {
    switch (action.type) {
      case GET_FRIENDS_REQUEST:
        return Object.assign({}, state, {
          loadState: {loading: true, success: false, failure: false},
        });
      case GET_FRIENDS_SUCCESS:
        if (action.payload.state == '1') {
          return Object.assign({}, state, {
            loadState: {loading: false, success: true, failure: false},
            array: action.payload.data,
            myInfo: action.payload.myinfo
          });
        }else {
          return Object.assign({}, state, {
            loadState: {loading: false, success: false, failure: true},
          });
        }
      case GET_FRIENDS_FAILURE:
        return Object.assign({}, state, {
          loadState: {loading: false, success: false, failure: true},
        });
      default:
        return state
    }
  }

export function worlds(state = {
  loadState : {loading: false, success: false, failure: false},
}, action) {
  switch (action.type) {
    case GET_WORLDS_REQUEST:
      return Object.assign({}, state, {
        loadState: {loading: true, success: false, failure: false},
      });
    case GET_WORLDS_SUCCESS:
      if (action.payload.state == '1') {
        return Object.assign({}, state, {
          loadState: {loading: false, success: true, failure: false},
          array: action.payload.data,
          myInfo: action.payload.myinfo
        });
      }else {
        return Object.assign({}, state, {
          loadState: {loading: false, success: false, failure: true},
        });
      }
    case GET_WORLDS_FAILURE:
      return Object.assign({}, state, {
        loadState: {loading: false, success: false, failure: true},
      });
    default:
      return state
  }
}
