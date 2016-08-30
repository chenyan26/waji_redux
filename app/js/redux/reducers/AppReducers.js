import { HIDE_TABBAR, SET_NAV_TITLE, HIDE_NAV_LEFT, SET_NAV_BACK_LINK } from '../actions/AppActions';

const initialState =
  {
    isHideTabbar: false,
    navTitle: '挖挖社交',
    isHideNavLeft: true,
    navBackLink: '/',
  };

function appObj(state = initialState, action) {
  switch (action.type) {
    case HIDE_TABBAR:
    return Object.assign({}, state, {isHideTabbar: action.bool});
  case SET_NAV_TITLE:
    return Object.assign({}, state, {navTitle: action.title});
  case HIDE_NAV_LEFT:
    return Object.assign({}, state, {isHideNavLeft: action.bool});
  case SET_NAV_BACK_LINK:
    return Object.assign({}, state, {navBackLink: action.link});

    default:
      return state
  }
}

export default appObj
