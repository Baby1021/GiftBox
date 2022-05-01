/** 
 * 任务状态
*/
export enum Status {
  NO_START, // 为开始
  PENDING, // 进行中
  FULFILL // 完成
}

export const StatusMap = {
  [Status.NO_START]: '未开始',
  [Status.PENDING]: '进行中',
  [Status.FULFILL]: '已完成'
};


/**
 * 任务
*/

export interface Task {
  _openId?: string; // 用户标识
  _id?: string; // 任务 id
  name: string; // 任务名字
  type: string; // 任务类型
  status: Status; // 任务状态
  score: string; // 获取积分
  startTime: string; // 开始时间
  endTime: string; // 结束时间
}