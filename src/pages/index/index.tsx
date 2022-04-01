import { Component } from 'react'
import { View, Text } from '@tarojs/components'
import User from '../../components/User/index'
import TaskItem from '../../components/TaskItem'
import GiftItem from '../../components/GiftItem'
import './index.scss'

export default class Index extends Component {

  constructor (props) {
    super(props)
    this.state = { 
      taskList: [0, 1, 2],
      giftList: [0, 1, 2, 3]
    }
  }

  render () {
    const { taskList, giftList } = this.state;

    return (
      <View className='main'>
        <User></User>
        <View className='main__task'>
          {
            taskList.map((i) => {
              return <TaskItem key={i}></TaskItem>
            })
          }
        </View>
        <View className='main__gift'>
          <View className='nav'>
            <View className='title'>礼物列表</View>
            <View className='more'>更多</View>
          </View>
          <View className='list'>
            {
              giftList.map((i) => {
                return <GiftItem key={i}></GiftItem>
              })
            }
          </View>
        </View>
        
        <Text>Hello world!!!!</Text>
      </View>
    )
  }
}
