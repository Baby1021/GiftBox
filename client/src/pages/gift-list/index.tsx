import { Component } from 'react'
import { View } from '@tarojs/components'
import Taro from '@tarojs/taro'
import { addGift, getGiftList } from '@/api/index'
import GiftItem from '@/components/GiftItem';
import { Gift } from '@/api/gift/type';

export default class GiftListPage extends Component<{ [key: string]: number }, { giftList: Gift[] }> {
    constructor(props) {
        super(props)
        this.state = {
            giftList: []
        }
    }

    componentDidMount() {
        console.log("gift list page mount");
        getGiftList().then(res => {
            console.log("query gift success");

            this.setState({ giftList: res.data })
        })
    }

    getOpenId = () => {
        Taro.cloud.callFunction({
            name: "user",
            data: {
                type: 'getOpenId'
            }
        }).then(res => {
            console.log("openId", res);
        })
    }

    addGiftTest = () => {
        addGift("测试礼物",
            "https://www.baidu.com/img/PCtm_d9c8750bed0b3c7d089fa7d55720d6cf.png",
            100,
            100,
            100)
    }

    render() {
        return <View>
            {this.state.giftList.map(gift => {
                return <GiftItem key={gift._id} item={gift} />
            })}
        </View>

    }
}
