import { SafeAreaView, StatusBar } from 'react-native'
import React from 'react'
import { SafeAreaProvider, useSafeAreaInsets } from "react-native-safe-area-context";
import { TProps } from './type';
import { styles } from './style';

export const LayoutWrapper = (props: TProps) => {
    const { 
        barStyle = 'dark-content',
        translucent = false,
        children 
    } = props

    const containerInsets = useSafeAreaInsets()

    return (
        <>
            <StatusBar
                translucent={translucent}
                barStyle={barStyle}
                backgroundColor={'white'}
            />

            <SafeAreaView style={[styles.container, { top: containerInsets.top }]}>
                <SafeAreaProvider>
                    {children}
                </SafeAreaProvider>
            </SafeAreaView>
        </>
    )
}