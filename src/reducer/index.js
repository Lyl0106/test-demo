/*
 * @Description: reducer集合
 * @Author: liuyuluan
 * @Date: 2021-03-15 18:32:02
 * @LastEditors: liuyuluan
 * @LastEditTime: 2021-03-15 21:26:00
 */
import {combineReducers} from 'redux';
import { squirtleReducer as squirtle } from './squirtle-reducer';
import { bulbasaurReducer as bulbasaur } from './bulbasaur-reducer';
import { charmanderReducer as charmander } from './charmander-reducer'

export default combineReducers({ squirtle, bulbasaur, charmander })