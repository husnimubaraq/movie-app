import { View, Modal } from 'react-native'
import React from 'react'
import { TProps } from './type'
import { Button } from 'components/base/button'
import { Text } from 'components/base/text'
import { styles } from './style'
import { CrossCircleIcon } from 'components/icons'
import { colors } from 'themes'

export const MessagePopup = (props: TProps) => {
    const { 
        isOpen, 
        title, 
        message, 
        onCancel, 
        onSubmit,
        submitText = 'OKE',
    } = props

    return (
        <Modal animationType="fade" transparent visible={isOpen}>
            <View 
                style={styles.modal}
            >
                <View style={styles.container}>

                    <View style={styles.iconContainer}>
                        <CrossCircleIcon size={100} color={colors.red[500]} />
                    </View>

                    <Text variant='medium' style={styles.title}>{title}</Text>

                    <Text style={styles.message}>{message}</Text>

                    <Button
                        variant='primary'
                        onPress={() => {
                            onSubmit ? onSubmit() : onCancel && onCancel(false)
                        }}
                        title={submitText}
                        style={styles.button}
                    />
                </View>
            </View>
        </Modal>
    )
}