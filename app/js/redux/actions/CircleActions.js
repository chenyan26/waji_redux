import { CALL_API } from 'redux-api-middleware';
/*
 * 获取 朋友圈 -------------------------------------------------------
 */
export const GET_FRIENDS_REQUEST = 'GET_FRIENDS_REQUEST';
export const GET_FRIENDS_SUCCESS = 'GET_FRIENDS_SUCCESS';
export const GET_FRIENDS_FAILURE = 'GET_FRIENDS_FAILURE';

export function getFriends(username) {
  var formData = new FormData();
  formData.append("username", username);
  return {
    [CALL_API]: {
      endpoint: 'http://eswjdg.com/index.php?m=mmapi&c=talk&a=get_friendsq',
      method:'POST',
      body:formData,
      types: [
        {type :'GET_FRIENDS_REQUEST'},
        {type :'GET_FRIENDS_SUCCESS', payload: (action, state, res) => res.json()},
        {type :'GET_FRIENDS_FAILURE'}
      ]
    }
  }
}
/*
 * 获取 世界圈 -------------------------------------------------------
 */
export const GET_WORLDS_REQUEST = 'GET_WORLDS_REQUEST';
export const GET_WORLDS_SUCCESS = 'GET_WORLDS_SUCCESS';
export const GET_WORLDS_FAILURE = 'GET_WORLDS_FAILURE';

export function getWorlds() {
  return {
    [CALL_API]: {
      endpoint: 'http://eswjdg.com/index.php?m=mmapi&c=talk&a=get_wordsfriendq',
      method:'POST',
      types: [
        {type :'GET_WORLDS_REQUEST'},
        {type :'GET_WORLDS_SUCCESS', payload: (action, state, res) => res.json()},
        'GET_WORLDS_FAILURE'
      ]
    }
  }
}



