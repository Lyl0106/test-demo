/*
 * @Description: squirtle 组件
 * @Author: liuyuluan
 * @Date: 2021-03-15 20:24:49
 * @LastEditors: liuyuluan
 * @LastEditTime: 2021-03-15 21:29:00
 */
import React, { PureComponent } from 'react'
import {connect} from "react-redux";
import { getSquirtleData } from '../util/get-data';

@connect(
  state => state.squirtle,
  {}
)
class SquirtleView extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {  }
  }

  componentDidMount() {
    getSquirtleData()
  }

  render() { 
    const { squirtle={} } = this.props
    const { name, width, height, sprites={} } = squirtle;

    return (
      <div className="page-content-item">
        <header>{name}</header>
        <section>
          <p>宽度：{width}</p>
          <p>宽度：{height}</p>
          <p>基本经验：{squirtle['base_experience']}</p>
          {sprites['back_default'] && <img src={sprites['back_default']} />}
        </section>
      </div>
    );
  }
}
 
export default SquirtleView;