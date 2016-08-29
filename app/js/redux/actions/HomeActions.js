/*
 * action 类型
 */
export const GET_SELLS = 'GET_SELLS';
export const GET_SELLBYID = 'GET_SELLBYID';

/*
 * action 创建函数
 */
export function getSells() {
  return { type: GET_SELLS}
}

export function getSellById(id) {
  return { type: GET_SELLBYID, id}
}
