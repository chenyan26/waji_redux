import { GETACCOUNT_REQUEST, GETACCOUNT_SUCCESS } from '../actions/MyActions'

function test(state = {}, action) {
  switch (action.type) {
    case GETACCOUNT_REQUEST:
      return Object.assign({}, state, { ks: "开始了!!!" });
    case GETACCOUNT_SUCCESS:
      return Object.assign({}, state, { ks: "成功了!!!" ,artist: action.payload });
    default:
      return state
  }
}

export default test
