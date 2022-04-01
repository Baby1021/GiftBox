import { Component } from 'react'
import { View, Text, Image } from '@tarojs/components'
import './index.scss'

export default class GiftItem extends Component {
  render() {
    return (
      <View className='gift-item'>
        <View className='gift-item__img'>
          <Image className='image' src='https://dss2.bdstatic.com/8_V1bjqh_Q23odCf/pacific/1968904449.jpg'></Image>
        </View>
        <View className='gift-item__content'>
          <View className='name'>
            <View>海蓝之谜</View>
            <View>1000积分</View>
          </View>
          <View className='desc'>精粹水</View>
        </View>
      </View>
    )
  }
}