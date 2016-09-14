import {
  GET_CAR_BY_ID_REQUEST, GET_CAR_BY_ID_SUCCESS, GET_CAR_BY_ID_FAILURE,
  GET_RECRUIT_BY_ID_REQUEST, GET_RECRUIT_BY_ID_SUCCESS, GET_RECRUIT_BY_ID_FAILURE,
  GET_APPLY_BY_ID_REQUEST, GET_APPLY_BY_ID_SUCCESS, GET_APPLY_BY_ID_FAILURE,

  GET_CIRCLE_CAR_BY_ID_REQUEST, GET_CIRCLE_CAR_BY_ID_SUCCESS, GET_CIRCLE_CAR_BY_ID_FAILURE,
  GET_CIRCLE_RECRUIT_BY_ID_REQUEST, GET_CIRCLE_RECRUIT_BY_ID_SUCCESS, GET_CIRCLE_RECRUIT_BY_ID_FAILURE,
  GET_CIRCLE_APPLY_BY_ID_REQUEST, GET_CIRCLE_APPLY_BY_ID_SUCCESS, GET_CIRCLE_APPLY_BY_ID_FAILURE
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

      case GET_RECRUIT_BY_ID_REQUEST:
        return Object.assign({}, state, {
          loadState: {loading: true, success: false, failure: false},
        });
      case GET_RECRUIT_BY_ID_SUCCESS:
        return Object.assign({}, state, {
          loadState: {loading: false, success: true, failure: false},
          detailObj: action.payload
        });
      case GET_RECRUIT_BY_ID_FAILURE:
        return Object.assign({}, state, {
          loadState: {loading: false, success: false, failure: true},
        });

      case GET_APPLY_BY_ID_REQUEST:
        return Object.assign({}, state, {
          loadState: {loading: true, success: false, failure: false},
        });
      case GET_APPLY_BY_ID_SUCCESS:
        return Object.assign({}, state, {
          loadState: {loading: false, success: true, failure: false},
          detailObj: action.payload
        });
      case GET_APPLY_BY_ID_FAILURE:
        return Object.assign({}, state, {
          loadState: {loading: false, success: false, failure: true},
        });

      //----------------------------朋友圈  ----------------------------

      case GET_CIRCLE_CAR_BY_ID_REQUEST:
        return Object.assign({}, state, {
          loadState: {loading: true, success: false, failure: false},
        });
      case GET_CIRCLE_CAR_BY_ID_SUCCESS:
        if (action.payload.state == '1') {
          return Object.assign({}, state, {
            loadState: {loading: false, success: true, failure: false},
            detailObj: action.payload
          });
        }else {
          return Object.assign({}, state, {
            loadState: {loading: false, success: false, failure: true},
          });
        }
      case GET_CIRCLE_CAR_BY_ID_FAILURE:
        return Object.assign({}, state, {
          loadState: {loading: false, success: false, failure: true},
        });

      case GET_CIRCLE_RECRUIT_BY_ID_REQUEST:
        return Object.assign({}, state, {
          loadState: {loading: true, success: false, failure: false},
        });
      case GET_CIRCLE_RECRUIT_BY_ID_SUCCESS:
        if (action.payload.state == '1') {
          return Object.assign({}, state, {
            loadState: {loading: false, success: true, failure: false},
            detailObj: action.payload
          });
        }else {
          return Object.assign({}, state, {
            loadState: {loading: false, success: false, failure: true},
          });
        }
      case GET_CIRCLE_RECRUIT_BY_ID_FAILURE:
        return Object.assign({}, state, {
          loadState: {loading: false, success: false, failure: true},
        });

      case GET_CIRCLE_APPLY_BY_ID_REQUEST:
        return Object.assign({}, state, {
          loadState: {loading: true, success: false, failure: false},
        });
      case GET_CIRCLE_APPLY_BY_ID_SUCCESS:
        if (action.payload.state == '1') {
          return Object.assign({}, state, {
            loadState: {loading: false, success: true, failure: false},
            detailObj: action.payload
          });
        }else {
          return Object.assign({}, state, {
            loadState: {loading: false, success: false, failure: true},
          });
        }
      case GET_CIRCLE_APPLY_BY_ID_FAILURE:
        return Object.assign({}, state, {
          loadState: {loading: false, success: false, failure: true},
        });

      default:
        return state
    }
  }
