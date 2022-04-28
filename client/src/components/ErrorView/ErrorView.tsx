
import React from 'react'
import { View, Text } from '@tarojs/components'

interface Props {
    msg: string
    onClick?: () => void
}

export function ErrorView({ msg, onClick }: Props) {

    return <View onClick={onClick}>
        <Text>{msg}</Text>
    </View>
}