
import { Component } from 'react'
import { View, Text, Input, Form, Switch, Button, Textarea } from '@tarojs/components'
import { addGift } from '@/api/index'
import Taro from '@tarojs/taro'
import TaroCropper from 'taro-cropper'

interface Props {
    originImagePath: string
}

export function Cropper({ originImagePath }: Props) {

    // @ts-ignore
    return <TaroCropper
        src={originImagePath}
        cropperWidth={500}
        cropperHeight={500}
        ref={this.catTaroCropper}
        themeColor='#F8D57E'
        onCut={(res: string) => {
            console.log("完成" + res);

            Taro.cloud.uploadFile({
                cloudPath: "test2.png",
                filePath: res,
                success: () => {
                    console.log("上传成功");
                }
            })
        }}
        hideCancelText={false}
        onCancel={() => {
            Taro.showToast({
                icon: 'none',
                title: '点击取消'
            })
        }}
    />
}