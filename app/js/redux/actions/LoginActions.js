import { CALL_API } from 'redux-api-middleware';

/*
 * 登录 -------------------------------------------------------
 */
export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';

export function login(username, password) {

  var loginFormData = new FormData();
  loginFormData.append("username", username);
  loginFormData.append("password", password);

  return {
    [CALL_API]: {
      endpoint:'http://eswjdg.com/index.php?m=mmapi&c=member&a=login',
      method:'POST',
      body:loginFormData,
      types: [
        {type :'LOGIN_REQUEST'},
        {type :'LOGIN_SUCCESS', payload: (action, state, res) => res.json()},
        {type :'LOGIN_FAILURE'}
      ]
    }
  }
}
