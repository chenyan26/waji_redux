import { combineReducers } from 'redux'
import account from './MyReducers'
import appObj from './AppReducers'
import { routerReducer as routing } from 'react-router-redux'

const rootReducer = combineReducers({
  account,
  appObj,
  routing
});

export default rootReducer
