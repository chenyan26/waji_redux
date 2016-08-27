import { HIDE_TABBAR, SET_NAV_TITLE, HIDE_NAV_LEFT } from '../actions/AppActions'

const initialState =
  {
    isHideTabbar: false,
    navTitle: '挖挖社交',
    isHideNavLeft: true
  }

function appObj(state = initialState, action) {
  switch (action.type) {
    case HIDE_TABBAR:
    return Object.assign({}, appObj, {
      isHideTabbar: action.bool
    })
  case SET_NAV_TITLE:
    return Object.assign({}, appObj, {
      navTitle: action.title
    })
  case SET_NAV_TITLE:
    return Object.assign({}, appObj, {
      isHideNavLeft: action.bool
    })
    default:
      return state
  }
}

export default appObj
