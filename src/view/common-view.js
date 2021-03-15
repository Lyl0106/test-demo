/*
 * @Description: 公用展示组件
 * @Author: liuyuluan
 * @Date: 2021-03-15 23:20:43
 * @LastEditors: liuyuluan
 * @LastEditTime: 2021-03-15 23:22:50
 */
import React from 'react';

function CommonView ({dataSource={}}) {
    const { name, width, height, sprites={} } = dataSource;

  return (
    <div className="page-content-item">
      <header>{name}</header>
      <section>
        <p>宽度：{width}</p>
        <p>宽度：{height}</p>
        <p>基本经验：{dataSource['base_experience']}</p>
        {sprites['back_default'] && <img src={sprites['back_default']} />}
      </section>
    </div>
  );
}

export default CommonView;