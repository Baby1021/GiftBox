/**
 * 任务
*/

export interface Task {
  name: string; // 任务名字
  type: number; // 任务类型
  score: number; // 获取积分
  startTime: string; // 开始时间
  endTime: string; // 结束时间
}