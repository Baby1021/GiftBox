import { Component } from 'react'
import { View } from '@tarojs/components'
import './index.scss'

export default class TaskItem extends Component {
  render() {
    return (
      <View className='task-item'>
        <View className='task-item__left'>
          <View className='name'>总结宏任务和微任务</View>
          <View className='score'>100积分</View>
          <View className='time'>2022.04.16</View>
        </View>
        <View className='task-item__right'>
          <View className='img'></View>
        </View>
      </View>
    )
  }
}