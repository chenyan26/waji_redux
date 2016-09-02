import { CALL_API } from 'redux-api-middleware';
/*
 * 买车卖车出租求租 -------------------------------------------------------
 */
export const GET_CAR_BY_ID_REQUEST = 'GET_CAR_BY_ID_REQUEST';
export const GET_CAR_BY_ID_SUCCESS = 'GET_CAR_BY_ID_SUCCESS';
export const GET_CAR_BY_ID_FAILURE = 'GET_CAR_BY_ID_FAILURE';

export function getCarById(id) {
  var formData = new FormData();
  formData.append("id", id);
  return {
    [CALL_API]: {
      endpoint: 'http://eswjdg.com/index.php?m=mmapi&c=sale&a=get_pubarc',
      method:'POST',
      body:formData,
      types: [
        {type :'GET_CAR_BY_ID_REQUEST'},
        {type :'GET_CAR_BY_ID_SUCCESS', payload: (action, state, res) => res.json()},
        {type :'GET_CAR_BY_ID_FAILURE'}
      ]
    }
  }
}

/*
 * 招聘 -------------------------------------------------------
 */
export const GET_RECRUIT_BY_ID_REQUEST = 'GET_RECRUIT_BY_ID_REQUEST';
export const GET_RECRUIT_BY_ID_SUCCESS = 'GET_RECRUIT_BY_ID_SUCCESS';
export const GET_RECRUIT_BY_ID_FAILURE = 'GET_RECRUIT_BY_ID_FAILURE';

export function getRecruitById(id) {
  var formData = new FormData();
  formData.append("id", id);
  return {
    [CALL_API]: {
      endpoint: 'http://eswjdg.com/index.php?m=mmapi&c=sale&a=get_zparcone',
      method:'POST',
      body:formData,
      types: [
        {type :'GET_RECRUIT_BY_ID_REQUEST'},
        {type :'GET_RECRUIT_BY_ID_SUCCESS', payload: (action, state, res) => res.json()},
        {type :'GET_RECRUIT_BY_ID_FAILURE'}
      ]
    }
  }
}

/*
 * 求职 -------------------------------------------------------
 */
export const GET_APPLY_BY_ID_REQUEST = 'GET_APPLY_BY_ID_REQUEST';
export const GET_APPLY_BY_ID_SUCCESS = 'GET_APPLY_BY_ID_SUCCESS';
export const GET_APPLY_BY_ID_FAILURE = 'GET_APPLY_BY_ID_FAILURE';

export function getApplyById(id) {
  var formData = new FormData();
  formData.append("id", id);
  return {
    [CALL_API]: {
      endpoint: 'http://eswjdg.com/index.php?m=mmapi&c=sale&a=get_yparc',
      method:'POST',
      body:formData,
      types: [
        {type :'GET_APPLY_BY_ID_REQUEST'},
        {type :'GET_APPLY_BY_ID_SUCCESS', payload: (action, state, res) => res.json()},
        {type :'GET_APPLY_BY_ID_FAILURE'}
      ]
    }
  }
}
