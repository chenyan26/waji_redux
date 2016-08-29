import { combineReducers } from 'redux'
import account from './MyReducers'
import appObj from './AppReducers'

const rootReducer = combineReducers({
  account,
  appObj
})

export default rootReducer
