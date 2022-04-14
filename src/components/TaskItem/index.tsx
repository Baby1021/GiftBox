import { Component } from 'react'
import { View, Text } from '@tarojs/components'
import './index.scss'

export default class TaskItem extends Component {
  render() {
    return (
      <View className='task-item'>
        <View className='task-item__left'>
          <Text>总结宏任务和微任务</Text>
        </View>
        <View className='task-item__rigth'>100积分</View>
      </View>
    )
  }
}