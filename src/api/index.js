import Taro from '@tarojs/taro'

const DB = Taro.cloud.database();

export function queryGift() {
  return DB.collection('gift').get();
}