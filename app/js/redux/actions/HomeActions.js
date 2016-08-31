import { CALL_API } from 'redux-api-middleware';
// import { normalize, Schema, arrayOf } from 'normalizr';

const Home_API = 'http://eswjdg.com/index.php?m=mmapi&c=sale&a=get_pub';

/*
 * 普通
 */

export const SET_BUY_ITEM = 'SET_BUY_ITEM';
/*
export const GET_SELLBYID = 'GET_SELLBYID';

export function getSells() {
  return { type: GET_SELLS}
}
*/
export function setBuyItem(item) {
  return { type: SET_BUY_ITEM, item}
}

/*
 * 获取 卖车信息 -------------------------------------------------------
 */
const Base_API = 'http://localhost:8080/sell';

export const GET_SELLS_REQUEST = 'GET_SELLS_REQUEST';
export const GET_SELLS_SUCCESS = 'GET_SELLS_SUCCESS';
export const GET_SELLS_FAILURE = 'GET_SELLS_FAILURE';

export function getSells() {
  return {
    [CALL_API]: {
      endpoint: `${Base_API}`,
      method:'POST',
      types: [
        {type :'GET_SELLS_REQUEST'},
        {type :'GET_SELLS_SUCCESS', payload: (action, state, res) => res.json()},
        'GET_SELLS_FAILURE'
      ]
    }
  }
}

/*
 * 获取 买车信息 -------------------------------------------------------
 */
export const GET_BUYS_REQUEST = 'GET_BUYS_REQUEST';
export const GET_BUYS_SUCCESS = 'GET_BUYS_SUCCESS';
export const GET_BUYS_FAILURE = 'GET_BUYS_FAILURE';

var buyFormData = new FormData();
buyFormData.append("address", "省市");
buyFormData.append("brand", "品牌");
buyFormData.append("cartype","");
buyFormData.append("catid", 13);
buyFormData.append("pagenow", 1);
buyFormData.append("price", "价格");

export function getBuys() {
  return {
    [CALL_API]: {
      endpoint: `${Home_API}`,
      method:'POST',
      body:buyFormData,
      types: [
        {type :'GET_BUYS_REQUEST'},
        {type :'GET_BUYS_SUCCESS', payload: (action, state, res) => res.json()},
        {type :'GET_BUYS_FAILURE'}
      ]
    }
  }
}
