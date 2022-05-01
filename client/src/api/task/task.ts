import Taro from '@tarojs/taro';
import { Task } from './type';

const DB = Taro.cloud.database();
const taskDB = DB.collection('task');


export async function addTask(params: Task):Promise<boolean> {
  return taskDB.add({ data: params })
      .then(res => !!res.errMsg);
}

/**
 * 获取礼物列表
 * 
 * @param skip 
 * @returns 
 */
export async function queryTask(
  skip:number = 0 
): Promise<{
    data: Array<Task>,
    hasMore: boolean
}> {
  return taskDB
        .limit(20)
        .skip(skip)
        .get()
        .then(res => ({
            data: res.data as Array<Task>,
            hasMore: (res.data.length === 20)
        }));
}