import { GETACCOUNT_REQUEST, GETACCOUNT_SUCCESS } from '../actions/MyActions'

const initialState =
{
  username: '',
  nickname: '',
  logined: false,
  ks:'dede'
};

function account(state = initialState, action) {
  switch (action.type) {
    case GETACCOUNT_REQUEST:
      return Object.assign({}, state, { ks: "开始了!!!" });
    case GETACCOUNT_SUCCESS:
      return Object.assign({}, state, {
        ks: "成功了!!!",
        logined: true,
        username: action.payload.username,
        nickname: action.payload.nickname
      });
    default:
      return state
  }
}

export default account
