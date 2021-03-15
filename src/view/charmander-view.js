/*
 * @Description: charmander 组件
 * @Author: liuyuluan
 * @Date: 2021-03-15 20:24:49
 * @LastEditors: liuyuluan
 * @LastEditTime: 2021-03-15 21:32:08
 */
import React, { PureComponent } from 'react'
import {connect} from "react-redux";
import { getCharmanderData } from '../util/get-data';

@connect(
  state => state.charmander,
  {}
)
class CharmanderView extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {  }
  }

  componentDidMount() {
    getCharmanderData()
  }

  render() { 
    const { charmander={} } = this.props
    const { name, width, height, sprites={} } = charmander;

    return (
      <div className="page-content-item">
        <header>{name}</header>
        <section>
          <p>宽度：{width}</p>
          <p>宽度：{height}</p>
          <p>基本经验：{charmander['base_experience']}</p>
          {sprites['back_default'] && <img src={sprites['back_default']} />}
        </section>
      </div>
    );
  }
}
 
export default CharmanderView;