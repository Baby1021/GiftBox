import React, { Component } from 'react'
import { View, Text } from '@tarojs/components'
import Taro, { getCurrentPages } from '@tarojs/taro'
import { addGift, getGiftList } from '@/api/index'
import GiftItem from '@/components/GiftItem';
import { ErrorView } from '@/components/ErrorView';
import TaroCropper from 'taro-cropper';

/**
 * 图片裁剪页面 
 */
export function CropperPage() {
    const instance = Taro.getCurrentInstance()
    const originImagePath = instance.router?.params.path

    if (!originImagePath) {
        return <ErrorView msg='参数异常' onClick={() => Taro.navigateBack()} />
    }

    const onFinish = (path: string) => {
        const pages = Taro.getCurrentPages()
        const current = pages[pages.length - 1]
        const channel = current.getOpenerEventChannel()

        channel.emit("path", { path })
        Taro.navigateBack()
    }

    const onCancel = () => {
        Taro.navigateBack()
    }

    // @ts-ignore
    return <TaroCropper
        src={originImagePath}
        fullScreen
        cropperWidth={750}
        cropperHeight={750}
        themeColor='#F8D57E'
        hideCancelText={false}
        onCut={onFinish}
        onCancel={onCancel}
    />
}