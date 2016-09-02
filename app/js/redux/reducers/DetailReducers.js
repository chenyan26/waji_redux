import {
  GET_CAR_BY_ID_REQUEST, GET_CAR_BY_ID_SUCCESS, GET_CAR_BY_ID_FAILURE,
} from '../actions/DetailActions'

  export function detail(state = {
    loadState : {loading: false, success: false, failure: false},
  }, action) {
    switch (action.type) {
      case GET_CAR_BY_ID_REQUEST:
        return Object.assign({}, state, {
          loadState: {loading: true, success: false, failure: false},
        });
      case GET_CAR_BY_ID_SUCCESS:
        return Object.assign({}, state, {
          loadState: {loading: false, success: true, failure: false},
          detailObj: action.payload
        });
      case GET_CAR_BY_ID_FAILURE:
        return Object.assign({}, state, {
          loadState: {loading: false, success: false, failure: true},
        });
      default:
        return state
    }
  }
