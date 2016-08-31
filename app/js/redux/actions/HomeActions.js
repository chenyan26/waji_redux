import { CALL_API } from 'redux-api-middleware';
import { normalize, Schema, arrayOf } from 'normalizr';

// import { BuyModel } from '../../models';

const Home_API = 'http://eswjdg.com/index.php?m=mmapi&c=sale&a=get_pub';

/*
 * 普通
 */
/*
export const GET_SELLS = 'GET_SELLS';
export const GET_SELLBYID = 'GET_SELLBYID';

export function getSells() {
  return { type: GET_SELLS}
}

export function getSellById(id) {
  return { type: GET_SELLBYID, id}
}
*/

/*
 * 获取 卖车信息 -------------------------------------------------------
 */
const Base_API = 'http://localhost:8080/sell';

export const GETSELLS_REQUEST = 'GETSELLS_REQUEST';
export const GETSELLS_SUCCESS = 'GETSELLS_SUCCESS';
export const GETSELLS_FAILURE = 'GETSELLS_FAILURE';

export function getSells() {
  return {
    [CALL_API]: {
      endpoint: `${Base_API}`,
      method:'POST',
      types: ['GETSELLS_REQUEST', 'GETSELLS_SUCCESS', 'GETSELLS_FAILURE'],
    }
  }
}

function getSellsRequest() {
  return {
    type: 'GETSELLS_REQUEST',
  }
}

function getSellsSuccess() {
  return {
    type: 'GETSELLS_SUCCESS',
    payload: (action, state, res) => getJSON(res)
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
      types: ['GET_BUYS_REQUEST', 'GET_BUYS_SUCCESS', 'GET_BUYS_FAILURE'],
    }
  }
}

function getBuysRequest() {
  return {
    type: 'GET_BUYS_REQUEST',
  }
}

function getBuysSuccess() {
  return {
    type: 'GET_BUYS_SUCCESS',
    payload: (action, state, res) => getJSON(res)
  }
}
