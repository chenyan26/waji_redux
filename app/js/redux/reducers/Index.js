import { combineReducers } from 'redux'
import account from './MyReducers'
import appObj from './AppReducers'
import { sells, buys } from './HomeReducers'
import { routerReducer as routing } from 'react-router-redux'

const rootReducer = combineReducers({
  account,
  appObj,
  sells,
  buys,
  routing
});

export default rootReducer
