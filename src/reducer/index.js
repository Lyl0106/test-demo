/*
 * @Description: reducer集合
 * @Author: liuyuluan
 * @Date: 2021-03-15 18:32:02
 * @LastEditors: liuyuluan
 * @LastEditTime: 2021-03-15 23:29:18
 */
import {combineReducers} from 'redux';
import { commonReducer as common } from './common-reducer';

export default combineReducers({ common })