/*
 * @Description: 
 * @Author: liuyuluan
 * @Date: 2021-03-15 20:54:38
 * @LastEditors: liuyuluan
 * @LastEditTime: 2021-03-15 21:21:49
 */
import thunk from 'redux-thunk';
import {createStore, applyMiddleware, compose} from 'redux';

import reducers from "../reducer";

const reduxDevTools = window.devToolsExtension ? window.devToolsExtension() : f => f;
const store = createStore(reducers, compose(
  applyMiddleware(thunk),
  reduxDevTools
));

export default store;