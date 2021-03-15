/*
 * @Description: charmander reducer
 * @Author: liuyuluan
 * @Date: 2021-03-15 19:16:22
 * @LastEditors: liuyuluan
 * @LastEditTime: 2021-03-15 21:01:35
 */

const CHANG_CHARMANDER = 'CHANG_CHARMANDER';

const initState = {
  charmander: {}
};

export function charmanderReducer(state=initState, action){
  switch (action.type){
    case CHANG_CHARMANDER: return {...state, charmander: action.payload};
    default: return state;
  }
}

/**
 * @description: 改变charmander值
 * @param {Object} charmander
 */
export function changeCharmander (charmander) {
  return {
    type: CHANG_CHARMANDER,
    payload: charmander
  }
}