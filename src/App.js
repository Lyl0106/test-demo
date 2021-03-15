import React, { PureComponent } from 'react'
import { Button, Layout  } from 'antd';
import SquirtleView from './view/squirtle-view';
import CharmanderView from './view/charmander-view';
import BulbasaurView from './view/bulbasaur-view';
import './less/main.less';

const { Header, Content } = Layout;

class App extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      mode: '',
    }
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
  
  /**
   * @description: 渲染第四个内容框
   * @return {JSX}
   */
  renderFlourContent = () => {
    const { mode } = this.state;
    switch (mode) {
      case 'squirtle': return (<SquirtleView />);
      case 'bulbasaur': return (<BulbasaurView />);
      case 'charmander': return (<CharmanderView />);
      default: return null;
    }
  }
  

  render() { 
    return (
      <Layout className="page-content">
        <Header>头部</Header>
        <Content>
          <SquirtleView />
          <CharmanderView />
          <BulbasaurView />
          <Button type="primary" onClick={this.handleView}>添加窗口</Button>
          {this.renderFlourContent()}
        </Content>
      </Layout>
    );
  }
}

export default App;
