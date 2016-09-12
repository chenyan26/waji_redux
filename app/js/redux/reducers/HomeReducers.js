import {
  GET_SELLS_REQUEST, GET_SELLS_SUCCESS, GET_SELLS_FAILURE,
  GET_BUYS_REQUEST, GET_BUYS_SUCCESS, GET_BUYS_FAILURE,
  GET_RENTS_REQUEST, GET_RENTS_SUCCESS, GET_RENTS_FAILURE,
  GET_LEASES_REQUEST, GET_LEASES_SUCCESS, GET_LEASES_FAILURE,
  GET_RECRUITS_REQUEST, GET_RECRUITS_SUCCESS, GET_RECRUITS_FAILURE,
  GET_APPLYS_REQUEST, GET_APPLYS_SUCCESS, GET_APPLYS_FAILURE
} from '../actions/HomeActions'

// const initialState =
// {
//   username: '',
//   nickname: '',
//   logined: false,
//   ks:'dede'
// };

  export function buys(state = {
    loadState : {loading: false, success: false, failure: false},
  }, action) {
    switch (action.type) {
      // case SET_BUY_ITEM:
      //   return Object.assign({}, state, {
      //     buyItem: action.item,
      //   });
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

export function sells(state = {
  loadState : {loading: false, success: false, failure: false},
}, action) {
  switch (action.type) {
    case GET_SELLS_REQUEST:
      return Object.assign({}, state, {
        loadState: {loading: true, success: false, failure: false},
      });
    case GET_SELLS_SUCCESS:
      return Object.assign({}, state, {
        loadState: {loading: false, success: true, failure: false},
        sellArray: action.payload
      });
    case GET_SELLS_FAILURE:
      return Object.assign({}, state, {
        loadState: {loading: false, success: false, failure: true},
      });
    default:
      return state
  }
}

export function rents(state = {
  loadState : {loading: false, success: false, failure: false},
}, action) {
  switch (action.type) {
    case GET_RENTS_REQUEST:
      return Object.assign({}, state, {
        loadState: {loading: true, success: false, failure: false},
      });
    case GET_RENTS_SUCCESS:
      return Object.assign({}, state, {
        loadState: {loading: false, success: true, failure: false},
        rentArray: action.payload
      });
    case GET_RENTS_FAILURE:
      return Object.assign({}, state, {
        loadState: {loading: false, success: false, failure: true},
      });
    default:
      return state
  }
}

export function leases(state = {
  loadState : {loading: false, success: false, failure: false},
}, action) {
  switch (action.type) {
    case GET_LEASES_REQUEST:
      return Object.assign({}, state, {
        loadState: {loading: true, success: false, failure: false},
      });
    case GET_LEASES_SUCCESS:
      return Object.assign({}, state, {
        loadState: {loading: false, success: true, failure: false},
        leaseArray: action.payload
      });
    case GET_LEASES_FAILURE:
      return Object.assign({}, state, {
        loadState: {loading: false, success: false, failure: true},
      });
    default:
      return state
  }
}

export function recruits(state = {
  loadState : {loading: false, success: false, failure: false},
}, action) {
  switch (action.type) {
    case GET_RECRUITS_REQUEST:
      return Object.assign({}, state, {
        loadState: {loading: true, success: false, failure: false},
      });
    case GET_RECRUITS_SUCCESS:
      return Object.assign({}, state, {
        loadState: {loading: false, success: true, failure: false},
        recruitArray: action.payload
      });
    case GET_RECRUITS_FAILURE:
      return Object.assign({}, state, {
        loadState: {loading: false, success: false, failure: true},
      });
    default:
      return state
  }
}

export function applys(state = {
  loadState : {loading: false, success: false, failure: false},
}, action) {
  switch (action.type) {
    case GET_APPLYS_REQUEST:
      return Object.assign({}, state, {
        loadState: {loading: true, success: false, failure: false},
      });
    case GET_APPLYS_SUCCESS:
      return Object.assign({}, state, {
        loadState: {loading: false, success: true, failure: false},
        applyArray: action.payload
      });
    case GET_APPLYS_FAILURE:
      return Object.assign({}, state, {
        loadState: {loading: false, success: false, failure: true},
      });
    default:
      return state
  }
}
