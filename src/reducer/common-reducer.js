/*
 * @Description: squirtle reducer
 * @Author: liuyuluan
 * @Date: 2021-03-15 19:16:22
 * @LastEditors: liuyuluan
 * @LastEditTime: 2021-03-15 23:28:54
 */

const CHANG_SQUIRTLE = 'CHANG_SQUIRTLE';
const CHANG_CHARMANDER = 'CHANG_CHARMANDER';
const CHANG_BULBASAUR = 'CHANG_BULBASAUR';

const initState = {
  squirtle: {},
  charmander: {},
  bulbasaur: {}
};

export function commonReducer (state=initState, action) {
  switch (action.type){
    case CHANG_SQUIRTLE: return { ...state, squirtle: action.payload };
    case CHANG_CHARMANDER: return {...state, charmander: action.payload};
    case CHANG_BULBASAUR: return {...state, bulbasaur: action.payload};
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

/**
 * @description: 改变charmander值
 * @param {Object} payload
 */
 export function changeCharmander (payload) {
  return {
    type: CHANG_CHARMANDER,
    payload
  }
}

/**
 * @description: 改变bulbasaur值
 * @param {Object} payload
 */
 export function changeBulbasaur (payload) {
  return {
    type: CHANG_BULBASAUR,
    payload
  }
}