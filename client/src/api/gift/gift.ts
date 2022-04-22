import Taro from '@tarojs/taro'
import { Gift } from './type';


const DB = Taro.cloud.database();
const giftDB = DB.collection('gift')

/**
 * 新增礼物 
 * 
 * @param name 礼物名称
 * @param imgUrl 头图地址
 * @param price 金额
 * @param score 兑换需要的积分
 * @param exchangeCount 礼物可兑换的次数
 * 
 * @returns 是否成功
 */
export async function addGift(
    name: string,
    imgUrl: string,
    price: number,
    score: number,
    exchangeCount: number,
): Promise<boolean> {
    const gift: Gift = { name, imgUrl, price, score, exchangeCount, createTime: new Date() }
    return giftDB.add({ data: gift })
        .then(res => !!res.errMsg);
}

/**
 * 获取礼物列表
 * 
 * @param skip 
 * @returns 
 */
export async function getGiftList(
    skip:number = 0 
): Promise<{
    data: Array<Gift>,
    hasMore: boolean
}> {
    return DB.collection('gift')
        .limit(20)
        .skip(skip)
        .get()
        .then(res => ({
            data: res.data as Array<Gift>,
            hasMore: (res.data.length === 20)
        }));
}

/**
 * 兑换礼物
 * 
 * @returns 兑换是否成功
 */
export async function exchangeGift(_giftId: string): Promise<boolean> {
    return true
}
