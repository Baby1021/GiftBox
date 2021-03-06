import { Component } from 'react'
import { View, Image } from '@tarojs/components'
import { Gift } from '@/api/gift/type'
import './index.scss'

export default class GiftItem extends Component<{item:Gift}> {
  render() {
    const { item } = this.props
    return (
      <View className='gift-item'>
        <View className='gift-item__img'>
          <Image className='image' src={item.imgUrl}></Image>
        </View>
        <View className='gift-item__content'>
          <View className='name'>
            <View>{item.name}</View>
            <View>{item.score}积分</View>
          </View>
          {
            !!item.price && (<View className='price'>￥{item.price}</View>)
          }
        </View>
      </View>
    )
  }
}