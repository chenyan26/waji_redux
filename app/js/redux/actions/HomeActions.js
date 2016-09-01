import { CALL_API } from 'redux-api-middleware';
// import { normalize, Schema, arrayOf } from 'normalizr';

/*
 * buyItem
 */
export const SET_BUY_ITEM = 'SET_BUY_ITEM';
export function setBuyItem(item) {
  return { type: SET_BUY_ITEM, item}
}

//////////////////////////////////////////////////////////////////////
const Home_API = 'http://eswjdg.com/index.php?m=mmapi&c=sale&a=get_pub';

var formData = new FormData();
formData.append("address", "省市");
formData.append("brand", "品牌");
formData.append("cartype","");
formData.append("catid", 13); //买车
formData.append("pagenow", 1);
formData.append("price", "价格");

/*
 * 获取 买车 -------------------------------------------------------
 */
export const GET_BUYS_REQUEST = 'GET_BUYS_REQUEST';
export const GET_BUYS_SUCCESS = 'GET_BUYS_SUCCESS';
export const GET_BUYS_FAILURE = 'GET_BUYS_FAILURE';

export function getBuys() {
  formData.set("catid", 13);
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
  formData.set("catid", 9);
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
export const GET_RENT_REQUEST = 'GET_RENT_REQUEST';
export const GET_RENT_SUCCESS = 'GET_RENT_SUCCESS';
export const GET_RENT_FAILURE = 'GET_RENT_FAILURE';

export function getRents() {
  formData.set("catid", 14);
  return {
    [CALL_API]: {
      endpoint: `${Home_API}`,
      method:'POST',
      body:formData,
      types: [
        {type :'GET_RENT_REQUEST'},
        {type :'GET_RENT_SUCCESS', payload: (action, state, res) => res.json()},
        {type :'GET_RENT_FAILURE'}
      ]
    }
  }
}

/*
 * 获取 出租 Lease -------------------------------------------------------
 */
export const GET_LEASE_REQUEST = 'GET_LEASE_REQUEST';
export const GET_LEASE_SUCCESS = 'GET_LEASE_SUCCESS';
export const GET_LEASE_FAILURE = 'GET_LEASE_FAILURE';

export function getLeases() {
  formData.set("catid", 12);
  return {
    [CALL_API]: {
      endpoint: `${Home_API}`,
      method:'POST',
      body:formData,
      types: [
        {type :'GET_LEASE_REQUEST'},
        {type :'GET_LEASE_SUCCESS', payload: (action, state, res) => res.json()},
        {type :'GET_LEASE_FAILURE'}
      ]
    }
  }
}
