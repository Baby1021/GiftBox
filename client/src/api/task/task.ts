import Taro from '@tarojs/taro';
import { Task } from './type';

const DB = Taro.cloud.database();
const taskDB = DB.collection('task');


export async function addTask(params: Task):Promise<boolean> {
  return taskDB.add({ data: params })
      .then(res => !!res.errMsg);
}