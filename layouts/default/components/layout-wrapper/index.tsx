import { SafeAreaView, StatusBar } from 'react-native'
import React from 'react'
import { SafeAreaProvider, useSafeAreaInsets } from "react-native-safe-area-context";
import { TProps } from './type';
import { styles } from './style';
import { colors } from 'themes';

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
                backgroundColor={translucent ? colors.transparent : colors.white}
            />

            <SafeAreaView style={[
                styles.container, 
                !translucent && {
                    top: containerInsets.top 
                }
            ]}>
                <SafeAreaProvider>
                    {children}
                </SafeAreaProvider>
            </SafeAreaView>
        </>
    )
}