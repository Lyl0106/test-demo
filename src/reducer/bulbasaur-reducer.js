/*
 * @Description: bulbasaur reducer
 * @Author: liuyuluan
 * @Date: 2021-03-15 19:16:22
 * @LastEditors: liuyuluan
 * @LastEditTime: 2021-03-15 21:02:30
 */

const CHANG_BULBASAUR = 'CHANG_BULBASAUR';

const initState = {
  bulbasaur: {}
};

export function bulbasaurReducer(state=initState, action){
  switch (action.type){
    case CHANG_BULBASAUR: return {...state, bulbasaur: action.payload};
    default: return state;
  }
}

/**
 * @description: 改变bulbasaur值
 * @param {Object} bulbasaur
 */
export function changeBulbasaur (bulbasaur) {
  return {
    type: CHANG_BULBASAUR,
    payload: bulbasaur
  }
}
