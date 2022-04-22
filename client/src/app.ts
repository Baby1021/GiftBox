import { Component } from 'react'
import Taro from '@tarojs/taro'
import './app.scss'

class App extends Component {

  componentDidMount () {
    Taro.cloud.init({
      // TODO 通过环境变量写入
      env: 'giftbox-dev-5gm5wlcl3c124eda'
    })
  }

  render () {
    return this.props.children
  }
}

export default App
