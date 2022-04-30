import { FC } from 'react'
import { View } from '@tarojs/components'
import { Task } from '@/api/task/type'
import './index.scss'

export interface TaskItemProps {
  item: Task;
}


export const TaskItem: FC<TaskItemProps> = props => {
  const { item } = props;

  return (
    <View className='task-item'>
      <View className='task-item__left'>
        <View className='name'>{item.name}</View>
        <View className='score'>{item.score}</View>
        <View className='time'>{item.startTime} - {item.endTime}</View>
      </View>
      <View className='task-item__right'>
        <View className='img'></View>
      </View>
    </View>
  )
}