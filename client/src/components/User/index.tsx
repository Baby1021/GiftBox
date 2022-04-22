import { Component } from 'react'
import { View, Image } from '@tarojs/components'
import './index.scss'

export default class User extends Component {
  render () {
    return (
      <View className='user-info'>
        <Image
          className='user-info__avatar'
          src='https://s0.lgstatic.com/i/image6/M00/58/96/Cgp9HWFARHeAJToqAAFNOhSfvyI129.png'
        />
        <View className='user-info__main'>
          <View className='user-info__main--name'>小太阳</View>
          <View className='user-info__main--desc'>当前积分：10</View>
        </View>
      </View>
    )
  }
}
