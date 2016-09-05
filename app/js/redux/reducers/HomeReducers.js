import {
  GET_SELLS_REQUEST, GET_SELLS_SUCCESS, GET_SELLS_FAILURE,
  GET_BUYS_REQUEST, GET_BUYS_SUCCESS, GET_BUYS_FAILURE,
  GET_RENT_REQUEST, GET_RENT_SUCCESS, GET_RENT_FAILURE,
  GET_LEASE_REQUEST, GET_LEASE_SUCCESS, GET_LEASE_FAILURE
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
    case GET_RENT_REQUEST:
      return Object.assign({}, state, {
        loadState: {loading: true, success: false, failure: false},
      });
    case GET_RENT_SUCCESS:
      return Object.assign({}, state, {
        loadState: {loading: false, success: true, failure: false},
        rentArray: action.payload
      });
    case GET_RENT_FAILURE:
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
    case GET_LEASE_REQUEST:
      return Object.assign({}, state, {
        loadState: {loading: true, success: false, failure: false},
      });
    case GET_LEASE_SUCCESS:
      return Object.assign({}, state, {
        loadState: {loading: false, success: true, failure: false},
        leaseArray: action.payload
      });
    case GET_LEASE_FAILURE:
      return Object.assign({}, state, {
        loadState: {loading: false, success: false, failure: true},
      });
    default:
      return state
  }
}
