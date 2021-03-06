/*
 * @Description: 调用接口
 * @Author: liuyuluan
 * @Date: 2021-03-15 20:49:58
 * @LastEditors: liuyuluan
 * @LastEditTime: 2021-03-15 23:27:08
 */

import { apis } from './apis';
import axios from 'axios';
import store from '../store/index';
import { changeSquirtle, changeBulbasaur, changeCharmander } from '../reducer/common-reducer';

/**
 * @description: 获取squirtle数据
 */
export function getSquirtleData () {
  axios.get(apis.squirtle).then(res => {
    store.dispatch(changeSquirtle(res.data || {}))
  })
}

/**
 * @description: 获取bulbasaur数据
 */
 export function getBulbasaurData () {
  axios.get(apis.bulbasaur).then(res => {
    store.dispatch(changeBulbasaur(res.data || {}))
  })
}

/**
 * @description: 获取charmander数据
 */
 export function getCharmanderData () {
  axios.get(apis.charmander).then(res => {
    store.dispatch(changeCharmander(res.data))
  })
}