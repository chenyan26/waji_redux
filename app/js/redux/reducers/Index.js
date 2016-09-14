import { combineReducers } from 'redux'
import account from './MyReducers'
import appObj from './AppReducers'
import { sells, buys, leases, rents, recruits, applys } from './HomeReducers'
import { friends, worlds } from './CircleReducers'
import { login } from './LoginReducers'
import { detail } from './DetailReducers'
import { routerReducer as routing } from 'react-router-redux'

const rootReducer = combineReducers({
  account,
  appObj,

  sells,
  buys,
  leases,
  rents,

  recruits,
  applys,

  friends,
  worlds,

  detail,
  login,
  routing
});

export default rootReducer
