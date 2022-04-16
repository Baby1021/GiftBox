import { Component } from 'react'
import { View } from '@tarojs/components'
import { queryGift } from '@/api/index'
import User from '@/components/User/index'
import TaskItem from '@/components/TaskItem'
import GiftItem from '@/components/GiftItem'
import './index.scss'

export default class Index extends Component {

  constructor (props) {
    super(props)
    this.state = { 
      taskList: [0, 1, 2],
      giftList: []
    }
  }

  componentDidMount() {
    this.getGiftList();
  }

  async getGiftList() {
    const { data } = await queryGift();
    this.setState({
      giftList: data
    })
    console.log('data-->', data);
  }

  render () {
    const { taskList, giftList } = this.state;

    return (
      <View className='main'>
        <View className='main-head'>
          <User></User>
        </View>
        <View className='main-container'>
          <View className='main-container__box'>
            <View className='main-container__card'>
              <View className='title'>今日学习</View>
              <View className='desc'>总共 3 项任务</View>
              <View className='process'>
                <View className='line'></View>
              </View>
            </View>
            <View className='main__task'>
              {
                taskList.map((i) => {
                  return <TaskItem key={i}></TaskItem>
                })
              }
            </View>
          </View>
        </View>
       
        {/* <View className='main__gift'>
          <View className='nav'>
            <View className='title'>礼物列表</View>
            <View className='more'>更多</View>
          </View>
          <View className='list'>
            {
              giftList.map((i) => {
                return <GiftItem key={i} item={i}></GiftItem>
              })
            }
          </View>
        </View> */}
      </View>
    )
  }
}
