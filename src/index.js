/*
 * @Description: 根组件
 * @Author: liuyuluan
 * @Date: 2020-11-12 15:25:23
 * @LastEditors: liuyuluan
 * @LastEditTime: 2021-03-15 21:22:19
 */
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import store from './store';

import 'antd/dist/antd.css';
import App from './App';
import * as serviceWorker from './serviceWorker';


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
