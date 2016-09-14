import { CALL_API } from 'redux-api-middleware';
// import { normalize, Schema, arrayOf } from 'normalizr';
/*
export const SET_BUY_ITEM = 'SET_BUY_ITEM';
export function setBuyItem(item) {
  return { type: SET_BUY_ITEM, item}
}

export const SET_SELL_ITEM = 'SET_SELL_ITEM';
export function setSellItem(item) {
  return { type: SET_SELL_ITEM, item}
}
*/
//////////////////////////////////////////////////////////////////////
const Home_API = 'http://eswjdg.com/index.php?m=mmapi&c=sale&a=get_pub';

//很多浏览器不支持:set()
/*
 * 获取 买车 -------------------------------------------------------
 */
export const GET_BUYS_REQUEST = 'GET_BUYS_REQUEST';
export const GET_BUYS_SUCCESS = 'GET_BUYS_SUCCESS';
export const GET_BUYS_FAILURE = 'GET_BUYS_FAILURE';

export function getBuys() {
  var formData = new FormData();
  formData.append("address", "省市");
  formData.append("brand", "品牌");
  formData.append("cartype","");
  formData.append("catid", 13); //买车
  formData.append("pagenow", 1);
  formData.append("price", "价格");
  return {
    [CALL_API]: {
      endpoint: `${Home_API}`,
      method:'POST',
      body:formData,
      types: [
        {type :'GET_BUYS_REQUEST'},
        {type :'GET_BUYS_SUCCESS', payload: (action, state, res) => res.json()},
        {type :'GET_BUYS_FAILURE'}
      ]
    }
  }
}

/*
 * 获取 卖车 -------------------------------------------------------
 */
// const Base_API = 'http://localhost:8080/sell';

export const GET_SELLS_REQUEST = 'GET_SELLS_REQUEST';
export const GET_SELLS_SUCCESS = 'GET_SELLS_SUCCESS';
export const GET_SELLS_FAILURE = 'GET_SELLS_FAILURE';

export function getSells() {
  var formData = new FormData();
  formData.append("address", "省市");
  formData.append("brand", "品牌");
  formData.append("cartype","");
  formData.append("catid", 9);
  formData.append("pagenow", 1);
  formData.append("price", "价格");
  return {
    [CALL_API]: {
      endpoint: `${Home_API}`,
      method:'POST',
      body:formData,
      types: [
        {type :'GET_SELLS_REQUEST'},
        {type :'GET_SELLS_SUCCESS', payload: (action, state, res) => res.json()},
        'GET_SELLS_FAILURE'
      ]
    }
  }
}

/*
 * 获取 求租 Rent -------------------------------------------------------
 */
export const GET_RENTS_REQUEST = 'GET_RENTS_REQUEST';
export const GET_RENTS_SUCCESS = 'GET_RENTS_SUCCESS';
export const GET_RENTS_FAILURE = 'GET_RENTS_FAILURE';

export function getRents() {
  var formData = new FormData();
  formData.append("address", "省市");
  formData.append("brand", "品牌");
  formData.append("cartype","");
  formData.append("catid", 14);
  formData.append("pagenow", 1);
  formData.append("price", "价格");
  return {
    [CALL_API]: {
      endpoint: `${Home_API}`,
      method:'POST',
      body:formData,
      types: [
        {type :'GET_RENTS_REQUEST'},
        {type :'GET_RENTS_SUCCESS', payload: (action, state, res) => res.json()},
        {type :'GET_RENTS_FAILURE'}
      ]
    }
  }
}

/*
 * 获取 出租 Lease -------------------------------------------------------
 */
export const GET_LEASES_REQUEST = 'GET_LEASES_REQUEST';
export const GET_LEASES_SUCCESS = 'GET_LEASES_SUCCESS';
export const GET_LEASES_FAILURE = 'GET_LEASES_FAILURE';

export function getLeases() {
  var formData = new FormData();
  formData.append("address", "省市");
  formData.append("brand", "品牌");
  formData.append("cartype","");
  formData.append("catid", 12);
  formData.append("pagenow", 1);
  formData.append("price", "价格");
  return {
    [CALL_API]: {
      endpoint: `${Home_API}`,
      method:'POST',
      body:formData,
      types: [
        {type :'GET_LEASES_REQUEST'},
        {type :'GET_LEASES_SUCCESS', payload: (action, state, res) => res.json()},
        {type :'GET_LEASES_FAILURE'}
      ]
    }
  }
}

/*
 * 获取 招聘 Recruit -------------------------------------------------------
 */
export const GET_RECRUITS_REQUEST = 'GET_RECRUITS_REQUEST';
export const GET_RECRUITS_SUCCESS = 'GET_RECRUITS_SUCCESS';
export const GET_RECRUITS_FAILURE = 'GET_RECRUITS_FAILURE';

export function getRecruits() {
  return {
    [CALL_API]: {
      endpoint: 'http://eswjdg.com/index.php?m=mmapi&c=sale&a=get_zparc',
      method:'POST',
      types: [
        {type :'GET_RECRUITS_REQUEST'},
        {type :'GET_RECRUITS_SUCCESS', payload: (action, state, res) => res.json()},
        {type :'GET_RECRUITS_FAILURE'}
      ]
    }
  }
}

/*
 * 获取 求职 Apply -------------------------------------------------------
 */
export const GET_APPLYS_REQUEST = 'GET_APPLYS_REQUEST';
export const GET_APPLYS_SUCCESS = 'GET_APPLYS_SUCCESS';
export const GET_APPLYS_FAILURE = 'GET_APPLYS_FAILURE';

export function getApplys() {
  return {
    [CALL_API]: {
      endpoint: 'http://eswjdg.com/index.php?m=mmapi&c=sale&a=get_yp',
      method:'POST',
      types: [
        {type :'GET_APPLYS_REQUEST'},
        {type :'GET_APPLYS_SUCCESS', payload: (action, state, res) => res.json()},
        {type :'GET_APPLYS_FAILURE'}
      ]
    }
  }
}
