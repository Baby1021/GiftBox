/**
 * 礼物
 */
export interface Gift {
    _id?: string
    _openId?: string // 创建人的openId
    name: string // 礼物名字
    imgUrl: string // 头图
    price: number // 金额，分
    score: number // 需要多少积分兑换
    exchangeCount: number // 兑换次数

    createTime: Date // 创建时间
}

/**
 * 礼物的兑换记录
 */
export interface GiftExchangeLog {
    _id: string
    giftId: string // 兑换的礼物Id
    userId: string // 兑换人
    score: number // 兑换的积分

    exchangeTime: Date // 兑换时间
}