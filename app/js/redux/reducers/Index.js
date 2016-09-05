import { combineReducers } from 'redux'
import account from './MyReducers'
import appObj from './AppReducers'
import { sells, buys, leases, rents } from './HomeReducers'
import { detail } from './DetailReducers'
import { routerReducer as routing } from 'react-router-redux'

const rootReducer = combineReducers({
  account,
  appObj,
  sells,
  buys,
  leases,
  rents,
  detail,
  routing
});

export default rootReducer
