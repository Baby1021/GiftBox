import React from 'react'
import Taro from '@tarojs/taro'
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
        const name = path.substring(path.lastIndexOf('/') + 1)

        channel.emit("path", { path, name })
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