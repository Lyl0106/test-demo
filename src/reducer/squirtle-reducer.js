/*
 * @Description: squirtle reducer
 * @Author: liuyuluan
 * @Date: 2021-03-15 19:16:22
 * @LastEditors: liuyuluan
 * @LastEditTime: 2021-03-15 21:24:55
 */

const CHANG_SQUIRTLE = 'CHANG_SQUIRTLE';

const initState = {
  squirtle: {}
};

export function squirtleReducer (state=initState, action) {
  switch (action.type){
    case CHANG_SQUIRTLE: return { ...state, squirtle: action.payload };
    default: return state;
  }
}

/**
 * @description: 改变squirtle值
 * @param {Object} payload
 */
export function changeSquirtle (payload) {
    return {
        type: CHANG_SQUIRTLE,
        payload
    }
}