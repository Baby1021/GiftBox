/**
 * 任务
*/

export interface Task {
  _id?: string
  name: string; // 任务名字
  type: string; // 任务类型
  score: string; // 获取积分
  startTime: string; // 开始时间
  endTime: string; // 结束时间
}