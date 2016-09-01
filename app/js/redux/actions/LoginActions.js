import { CALL_API } from 'redux-api-middleware';

const Login_API = 'http://eswjdg.com/index.php?m=mmapi&c=member&a=login';

/*
 * 普通
 */
/*

 export const GET_SELLBYID = 'GET_SELLBYID';

 export function getSellById(id) {
 return { type: GET_SELLBYID, id}
 }
 */

/*
 * 登录 -------------------------------------------------------
 */
export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';

export function login(password, username) {

  var loginFormData = new FormData();
  loginFormData.append("password", password);
  loginFormData.append("username", username);

  return {
    [CALL_API]: {
      endpoint: `${Login_API}`,
      method:'POST',
      body:buyFormData,
      types: [
        {type :'LOGIN_REQUEST'},
        {type :'LOGIN_SUCCESS', payload: (action, state, res) => res.json()},
        {type :'LOGIN_FAILURE'}
      ]
    }
  }
}
