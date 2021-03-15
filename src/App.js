/*
 * @Description: 
 * @Author: liuyuluan
 * @Date: 2021-03-15 20:29:43
 * @LastEditors: liuyuluan
 * @LastEditTime: 2021-03-15 23:31:54
 */
import React, { PureComponent } from 'react'
import { Button, Layout  } from 'antd';
import { connect } from 'react-redux';
import { getBulbasaurData, getCharmanderData, getSquirtleData } from './util/get-data';
import CommonView from './view/common-view';
import './less/main.less';

const { Header, Content } = Layout;

@connect(
  state => state.common,
  {}
)
class App extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      mode: '',
    }
  }

  componentDidMount() {
    getSquirtleData();
    getCharmanderData();
    getBulbasaurData();
  }

  /**
   * @description: 添加窗口
   */
  handleView = () => {
    let number = Math.floor(Math.random() * 10);
    let mode = null;
    if (number > 0 && number < 4) {
      mode = 'squirtle';
    } else if (number >= 4 && number < 8) {
      mode = 'bulbasaur';
    } else {
      mode = 'charmander'
    }

    this.setState({ mode })
  }
 
  render() { 
    const { mode } = this.state
    const { squirtle, charmander, bulbasaur } = this.props;

    return (
      <Layout className="page-content">
        <Header>React Test</Header>
        <Content>
          <CommonView dataSource={squirtle} />
          <CommonView dataSource={charmander} />
          <CommonView dataSource={bulbasaur} />

          <Button type="primary" onClick={this.handleView}>添加窗口</Button>
          {mode && <CommonView dataSource={this.props[mode]} />}
        </Content>
      </Layout>
    );
  }
}

export default App;
