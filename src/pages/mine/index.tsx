import { Component } from 'react'
import { View, Text, Image } from '@tarojs/components'
import img from '../../images/score.png'
import './index.scss'

export default class Index extends Component {

  constructor (props) {
    super(props)
    this.state = {  }
  }

  render () {
    return (
      <View className='mine'>
        <View className='mine-head'>
          <View className='mine-head__left'>
            <View className='score'>
              <Text className='score-title'>可用积分</Text>
              <Text className='score-desc'>22</Text>
            </View>
            <View className='record'>
              <View>积分明细</View>
              <View>兑换记录</View>
            </View>
          </View>
          <View className='mine-head__right'>
            <Image className='img' src={img}></Image>
          </View>
        </View>
      </View>
    )
  }
}
