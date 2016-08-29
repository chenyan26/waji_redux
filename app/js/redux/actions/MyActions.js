/*
 * action 类型
 */
export const SET_NAME = 'SET_NAME';
export const SET_NUMBER = 'SET_NUMBER';

/*
 * action 创建函数
 */
export function setName(name) {
  return { type: SET_NAME, name}
}

export function setNumber(text) {
  return { type: SET_NUMBER, text}
}
