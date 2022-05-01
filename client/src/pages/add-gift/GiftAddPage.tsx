import { Component } from 'react'
import { View, Text, Image, Input, Form, Button, Textarea } from '@tarojs/components'
import { addGift } from '@/api/index'
import Taro from '@tarojs/taro'


export class GiftAddPage extends Component {
    name: string // 礼物名字
    imgUrl: string // 头图
    price: number // 金额，分
    score: number // 需要多少积分兑换
    exchangeCount: number // 兑换次数
    constructor(props) {
        super(props)
        this.state = {}
    }

    chooseImg = () => {
        Taro.chooseImage({
            success: (result) => {
                Taro.navigateTo({
                    url: '/pages/cropper/index?path=' + result.tempFilePaths[0],
                    events: {
                        path: ({ path, name }) => {
                            this.setState({ path, imageName: name })

                            console.log("gift add page", path, name);
                        }
                    }
                })
            }
        })
    }

    onSubmit = (event) => {
        console.log(this.state);
        
        Taro.cloud.uploadFile({
            cloudPath: 'gift/' + this.state.imageName,
            filePath: this.state.path,
            success: (result) => {
                console.log("上传成功");
                const data = event.detail.value

                addGift(
                    data.name,
                    result.fileID,
                    Number(data.price),
                    Number(data.score),
                    Number(data.exchangeCount)
                )
            }
        })

    }
    onReset = (event) => {
        console.log(event);
    }
    render() {

        const containerStyle = {
            display: 'flex',
            flexDirection: 'row',
            paddingTop: 30
        }
        const inputStyle = {

            flexGrow: 1,
            textAlign: 'right'
        }
        const titleStyle = {
            width: 100
        }

        return (
            <View style={{ padding: 10 }}>
                <Form onSubmit={this.onSubmit} onReset={this.onReset} >
                    <View style={containerStyle}>
                        <Text style={titleStyle}>礼物名字</Text>
                        <Input
                            style={inputStyle}
                            confirmType='next'
                            name='name'
                            type='text'
                            placeholder='礼物名字'
                        />
                    </View>

                    <View style={containerStyle}>
                        <Text style={titleStyle}>兑换积分</Text>
                        <Input style={inputStyle} name='score' type='number' placeholder='兑换积分' />
                    </View>

                    <View style={containerStyle}>
                        <Text style={titleStyle}>兑换次数</Text>
                        <Input style={inputStyle} name='exchangeCount' type='number' placeholder='兑换次数' />
                    </View>

                    <View style={containerStyle}>
                        <Text style={titleStyle}>金额</Text>
                        <Input style={inputStyle} name='price' type='number' placeholder='金额' />
                    </View>

                    <View style={containerStyle}>
                        <Text style={titleStyle}>备注</Text>
                        <Textarea style={{ ...inputStyle, height: 100 }} name='price' type='number' placeholder='备注' />
                    </View>

                    {this.state.path && <Image src={this.state.path} />}
                    <Button style={{ backgroundColor: "#F8D57E" }} onClick={this.chooseImg} >选择图片</Button>

                    <Button style={{ backgroundColor: "#F8D57E" }} formType='submit'>添 加</Button>
                </Form>
            </View>
        )
    }
}
