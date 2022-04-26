import { Component } from 'react'
import { View } from '@tarojs/components'
import { queryTask } from '@/api/index'
import User from '@/components/User/index'
import { TaskItem } from '@/components/TaskItem/index'
import './index.scss'


// TODO: taskList 类型
export default class Index extends Component<{ [key: string]: number }, { taskList: any }> {
  state: {
    taskList: [], // 任务列表
  }


  componentDidMount() {
    this.getTaskList();
  }


  async getTaskList() {
    const { data } = await queryTask();
    this.setState({
      taskList: data,
    });
  }

  render() {
    // TODO:为什么 state 为 null
    const { taskList } = this.state;
    

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
                taskList.map((item) => {
                  return <TaskItem item={item} key={item._id}></TaskItem>
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
